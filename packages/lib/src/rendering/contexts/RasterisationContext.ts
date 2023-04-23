import { Matrix } from '../../utils/MatrixUtils';
import { CanvasPixel } from '../CanvasPixel';

export interface IRasterisationContext {
    width: number;
    height: number;
    lineNumber: number;

    xPos: number;
    yPos: number;
}

export class RasterisationContext implements IRasterisationContext {
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
