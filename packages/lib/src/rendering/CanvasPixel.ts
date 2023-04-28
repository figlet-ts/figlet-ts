import { FIGCharacter } from '../FIGCharacter';
import { CharacterCodes } from '../utils/CharacterCodes';
import { CanvasContext } from './contexts/CanvasContext';
import { SubCanvasContext } from './contexts/SubCanvasContext';
import { WordContext } from './contexts/WordContext';

import { RasterisationContext } from './contexts/RasterisationContext';

export interface CharacterContext {
    isPadding: boolean;
    isLeftPadding: boolean;
    isRightPadding: boolean;
    isStandardCharacter: boolean;
}

export interface CanvasPixelContext {
    figCharacter?: FIGCharacter;
    characterContext?: CharacterContext;
    canvasContext?: CanvasContext;
    subCanvasContext?: SubCanvasContext;
    rasterizeContext?: RasterisationContext;
    wordContext?: WordContext;
    // inputToken?: InputToken;
    //
    // lineNumber?: number;
}

export class CanvasPixel {
    public context: CanvasPixelContext = {};

    constructor(public readonly character: number, context: CanvasPixelContext = {}) {
        const characterContext: CharacterContext = {
            isLeftPadding: false,
            isPadding: false,
            isRightPadding: false,
            isStandardCharacter: false
        };

        if (this.character === CharacterCodes.FIGLET_TS_LEFT_PADDING_MARKER) {
            characterContext.isPadding = true;
            characterContext.isLeftPadding = true;
        } else if (this.character === CharacterCodes.FIGLET_TS_RIGHT_PADDING_MARKER) {
            characterContext.isPadding = true;
            characterContext.isRightPadding = true;
        } else {
            characterContext.isStandardCharacter = true;
        }

        context.characterContext = characterContext;

        this.addContext(context);
    }

    public addContext(extraContext: CanvasPixelContext) {
        this.context = {
            ...this.context,
            ...extraContext
        };
    }

    public addCanvasContext(canvasContext: CanvasContext) {
        this.context.canvasContext = canvasContext;
    }

    public addSubCanvasContext(subCanvasContext: SubCanvasContext) {
        this.context.subCanvasContext = subCanvasContext;
    }

    public addRasterizeContext(rasterizeContext: RasterisationContext) {
        this.context.rasterizeContext = rasterizeContext;
    }

    public equals(comparison: CanvasPixel | number) {
        if (comparison instanceof CanvasPixel) {
            return this.character === comparison.character;
        }
        return this.character === comparison;
    }

    static getHardblankPixel(hardblankCharacter: number): CanvasPixel {
        return new CanvasPixel(hardblankCharacter);
    }

    static getWhitespacePixel(): CanvasPixel {
        return new CanvasPixel(CharacterCodes.ASCII_SPACE);
    }
}
