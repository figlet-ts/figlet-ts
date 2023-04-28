import { CharacterCodes } from '../../utils/CharacterCodes';
import { Matrix } from '../../utils/MatrixUtils';
import { CanvasPixel } from '../CanvasPixel';

export interface IRasterisationContext {
    width: number;
    height: number;
    lineNumber: number;

    currentLineLeftPaddingLength: number;
    currentLineRightPaddingLength: number;

    minLeftPaddingLength: number;
    maxLeftPaddingLength: number;
    minRightPaddingLength: number;
    maxRightPaddingLength: number;

    xPos: number;
    yPos: number;
}

export class RasterisationContext implements IRasterisationContext {
    private _matrix: Matrix<CanvasPixel>;

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
        return this.yPos;
    }

    get currentLineLeftPaddingLength(): number {
        return this._matrix[this.yPos].filter((x) => x.character === CharacterCodes.FIGLET_TS_LEFT_PADDING_MARKER).length;
    }

    get currentLineRightPaddingLength(): number {
        return this._matrix[this.yPos].filter((x) => x.character === CharacterCodes.FIGLET_TS_RIGHT_PADDING_MARKER).length;
    }

    get minLeftPaddingLength(): number {
        let retVal = Infinity;

        for (const m of this._matrix) {
            retVal = Math.min(retVal, m.filter((x) => x.character === CharacterCodes.FIGLET_TS_LEFT_PADDING_MARKER).length);
        }

        return retVal;
    }

    get maxLeftPaddingLength(): number {
        let retVal = 0;

        for (const m of this._matrix) {
            retVal = Math.max(retVal, m.filter((x) => x.character === CharacterCodes.FIGLET_TS_LEFT_PADDING_MARKER).length);
        }

        return retVal;
    }

    get minRightPaddingLength(): number {
        let retVal = Infinity;

        for (const m of this._matrix) {
            retVal = Math.min(retVal, m.filter((x) => x.character === CharacterCodes.FIGLET_TS_RIGHT_PADDING_MARKER).length);
        }

        return retVal;
    }

    get maxRightPaddingLength(): number {
        let retVal = 0;

        for (const m of this._matrix) {
            retVal = Math.max(retVal, m.filter((x) => x.character === CharacterCodes.FIGLET_TS_RIGHT_PADDING_MARKER).length);
        }

        return retVal;
    }
}
