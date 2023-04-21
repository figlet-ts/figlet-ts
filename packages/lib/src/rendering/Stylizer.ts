import { Debuggable } from '../utils/DebugUtil';
import { Matrix } from '../utils/MatrixUtils';
import { CanvasPixel } from './CanvasPixel';
import { DisplayCanvas } from './DisplayCanvas';

// export interface IWordContext {
//     word: string;
//     height: number;
//     lineNumber: number;
//
//     xPos: number;
//     yPos: number;
// }

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

    constructor(matrix: Matrix<CanvasPixel>, lineNumber: number, xPos: number, yPos: number) {
        this._matrix = matrix;
        this.updateCursorPosition(lineNumber, xPos, yPos);
    }

    private updateCursorPosition(lineNumber: number, xPos: number, yPos: number) {
        this._currentLineNumber = lineNumber;
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

export interface ICanvasContext {
    canvas: DisplayCanvas;
    canvasWidth: number;
    canvasHeight: number;
    canvasLineCount: number;
    canvasWordCount: number;
    canvasCharacterCount: number;

    lineWidth: number;
    lineHeight: number;
    lineNumber: number;
    lineWordCount: number;
    lineCharacterCount: number;

    lineWordNumber: number;
    wordCharacterNumber: number;

    pixelCanvasXPos: number;
    pixelCanvasYPos: number;

    pixelLineXPos: number;
    pixelLineYPos: number;
}

export class CanvasContext implements ICanvasContext {
    private _canvas: DisplayCanvas;
    private _currentLineNumber: number = 0;
    private _lineWordNumber: number = 0;
    private _wordCharacterNumber: number = 0;

    pixelLineXPos: number = 0;
    pixelLineYPos: number = 0;

    constructor(canvas: DisplayCanvas, lineNumber: number, lineWordNumber: number, wordCharacterNumber: number, subCanvasXPos: number, subCanvasYPos: number) {
        this._canvas = canvas;
        this._lineWordNumber = lineWordNumber;
        this._wordCharacterNumber = wordCharacterNumber;
        this.updateCursorPosition(lineNumber, subCanvasXPos, subCanvasYPos);
    }

    private updateCursorPosition(lineNumber: number, subCanvasXPos: number, subCanvasYPos: number) {
        this._currentLineNumber = lineNumber;
        this.pixelLineXPos = subCanvasXPos;
        this.pixelLineYPos = subCanvasYPos;
    }

    get canvas(): DisplayCanvas {
        return this._canvas;
    }

    get canvasCharacterCount(): number {
        return this._canvas.getTotalCharacterCount();
    }

    get canvasHeight(): number {
        return this._canvas.getHeight();
    }

    get canvasWidth(): number {
        return this._canvas.getTargetWidth();
    }

    get canvasLineCount(): number {
        return this._canvas.getLineCount();
    }

    get canvasWordCount(): number {
        return this._canvas.getWordCount();
    }

    get lineCharacterCount(): number {
        return this._canvas.getLine(this._currentLineNumber).lineCharacters.length;
    }

    get lineHeight(): number {
        return this._canvas.getLine(this._currentLineNumber).lineHeight;
    }

    get lineWidth(): number {
        return this._canvas.getLine(this._currentLineNumber).lineLength;
    }

    get lineNumber(): number {
        return this._currentLineNumber;
    }

    get lineWordCount(): number {
        return this._canvas.getLine(this._currentLineNumber).lineWordCount;
    }

    get lineWordNumber(): number {
        return this._lineWordNumber;
    }

    get wordCharacterNumber(): number {
        return this._wordCharacterNumber;
    }

    get pixelCanvasXPos(): number {
        return this.pixelLineXPos;
    }

    get pixelCanvasYPos(): number {
        return this._currentLineNumber * this.lineHeight + this.pixelLineYPos;
    }
}

export abstract class Stylizer extends Debuggable {
    constructor(stylizerName: string) {
        super(stylizerName);
    }

    abstract applyStyle(pixel: CanvasPixel): string;
}
