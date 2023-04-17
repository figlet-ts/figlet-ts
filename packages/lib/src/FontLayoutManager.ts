import { FIGFontPrintDirection } from './enums/FIGFontPrintDirection';
import { type FIGFont } from './FIGFont';
import { FontLayoutManagerOptions } from './FontLayoutManagerOptions';
import { FontLayoutManagerOptionsExtensionAlignment } from './FontLayoutManagerOptionsExtensionAlignment';
import { FontLayoutManagerOptionsExtensionCharacterReplacement } from './FontLayoutManagerOptionsExtensionCharacterReplacement';
import { FontLayoutManagerOptionsExtensionHorizontalLayout } from './FontLayoutManagerOptionsExtensionHorizontalLayout';
import { FontLayoutManagerOptionsExtensionHorizontalSmushingRules } from './FontLayoutManagerOptionsExtensionHorizontalSmushingRules';
import { FontLayoutManagerOptionsExtensionPadding } from './FontLayoutManagerOptionsExtensionPadding';
import { FontLayoutManagerOptionsExtensionPrintDirection } from './FontLayoutManagerOptionsExtensionPrintDirection';
import { FontLayoutManagerOptionsExtensionVerticalLayout } from './FontLayoutManagerOptionsExtensionVerticalLayout';
import { FontLayoutManagerOptionsExtensionVerticalSmushingRules } from './FontLayoutManagerOptionsExtensionVerticalSmushingRules';
import { FontLayoutManagerOptionsExtensionWidth } from './FontLayoutManagerOptionsExtensionWidth';
import { DisplayCanvas } from './rendering/DisplayCanvas';
import { ASCIICodes } from './utils/ASCIICodes';
import { InputTokenParser } from './utils/InputTokenParser';

export class FontLayoutManager {
    private _options: FontLayoutManagerOptions;

    public readonly align: FontLayoutManagerOptionsExtensionAlignment;
    public readonly characterReplacement: FontLayoutManagerOptionsExtensionCharacterReplacement;
    public readonly horizontalLayout: FontLayoutManagerOptionsExtensionHorizontalLayout;
    public readonly horizontalSmushingRules: FontLayoutManagerOptionsExtensionHorizontalSmushingRules;
    public readonly padding: FontLayoutManagerOptionsExtensionPadding;
    public readonly printDirection: FontLayoutManagerOptionsExtensionPrintDirection;
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
        this.verticalLayout = new FontLayoutManagerOptionsExtensionVerticalLayout(this.options);
        this.verticalSmushingRules = new FontLayoutManagerOptionsExtensionVerticalSmushingRules(this.options);
        this.width = new FontLayoutManagerOptionsExtensionWidth(this.options);
    }

    public get options(): FontLayoutManagerOptions {
        return this._options;
    }

    private readonly UNDERSCORE_SMUSHING_REPLACERS = new Set<number>(['|', '/', '\\', '[', ']', '{', '}', '(', ')', '<', '>'].map((x) => x.charCodeAt(0)));

    private readonly HIERARCHY_SMUSHING_CLASSES: number[][] = [
        [ASCIICodes.PIPE],
        [ASCIICodes.FORWARD_SLASH, ASCIICodes.BACKWARD_SLASH],
        [ASCIICodes.OPEN_BRACKET, ASCIICodes.CLOSED_BRACKET],
        [ASCIICodes.OPEN_BRACE, ASCIICodes.CLOSED_BRACE],
        [ASCIICodes.OPEN_PARENTHESIS, ASCIICodes.CLOSED_PARENTHESIS],
        [ASCIICodes.LESS_THAN, ASCIICodes.GREATER_THAN]
    ];

    private readonly OPPOSITE_PAIR_SMUSHING_PAIRS: Array<Set<number>> = [
        new Set([ASCIICodes.OPEN_BRACKET, ASCIICodes.CLOSED_BRACKET]),
        new Set([ASCIICodes.OPEN_BRACE, ASCIICodes.CLOSED_BRACE]),
        new Set([ASCIICodes.OPEN_PARENTHESIS, ASCIICodes.CLOSED_PARENTHESIS])
    ];

    private readonly BIG_X_SMUSHING_PAIRS: [number, number, number][] = [
        [ASCIICodes.FORWARD_SLASH, ASCIICodes.BACKWARD_SLASH, ASCIICodes.PIPE],
        [ASCIICodes.BACKWARD_SLASH, ASCIICodes.FORWARD_SLASH, 'Y'.charCodeAt(0)],
        [ASCIICodes.GREATER_THAN, ASCIICodes.LESS_THAN, 'X'.charCodeAt(0)]
    ];

    private readonly VERTICAL_HORIZONTAL_LINE_CHARACTERS: number[] = ['-'.charCodeAt(0), '_'.charCodeAt(0)];

    public getHorizontalSmushCharacter(lChar: number, rChar: number, hardblankCharacter: number): number {
        if (lChar === -1) {
            if (rChar === ASCIICodes.SPACE) {
                return ASCIICodes.SPACE;
            }
            return -1;
        }

        if (lChar === 0 || lChar === ASCIICodes.SPACE) {
            return rChar;
        }
        if (rChar === ASCIICodes.SPACE) {
            return lChar;
        }

        // UNIVERSAL SMUSHING
        if (this._options.doHorizontalUniversalSmushing()) {
            if (lChar === hardblankCharacter) {
                return rChar;
            }
            if (rChar === hardblankCharacter) {
                return lChar;
            }

            if (this._options.getPrintDirection() === FIGFontPrintDirection.RIGHT_TO_LEFT) {
                return lChar;
            }

            return rChar;
        }

        // HARDBLANK SMUSHING
        if (this._options.doHorizontalHardblankSmushing()) {
            if (lChar === hardblankCharacter && rChar === hardblankCharacter) {
                return hardblankCharacter;
            }
        }

        // Do not smush hardblanks
        if (lChar === hardblankCharacter || rChar === hardblankCharacter) {
            return -1;
        }

        // EQUAL CHARACTER SMUSHING
        if (this._options.doHorizontalEqualCharacterSmushing()) {
            if (lChar === rChar && lChar !== hardblankCharacter) {
                return lChar;
            }
        }

        // UNDERSCORE SMUSHING
        if (this._options.doHorizontalUnderscoreSmushing()) {
            if (lChar === ASCIICodes.UNDERSCORE && this.UNDERSCORE_SMUSHING_REPLACERS.has(rChar)) {
                return rChar;
            }
            if (rChar === ASCIICodes.UNDERSCORE && this.UNDERSCORE_SMUSHING_REPLACERS.has(lChar)) {
                return lChar;
            }
        }

        // HIERARCHY SMUSHING
        if (this._options.doHorizontalHierarchySmushing()) {
            const lCharHierarchyScore: number = this.HIERARCHY_SMUSHING_CLASSES.findIndex((a) => a.indexOf(lChar) > -1);
            const rCharHierarchyScore: number = this.HIERARCHY_SMUSHING_CLASSES.findIndex((a) => a.indexOf(rChar) > -1);
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
            if (rChar !== lChar && this.OPPOSITE_PAIR_SMUSHING_PAIRS.filter((s) => s.has(lChar) && s.has(rChar)).length > 0) {
                return ASCIICodes.PIPE;
            }
        }

        // BIG X SMUSHING
        if (this._options.doHorizontalBigXSmushing()) {
            const bigXResult = this.BIG_X_SMUSHING_PAIRS.find((p) => p[0] === lChar && p[1] === rChar);
            if (bigXResult !== undefined) {
                return bigXResult[2];
            }
        }

        return -1;
    }

    public getVerticalSmushCharacter(topChar: number, bottomChar: number, hardblankCharacter: number): number {
        // Handle any padding marker which may have been inserted pre-vertical smushing
        if (this.options.getPaddingCharacterReplacer().has(topChar) || this.options.getPaddingCharacterReplacer().has(bottomChar)) {
            if (topChar === bottomChar) {
                return topChar;
            }

            if (this.options.getPaddingCharacterReplacer().has(topChar)) {
                return bottomChar;
            }

            return topChar;
        }

        // Vertical Smushing treats hardblanks as blanks...
        if (topChar === hardblankCharacter) {
            topChar = ASCIICodes.SPACE;
        }
        if (bottomChar === hardblankCharacter) {
            bottomChar = ASCIICodes.SPACE;
        }

        if (topChar === 0 || topChar === ASCIICodes.SPACE) {
            return bottomChar;
        }

        if (bottomChar === ASCIICodes.SPACE) {
            return topChar;
        }

        // UNIVERSAL SMUSHING
        if (this._options.doVerticalUniversalSmushing()) {
            if (topChar === hardblankCharacter) {
                return bottomChar;
            }
            if (bottomChar === hardblankCharacter) {
                return topChar;
            }

            return bottomChar;
        }

        // EQUAL CHARACTER SMUSHING
        if (this._options.doVerticalEqualCharacterSmushing()) {
            if (topChar === bottomChar) {
                return topChar;
            }
        }

        // UNDERSCORE SMUSHING
        if (this._options.doVerticalUnderscoreSmushing()) {
            if (topChar === ASCIICodes.UNDERSCORE && this.UNDERSCORE_SMUSHING_REPLACERS.has(bottomChar)) {
                return bottomChar;
            }
            if (bottomChar === ASCIICodes.UNDERSCORE && this.UNDERSCORE_SMUSHING_REPLACERS.has(topChar)) {
                return topChar;
            }
        }

        // HIERARCHY SMUSHING
        if (this._options.doVerticalHierarchySmushing()) {
            const lCharHierarchyScore: number = this.HIERARCHY_SMUSHING_CLASSES.findIndex((a) => a.indexOf(topChar) > -1);
            const rCharHierarchyScore: number = this.HIERARCHY_SMUSHING_CLASSES.findIndex((a) => a.indexOf(bottomChar) > -1);
            if (lCharHierarchyScore !== -1 && rCharHierarchyScore !== -1) {
                if (lCharHierarchyScore > rCharHierarchyScore) {
                    return topChar;
                }
                if (rCharHierarchyScore > lCharHierarchyScore) {
                    return bottomChar;
                }
            }
        }

        // HORIZONTAL LINE SMUSHING
        if (this._options.doVerticalHorizontalLineSmushing()) {
            if (topChar !== bottomChar && this.VERTICAL_HORIZONTAL_LINE_CHARACTERS.indexOf(topChar) > -1 && this.VERTICAL_HORIZONTAL_LINE_CHARACTERS.indexOf(bottomChar) > -1) {
                return '='.charCodeAt(0);
            }
        }

        // VERTICAL LINE SUPERSMUSHING
        if (this._options.doVerticalVerticalLineSuperSmushing()) {
            // We do not support this... and have no plans to support it in the near future!
            // The Figlet spec is very sparse on details - and it's nothing like the other rules
            // Keeping this code block here for completeness to the spec.
        }

        return -1;
    }

    private createCanvas(text: string, font: FIGFont): DisplayCanvas {
        const canvas: DisplayCanvas = new DisplayCanvas(font, this);

        for (const inputToken of InputTokenParser.parse(text)) {
            canvas.addWord(inputToken, font);
        }
        return canvas;
    }

    public renderText(text: string, font: FIGFont): string {
        // Base the rendering options on those of the provided font
        this._options.setReferenceFont(font);

        return this.createCanvas(text, font).toString();
    }
}
