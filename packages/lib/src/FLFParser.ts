import { FIGCharacter } from './FIGCharacter';
import { FIGFont } from './FIGFont';

export class FLFParseError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export class FLFParseErrorInvalidHeader extends FLFParseError {
    constructor() {
        super('FLF file has invalid header line');
    }
}

export class FLFParseResult {
    constructor(public font: FIGFont, public parseWarnings: string[]) {}
}

export class FLFParser {
    private static readonly MANDATORY_FLF_CHARACTERS: number[] = [
        ...Array.from(Array(95).keys()).map((k) => k + 32), //  ASCII 32 -> 126
        196, // A umlaut
        214, // O umlaut
        220, // U umlaut
        228, // a umlaut
        246, // o umlaut
        252, // u umlaut
        223 // ess-zed
    ];

    static parse(fileContents: string): FLFParseResult {
        fileContents.replace('\r\n', '\n');
        const splitFileContents = fileContents.split('\n');

        const font: FIGFont = new FIGFont();
        const parseWarnings: string[] = [];

        // Simple cursor to help us read the file lines
        let lineCursor = 0;

        // Line zero is the header line
        FLFParser.parseHeaderLine(splitFileContents[lineCursor++], font);

        // There will be zero-or-more comments
        for (let i = 0; i < font.commentLineCount; i++) {
            font.addComment(splitFileContents[lineCursor++]);
        }

        const actualCharacterLineCount = splitFileContents.length - lineCursor;
        const expectedMandatoryCharacterLineCount = font.height * FLFParser.MANDATORY_FLF_CHARACTERS.length;
        const expectedCodeTaggedCharacterLineCount = (font.height + 1) * font.codetagCount;
        const expectedTotalCharacterLineCount = expectedMandatoryCharacterLineCount + expectedCodeTaggedCharacterLineCount;

        if (actualCharacterLineCount < expectedMandatoryCharacterLineCount) {
            parseWarnings.push('FLF file does not contain enough lines to cover the mandatory 102 ASCII characters.  Missing characters will be replaced with blanks.');
        }

        if (actualCharacterLineCount < expectedTotalCharacterLineCount) {
            parseWarnings.push(
                `FLF file does not contain enough lines to cover the mandatory 102 ASCII characters and the ${font.codetagCount} code-tag characters that the FLF header indicates. Missing characters will be replaced with blanks.`
            );
        }

        if (actualCharacterLineCount > expectedTotalCharacterLineCount) {
            parseWarnings.push(
                `FLF file contains ${actualCharacterLineCount} FIGcharacter lines, but parser was expecting ${expectedTotalCharacterLineCount} - (${
                    FLFParser.MANDATORY_FLF_CHARACTERS.length
                } mandatory characters with height ${font.height} = ${expectedMandatoryCharacterLineCount} plus ${font.codetagCount} code tagged characters with height ${
                    font.height + 1
                } = ${expectedCodeTaggedCharacterLineCount}).  Non-fatal - attempting to parse anyway.`
            );
        }

        // Parse all the mandatory characters
        for (let i = 0; i < FLFParser.MANDATORY_FLF_CHARACTERS.length && splitFileContents.length - lineCursor > font.height; i++) {
            // console.log(`Loading character ${FLFParser.MANDATORY_FLF_CHARACTERS[i]} / ${String.fromCharCode(FLFParser.MANDATORY_FLF_CHARACTERS[i])}`)
            font.addFIGCharacter(
                FIGCharacter.fromRequiredFIGCharacterString(FLFParser.MANDATORY_FLF_CHARACTERS[i], font.hardblankCharacter, splitFileContents.slice(lineCursor, lineCursor + font.height).join('\n'))
            );
            lineCursor += font.height;
        }

        // Parse all remaining lines (assuming they are code-tagged characters)
        let parsedCodeTaggedCharacterCount = 0;
        while (splitFileContents.length - lineCursor >= 1 + font.height) {
            parsedCodeTaggedCharacterCount++;
            font.addFIGCharacter(FIGCharacter.fromCodeTaggedFIGCharacterString(font.hardblankCharacter, splitFileContents.slice(lineCursor, lineCursor + font.height + 1).join('\n')));
            lineCursor += font.height + 1;
        }

        if (parsedCodeTaggedCharacterCount !== font.codetagCount) {
            parseWarnings.push(`FLF Header indicated ${font.codetagCount} code-tagged characters, but the file contains ${parsedCodeTaggedCharacterCount}.`);
            font.codetagCount = parsedCodeTaggedCharacterCount;
        }

        return new FLFParseResult(font, parseWarnings);
    }

    private static parseHeaderLine(headerLine: string, figFont: FIGFont): void {
        try {
            const splitHeaderLine = headerLine.split(' ');

            figFont.headerRaw = headerLine;
            figFont.signature = splitHeaderLine[0].substring(0, 5);
            figFont.hardblankCharacter = splitHeaderLine[0][5].charCodeAt(0);
            figFont.height = parseInt(splitHeaderLine[1]);
            figFont.baseline = parseInt(splitHeaderLine[2]);
            figFont.maxLength = parseInt(splitHeaderLine[3]);
            figFont.oldLayout = parseInt(splitHeaderLine[4]);
            figFont.commentLineCount = parseInt(splitHeaderLine[5]);
            figFont.printDirection = parseInt(splitHeaderLine[6]);
            figFont.fullLayout = parseInt(splitHeaderLine[7]);
            figFont.codetagCount = parseInt(splitHeaderLine[8]);
        } catch (e: unknown) {
            throw new FLFParseErrorInvalidHeader();
        }
    }
}
