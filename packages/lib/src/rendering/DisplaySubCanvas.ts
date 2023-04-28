import { FIGCharacter } from '../FIGCharacter';
import { Debuggable } from '../utils/DebugUtil';
import { Matrix, MatrixUtils } from '../utils/MatrixUtils';
import { CanvasPixel, CanvasPixelContext } from './CanvasPixel';
import { DisplayCanvas } from './DisplayCanvas';

import { SubCanvasContext } from './contexts/SubCanvasContext';

export class DisplaySubCanvas extends Debuggable {
    private readonly _canvas: DisplayCanvas;
    private readonly _subCanvasNumber;
    private readonly _height: number = 0;
    private readonly _length: number = 0;
    private readonly _line: Matrix<CanvasPixel> = [];
    private readonly _characters: FIGCharacter[] = [];
    private _wordCount = 0;
    private _cursorPosition = 0;

    static copy(previousState: DisplaySubCanvas): DisplaySubCanvas {
        const retVal: DisplaySubCanvas = new DisplaySubCanvas(previousState._canvas, previousState._subCanvasNumber, previousState._height, previousState._length);

        // Copy the line state
        for (let i = 0; i < previousState._line.length; i++) {
            retVal._line[i] = new Array(...previousState._line[i]);
        }

        // Copy the line characters state
        retVal._characters.push(...previousState._characters);

        // Copy the word count
        retVal._wordCount = previousState._wordCount;

        //  Copy the cursor postion
        retVal._cursorPosition = previousState._cursorPosition;

        return retVal;
    }

    constructor(canvas: DisplayCanvas, lineNumber: number, lineHeight: number, lineLength: number) {
        super('DisplaySubCanvas');
        this._canvas = canvas;
        this._subCanvasNumber = lineNumber;
        this._height = lineHeight;
        this._length = lineLength;

        // Otherwise, initialise the lines to the provided height
        for (let i = 0; i < this._height; i++) {
            this._line[i] = [];
        }
    }

    get line(): Matrix<CanvasPixel> {
        return this._line;
    }

    get characters(): FIGCharacter[] {
        return this._characters;
    }

    get wordCount(): number {
        return this._wordCount;
    }

    get height(): number {
        return this._height;
    }

    get length(): number {
        return this._line[0].length;
    }

    incrementWordCount(): void {
        this._wordCount++;
    }

    addFIGCharacter(figCharacter: FIGCharacter): void {
        this._characters.push(figCharacter);
    }

    getLastFIGCharacter(): FIGCharacter | null {
        return this._characters[this._characters.length - 1];
    }

    getSubCanvasContext(xPos: number = 0, yPos: number = 0): SubCanvasContext {
        return new SubCanvasContext(this, this._subCanvasNumber, this.wordCount, xPos, yPos);
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

                    // Ensure the inserted entity has a subcanvas context
                    if (!this._line[i][insertPoint].context.subCanvasContext) {
                        this._line[i][insertPoint].context.subCanvasContext = this.getSubCanvasContext(insertPoint, i);
                    }

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
        for (let i = 0; i < this.height; i++) {
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
    appendMatrixToLeft(matrix: Matrix<CanvasPixel>, startColumn: number = 0, canvasPixelContext: CanvasPixelContext = {}) {
        const applyCanvasContext = (canvasPixel: CanvasPixel, xPos: number, yPos: number) => {
            // Apply any context we've acquired so far
            canvasPixel.addContext(canvasPixelContext);
            // And apply the specific canvas context from this insertion
            canvasPixel.addSubCanvasContext(this.getSubCanvasContext(xPos, yPos));
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
    appendMatrixToRight(matrix: Matrix<CanvasPixel>, startColumn: number = 0, canvasPixelContext: CanvasPixelContext = {}) {
        const applyCanvasContext = (canvasPixel: CanvasPixel, xPos: number, yPos: number) => {
            // Apply any context we've acquired so far
            canvasPixel.addContext(canvasPixelContext);
            // And apply the specific canvas context from this insertion
            canvasPixel.addSubCanvasContext(this.getSubCanvasContext(xPos, yPos));
        };

        MatrixUtils.appendMatrixToRight(this._line, matrix, applyCanvasContext, startColumn);

        // Update the cursor
        this._cursorPosition += matrix[0].length;
    }
}
