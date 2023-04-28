import { CharacterCodes } from './utils/CharacterCodes';

export class FIGCharacterPaddingInfo {
    private readonly _topDownDistances!: number[];
    private readonly _bottomUpDistances!: number[];
    private readonly _leftToRightDistances!: number[];
    private readonly _rightToLeftDistances!: number[];
    private readonly _topDownCharacters!: number[];
    private readonly _bottomUpCharacters!: number[];
    private readonly _leftToRightCharacters!: number[];
    private readonly _rightToLeftCharacters!: number[];

    constructor(character: number[][]) {
        const width: number = character[0].length;
        const height: number = character.length;
        this._topDownDistances = Array(width).fill(Infinity);
        this._bottomUpDistances = Array(width).fill(Infinity);
        this._leftToRightDistances = Array(height).fill(Infinity);
        this._rightToLeftDistances = Array(height).fill(Infinity);
        this._topDownCharacters = Array(width).fill(CharacterCodes.ASCII_SPACE);
        this._bottomUpCharacters = Array(width).fill(CharacterCodes.ASCII_SPACE);
        this._leftToRightCharacters = Array(height).fill(CharacterCodes.ASCII_SPACE);
        this._rightToLeftCharacters = Array(height).fill(CharacterCodes.ASCII_SPACE);

        for (let column = 0; column < width; column++) {
            for (let row = 0; row < height; row++) {
                const asciiCharacter = character[row][column];

                // Top down
                if (asciiCharacter !== CharacterCodes.ASCII_SPACE && this._topDownDistances[column] == Infinity) {
                    this._topDownDistances[column] = row;
                    this._topDownCharacters[column] = asciiCharacter;
                }

                // Bottom up
                if (asciiCharacter !== CharacterCodes.ASCII_SPACE) {
                    this._bottomUpDistances[column] = height - row - 1;
                    this._bottomUpCharacters[column] = asciiCharacter;
                }

                // Left-to-right
                if (asciiCharacter !== CharacterCodes.ASCII_SPACE && this._leftToRightDistances[row] == Infinity) {
                    this._leftToRightDistances[row] = column;
                    this._leftToRightCharacters[row] = asciiCharacter;
                }

                // Right-to-left
                if (asciiCharacter !== CharacterCodes.ASCII_SPACE) {
                    this._rightToLeftDistances[row] = width - column - 1;
                    this._rightToLeftCharacters[row] = asciiCharacter;
                }
            }
        }
    }

    get topDownDistances(): number[] {
        return this._topDownDistances;
    }

    get bottomUpDistances(): number[] {
        return this._bottomUpDistances;
    }

    get leftToRightDistances(): number[] {
        return this._leftToRightDistances;
    }

    get rightToLeftDistances(): number[] {
        return this._rightToLeftDistances;
    }

    get topDownCharacters(): number[] {
        return this._topDownCharacters;
    }

    get bottomUpCharacters(): number[] {
        return this._bottomUpCharacters;
    }

    get leftToRightCharacters(): number[] {
        return this._leftToRightCharacters;
    }

    get rightToLeftCharacters(): number[] {
        return this._rightToLeftCharacters;
    }
}
