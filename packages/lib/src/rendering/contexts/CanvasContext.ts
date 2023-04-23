import { DisplayCanvas } from '../DisplayCanvas';

export interface ICanvasContext {
    width: number;
    height: number;
    subCanvasCount: number;
    minSubCanvasWidth: number;
    maxSubCanvasWidth: number;
    wordCount: number;
    characterCount: number;
}

export class CanvasContext implements ICanvasContext {
    private readonly _canvas: DisplayCanvas;

    constructor(canvas: DisplayCanvas) {
        this._canvas = canvas;
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
            minWidth = Math.min(minWidth, this._canvas.getLine(i).length);
        }
        return minWidth;
    }

    get maxSubCanvasWidth(): number {
        let maxWidth = 0;
        for (let i = 0; i < this._canvas.getNumberOfLines(); i++) {
            maxWidth = Math.max(maxWidth, this._canvas.getLine(i).length);
        }
        return maxWidth;
    }

    get wordCount(): number {
        return this._canvas.getWordCount();
    }

    get characterCount(): number {
        return this._canvas.getTotalCharacterCount();
    }
}
