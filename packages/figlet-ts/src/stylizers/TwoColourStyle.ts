import { CanvasContext, CanvasPixelContext, RasterisationContext, Stylizer } from '@figlet-ts/lib';
import chalk from 'chalk';
import tinycolor from 'tinycolor2';

export type TwoColourStyleOptions = {
    mode: 'foreground' | 'background' | 'backgroundText' | 'backgroundPadding' | 'backgroundLeftPadding' | 'backgroundRightPadding';
    startColour: string;
    endColour: string;
};

export class TwoColourStyle extends Stylizer {
    private readonly _options: TwoColourStyleOptions;
    private readonly _palette: tinycolor.Instance[] = [];
    private _numColours: number = 1;

    constructor(styleName: string, options: TwoColourStyleOptions) {
        super(styleName);
        this._options = options;
    }

    private createHSVPalette(startColourString: string, endColourString: string, steps: number): tinycolor.Instance[] {
        const retVal: tinycolor.Instance[] = [];

        const startColour = tinycolor(startColourString).toHsl();
        const endColour = tinycolor(endColourString).toHsl();

        const hueRange = endColour.h - startColour.h;
        const satRange = endColour.s - startColour.s;
        const lumRange = endColour.l - startColour.l;

        const hueStepSize = hueRange / steps;
        const satStepSize = satRange / steps;
        const lumStepSize = lumRange / steps;

        for (let i = 0; i < steps; i++) {
            retVal.push(
                tinycolor({
                    h: startColour.h + i * hueStepSize,
                    s: startColour.s + i * satStepSize,
                    l: startColour.l + i * lumStepSize
                })
            );
        }

        return retVal;
    }

    private createRGBPalette(startColourString: string, endColourString: string, steps: number): tinycolor.Instance[] {
        const retVal: tinycolor.Instance[] = [];

        const startColour = tinycolor(startColourString).toRgb();
        const endColour = tinycolor(endColourString).toRgb();

        const rRange = endColour.r - startColour.r;
        const gRange = endColour.g - startColour.g;
        const bRange = endColour.b - startColour.b;

        const rStepSize = rRange / steps;
        const gStepSize = gRange / steps;
        const bStepSize = bRange / steps;

        for (let i = 0; i < steps; i++) {
            retVal.push(
                tinycolor({
                    r: startColour.r + i * rStepSize,
                    g: startColour.g + i * gStepSize,
                    b: startColour.b + i * bStepSize
                })
            );
        }

        return retVal;
    }

    init(canvasContext: CanvasContext, rasterisationContext: RasterisationContext): void {
        switch (this._options.mode) {
            case 'foreground':
            case 'background':
                this._numColours = canvasContext.width;
                break;
            case 'backgroundText':
                this._numColours = canvasContext.maxSubCanvasWidth;
                break;
            case 'backgroundPadding':
                this._numColours = Math.max(rasterisationContext.minLeftPaddingLength, rasterisationContext.minRightPaddingLength);
                break;
            case 'backgroundLeftPadding':
                this._numColours = rasterisationContext.minLeftPaddingLength;
                break;
            case 'backgroundRightPadding':
                this._numColours = rasterisationContext.minRightPaddingLength;
                break;
        }

        // this._palette.push(...this.createHSVPalette(this._options.startColour, this._options.endColour, this._numColours));
        this._palette.push(...this.createRGBPalette(this._options.startColour, this._options.endColour, this._numColours));

        this._debug(`Created palette with ${this._palette.length} colours`);
    }

    applyStyle(character: string, pixelContext: CanvasPixelContext): string {
        if (!pixelContext.rasterizeContext) {
            return character;
        }

        let retVal = character;
        let doColourBackground = false;
        let selectedPaletteIndex = Math.min(pixelContext.rasterizeContext.xPos, this._numColours);

        switch (this._options.mode) {
            case 'background':
                doColourBackground = true;
                break;
            case 'backgroundText':
                if (pixelContext.characterContext?.isStandardCharacter) {
                    doColourBackground = true;
                }
                break;
            case 'backgroundPadding':
                if (pixelContext.characterContext?.isPadding) {
                    doColourBackground = true;
                }
                break;
            case 'backgroundLeftPadding':
                if (pixelContext.characterContext?.isLeftPadding) {
                    doColourBackground = true;
                    selectedPaletteIndex = Math.floor((pixelContext.rasterizeContext.xPos / pixelContext.rasterizeContext.minLeftPaddingLength) * this._numColours);
                }
                break;
            case 'backgroundRightPadding':
                if (pixelContext.characterContext?.isRightPadding) {
                    doColourBackground = true;
                    const fadeStartPoint = pixelContext.rasterizeContext.width - pixelContext.rasterizeContext.minRightPaddingLength;

                    selectedPaletteIndex = Math.floor(((pixelContext.rasterizeContext.xPos - fadeStartPoint) / pixelContext.rasterizeContext.minRightPaddingLength) * this._numColours);
                }
                break;
        }

        if (doColourBackground) {
            if (pixelContext.rasterizeContext !== undefined) {
                // console.log(`"${character}" / ${character.charCodeAt(0)} / "${retVal}" / ${retVal.charCodeAt(0)} / ${' '.charCodeAt(0)}`);
                // console.log(`${this._options.applyTo} ${selectedPaletteIndex} ${this._palette[selectedPaletteIndex]}`);
                retVal = chalk.bgHex(this._palette[Math.max(0, Math.min(selectedPaletteIndex, this._palette.length - 1))].toHex())(retVal);
            }
        } else if (this._options.mode === 'foreground') {
            retVal = chalk.hex(this._palette[Math.max(0, Math.min(selectedPaletteIndex, this._palette.length - 1))].toHex())(retVal);
        }

        return retVal;
    }
}
