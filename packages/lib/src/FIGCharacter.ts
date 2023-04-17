import { FIGFontPrintDirection } from './enums/FIGFontPrintDirection';
import { GlyphType } from './enums/GlyphType';
import { FIGFontError } from './errors/FIGFontErrors';
import { FIGCharacterPaddingInfo } from './FIGCharacterPaddingInfo';
import { ASCIICodes } from './utils/ASCIICodes';

export class FIGCharacter {
    private readonly _hardblankCharacter: number = 0;
    private _width = 0;
    private _height = 0;
    private readonly _characterCode: number;
    private readonly _comment: string;
    private _glyph: number[][] = [];
    private _isEmptyGlyph = false;
    private readonly _glyphType: GlyphType = GlyphType.UNKNOWN;

    private _paddingInfo!: FIGCharacterPaddingInfo;

    public static fromRequiredFIGCharacterString(characterCode: number, hardblankCharacter: number, requiredCharacterString: string): FIGCharacter {
        requiredCharacterString = requiredCharacterString.replaceAll('\r', '');
        return new FIGCharacter(
            characterCode,
            `Required ASCII character code ${characterCode} / "${String.fromCharCode(characterCode)}"`,
            hardblankCharacter,
            requiredCharacterString,
            GlyphType.FLF_MANDATORY
        );
    }

    public static fromCodeTaggedFIGCharacterString(hardblankCharacter: number, codeTaggedCharacterString: string, overrideGlyphType: GlyphType = GlyphType.FLF_CODE_TAGGED): FIGCharacter {
        codeTaggedCharacterString = codeTaggedCharacterString.replaceAll('\r', '');
        const splitLines: string[] = codeTaggedCharacterString.split('\n');

        if (splitLines.length < 2) {
            throw new FIGFontError('Code tagged character has insufficient glyph lines');
        }

        const tagAndCommentLine = splitLines[0];
        splitLines.shift();

        const parsedTagAndCommentLine: [number, string] = FIGCharacter.parseCodeTagLine(tagAndCommentLine);

        return new FIGCharacter(parsedTagAndCommentLine[0], parsedTagAndCommentLine[1], hardblankCharacter, splitLines.join('\n'), overrideGlyphType);
    }

    private static parseCodeTagLine(codeTagString: string): [number, string] {
        const splitTag = codeTagString.split(' ');
        const tagPart = splitTag[0].toLowerCase();
        splitTag.shift();
        const comment = splitTag?.join(' ').trim() || '';
        let characterCode: number;

        if (tagPart.startsWith('0x') || tagPart.startsWith('-0x')) {
            characterCode = parseInt(tagPart, 16);
        } else if (tagPart.startsWith('0') || tagPart.startsWith('-0')) {
            characterCode = parseInt(tagPart, 8);
        } else {
            characterCode = parseInt(tagPart);
        }

        if (isNaN(characterCode)) {
            throw new FIGFontError(`Cannot parse code tag line "${codeTagString}" as hexadecimal, octal nor decimal value`);
        }

        return [characterCode, comment];
    }

    private constructor(characterCode: number, commentString: string, hardblankCharacter: number, fromString: string, glyphType: GlyphType) {
        this._characterCode = characterCode;
        this._comment = commentString;
        this._hardblankCharacter = hardblankCharacter;
        this.parseFIGCharacterString(fromString);
        this._glyphType = glyphType;
    }

    parseFIGCharacterString(fromString: string) {
        // Replace DOS line endings with Unix-y ones
        fromString = fromString.replaceAll('\r', '');

        // Split by newlines
        const characterLines: string[] = fromString.split('\n');

        // Check we have at least one line, and the line is at least 1 character long
        if (characterLines.length === 0 || characterLines[0].length === 0) {
            throw new FIGFontError('Character glyph has zero content');
        }

        this._height = characterLines.length;
        this._width = -1;

        // Every sub-line should be terminated by the same character, so we read the line terminating character from line zero
        const terminatingCharacter: string = characterLines[0][characterLines[0].length - 1];

        // Check if it's an empty glyph (identified by an array of termination characters)
        if (characterLines.every((x) => x == terminatingCharacter || x == terminatingCharacter + terminatingCharacter)) {
            this._width = 0;
            for (let i = 0; i < characterLines.length; i++) {
                this._glyph[i] = [];
            }
            this._isEmptyGlyph = true;
        } else {
            // Otherwise, it's not an empty glyph, and should have some characters within it...

            let maxLineLength = 0;

            for (const line of characterLines) {
                // Trim the last block of consecutive equal characters
                let cursor = line.length - 1;
                let terminatingCharacterCount = 0;
                while (cursor > 0) {
                    if (line[cursor--] === terminatingCharacter) {
                        terminatingCharacterCount++;
                    } else {
                        break;
                    }
                }
                if (terminatingCharacterCount === 0) {
                    throw new FIGFontError(`Character line was not terminated with character ${terminatingCharacter}`);
                }
                const glyphLine: number[] = line
                    .substring(0, line.length - terminatingCharacterCount)
                    .split('')
                    .map((c) => c.charCodeAt(0));
                this._glyph.push(glyphLine);
                maxLineLength = Math.max(maxLineLength, glyphLine.length);
            }

            this._width = maxLineLength;

            // Some malformed fonts have inconsistent widths for each line.  We can fix that by padding them all to the longest
            for (let i = 0; i < this._glyph.length; i++) {
                if (this._glyph[i].length < maxLineLength) {
                    this._glyph[i] = Object.assign(new Array(maxLineLength).fill(ASCIICodes.SPACE), this._glyph[i]);
                }
            }
        }

        // Calculate the "smushing distances" from top, bottom, left and right, and what the smushable character is from that direction
        // This saves a lot of processing each time we render a FIGure
        this._paddingInfo = new FIGCharacterPaddingInfo(this._glyph);
    }

    get hardblankCharacter(): number {
        return this._hardblankCharacter;
    }

    get characterCode(): number {
        return this._characterCode;
    }

    get character(): string {
        return String.fromCharCode(this._characterCode);
    }

    get height(): number {
        return this._height;
    }

    get width(): number {
        return this._width;
    }

    get comment(): string {
        return this._comment;
    }

    public getGlyph(): number[][] {
        return this._glyph;
    }

    public getGlyphLine(lineNumber: number): number[] {
        return this._glyph[lineNumber];
    }

    get paddingInfo(): FIGCharacterPaddingInfo {
        return this._paddingInfo;
    }

    get isEmptyGlyph(): boolean {
        return this._isEmptyGlyph;
    }

    get glyphType(): GlyphType {
        return this._glyphType;
    }

    public getTotalMaxHorizontalSmushDistance(direction: FIGFontPrintDirection): number {
        if (direction === FIGFontPrintDirection.RIGHT_TO_LEFT) {
            return Math.min(...this._paddingInfo.rightToLeftDistances);
        } else {
            return Math.min(...this._paddingInfo.leftToRightDistances);
        }
    }
}
