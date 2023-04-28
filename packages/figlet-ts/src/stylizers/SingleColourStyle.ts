import { CanvasPixelContext, Stylizer } from '@figlet-ts/lib';
import chalk from 'chalk';

export type SingleColourStyleOptions = {
    mode: 'foreground' | 'background' | 'backgroundText' | 'backgroundPadding' | 'backgroundLeftPadding' | 'backgroundRightPadding';
    colour: string;
};

export class SingleColourStyle extends Stylizer {
    private readonly _options: SingleColourStyleOptions;

    constructor(styleName: string, options: SingleColourStyleOptions) {
        super(styleName);
        this._options = options;
    }

    init(): void {
        //
    }

    applyStyle(character: string, pixelContext: CanvasPixelContext): string {
        let retVal = character;
        let doColourBackground = false;

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
                }
                break;
            case 'backgroundRightPadding':
                if (pixelContext.characterContext?.isRightPadding) {
                    doColourBackground = true;
                }
                break;
        }

        if (doColourBackground) {
            // console.log(`"${character}" / ${character.charCodeAt(0)} / "${retVal}" / ${retVal.charCodeAt(0)} / ${' '.charCodeAt(0)}`);
            retVal = chalk.bgHex(this._options.colour)(retVal);
        } else if (this._options.mode === 'foreground') {
            retVal = chalk.hex(this._options.colour)(retVal);
        }

        return retVal;
    }
}
