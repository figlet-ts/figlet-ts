import { CanvasPixelContext, Stylizer } from '@figlet-ts/lib';
import chalk from 'chalk';
import tinycolor from 'tinycolor2';

export class Rainbow extends Stylizer {
    private _palette: tinycolor.Instance[] = [];
    private _giantGoldfish: string[] = ['#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900'];
    private _numColours = 100;

    constructor() {
        super('Rainbow');
    }

    init() {
        // Setup a rainbow palette based on the width of the output
        const startColour = tinycolor('#00f');

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
        if (pixelContext.canvasContext) {
            return chalk.hex(this._palette[Math.floor((pixelContext.canvasContext.lineWordNumber/pixelContext.canvasContext.lineWordCount) * 100)].toHex())(character);
            // if (pixelContext.wordContext.characterPos === 0) {
            //     return chalk.hex(this._giantGoldfish[4])(character);
            // }
            
            // return chalk.hex(this._giantGoldfish[0])(character);
        }
        // if (pixelContext.canvasContext !== undefined) {
        //     this._debug(`(${pixelContext.rasterizeContext.xPos}, ${pixelContext.rasterizeContext.yPos}) => ${pixelContext.rasterizeContext.xPos % this._numColours}`);
        //     return chalk.hex(this._palette[pixelContext.rasterizeContext.xPos % this._numColours].toHex())(character);
        // } else {
        //     this._debug('No rasterizeContext');
        // }
        // if (pixelContext.rasterizeContext !== undefined) {
        //     this._debug(`(${pixelContext.rasterizeContext.xPos}, ${pixelContext.rasterizeContext.yPos}) => ${pixelContext.rasterizeContext.xPos % this._numColours}`);
        //     return chalk.hex(this._palette[pixelContext.rasterizeContext.xPos % this._numColours].toHex())(character);
        // } else {
        //     this._debug('No rasterizeContext');
        // }

        return character;
    }
}
