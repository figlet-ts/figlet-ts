import { FIGCharacter } from '../FIGCharacter';
import { Debuggable } from '../utils/DebugUtil';
import { Matrix, MatrixUtils } from '../utils/MatrixUtils';
import { CanvasPixel } from './CanvasPixel';
import { DisplayCanvas } from './DisplayCanvas';
import { CanvasContext } from './Stylizer';

export class DisplaySubCanvas extends Debuggable {
    private readonly _canvas: DisplayCanvas;
    private readonly _lineNumber;
    private readonly _lineHeight: number = 0;
    private readonly _lineLength: number = 0;
    private readonly _line: Matrix<CanvasPixel> = [];
    private readonly _lineCharacters: FIGCharacter[] = [];
    private _lineWordCount = 0;
    private _cursorPosition = 0;

    static copy(previousState: DisplaySubCanvas): DisplaySubCanvas {
        const retVal: DisplaySubCanvas = new DisplaySubCanvas(previousState._canvas, previousState._lineNumber, previousState._lineHeight, previousState._lineLength);

        // Copy the line state
        for (let i = 0; i < previousState._line.length; i++) {
            retVal._line[i] = new Array(...previousState._line[i]);
        }

        // Copy the line characters state
        retVal._lineCharacters.push(...previousState._lineCharacters);

        // Copy the word count
        retVal._lineWordCount = previousState._lineWordCount;

        //  Copy the cursor postion
        retVal._cursorPosition = previousState._cursorPosition;

        return retVal;
    }

    constructor(canvas: DisplayCanvas, lineNumber: number, lineHeight: number, lineLength: number) {
        super(Symbol('DisplaySubCanvas'));
        this._canvas = canvas;
        this._lineNumber = lineNumber;
        this._lineHeight = lineHeight;
        this._lineLength = lineLength;

        // Otherwise, initialise the lines to the provided height
        for (let i = 0; i < this._lineHeight; i++) {
            this._line[i] = [];
        }
    }

    get line(): Matrix<CanvasPixel> {
        return this._line;
    }

    get lineCharacters(): FIGCharacter[] {
        return this._lineCharacters;
    }

    get lineWordCount(): number {
        return this._lineWordCount;
    }

    get lineHeight(): number {
        return this._lineHeight;
    }

    get lineLength(): number {
        return this._line[0].length;
    }

    incrementWordCount(): void {
        this._lineWordCount++;
    }

    addFIGCharacter(figCharacter: FIGCharacter): void {
        this._lineCharacters.push(figCharacter);
    }

    getLastFIGCharacter(): FIGCharacter | null {
        return this._lineCharacters[this._lineCharacters.length - 1];
    }
    
    getCanvasContext(xPosOffset:number = 0, yPosOffset:number = 0):CanvasContext {
        return new CanvasContext(this._canvas, this._lineNumber, this.lineWordCount, 0, this._cursorPosition + xPosOffset, yPosOffset)
    }

    appendMatrixToRight(matrix: Matrix<CanvasPixel>) {
        
        const applyCanvasContext = (canvasPixel: CanvasPixel, xPos: number, yPos: number) => {
            canvasPixel.addCanvasContext(this.getCanvasContext(xPos, yPos));
            this._debug(`Adding canvas context to pixel in DisplaySubCanvs at position ${this._cursorPosition + xPos}, ${yPos}`);
        };

        MatrixUtils.appendMatrixToRight(this._line, matrix, applyCanvasContext);

        // Update the cursor
        this._cursorPosition += matrix[0].length;
    }
}
