import { FIGFontPrintDirection } from './enums/FIGFontPrintDirection';
import { FontLayoutHorizontalAlignment } from './enums/FontLayoutHorizontalAlignment';
import { FontLayoutHorizontalPaddingMode } from './enums/FontLayoutHorizontalPaddingMode';
import { FIGFont } from './FIGFont';
import { FontLayoutManagerOptionsExtensionAlignment } from './FontLayoutManagerOptionsExtensionAlignment';
import { FontLayoutManagerOptionsExtensionCharacterReplacement } from './FontLayoutManagerOptionsExtensionCharacterReplacement';
import { FontLayoutManagerOptionsExtensionHorizontalLayout } from './FontLayoutManagerOptionsExtensionHorizontalLayout';
import { FontLayoutManagerOptionsExtensionHorizontalSmushingRules } from './FontLayoutManagerOptionsExtensionHorizontalSmushingRules';
import { FontLayoutManagerOptionsExtensionPadding } from './FontLayoutManagerOptionsExtensionPadding';
import { FontLayoutManagerOptionsExtensionPrintDirection } from './FontLayoutManagerOptionsExtensionPrintDirection';
import { FontLayoutManagerOptionsExtensionStylizer } from './FontLayoutManagerOptionsExtensionStylizer';
import { FontLayoutManagerOptionsExtensionVerticalLayout } from './FontLayoutManagerOptionsExtensionVerticalLayout';
import { FontLayoutManagerOptionsExtensionVerticalSmushingRules } from './FontLayoutManagerOptionsExtensionVerticalSmushingRules';
import { FontLayoutManagerOptionsExtensionWidth } from './FontLayoutManagerOptionsExtensionWidth';
import { DefaultLayoutRules } from './layoutRules/DefaultLayoutRules';
import { LayoutRulesBase } from './layoutRules/LayoutRulesBase';
import { Stylizer } from './rendering/Stylizer';
import { CharacterCodes } from './utils/CharacterCodes';
import { CharacterReplacementMap } from './utils/CharacterReplacementMap';

export class FontLayoutManagerOptions extends LayoutRulesBase {
    _overrideHorizontalEqualCharacterSmushing: boolean | undefined;
    _overrideHorizontalUnderscoreSmushing: boolean | undefined;
    _overrideHorizontalHierarchySmushing: boolean | undefined;
    _overrideHorizontalOppositePairSmushing: boolean | undefined;
    _overrideHorizontalBigXSmushing: boolean | undefined;
    _overrideHorizontalHardblankSmushing: boolean | undefined;
    _overrideHorizontalKerning: boolean | undefined;
    _overrideHorizontalSmushing: boolean | undefined;
    _overrideVerticalEqualCharacterSmushing: boolean | undefined;
    _overrideVerticalUnderscoreSmushing: boolean | undefined;
    _overrideVerticalHierarchySmushing: boolean | undefined;
    _overrideVerticalHorizontalLineSmushing: boolean | undefined;
    _overrideVerticalVerticalLineSuperSmushing: boolean | undefined;
    _overrideVerticalKerning: boolean | undefined;
    _overrideVerticalSmushing: boolean | undefined;
    _overridePrintDirection: FIGFontPrintDirection | undefined;

    _renderingWidth: number | undefined;
    _renderingAlignment: FontLayoutHorizontalAlignment = FontLayoutHorizontalAlignment.FONT_DEFAULT;
    _renderingHorizontalPaddingMode: FontLayoutHorizontalPaddingMode = FontLayoutHorizontalPaddingMode.DEFAULT;
    _renderingPaddingCharacter: string = String.fromCharCode(CharacterCodes.ASCII_SPACE);
    _renderingWhitespaceCharacter: string = String.fromCharCode(CharacterCodes.ASCII_SPACE);
    _renderingPreserveAspectRatio: boolean = false;

    _renderingHorizontalSmushPlusModeEnabled: boolean = false;
    _renderingVerticalKernMaxOffset: number = 1;

    _renderingStylizers: Stylizer[] = [];

    readonly _bodyTextCharacterMap: CharacterReplacementMap = new CharacterReplacementMap(
        new Map<number, string>([
            [0, ' '],
            [CharacterCodes.ASCII_SPACE, this._renderingWhitespaceCharacter]
        ])
    );

    readonly _paddingCharacterMap: CharacterReplacementMap = new CharacterReplacementMap(
        new Map<number, string>([
            [CharacterCodes.FIGLET_TS_LEFT_PADDING_MARKER, this._renderingPaddingCharacter],
            [CharacterCodes.FIGLET_TS_RIGHT_PADDING_MARKER, this._renderingPaddingCharacter],
            [CharacterCodes.FIGLET_TS_SINGLE_WIDTH_WHITESPACE, ' ']
        ])
    );

    // Extensions
    public readonly align: FontLayoutManagerOptionsExtensionAlignment;
    public readonly characterReplacement: FontLayoutManagerOptionsExtensionCharacterReplacement;
    public readonly horizontalLayout: FontLayoutManagerOptionsExtensionHorizontalLayout;
    public readonly horizontalSmushing: FontLayoutManagerOptionsExtensionHorizontalSmushingRules;
    public readonly padding: FontLayoutManagerOptionsExtensionPadding;
    public readonly printDirection: FontLayoutManagerOptionsExtensionPrintDirection;
    public readonly stylization: FontLayoutManagerOptionsExtensionStylizer;
    public readonly verticalLayout: FontLayoutManagerOptionsExtensionVerticalLayout;
    public readonly verticalSmushing: FontLayoutManagerOptionsExtensionVerticalSmushingRules;
    public readonly width: FontLayoutManagerOptionsExtensionWidth;

    constructor(private _baseLayoutRules: LayoutRulesBase = new DefaultLayoutRules()) {
        super();

        // Initialise Helper Extensions
        this.align = new FontLayoutManagerOptionsExtensionAlignment(this);
        this.characterReplacement = new FontLayoutManagerOptionsExtensionCharacterReplacement(this);
        this.horizontalLayout = new FontLayoutManagerOptionsExtensionHorizontalLayout(this);
        this.horizontalSmushing = new FontLayoutManagerOptionsExtensionHorizontalSmushingRules(this);
        this.verticalLayout = new FontLayoutManagerOptionsExtensionVerticalLayout(this);
        this.verticalSmushing = new FontLayoutManagerOptionsExtensionVerticalSmushingRules(this);
        this.padding = new FontLayoutManagerOptionsExtensionPadding(this);
        this.printDirection = new FontLayoutManagerOptionsExtensionPrintDirection(this);
        this.stylization = new FontLayoutManagerOptionsExtensionStylizer(this);
        this.width = new FontLayoutManagerOptionsExtensionWidth(this);
    }

    public setReferenceFont(referenceFont: FIGFont) {
        this._baseLayoutRules = referenceFont;
        this.getBodyTextCharacterReplacer().delete(referenceFont.hardblankCharacter);
        this.characterReplacement.addBodyTextCharacterReplacer(referenceFont.hardblankCharacter, this.characterReplacement.getWhitespaceCharacter());
    }

    doHorizontalBigXSmushing(): boolean {
        return this._overrideHorizontalBigXSmushing ?? this._baseLayoutRules.doHorizontalBigXSmushing();
    }

    doHorizontalEqualCharacterSmushing(): boolean {
        return this._overrideHorizontalEqualCharacterSmushing ?? this._baseLayoutRules.doHorizontalEqualCharacterSmushing();
    }

    doHorizontalKerning(): boolean {
        return this._overrideHorizontalKerning ?? this._baseLayoutRules.doHorizontalKerning();
    }

    doHorizontalHardblankSmushing(): boolean {
        return this._overrideHorizontalHardblankSmushing ?? this._baseLayoutRules.doHorizontalHardblankSmushing();
    }

    doHorizontalHierarchySmushing(): boolean {
        return this._overrideHorizontalHierarchySmushing ?? this._baseLayoutRules.doHorizontalHierarchySmushing();
    }

    doHorizontalOppositePairSmushing(): boolean {
        return this._overrideHorizontalOppositePairSmushing ?? this._baseLayoutRules.doHorizontalOppositePairSmushing();
    }

    doHorizontalSmushing(): boolean {
        return this._overrideHorizontalSmushing ?? this._baseLayoutRules.doHorizontalSmushing();
    }

    doHorizontalUnderscoreSmushing(): boolean {
        return this._overrideHorizontalUnderscoreSmushing ?? this._baseLayoutRules.doHorizontalUnderscoreSmushing();
    }

    doVerticalEqualCharacterSmushing(): boolean {
        return this._overrideVerticalEqualCharacterSmushing ?? this._baseLayoutRules.doVerticalEqualCharacterSmushing();
    }

    doVerticalKerning(): boolean {
        return this._overrideVerticalKerning ?? this._baseLayoutRules.doVerticalKerning();
    }

    doVerticalSmushing(): boolean {
        return this._overrideVerticalSmushing ?? this._baseLayoutRules.doVerticalSmushing();
    }

    doVerticalHierarchySmushing(): boolean {
        return this._overrideVerticalHierarchySmushing ?? this._baseLayoutRules.doVerticalHierarchySmushing();
    }

    doVerticalHorizontalLineSmushing(): boolean {
        return this._overrideVerticalHorizontalLineSmushing ?? this._baseLayoutRules.doVerticalHorizontalLineSmushing();
    }

    doVerticalUnderscoreSmushing(): boolean {
        return this._overrideVerticalUnderscoreSmushing ?? this._baseLayoutRules.doVerticalUnderscoreSmushing();
    }

    doVerticalVerticalLineSuperSmushing(): boolean {
        return this._overrideVerticalVerticalLineSuperSmushing ?? this._baseLayoutRules.doVerticalVerticalLineSuperSmushing();
    }

    getPrintDirection(): FIGFontPrintDirection {
        return this._overridePrintDirection ?? this._baseLayoutRules.getPrintDirection();
    }

    getRenderingWidth(): number {
        return this._renderingWidth ?? this._baseLayoutRules.getRenderingWidth();
    }

    getRenderingAlignment(): FontLayoutHorizontalAlignment {
        if (this._renderingAlignment === FontLayoutHorizontalAlignment.FONT_DEFAULT) {
            if (this.getPrintDirection() === FIGFontPrintDirection.LEFT_TO_RIGHT) {
                return FontLayoutHorizontalAlignment.LEFT_ALIGN;
            } else if (this.getPrintDirection() === FIGFontPrintDirection.RIGHT_TO_LEFT) {
                return FontLayoutHorizontalAlignment.RIGHT_ALIGN;
            }
        }
        return this._renderingAlignment;
    }

    get horizontalPaddingMode(): FontLayoutHorizontalPaddingMode {
        return this._renderingHorizontalPaddingMode;
    }

    getBodyTextCharacterReplacer(): CharacterReplacementMap {
        return this._bodyTextCharacterMap;
    }

    getPaddingCharacterReplacer(): CharacterReplacementMap {
        return this._paddingCharacterMap;
    }

    getPreserveAspectRatio(): boolean {
        return this._renderingPreserveAspectRatio;
    }

    getStylizers(): Stylizer[] {
        return this._renderingStylizers;
    }

    doHorizontalSmushPlus(): boolean {
        return this._renderingHorizontalSmushPlusModeEnabled;
    }
}
