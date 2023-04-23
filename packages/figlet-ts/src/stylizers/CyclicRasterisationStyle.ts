import { CanvasContext, CanvasPixelContext, Stylizer } from '@figlet-ts/lib';
import chalk from 'chalk';
import tinycolor from 'tinycolor2';

export type CyclicRasterisationStyleOptions = {
    startColour: string;
    colourMode: 'foreground' | 'background';
    paletteWidth: 'canvasWidth' | 'longestLine';
    fgColour?: string;
    bgColour?: string;
};
export class CyclicRasterisationStyle extends Stylizer {
    private readonly _startColour: tinycolor.Instance;
    private readonly _palette: tinycolor.Instance[] = [];
    private readonly _options: CyclicRasterisationStyleOptions;
    private _numColours: number = 1;

    constructor(styleName: string, options: CyclicRasterisationStyleOptions) {
        super(styleName);
        this._options = options;
        this._startColour = tinycolor(options.startColour);

        this._debug(`Created palette with ${this._palette.length} colours for a canvas that is ${this._layoutRules?.getRenderingWidth()} wide.`);
    }

    init(canvasContext: CanvasContext): void {
        switch (this._options.paletteWidth) {
            case 'canvasWidth':
                this._numColours = canvasContext.width;
                break;
            case 'longestLine':
                this._numColours = canvasContext.maxSubCanvasWidth;
                break;
        }

        const stepSize = 360 / this._numColours;

        for (let i = 0; i < this._numColours; i++) {
            this._palette.push(this._startColour.clone().spin(Math.ceil(stepSize * i)));
        }
    }

    applyStyle(character: string, pixelContext: CanvasPixelContext): string {
        let retVal = character;

        if (pixelContext.rasterizeContext !== undefined) {
            switch (this._options.colourMode) {
                case 'foreground':
                    retVal = chalk.hex(this._palette[pixelContext.rasterizeContext.xPos % this._numColours].toHex())(retVal);
                    break;
                case 'background':
                    retVal = chalk.bgHex(this._palette[pixelContext.rasterizeContext.xPos % this._numColours].toHex())(retVal);
                    break;
            }
        }

        if (this._options.bgColour) {
            retVal = chalk.bgHex(this._options.bgColour)(retVal);
        }

        if (this._options.fgColour) {
            retVal = chalk.hex(this._options.fgColour)(retVal);
        }

        retVal = chalk.bold(retVal);

        return retVal;
    }
}
