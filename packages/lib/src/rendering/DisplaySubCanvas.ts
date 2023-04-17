import { FIGCharacter } from '../FIGCharacter';

export class DisplaySubCanvas {
    private readonly _lineHeight: number = 0;
    private readonly _lineLength: number = 0;
    private readonly _line: number[][] = [];
    private readonly _lineCharacters: FIGCharacter[] = [];
    private _lineWordCount = 0;

    constructor(lineHeight: number, lineLength: number, previousState: DisplaySubCanvas | null = null) {
        this._lineHeight = lineHeight;
        this._lineLength = lineLength;
        if (previousState !== null) {
            // Copy the line state
            for (let i = 0; i < previousState._line.length; i++) {
                this._line[i] = new Array(...previousState._line[i]);
            }

            // Copy the line characters state
            this._lineCharacters = new Array(...previousState._lineCharacters);

            // Save the word count
            this._lineWordCount = previousState._lineWordCount;
        } else {
            // Otherwise, initialise the lines to the provided height
            for (let i = 0; i < this._lineHeight; i++) {
                this._line[i] = [];
            }
        }
    }

    get line(): number[][] {
        return this._line;
    }

    get lineCharacters(): FIGCharacter[] {
        return this._lineCharacters;
    }

    get lineWordCount(): number {
        return this._lineWordCount;
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
}
