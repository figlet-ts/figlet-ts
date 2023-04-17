export class FIGFontError extends Error {
    constructor(public message: string) {
        super(message);
    }
}

export class FIGFontIllegalHardblankCharacter extends FIGFontError {
    constructor(characterName: string) {
        super(`${characterName} is not allowed as the hardblank character in a font`);
    }
}
