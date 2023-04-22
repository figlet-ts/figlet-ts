import { LayoutRulesBase } from '../layoutRules/LayoutRulesBase';
import { ExternalDebuggable } from '../utils/DebugUtil';
import { Matrix } from '../utils/MatrixUtils';
import { CanvasPixel, CanvasPixelContext } from './CanvasPixel';

export interface IRasterizeContext {
    width: number;
    height: number;
    lineNumber: number;

    xPos: number;
    yPos: number;
}

export class RasterizeContext implements IRasterizeContext {
    private _matrix: Matrix<CanvasPixel>;
    private _currentLineNumber: number = 0;

    xPos: number = 0;
    yPos: number = 0;

    constructor(matrix: Matrix<CanvasPixel>, xPos: number, yPos: number) {
        this._matrix = matrix;
        this.updateCursorPosition(xPos, yPos);
    }

    private updateCursorPosition(xPos: number, yPos: number) {
        this.xPos = xPos;
        this.yPos = yPos;
    }

    get width(): number {
        return this._matrix[0].length;
    }

    get height(): number {
        return this._matrix.length;
    }

    get lineNumber(): number {
        return this._currentLineNumber;
    }
}

export abstract class Stylizer extends ExternalDebuggable {
    private _layoutRules: LayoutRulesBase | undefined;

    protected constructor(stylizerName: string) {
        super(stylizerName);
    }

    public libInternalInit(layoutRulesBase: LayoutRulesBase) {
        this._layoutRules = layoutRulesBase;
        this._debug('Initialising Stylizer');
        this.init();
    }

    public libInternalApplyStyle(character: string, pixelContext: CanvasPixelContext): string {
        this._debug(`Applying style to ${character} from input character "${pixelContext.figCharacter?.character}"`);
        return this.applyStyle(character, pixelContext);
    }

    public get layoutRules(): LayoutRulesBase {
        if (this._layoutRules === undefined) {
            throw new Error('FATAL:  LayoutRules should have been defined.');
        }
        return this._layoutRules;
    }

    abstract init(): void;

    abstract applyStyle(character: string, pixelContext: CanvasPixelContext): string;
}
