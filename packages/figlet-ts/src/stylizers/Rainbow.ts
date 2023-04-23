import { CanvasPixelContext, Stylizer } from '@figlet-ts/lib';
import chalk from 'chalk';
import tinycolor from 'tinycolor2';

export class Rainbow extends Stylizer {
    private _palette: tinycolor.Instance[] = [];
    private _numColours = 100;

    constructor() {
        super('Rainbow');
    }

    init() {
        // Set up a rainbow palette based on the width of the output
        const startColour = tinycolor('#f00');

        const stepSize = 360 / this._numColours;

        for (let i = 0; i < this._numColours; i++) {
            this._palette.push(startColour.clone().spin(Math.ceil(stepSize * i)));
        }

        this._debug(`Created palette with ${this._palette.length} colours for a canvas that is ${this.layoutRules.getRenderingWidth()} wide.`);
    }

    applyStyle(character: string, pixelContext: CanvasPixelContext): string {
        // console.log(pixelContext);
        // if (pixelContext.wordContext) {
        //     this._debug(`${pixelContext.wordContext.characterPos} ${pixelContext.wordContext.wordLength}`);
        //     return chalk.hex(this._palette[Math.floor((pixelContext.wordContext.characterPos/pixelContext.wordContext.wordLength) * 100)].toHex())(character);
        //     // if (pixelContext.wordContext.characterPos === 0) {
        //     //     return chalk.hex(this._giantGoldfish[4])(character);
        //     // }
        //
        //     // return chalk.hex(this._giantGoldfish[0])(character);
        // }

        // if (pixelContext.subCanvasContext) {
        //     return chalk.hex(this._palette[Math.floor((pixelContext.subCanvasContext.wordNumber / pixelContext.subCanvasContext.wordCount) * 100)].toHex())(character);
        // }

        // if (pixelContext.wordContext) {
        //     if (pixelContext.wordContext === 0) {
        //         return chalk.hex(this._giantGoldfish[4])(character);
        //     }
        //
        //     return chalk.hex(this._giantGoldfish[0])(character);
        // }

        if (pixelContext.rasterizeContext !== undefined) {
            // this._debug(`(${pixelContext.rasterizeContext.xPos}, ${pixelContext.rasterizeContext.yPos}) => ${pixelContext.rasterizeContext.xPos % this._numColours}`);
            return chalk.bgHex(this._palette[pixelContext.rasterizeContext.xPos % this._numColours].toHex()).bold.whiteBright(character);
        } else {
            this._debug('No rasterizeContext');
        }

        // if (pixelContext.rasterizeContext !== undefined) {
        //     this._debug(`(${pixelContext.rasterizeContext.xPos}, ${pixelContext.rasterizeContext.yPos}) => ${pixelContext.rasterizeContext.xPos % this._numColours}`);
        //     return chalk.hex(this._palette[pixelContext.rasterizeContext.xPos % this._numColours].toHex())(character);
        // } else {
        //     this._debug('No rasterizeContext');
        // }

        // if (pixelContext.canvasContext !== undefined) {
        //     return chalk.hex(this._palette[Math.floor((pixelContext.canvasContext.currentSubCanvasNumber / pixelContext.canvasContext.subCanvasCount)) * this._numColours].toHex())(character);
        // }

        return character;
    }
}
