export type Matrix = number[][];
export type MultilineMatrix = Matrix[];

export class MatrixUtils {
    static appendMatrixToBottom(outputArray: Matrix, array2d: Matrix, startRow: number = 0, endRow: number = array2d.length - 1): void {
        for (let i = startRow; i <= endRow; i++) {
            outputArray.push(array2d[i]);
        }
    }
    static appendMatrixToRight(lineBuffer: Matrix, glyph: Matrix, startColumn: number = 0, endColumn: number = glyph[0].length - 1): void {
        for (let i = 0; i < glyph.length; i++) {
            for (let j = startColumn; j <= endColumn; j++) {
                lineBuffer[i].push(glyph[i][j]);
            }
        }
    }
}
