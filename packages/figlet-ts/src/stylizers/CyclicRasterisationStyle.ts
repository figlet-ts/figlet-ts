import { CanvasContext, CanvasPixelContext, RasterisationContext, Stylizer } from '@figlet-ts/lib';
import chalk from 'chalk';
import tinycolor from 'tinycolor2';

export type CyclicRasterisationStyleOptions = {
    startColour: string;
    colourMode: 'foreground' | 'background';
    paletteWidth: 'renderWidth' | 'longestLine';
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
    }

    init(canvasContext: CanvasContext, rasterisationContext: RasterisationContext): void {
        switch (this._options.paletteWidth) {
            case 'renderWidth':
                this._numColours = rasterisationContext.width;
                break;
            case 'longestLine':
                this._numColours = canvasContext.maxSubCanvasWidth;
                break;
        }
        
        this._numColours = Math.max(1, this._numColours);

        const stepSize = 360 / this._numColours;
        
        this._startColour.lighten(10);

        for (let i = 0; i < this._numColours; i++) {
            this._palette.push(this._startColour.clone().spin(Math.ceil(stepSize * i)));
        }

        this._debug(`Created palette with ${this._palette.length} colours for a canvas that is ${this._layoutRules?.getRenderingWidth()} wide (longest line = ${canvasContext.maxSubCanvasWidth})`);
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

        return retVal;
    }
}
