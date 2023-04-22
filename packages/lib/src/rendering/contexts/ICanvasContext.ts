import { DisplayCanvas } from '../DisplayCanvas';

export interface ICanvasContext {
    width: number;
    height: number;
    subCanvasCount: number;
    minSubCanvasWidth: number;
    maxSubCanvasWidth: number;
    wordCount: number;
    characterCount: number;

    currentSubCanvasNumber: number;
}

export class CanvasContext implements ICanvasContext {
    private readonly _canvas: DisplayCanvas;

    private _currentSubCanvasNumber: number = 0;

    constructor(canvas: DisplayCanvas, subCanvasNumber: number) {
        this._canvas = canvas;
        this._currentSubCanvasNumber = subCanvasNumber;
    }

    get width(): number {
        return this._canvas.getTargetWidth();
    }

    get height(): number {
        return this._canvas.getHeight();
    }

    get subCanvasCount(): number {
        return this._canvas.getLineCount();
    }

    get minSubCanvasWidth(): number {
        let minWidth = Infinity;
        for (let i = 0; i < this._canvas.getNumberOfLines(); i++) {
            minWidth = Math.min(minWidth, this._canvas.getLine(i).lineLength);
        }
        return minWidth;
    }

    get maxSubCanvasWidth(): number {
        let maxWidth = Infinity;
        for (let i = 0; i < this._canvas.getNumberOfLines(); i++) {
            maxWidth = Math.max(maxWidth, this._canvas.getLine(i).lineLength);
        }
        return maxWidth;
    }

    get wordCount(): number {
        return this._canvas.getWordCount();
    }

    get characterCount(): number {
        return this._canvas.getTotalCharacterCount();
    }

    get currentSubCanvasNumber(): number {
        return this._currentSubCanvasNumber;
    }
}
