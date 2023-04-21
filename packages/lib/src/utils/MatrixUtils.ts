export type Matrix<T> = T[][];
export type MultilineMatrix<T> = Matrix<T>[];

export class MatrixUtils {
    static appendMatrixToBottom<T>(outputArray: Matrix<T>, array2d: Matrix<T>, startRow: number = 0, endRow: number = array2d.length - 1): void {
        for (let i = startRow; i <= endRow; i++) {
            outputArray.push(array2d[i]);
        }
    }

    static appendMatrixToRight<T>(
        lineBuffer: Matrix<T>,
        glyph: Matrix<T>,
        decorator: ((element: T, x: number, y: number) => void) | null = null,
        startColumn: number = 0,
        endColumn: number = glyph[0].length - 1
    ): void {
        for (let i = 0; i < glyph.length; i++) {
            for (let j = startColumn; j <= endColumn; j++) {
                if (decorator !== null) {
                    decorator(glyph[i][j], j, i);
                }
                lineBuffer[i].push(glyph[i][j]);
            }
        }
    }

    static appendMatrixToLeft<T>(
        lineBuffer: Matrix<T>,
        glyph: Matrix<T>,
        decorator: ((element: T, x: number, y: number) => void) | null = null,
        startColumn: number = 0,
        endColumn: number = glyph[0].length - 1
    ): void {
        for (let i = 0; i < glyph.length; i++) {
            for (let j = endColumn; j >= startColumn; j--) {
                if (decorator !== null) {
                    decorator(glyph[i][j-startColumn], j, i);
                }
                lineBuffer[i].unshift(glyph[i][j-startColumn]);
            }
        }
    }
}
