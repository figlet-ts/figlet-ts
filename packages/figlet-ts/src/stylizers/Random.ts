import { CanvasPixelContext, Stylizer } from '@figlet-ts/lib';
import chalk from 'chalk';
import tinycolor from 'tinycolor2';


export class Random extends Stylizer {
    
    constructor() {
        super('Random');
    }

    init() {
        // Nuffin
    }

    applyStyle(character: string, pixelContext: CanvasPixelContext): string {
        if (pixelContext.canvasContext !== undefined) {
            return chalk.bgHex(tinycolor.random().toHex())(character);
        }

        return character;
    }
}
