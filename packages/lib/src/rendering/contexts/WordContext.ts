import { InputToken } from '../../utils/InputToken';

export interface IWordContext {
    word: string;
    wordLength: number;
    character: string;
    characterPos: number;
    isNewline: boolean;
    isWhitespace: boolean;
}

export class WordContext implements IWordContext {
    constructor(word: InputToken, characterPos: number) {
        this._wordToken = word;
        this._word = word.toString();
        this._characterPos = characterPos;
    }

    private _wordToken: InputToken;
    private _word: string;
    private _characterPos: number;

    get word(): string {
        return this._word;
    }

    get wordLength(): number {
        return this._word.length;
    }

    get character(): string {
        return this._word[this._characterPos];
    }

    get characterPos(): number {
        return this._characterPos;
    }

    get isNewline(): boolean {
        return this._wordToken.isNewline;
    }

    get isWhitespace(): boolean {
        return this._wordToken.isWhitespace;
    }
}
