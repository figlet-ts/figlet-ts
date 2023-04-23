import { DisplaySubCanvas } from '../DisplaySubCanvas';

export interface ISubCanvasContext {
    width: number;
    height: number;
    wordCount: number;
    characterCount: number;

    subCanvasNumber: number;
    wordNumber: number;
    xPos: number;
    yPos: number;
}

export class SubCanvasContext implements ISubCanvasContext {
    private readonly _subCanvas: DisplaySubCanvas;

    private _subCanvasNumber: number = 0;
    private _wordNumber: number = 0;
    private _xPos: number = 0;
    private _yPos: number = 0;

    constructor(subCanvas: DisplaySubCanvas, subCanvasNumber: number, wordNumber: number, xPos: number, yPos: number) {
        this._subCanvas = subCanvas;
        this._subCanvasNumber = subCanvasNumber;
        this._wordNumber = wordNumber;
        this._xPos = xPos;
        this._yPos = yPos;
    }

    get width(): number {
        return this._subCanvas.length;
    }

    get height(): number {
        return this._subCanvas.height;
    }

    get wordCount(): number {
        return this._subCanvas.wordCount;
    }

    get subCanvasNumber(): number {
        return this._subCanvasNumber;
    }

    get characterCount(): number {
        return this._subCanvas.characters.length;
    }

    get wordNumber(): number {
        return this._wordNumber;
    }

    get xPos(): number {
        return this._xPos;
    }

    get yPos(): number {
        return this._yPos;
    }
}
