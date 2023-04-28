import { FIGFontLayoutRule } from './enums/FIGFontLayoutRule';
import { FIGFontPrintDirection } from './enums/FIGFontPrintDirection';
import { GlyphType } from './enums/GlyphType';
import { FIGFontError, FIGFontIllegalHardblankCharacter } from './errors/FIGFontErrors';
import { FIGCharacter } from './FIGCharacter';
import { FontLayoutManager } from './FontLayoutManager';
import { LayoutRulesBase } from './layoutRules/LayoutRulesBase';
import { CharacterCodes } from './utils/CharacterCodes';

export class FIGFont extends LayoutRulesBase {
    private _headerRaw = '';
    private _signature = '';
    private _hardblankCharacter = 0;
    private _height = 0;
    private _baseline = 0;
    private _maxLength = 0;
    private _oldLayout = 0;
    private _commentLineCount = 0;
    private _printDirection: FIGFontPrintDirection = FIGFontPrintDirection.LEFT_TO_RIGHT;
    private _fullLayout: number | undefined;
    private _codetagCount!: number;
    private readonly _comments: string[] = [];
    private readonly _characterMap: Map<number, FIGCharacter> = new Map<number, FIGCharacter>();

    get headerRaw(): string {
        return this._headerRaw;
    }

    set headerRaw(value: string) {
        this._headerRaw = value;
    }

    get signature(): string {
        return this._signature;
    }

    set signature(value: string) {
        if (value.length !== 5) {
            throw new FIGFontError('Signature not 5 characters in length');
        }

        if (!value.startsWith('flf2')) {
            throw new FIGFontError('Signature must start with flf2');
        }

        if (value[4] !== 'a') {
            console.debug(`Font signature expected to be flf2a but received "${value}".  Non-fatal - continuing.`);
        }

        this._signature = value;
    }

    public set hardblankCharacter(characterCode: number) {
        if (characterCode === null) {
            throw new FIGFontIllegalHardblankCharacter('NULL');
        } else if (characterCode === CharacterCodes.ASCII_NULL) {
            throw new FIGFontIllegalHardblankCharacter('Null (ASCII Code 0)');
        } else if (characterCode === CharacterCodes.ASCII_LINE_FEED) {
            // Newline = invalid character
            throw new FIGFontIllegalHardblankCharacter('Newline (ASCII Code 10)');
        } else if (characterCode === CharacterCodes.ASCII_CARRIAGE_RETURN) {
            // Carriage return = invalid character
            throw new FIGFontIllegalHardblankCharacter('Carriage Return (ASCII Code 13)');
        } else if (characterCode === CharacterCodes.ASCII_SPACE) {
            // Space = invalid character
            throw new FIGFontIllegalHardblankCharacter('Space (ASCII Code 32)');
        } else if (characterCode > 127 || characterCode < 0) {
            throw new FIGFontIllegalHardblankCharacter(`Character with ASCII Code ${characterCode}`);
        }

        this._hardblankCharacter = characterCode;
    }

    public get hardblankCharacter(): number {
        return this._hardblankCharacter;
    }

    get height(): number {
        return this._height;
    }

    public set height(height: number) {
        if (height < 1) {
            throw new FIGFontError('Height must be greater than 0');
        }
        this._height = height;
    }

    get baseline(): number {
        return this._baseline;
    }

    set baseline(value: number) {
        this._baseline = value;
    }

    get maxLength(): number {
        return this._maxLength;
    }

    set maxLength(value: number) {
        this._maxLength = value;
    }

    get oldLayout(): number {
        return this._oldLayout;
    }

    set oldLayout(value: number) {
        // For easier parsing in the rendering code, we just map 0 to 64, which basically makes old layout work the same as new layout mode
        if (value === -1) {
            value = 0;
        } else if (value === 0) {
            value = 64;
        }
        this._oldLayout = value;
    }

    get commentLineCount(): number {
        return this._commentLineCount;
    }

    set commentLineCount(value: number) {
        this._commentLineCount = value;
    }

    getPrintDirection(): FIGFontPrintDirection {
        return this._printDirection;
    }

    set printDirection(value: number) {
        if (Number.isNaN(value)) {
            value = 0;
        }
        if (value === 0) {
            this._printDirection = FIGFontPrintDirection.LEFT_TO_RIGHT;
        } else if (value === 1) {
            this._printDirection = FIGFontPrintDirection.RIGHT_TO_LEFT;
        } else {
            throw new FIGFontError(`Print Direction parameter must be zero (LTR) or one (RTL).  Received value was: ${value}`);
        }
    }

    get fullLayout(): number | undefined {
        return this._fullLayout;
    }

    set fullLayout(value: number | undefined) {
        if (Number.isNaN(value)) {
            value = 0;
        }
        if (value !== undefined && (value < 0 || value > 32767 || !Number.isInteger(value))) {
            throw new FIGFontError(`Full Layout parameter must be an integer between 0 and 32,767 inclusive.  Received value was: ${value}`);
        }
        this._fullLayout = value;
    }

    get comments(): string[] {
        return this._comments;
    }

    get codetagCount(): number {
        return this._codetagCount;
    }

    set codetagCount(value: number) {
        if (Number.isNaN(value)) {
            value = 0;
        }
        if (value < 0 || !Number.isInteger(value)) {
            throw new FIGFontError(`Codetag Count parameter must be an integer greater than or equal to zero.  Received value was: ${value}`);
        }
        this._codetagCount = value;
    }

    public addComment(comment: string): void {
        this._comments.push(comment);
    }

    public addFIGCharacter(character: FIGCharacter): void {
        this._characterMap.set(character.characterCode, character);
    }

    public getBlankFIGCharacter(): FIGCharacter {
        // Check if there's a definition for character code 0 (which is FIGlet's defined "missing character" character)
        // Otherwise make a blank character
        return (
            this._characterMap.get(0) ??
            FIGCharacter.fromCodeTaggedFIGCharacterString(this.hardblankCharacter, '0 GENERATED BLANK\n' + new Array(this._height).fill('@').join('\n'), GlyphType.GENERATED_BLANK)
        );
    }

    public getEmptyGlyphCount(): number {
        return Array.from(this._characterMap.values()).filter((c) => c.isEmptyGlyph).length;
    }

    public getGlyphTypeCount(glyphType: GlyphType): number {
        return Array.from(this._characterMap.values()).filter((c) => c.glyphType === glyphType).length;
    }

    public getFIGCharacterCount(): number {
        return this._characterMap.size;
    }

    public getFIGCharacter(forCharacter: string): FIGCharacter {
        const charCode = forCharacter.charCodeAt(0);

        return this._characterMap.get(charCode) ?? this.getBlankFIGCharacter();
    }

    public renderText(text: string): string {
        const flm: FontLayoutManager = new FontLayoutManager();

        return flm.renderText(text, this);
    }

    private testLayoutRule(smushingRule: FIGFontLayoutRule): boolean {
        if (this._fullLayout !== undefined) {
            return (this._fullLayout & smushingRule) > 0;
        }
        return (this._oldLayout & smushingRule) > 0;
    }

    doHorizontalBigXSmushing(): boolean {
        return this.testLayoutRule(FIGFontLayoutRule.HORIZONTAL_BIG_X_SMUSHING);
    }

    doHorizontalEqualCharacterSmushing(): boolean {
        return this.testLayoutRule(FIGFontLayoutRule.HORIZONTAL_EQUAL_CHARACTER_SMUSHING);
    }

    doHorizontalHardblankSmushing(): boolean {
        return this.testLayoutRule(FIGFontLayoutRule.HORIZONTAL_HARDBLANK_SMUSHING);
    }

    doHorizontalHierarchySmushing(): boolean {
        return this.testLayoutRule(FIGFontLayoutRule.HORIZONTAL_HIERARCHY_SMUSHING);
    }

    doHorizontalOppositePairSmushing(): boolean {
        return this.testLayoutRule(FIGFontLayoutRule.HORIZONTAL_OPPOSITE_PAIR_SMUSHING);
    }

    doHorizontalUnderscoreSmushing(): boolean {
        return this.testLayoutRule(FIGFontLayoutRule.HORIZONTAL_UNDERSCORE_SMUSHING);
    }

    doHorizontalKerning(): boolean {
        return this.testLayoutRule(FIGFontLayoutRule.HORIZONTAL_KERNING);
    }

    doHorizontalSmushing(): boolean {
        return this.testLayoutRule(FIGFontLayoutRule.HORIZONTAL_SMUSHING);
    }

    doVerticalEqualCharacterSmushing(): boolean {
        return this.testLayoutRule(FIGFontLayoutRule.VERTICAL_EQUAL_CHARACTER_SMUSHING);
    }

    doVerticalUnderscoreSmushing(): boolean {
        return this.testLayoutRule(FIGFontLayoutRule.VERTICAL_UNDERSCORE_SMUSHING);
    }

    doVerticalHierarchySmushing(): boolean {
        return this.testLayoutRule(FIGFontLayoutRule.VERTICAL_HIERARCHY_SMUSHING);
    }

    doVerticalHorizontalLineSmushing(): boolean {
        return this.testLayoutRule(FIGFontLayoutRule.VERTICAL_HORIZONTAL_LINE_SMUSHING);
    }

    doVerticalVerticalLineSuperSmushing(): boolean {
        return this.testLayoutRule(FIGFontLayoutRule.VERTICAL_VERTICAL_LINE_SUPERSMUSHING);
    }

    doVerticalKerning(): boolean {
        return this.testLayoutRule(FIGFontLayoutRule.VERTICAL_KERNING);
    }

    doVerticalSmushing(): boolean {
        return this.testLayoutRule(FIGFontLayoutRule.VERTICAL_SMUSHING);
    }

    getRenderingWidth() {
        return 80;
    }
}
