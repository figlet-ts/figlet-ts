import { FIGCharacter } from '../FIGCharacter';
import { Debuggable } from '../utils/DebugUtil';
import { Matrix, MatrixUtils } from '../utils/MatrixUtils';
import {CanvasPixel, CanvasPixelContext} from './CanvasPixel';
import { DisplayCanvas } from './DisplayCanvas';

import {CanvasContext} from "./contexts/ICanvasContext";

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
        super('DisplaySubCanvas');
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

    getSubCanvasContext(xPosOffset: number = 0, yPosOffset: number = 0): CanvasContext {
        return new CanvasContext(this._canvas, this._lineNumber, this.lineWordCount, 0, this._cursorPosition + xPosOffset, yPosOffset);
    }

    getPixelAt(xPos: number, yPos: number): CanvasPixel | undefined {
        if (this._line[yPos] === undefined) {
            return undefined;
        }
        return this._line[yPos][xPos];
    }

    /**
     * Overwrites the left-hand columns of the line with the provided matrix. If the provided matrix is wider than
     * the current line, the line is overwritten (and grown) to match the provided matrix.
     *
     * @param matrix
     */
    replaceLeft(matrix: Matrix<CanvasPixel>) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                const reversedMatrixLine = matrix[i].slice(0).reverse();
                this._line[i][j] = reversedMatrixLine[j];
                this._debug(`Inserting from (${i}, ${j}) into (${i}, ${j})`);
            }
        }
    }

    /**
     * Overwrites the right-hand columns of the line with the provided matrix. If the provided matrix is wider than
     * the current line, the line is overwritten (and grown) to match the provided matrix.
     *
     * @param matrix
     */
    replaceRight(matrix: Matrix<CanvasPixel>) {
        for (let i = 0; i < matrix.length; i++) {
            const existingLineLength = this._line[i].length;
            for (let j = 0; j < matrix[i].length; j++) {
                const insertPoint = existingLineLength - (matrix[i].length - j);

                if (insertPoint >= 0) {
                    this._line[i][insertPoint] = matrix[i][j];
                    this._debug(`Inserting from (${i}, ${j}) into (${i}, ${insertPoint})`);
                }
            }
        }
    }

    /**
     * Trims columns of characters from the right-hand side of the current line, and updates the cursor accordingly
     * @param numCols
     */
    truncateRight(numCols: number) {
        for (let i = 0; i < this.lineHeight; i++) {
            this._line[i].splice(this._line[i].length - numCols, numCols);
        }
        this._cursorPosition -= numCols;
    }

    /**
     * Appends a matrix of CanvasPixels to the left-hand end of the Display Canvas
     *
     * @param matrix        The matrix to append to the end of the DisplayCanvas
     * @param startColumn   The column of the matrix from which to start copying data
     * @param canvasPixelContext    A context object holding all context acquired so far during processing
     */
    appendMatrixToLeft(matrix: Matrix<CanvasPixel>, startColumn: number = 0, canvasPixelContext:CanvasPixelContext = {}) {
        const applyCanvasContext = (canvasPixel: CanvasPixel, xPos: number, yPos: number) => {
            // Apply any context we've acquired so far
            canvasPixel.addContext(canvasPixelContext);
            // And apply the specific canvas context from this insertion
            canvasPixel.addCanvasContext(this.getSubCanvasContext(xPos, yPos));
        };

        MatrixUtils.appendMatrixToLeft(this._line, matrix, applyCanvasContext, startColumn);

        // Update the cursor
        this._cursorPosition += matrix[0].length;
    }

    /**
     * Appends a matrix of CanvasPixels to the right-hand end of the Display Canvas
     *
     * @param matrix                The matrix to append to the end of the DisplayCanvas
     * @param startColumn           The column of the matrix from which to start copying data
     * @param canvasPixelContext    A context object holding all context acquired so far during processing
     */
    appendMatrixToRight(matrix: Matrix<CanvasPixel>, startColumn: number = 0, canvasPixelContext:CanvasPixelContext = {}) {
        const applyCanvasContext = (canvasPixel: CanvasPixel, xPos: number, yPos: number) => {
            // Apply any context we've acquired so far
            canvasPixel.addContext(canvasPixelContext);
            // And apply the specific canvas context from this insertion
            canvasPixel.addCanvasContext(this.getSubCanvasContext(xPos, yPos));
        };

        MatrixUtils.appendMatrixToRight(this._line, matrix, applyCanvasContext, startColumn);

        // Update the cursor
        this._cursorPosition += matrix[0].length;
    }
}
