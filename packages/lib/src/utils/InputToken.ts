export class InputToken {
    private _word: string = '';
    private readonly _isWhitespace: boolean = false;
    private readonly _isNewline: boolean = false;

    constructor(character: string) {
        this._word = this.sanitiseInput(character);

        if (this._word === ' ') {
            this._isWhitespace = true;
        } else if (this._word === '\n') {
            this._isNewline = true;
        }
    }

    static fromWord(word: string): InputToken {
        const token: InputToken = new InputToken(word[0]);
        for (let i = 1; i < word.length; i++) {
            token.addCharacter(word[i]);
        }
        return token;
    }

    private sanitiseInput(character: string): string {
        if (character.length !== 1) {
            throw new Error('InputToken only accepts single-character inputs');
        }
        // Convert tabs to single spaces
        if (character === '\t') {
            character = ' ';
        }
        return character;
    }

    addSpace() {
        if (this._isWhitespace) {
            this._word += ' ';
        } else {
            throw new Error('Cannot add space character to non-whitespace InputToken');
        }
    }

    addCharacter(character: string) {
        character = this.sanitiseInput(character);

        if (character === ' ') {
            this.addSpace();
        } else if (this.isWhitespace) {
            throw new Error('Cannot add non-whitespace character to whitespace InputToken');
        } else if (this.isNewline) {
            throw new Error('Cannot add extra characters to newline InputToken');
        } else {
            this._word += character;
        }
    }

    public toString(): string {
        return this._word;
    }

    get isWhitespace(): boolean {
        return this._isWhitespace;
    }

    get isNewline(): boolean {
        return this._isNewline;
    }
}
