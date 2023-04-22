import { FIGCharacter } from '../FIGCharacter';
import { ASCIICodes } from '../utils/ASCIICodes';
import { RasterizeContext } from './Stylizer';
import {WordContext} from "./contexts/WordContext";
import {CanvasContext} from "./contexts/ICanvasContext";

export interface CanvasPixelContext {
    figCharacter?: FIGCharacter;
    canvasContext?: CanvasContext;
    rasterizeContext?: RasterizeContext;
    wordContext?: WordContext;
    // inputToken?: InputToken;
    //
    // lineNumber?: number;
}

export class CanvasPixel {
    public context: CanvasPixelContext = {};

    constructor(public readonly character: number, context: CanvasPixelContext = {}) {
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

    public addRasterizeContext(rasterizeContext: RasterizeContext) {
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
        return new CanvasPixel(ASCIICodes.SPACE);
    }
}
