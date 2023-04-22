import { FIGFontPrintDirection } from './enums/FIGFontPrintDirection';
import { type FIGFont } from './FIGFont';
import { FontLayoutManagerOptions } from './FontLayoutManagerOptions';
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
import { CanvasPixel } from './rendering/CanvasPixel';
import { DisplayCanvas } from './rendering/DisplayCanvas';
import { CharacterCodes } from './utils/CharacterCodes';
import { InputTokenParser } from './utils/InputTokenParser';

export class FontLayoutManager {
    private _options: FontLayoutManagerOptions;

    public readonly align: FontLayoutManagerOptionsExtensionAlignment;
    public readonly characterReplacement: FontLayoutManagerOptionsExtensionCharacterReplacement;
    public readonly horizontalLayout: FontLayoutManagerOptionsExtensionHorizontalLayout;
    public readonly horizontalSmushingRules: FontLayoutManagerOptionsExtensionHorizontalSmushingRules;
    public readonly padding: FontLayoutManagerOptionsExtensionPadding;
    public readonly printDirection: FontLayoutManagerOptionsExtensionPrintDirection;
    public readonly stylization: FontLayoutManagerOptionsExtensionStylizer;
    public readonly verticalLayout: FontLayoutManagerOptionsExtensionVerticalLayout;
    public readonly verticalSmushingRules: FontLayoutManagerOptionsExtensionVerticalSmushingRules;
    public readonly width: FontLayoutManagerOptionsExtensionWidth;

    constructor(options: FontLayoutManagerOptions = new FontLayoutManagerOptions()) {
        this._options = options;

        // Initialise Helper Extensions
        this.align = new FontLayoutManagerOptionsExtensionAlignment(this.options);
        this.characterReplacement = new FontLayoutManagerOptionsExtensionCharacterReplacement(this.options);
        this.horizontalLayout = new FontLayoutManagerOptionsExtensionHorizontalLayout(this.options);
        this.horizontalSmushingRules = new FontLayoutManagerOptionsExtensionHorizontalSmushingRules(this.options);
        this.padding = new FontLayoutManagerOptionsExtensionPadding(this.options);
        this.printDirection = new FontLayoutManagerOptionsExtensionPrintDirection(this.options);
        this.stylization = new FontLayoutManagerOptionsExtensionStylizer(this.options);
        this.verticalLayout = new FontLayoutManagerOptionsExtensionVerticalLayout(this.options);
        this.verticalSmushingRules = new FontLayoutManagerOptionsExtensionVerticalSmushingRules(this.options);
        this.width = new FontLayoutManagerOptionsExtensionWidth(this.options);
    }

    public get options(): FontLayoutManagerOptions {
        return this._options;
    }

    private readonly UNDERSCORE_SMUSHING_REPLACERS = new Set<number>(['|', '/', '\\', '[', ']', '{', '}', '(', ')', '<', '>'].map((x) => x.charCodeAt(0)));

    private readonly HIERARCHY_SMUSHING_CLASSES: number[][] = [
        [CharacterCodes.ASCII_PIPE],
        [CharacterCodes.ASCII_FORWARD_SLASH, CharacterCodes.ASCII_BACKWARD_SLASH],
        [CharacterCodes.ASCII_OPEN_BRACKET, CharacterCodes.ASCII_CLOSED_BRACKET],
        [CharacterCodes.ASCII_OPEN_BRACE, CharacterCodes.ASCII_CLOSED_BRACE],
        [CharacterCodes.ASCII_OPEN_PARENTHESIS, CharacterCodes.ASCII_CLOSED_PARENTHESIS],
        [CharacterCodes.ASCII_LESS_THAN, CharacterCodes.ASCII_GREATER_THAN]
    ];

    private readonly OPPOSITE_PAIR_SMUSHING_PAIRS: Array<Set<number>> = [
        new Set([CharacterCodes.ASCII_OPEN_BRACKET, CharacterCodes.ASCII_CLOSED_BRACKET]),
        new Set([CharacterCodes.ASCII_OPEN_BRACE, CharacterCodes.ASCII_CLOSED_BRACE]),
        new Set([CharacterCodes.ASCII_OPEN_PARENTHESIS, CharacterCodes.ASCII_CLOSED_PARENTHESIS])
    ];

    private readonly BIG_X_SMUSHING_PAIRS: [number, number, number][] = [
        [CharacterCodes.ASCII_FORWARD_SLASH, CharacterCodes.ASCII_BACKWARD_SLASH, CharacterCodes.ASCII_PIPE],
        [CharacterCodes.ASCII_BACKWARD_SLASH, CharacterCodes.ASCII_FORWARD_SLASH, 'Y'.charCodeAt(0)],
        [CharacterCodes.ASCII_GREATER_THAN, CharacterCodes.ASCII_LESS_THAN, 'X'.charCodeAt(0)]
    ];

    private readonly VERTICAL_HORIZONTAL_LINE_CHARACTERS: number[] = ['-'.charCodeAt(0), '_'.charCodeAt(0)];

    public getHorizontalSmushCharacter(lChar: CanvasPixel, rChar: CanvasPixel, hardblankCharacter: number): CanvasPixel | null {
        if (lChar.equals(-1)) {
            if (rChar.equals(CharacterCodes.ASCII_SPACE)) {
                return CanvasPixel.getWhitespacePixel();
            }
            return null;
        }

        if (lChar.equals(0) || lChar.equals(CharacterCodes.ASCII_SPACE)) {
            return rChar;
        }
        if (rChar.equals(CharacterCodes.ASCII_SPACE)) {
            return lChar;
        }

        // UNIVERSAL SMUSHING
        if (this._options.doHorizontalUniversalSmushing()) {
            if (lChar.equals(hardblankCharacter)) {
                return rChar;
            }
            if (rChar.equals(hardblankCharacter)) {
                return lChar;
            }

            if (this._options.getPrintDirection() === FIGFontPrintDirection.RIGHT_TO_LEFT) {
                return lChar;
            }

            return rChar;
        }

        // HARDBLANK SMUSHING
        if (this._options.doHorizontalHardblankSmushing()) {
            if (lChar.equals(hardblankCharacter) && rChar.equals(hardblankCharacter)) {
                return new CanvasPixel(hardblankCharacter);
            }
        }

        // Do not smush hardblanks
        if (lChar.equals(hardblankCharacter) || rChar.equals(hardblankCharacter)) {
            return null;
        }

        // EQUAL CHARACTER SMUSHING
        if (this._options.doHorizontalEqualCharacterSmushing()) {
            if (lChar.equals(rChar) && !lChar.equals(hardblankCharacter)) {
                return lChar;
            }
        }

        // UNDERSCORE SMUSHING
        if (this._options.doHorizontalUnderscoreSmushing()) {
            if (lChar.equals(CharacterCodes.ASCII_UNDERSCORE) && this.UNDERSCORE_SMUSHING_REPLACERS.has(rChar.character)) {
                return rChar;
            }
            if (rChar.equals(CharacterCodes.ASCII_UNDERSCORE) && this.UNDERSCORE_SMUSHING_REPLACERS.has(lChar.character)) {
                return lChar;
            }
        }

        // HIERARCHY SMUSHING
        if (this._options.doHorizontalHierarchySmushing()) {
            const lCharHierarchyScore: number = this.HIERARCHY_SMUSHING_CLASSES.findIndex((a) => a.indexOf(lChar.character) > -1);
            const rCharHierarchyScore: number = this.HIERARCHY_SMUSHING_CLASSES.findIndex((a) => a.indexOf(rChar.character) > -1);
            if (lCharHierarchyScore !== -1 && rCharHierarchyScore !== -1) {
                if (lCharHierarchyScore > rCharHierarchyScore) {
                    return lChar;
                }
                if (rCharHierarchyScore > lCharHierarchyScore) {
                    return rChar;
                }
            }
        }

        // OPPOSITE PAIR SMUSHING
        if (this._options.doHorizontalOppositePairSmushing()) {
            if (!rChar.equals(lChar) && this.OPPOSITE_PAIR_SMUSHING_PAIRS.filter((s) => s.has(lChar.character) && s.has(rChar.character)).length > 0) {
                return new CanvasPixel(CharacterCodes.ASCII_PIPE);
            }
        }

        // BIG X SMUSHING
        if (this._options.doHorizontalBigXSmushing()) {
            const bigXResult = this.BIG_X_SMUSHING_PAIRS.find((p) => p[0] === lChar.character && p[1] === rChar.character);
            if (bigXResult !== undefined) {
                return new CanvasPixel(bigXResult[2]);
            }
        }

        return null;
    }

    public getVerticalSmushCharacter(topPixel: CanvasPixel, bottomPixel: CanvasPixel, hardblankCharacter: number): CanvasPixel | null {
        // Handle any padding marker which may have been inserted pre-vertical smushing
        if (this.options.getPaddingCharacterReplacer().has(topPixel.character) || this.options.getPaddingCharacterReplacer().has(bottomPixel.character)) {
            if (topPixel.equals(bottomPixel)) {
                return topPixel;
            }

            if (this.options.getPaddingCharacterReplacer().has(topPixel.character)) {
                return bottomPixel;
            }

            return topPixel;
        }

        // Vertical Smushing treats hardblanks as blanks...
        if (topPixel.equals(hardblankCharacter)) {
            topPixel = CanvasPixel.getWhitespacePixel();
        }
        if (bottomPixel.equals(hardblankCharacter)) {
            bottomPixel = CanvasPixel.getWhitespacePixel();
        }

        if (topPixel.equals(0) || topPixel.equals(CharacterCodes.ASCII_SPACE)) {
            return bottomPixel;
        }

        if (bottomPixel.equals(CharacterCodes.ASCII_SPACE)) {
            return topPixel;
        }

        // UNIVERSAL SMUSHING
        if (this._options.doVerticalUniversalSmushing()) {
            if (topPixel.equals(hardblankCharacter)) {
                return bottomPixel;
            }
            if (bottomPixel.equals(hardblankCharacter)) {
                return topPixel;
            }

            return bottomPixel;
        }

        // EQUAL CHARACTER SMUSHING
        if (this._options.doVerticalEqualCharacterSmushing()) {
            if (topPixel.equals(bottomPixel)) {
                return topPixel;
            }
        }

        // UNDERSCORE SMUSHING
        if (this._options.doVerticalUnderscoreSmushing()) {
            if (topPixel.equals(CharacterCodes.ASCII_UNDERSCORE) && this.UNDERSCORE_SMUSHING_REPLACERS.has(bottomPixel.character)) {
                return bottomPixel;
            }
            if (bottomPixel.equals(CharacterCodes.ASCII_UNDERSCORE) && this.UNDERSCORE_SMUSHING_REPLACERS.has(topPixel.character)) {
                return topPixel;
            }
        }

        // HIERARCHY SMUSHING
        if (this._options.doVerticalHierarchySmushing()) {
            const lCharHierarchyScore: number = this.HIERARCHY_SMUSHING_CLASSES.findIndex((a) => a.indexOf(topPixel.character) > -1);
            const rCharHierarchyScore: number = this.HIERARCHY_SMUSHING_CLASSES.findIndex((a) => a.indexOf(bottomPixel.character) > -1);
            if (lCharHierarchyScore !== -1 && rCharHierarchyScore !== -1) {
                if (lCharHierarchyScore > rCharHierarchyScore) {
                    return topPixel;
                }
                if (rCharHierarchyScore > lCharHierarchyScore) {
                    return bottomPixel;
                }
            }
        }

        // HORIZONTAL LINE SMUSHING
        if (this._options.doVerticalHorizontalLineSmushing()) {
            if (
                !topPixel.equals(bottomPixel) &&
                this.VERTICAL_HORIZONTAL_LINE_CHARACTERS.indexOf(topPixel.character) > -1 &&
                this.VERTICAL_HORIZONTAL_LINE_CHARACTERS.indexOf(bottomPixel.character) > -1
            ) {
                return new CanvasPixel('='.charCodeAt(0));
            }
        }

        // VERTICAL LINE SUPERSMUSHING
        if (this._options.doVerticalVerticalLineSuperSmushing()) {
            // We do not support this... and have no plans to support it in the near future!
            // The Figlet spec is very sparse on details - and it's nothing like the other rules
            // Keeping this code block here for completeness to the spec.
        }

        return null;
    }

    private createCanvas(text: string, font: FIGFont): DisplayCanvas {
        const canvas: DisplayCanvas = new DisplayCanvas(font, this, InputTokenParser.parse(text));
        return canvas;
    }

    public renderText(text: string, font: FIGFont): string {
        // Base the rendering options on those of the provided font
        this._options.setReferenceFont(font);

        return this.createCanvas(text, font).toString();
    }
}
