import { DisplayCanvas } from '../DisplayCanvas';

export interface ICanvasContext {
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
