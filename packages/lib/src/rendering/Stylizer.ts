import { LayoutRulesBase } from '../layoutRules/LayoutRulesBase';
import { ExternalDebuggable } from '../utils/DebugUtil';
import { CanvasPixelContext } from './CanvasPixel';
import { CanvasContext } from './contexts/CanvasContext';
import { RasterisationContext } from './contexts/RasterisationContext';

export abstract class Stylizer extends ExternalDebuggable {
    protected _layoutRules: LayoutRulesBase | undefined;

    protected constructor(stylizerName: string) {
        super(stylizerName);
    }

    public libInternalInit(layoutRulesBase: LayoutRulesBase, canvasContext: CanvasContext, rasterisationContext: RasterisationContext) {
        this._layoutRules = layoutRulesBase;
        this._debug('Initialising Stylizer');
        this.init(canvasContext, rasterisationContext);
    }

    public libInternalApplyStyle(character: string, pixelContext: CanvasPixelContext): string {
        // this._debug(`Applying style to ${character} from input character "${pixelContext.figCharacter?.character}"`);
        return this.applyStyle(character, pixelContext);
    }

    public get layoutRules(): LayoutRulesBase {
        if (this._layoutRules === undefined) {
            throw new Error('FATAL:  LayoutRules should have been defined.');
        }
        return this._layoutRules;
    }

    abstract init(canvasContext: CanvasContext, rasterisationContext: RasterisationContext): void;

    abstract applyStyle(character: string, pixelContext: CanvasPixelContext): string;
}
