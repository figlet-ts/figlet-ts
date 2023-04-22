import stringWidth from 'string-width';
import { type FontLayoutManagerOptions } from './FontLayoutManagerOptions';
import { CharacterCodes } from './utils/CharacterCodes';
import { CharacterReplacementMap } from './utils/CharacterReplacementMap';

export class FontLayoutManagerOptionsExtensionCharacterReplacement {
    constructor(private readonly _driverOptions: FontLayoutManagerOptions) {
        this.resetPaddingCharacter();
        this.resetWhitespaceCharacter();
    }

    resetWhitespaceCharacter() {
        this._driverOptions._renderingWhitespaceCharacter = ' ';
        this.addBodyTextCharacterReplacer(CharacterCodes.ASCII_SPACE, ' ');
    }

    setWhitespaceCharacter(char: string) {
        this._driverOptions._renderingWhitespaceCharacter = char;
        this.addBodyTextCharacterReplacer(CharacterCodes.ASCII_SPACE, char);
    }

    getWhitespaceCharacter(): string {
        return this._driverOptions._renderingWhitespaceCharacter;
    }

    getWhitespaceCharacterWidth(): number {
        return stringWidth(this._driverOptions._renderingWhitespaceCharacter);
    }

    getPaddingCharacter(): string {
        return this._driverOptions._renderingPaddingCharacter;
    }

    addBodyTextCharacterReplacer(replaceAsciiCode: number, replaceWithString: string) {
        this._driverOptions._bodyTextCharacterMap.set(replaceAsciiCode, replaceWithString);
    }

    getBodyTextWidestGrapheme(): number {
        return this._driverOptions._bodyTextCharacterMap.getMaxStringWidth() ?? 1;
    }

    getPaddingCharacterWidth(): number {
        return this._driverOptions._paddingCharacterMap.getMaxStringWidth() ?? 1;
    }

    resetPaddingCharacter() {
        this.setPaddingCharacter(' ');
    }

    setPaddingCharacter(char: string) {
        this._driverOptions._renderingPaddingCharacter = char;
        this._driverOptions._paddingCharacterMap.set(CharacterCodes.FIGLET_TS_LEFT_PADDING_MARKER, char);
        this._driverOptions._paddingCharacterMap.set(CharacterCodes.FIGLET_TS_RIGHT_PADDING_MARKER, char);
    }

    getBodyTextCharacterMap(): CharacterReplacementMap {
        return this._driverOptions._bodyTextCharacterMap;
    }

    getPaddingCharacterMap(): CharacterReplacementMap {
        return this._driverOptions._paddingCharacterMap;
    }
}
