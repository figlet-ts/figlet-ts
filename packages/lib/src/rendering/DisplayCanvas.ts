import { FIGFontPrintDirection } from '../enums/FIGFontPrintDirection';
import { FontLayoutHorizontalAlignment } from '../enums/FontLayoutHorizontalAlignment';
import { FontLayoutHorizontalPaddingMode } from '../enums/FontLayoutHorizontalPaddingMode';
import { FIGCharacter } from '../FIGCharacter';
import { FIGFont } from '../FIGFont';
import { FontLayoutManager } from '../FontLayoutManager';
import { ASCIICodes } from '../utils/ASCIICodes';
import { Debuggable } from '../utils/DebugUtil';
import { InputToken } from '../utils/InputToken';
import { Matrix, MatrixUtils, MultilineMatrix } from '../utils/MatrixUtils';
import { StringWidthProxy } from '../utils/StringWidthProxy';
import { CanvasPixel } from './CanvasPixel';
import { DisplaySubCanvas } from './DisplaySubCanvas';
import {CanvasContext, Stylizer} from './Stylizer';
import chalk from "chalk";

export class DisplayCanvas extends Debuggable {
    private readonly _lineHeight: number = 0;
    private readonly _lineLength: number = 0;
    private readonly _flm: FontLayoutManager;
    private readonly _font: FIGFont;
    private readonly _words: InputToken[];

    private _lines: DisplaySubCanvas[] = [];
    private readonly _savedStates: Map<string, DisplaySubCanvas> = new Map<string, DisplaySubCanvas>();

    private _currentLine = 0;

    private readonly STATE_NAME_CHARACTER = 'internal-last-character-state';
    private readonly STATE_NAME_WORD = 'internal-last-word-state';

    constructor(font: FIGFont, flm: FontLayoutManager, words: InputToken[]) {
        super(Symbol('DisplayCanvas'));
        this._lineHeight = font.height;
        this._flm = flm;
        this._font = font;
        this._words = words;
        this._lineLength = flm.options.getRenderingWidth();
        this.initialiseLine(this._currentLine);

        // This is the starting point of adding characters to the canvas
        for (const inputToken of this._words) {
            this.addWord(inputToken);
        }
    }

    private initialiseLine(lineNumber: number) {
        this._lines[lineNumber] = new DisplaySubCanvas(this, lineNumber, this._lineHeight, this._lineLength);
    }

    private get currentLine(): DisplaySubCanvas {
        return this._lines[this._currentLine];
    }

    private set currentLine(value: DisplaySubCanvas) {
        this._lines[this._currentLine] = value;
    }

    public getNumberOfLines(): number {
        return this._lines.length;
    }

    public addLine() {
        this.initialiseLine(++this._currentLine);
        // console.debug(`Initialised new line number ${this._currentLine}`);
    }

    private incrementCurrentLineWordCount(): void {
        // console.debug(`Incrementing word count on line # ${this._currentLine}`)
        this.currentLine.incrementWordCount();
    }

    public addFIGCharacter(figCharacter: FIGCharacter): boolean {
        // const sr = this._flm.doSmush(this.getLastFIGCharacter(), figCharacter);
        // this.appendSmushResult(sr);
        this.addFCToCurrentLine(figCharacter);

        // Check if we've exceeded the selected rendering width
        if (this.getCurrentLineLength() > this._flm.width.get()) {
            if (this.currentLine.lineCharacters.length === 1) {
                // If this is the first character we've added to this line, then the display width is set lower than this character's width.
                // We just need to add this character, and overrun the requested display width
                this.saveCurrentLineState(this.STATE_NAME_CHARACTER);

                return true;
            } else if (this.getCurrentLineWordCount() > 0) {
                // If the line has more than one existing word, then we could not add the character
                return false;
            } else {
                // Otherwise, the inputToken is longer than the rendering width, so we just need to start a newline and continue with the same inputToken
                this.restorePreviousCurrentLineState(this.STATE_NAME_CHARACTER);
                this.addLine();
                return this.addFIGCharacter(figCharacter);
            }
        }

        this.saveCurrentLineState(this.STATE_NAME_CHARACTER);
        return true;
    }

    private saveCurrentLineState(stateName: string): void {
        this._savedStates.set(stateName, DisplaySubCanvas.copy(this.currentLine));
    }

    private restorePreviousCurrentLineState(stateName: string): void {
        const previousState = this._savedStates.get(stateName);
        if (previousState !== undefined) this.currentLine = previousState;
    }

    public getTotalWordCount(): number {
        let retVal = 0;
        this._lines.forEach((l) => (retVal += l.lineWordCount));
        return retVal;
    }

    public getTotalCharacterCount(): number {
        let retVal = 0;
        this._lines.forEach((l) => (retVal += l.lineCharacters.length));
        return retVal;
    }

    public getCurrentLineWordCount(): number {
        return this.currentLine.lineWordCount;
    }

    public getCurrentLineLength() {
        return this.getLineLength(this._currentLine);
    }

    public getLineHeight(lineNumber: number): number {
        // console.log(this._lines[lineNumber]);
        return this._lines[lineNumber].lineHeight;
    }

    public getLineLength(lineNumber: number): number {
        // console.log(this._lines[lineNumber]);
        return this._lines[lineNumber].lineLength;
    }

    private getMappedCharacter(char: number): string {
        return this._flm.options.getBodyTextCharacterReplacer().get(char) ?? this._flm.options.getPaddingCharacterReplacer().get(char) ?? String.fromCharCode(char);
    }

    public padMatrix(buff: Matrix<CanvasPixel>) {
        const alignment = this._flm.options.getRenderingAlignment();
        const targetWidth = this._flm.options.getRenderingWidth(); // * this._flm.options.characterReplacement.getBodyTextWidestGrapheme();
        const horizontalPaddingMode = this._flm.options.horizontalPaddingMode;

        // If any of the characters are full-width or wider (i.e. take up two or more slots when rendered in a text console)
        // Then we multiply up the body block *before* we do padding and alignment
        // The rule is basically:
        //   For each character in the body block, if its grapheme is smaller than the widest then insert extra copies of the smaller one to fill the gap
        // This code will only work for graphemes with widths that are multiples of each other (1 & 2 or 1 & 3).  A mixed bag (1, 2 & 3) would cause grim output - or a multiplier of 6
        const bodyTextWidestGrapheme = this._flm.options.characterReplacement.getBodyTextWidestGrapheme();

        // TODO:  Work out what I want to do about handling wider-than-two graphemes.  For now, log a warning.
        if (bodyTextWidestGrapheme > 2) {
            console.warn(
                `Unexpected replacement grapheme with width ${bodyTextWidestGrapheme}.  figlet-ts has been tested with width 2.\nPlease contact me via GitHub: https://github.com/figlet-ts/figlet-ts/issues`
            );
        }

        // Pad out any characters to match the widest
        if (bodyTextWidestGrapheme > 1) {
            for (let i = 0; i < buff.length; i++) {
                // We loop backwards through the array to make it easier to insert the extra characters without fudging the index counter
                for (let j = buff[i].length - 1; j >= 0; j--) {
                    const char = buff[i][j];
                    buff[i].splice(j + 1, 0, ...new Array(bodyTextWidestGrapheme - 1).fill(char));
                }
            }
        }

        for (let i = 0; i < buff.length && targetWidth > buff[i].length; i++) {
            const arrayWidth = buff[i].length;

            switch (alignment) {
                case FontLayoutHorizontalAlignment.LEFT_ALIGN:
                    if (horizontalPaddingMode === FontLayoutHorizontalPaddingMode.FULL_PADDING) {
                        buff[i].push(...new Array(targetWidth - arrayWidth).fill(new CanvasPixel(ASCIICodes.FIGLET_TS_RIGHT_PADDING_MARKER)));
                    }
                    break;

                case FontLayoutHorizontalAlignment.CENTRE_ALIGN:
                    {
                        const leftPad = Math.floor((targetWidth - arrayWidth) / 2);
                        const rightPad = Math.ceil((targetWidth - arrayWidth) / 2);
                        if (horizontalPaddingMode !== FontLayoutHorizontalPaddingMode.NO_PADDING) {
                            if (horizontalPaddingMode === FontLayoutHorizontalPaddingMode.FULL_PADDING || horizontalPaddingMode !== FontLayoutHorizontalPaddingMode.NO_LEFT_PADDING) {
                                buff[i].unshift(...new Array(leftPad).fill(new CanvasPixel(ASCIICodes.FIGLET_TS_LEFT_PADDING_MARKER)));
                            }
                            if (horizontalPaddingMode === FontLayoutHorizontalPaddingMode.FULL_PADDING || horizontalPaddingMode !== FontLayoutHorizontalPaddingMode.NO_RIGHT_PADDING) {
                                buff[i].push(...new Array(rightPad).fill(new CanvasPixel(ASCIICodes.FIGLET_TS_RIGHT_PADDING_MARKER)));
                            }
                        }
                    }
                    break;

                case FontLayoutHorizontalAlignment.RIGHT_ALIGN:
                    if (horizontalPaddingMode !== FontLayoutHorizontalPaddingMode.NO_PADDING && horizontalPaddingMode !== FontLayoutHorizontalPaddingMode.NO_LEFT_PADDING) {
                        buff[i].unshift(...new Array(Math.floor(targetWidth - arrayWidth)).fill(new CanvasPixel(ASCIICodes.FIGLET_TS_LEFT_PADDING_MARKER)));
                    }
                    break;
                default:
                    // Should be unreachable...
                    // TODO:  Throw or ignore?
                    break;
            }
        }
    }

    public toString(): string {
        const buff: MultilineMatrix<CanvasPixel> = [];

        // Iterate through each SubCanvas
        for (let i = 0; i < this._lines.length; i++) {
            buff[i] = [];
            // Iterate through each line of the SubCanvas
            for (let j = 0; j < this._lines[i].line.length; j++) {
                const bufferLine: CanvasPixel[] = [];
                if (this._flm.options.getPrintDirection() === FIGFontPrintDirection.LEFT_TO_RIGHT) {
                    // Left to Right = paste the SubCanvas line from zero to the SubCanvas cursor point
                    for (const n of this._lines[i].line[j]) {
                        bufferLine.push(n);
                    }
                } else if (this._flm.options.getPrintDirection() === FIGFontPrintDirection.RIGHT_TO_LEFT) {
                    // Right to Left = paste the line reversed
                    for (const n of this._lines[i].line[j].slice(0 - this._lines[i].line[j].length)) {
                        bufferLine.push(n);
                    }
                }
                buff[i].push(bufferLine.slice());
            }
        }

        // Alignment
        for (const l of buff) {
            this.padMatrix(l);
        }

        // Vertical Kerning or Smushing
        const vSmushBuffer: Matrix<CanvasPixel> = [];

        if (this._flm.options.doVerticalKerning() || this._flm.options.doVerticalSmushing()) {
            // Shove in the entire first line
            MatrixUtils.appendMatrixToBottom(vSmushBuffer, buff[0]);

            let longestLine = vSmushBuffer[0].length;

            // Now Repeatedly smush later lines into this buffer
            for (let i = 1; i < buff.length; i++) {
                const upperLine = vSmushBuffer;
                const lowerLine = buff[i];
                const upperLineBottomDistances: number[] = [];
                const lowerLineTopDistances: number[] = [];
                const lineHeight = this._font.height;
                longestLine = Math.max(longestLine, lowerLine[0].length);
                for (let j = 0; j < longestLine; j++) {
                    // Work out how far you can move something upwards into the existing buffer
                    let dist = 0;
                    for (let k = vSmushBuffer.length - 1; k >= vSmushBuffer.length - this._font.height + 1; k--) {
                        let pixel = upperLine[k][j] ?? CanvasPixel.getWhitespacePixel();

                        // Treat hardblanks and L/R Padding Chars as spaces - i.e. smushable
                        if (pixel.equals(this._font.hardblankCharacter) || this._flm.options.characterReplacement.getPaddingCharacterMap().has(pixel.character)) {
                            pixel = CanvasPixel.getWhitespacePixel();
                        }

                        if (!pixel.equals(ASCIICodes.SPACE)) {
                            break;
                        } else {
                            dist++;
                        }
                    }
                    upperLineBottomDistances.push(dist);
                    dist = 0;
                    for (let k = 0; k < lineHeight; k++) {
                        let pixel = lowerLine[k][j] ?? CanvasPixel.getWhitespacePixel();
                        // Treat hardblanks and L/R Padding Chars as spaces - i.e. smushable
                        if (pixel.equals(this._font.hardblankCharacter) || this._flm.options.characterReplacement.getPaddingCharacterMap().has(pixel.character)) {
                            pixel = CanvasPixel.getWhitespacePixel();
                        }
                        if (!pixel.equals(ASCIICodes.SPACE)) {
                            break;
                        } else {
                            dist++;
                        }
                    }
                    lowerLineTopDistances.push(dist);
                }
                // Work out kern distance (how many lines could we move up the lower line until some characters touch the upper)
                let maxDistance = lineHeight;
                const maxDistances = [];

                for (let j = 0; j < upperLineBottomDistances.length; j++) {
                    maxDistances.push(upperLineBottomDistances[j] + lowerLineTopDistances[j]);
                    maxDistance = Math.min(maxDistance, upperLineBottomDistances[j] + lowerLineTopDistances[j]);
                }

                // If we're smushing, we can add one to the distance to cause overlap
                if (this._flm.options.doVerticalSmushing()) {
                    maxDistance++;
                }

                maxDistance = Math.min(maxDistance, this._font.height - this._flm.verticalLayout.getVerticalKernMaxOffset());

                let canSmush = false;
                let overlapLines: Matrix<CanvasPixel> = [];
                while (maxDistance > 0 && !canSmush) {
                    overlapLines = [];
                    canSmush = true;
                    for (let j = 0; j < maxDistance && canSmush; j++) {
                        overlapLines[j] = [];
                        for (let k = 0; k < upperLineBottomDistances.length && canSmush; k++) {
                            const upperChar = upperLine[upperLine.length - maxDistance + j][k] ?? CanvasPixel.getWhitespacePixel();
                            const lowerChar = lowerLine[j][k] ?? CanvasPixel.getWhitespacePixel();
                            const smushReult = this._flm.getVerticalSmushCharacter(upperChar, lowerChar, this._font.hardblankCharacter);
                            if (smushReult === null) {
                                canSmush = false;
                                maxDistance--;
                            } else {
                                overlapLines[j].push(smushReult);
                            }
                        }
                    }
                }

                if (canSmush) {
                    // Drop the overlap count of lines from the buffer
                    vSmushBuffer.splice(vSmushBuffer.length - maxDistance, maxDistance);
                    // Insert the overlap lines
                    vSmushBuffer.push(...overlapLines);
                }
                // Insert the rest of the lower line
                vSmushBuffer.push(...lowerLine.slice(maxDistance));
            }
        } else {
            // Otherwise, no vertical smushing
            for (const l of buff) {
                MatrixUtils.appendMatrixToBottom(vSmushBuffer, l);
            }
        }

        // Convert to output string
        return this.convertMatrixToDisplayString(vSmushBuffer);
    }

    public convertMatrixToDisplayString(matrix: Matrix<CanvasPixel>): string {
        // For the time being, it looks like we're going to have two output modes:
        //  1.  "Emoji mode"    If the user has requested output character substitution with full-width characters
        //  2.  "Context mode"  Otherwise
        if (this._flm.characterReplacement.getBodyTextWidestGrapheme() > 1 || this._flm.characterReplacement.getPaddingCharacterWidth() > 1) {
            // EMOJI MODE
            return this.convertMatrixToStringInFullWidthMode(matrix);
        } else {
            // CONTEXT MODE
            return this.convertMatrixToStringInContextMode(matrix);
        }
    }

    private convertMatrixToStringInContextMode(matrix: Matrix<CanvasPixel>, stylizer: Stylizer | null = null): string {
        const retVal: string[] = [];

        const canvasHeight = matrix.length;
        const canvasWidth = matrix.length;

        for (const currentLineArray of matrix) {
            const currentLine: string[] = [];

            for (const pixel of currentLineArray) {
                if (stylizer) {
                    currentLine.push(
                        stylizer.applyStyle(pixel)
                    );
                } else {
                    if (pixel.context.canvasContext) {
                        if (pixel.context.canvasContext.lineWordNumber === 0) {
                            currentLine.push(chalk.red(this.getMappedCharacter(pixel.character)));
                            
                        } else {
                            currentLine.push(chalk.green(this.getMappedCharacter(pixel.character)));
                            
                        }
                    } else {
                        currentLine.push(this.getMappedCharacter(pixel.character));
                    }
                }
            }

            retVal.push(currentLine.join(''));
        }

        return retVal.join('\n');
    }

    private convertMatrixToStringInFullWidthMode(matrix: Matrix<CanvasPixel>): string {
        const retVal: string[] = [];

        // Check the string width of each replacement character to try to prevent messiness on output
        this._flm.characterReplacement.getPaddingCharacter();
        const bodyTextWidestGrapheme = this._flm.characterReplacement.getBodyTextWidestGrapheme();

        for (const currentLineArray of matrix) {
            const currentLine: string[] = [];

            const rleCompressed: [number, number][] = [];

            let cursor = 0;
            // Break the input string down to an RLE-compressed tuple of [outputChar,run length]
            while (cursor < currentLineArray.length) {
                let subCursor = 0;
                const pixel = currentLineArray[cursor + subCursor];
                while (subCursor + cursor < currentLineArray.length && currentLineArray[cursor + subCursor] === currentLineArray[cursor + subCursor + 1]) {
                    subCursor++;
                }
                // rleCompressed.push([char, (subCursor + 1) * ((this._flm.options.characterReplacement.getPaddingCharacterMap().has(char)) ? 1 : bodyTextWidestGrapheme)]);
                rleCompressed.push([pixel.character, subCursor + 1]);
                cursor += 1 + subCursor;
            }

            // Iterate through the RLE version and convert each block to as-many-replacement-characters as will fit in the block
            for (const tuple of rleCompressed) {
                const outputChar = this.getMappedCharacter(tuple[0]);

                const outputCharWidth = StringWidthProxy.getStringWidth(outputChar);

                // Now we construct the block we need to insert
                const toInsert: string[] = [];

                if (outputCharWidth === 0) {
                    console.log(currentLineArray);
                    console.log(outputChar);
                    console.log(tuple);
                    console.log(outputCharWidth);
                }
                // Push as many copies of the grapheme as we need
                toInsert.push(...new Array(Math.floor(tuple[1] / outputCharWidth)).fill(outputChar));

                // Plus any single-space padding to accommodate imperfect division
                const singleCharacterPaddingAmount = tuple[1] % outputCharWidth;

                if (tuple[0] === ASCIICodes.FIGLET_TS_RIGHT_PADDING_MARKER) {
                    // If we're replacing a right-hand padding marker, we prefix any extra single-space padding
                    toInsert.unshift(
                        ...new Array(Math.floor(singleCharacterPaddingAmount)).fill(this._flm.characterReplacement.getPaddingCharacterMap().get(ASCIICodes.FIGLET_TS_SINGLE_WIDTH_WHITESPACE))
                    );
                } else if (tuple[0] === ASCIICodes.FIGLET_TS_LEFT_PADDING_MARKER) {
                    // If we're replacing a left-hand padding marker, we suffix any extra single-space padding
                    toInsert.push(
                        ...new Array(Math.floor(singleCharacterPaddingAmount)).fill(this._flm.characterReplacement.getPaddingCharacterMap().get(ASCIICodes.FIGLET_TS_SINGLE_WIDTH_WHITESPACE))
                    );
                } else {
                    // Any other marker, we place the padding based on the rendering alignment
                    switch (this._flm.options.getRenderingAlignment()) {
                        case FontLayoutHorizontalAlignment.LEFT_ALIGN:
                            toInsert.push(...new Array(singleCharacterPaddingAmount).fill(this._flm.characterReplacement.getPaddingCharacterMap().get(ASCIICodes.FIGLET_TS_SINGLE_WIDTH_WHITESPACE)));
                            break;
                        case FontLayoutHorizontalAlignment.RIGHT_ALIGN:
                            toInsert.unshift(
                                ...new Array(singleCharacterPaddingAmount).fill(this._flm.characterReplacement.getPaddingCharacterMap().get(ASCIICodes.FIGLET_TS_SINGLE_WIDTH_WHITESPACE))
                            );
                            break;
                        case FontLayoutHorizontalAlignment.CENTRE_ALIGN:
                            toInsert.unshift(
                                ...new Array(Math.floor(singleCharacterPaddingAmount / 2)).fill(
                                    this._flm.characterReplacement.getPaddingCharacterMap().get(ASCIICodes.FIGLET_TS_SINGLE_WIDTH_WHITESPACE)
                                )
                            );
                            toInsert.push(
                                ...new Array(Math.ceil(singleCharacterPaddingAmount / 2)).fill(
                                    this._flm.characterReplacement.getPaddingCharacterMap().get(ASCIICodes.FIGLET_TS_SINGLE_WIDTH_WHITESPACE)
                                )
                            );
                            break;
                    }
                }

                // And finally insert the block
                currentLine.push(...toInsert);
            }

            retVal.push(currentLine.join(''));

            // If we have full-width exported characters, and the option is set to try to preserve aspect ratios then we will double-insert each line
            if (this._flm.options.getPreserveAspectRatio() && bodyTextWidestGrapheme > 1) {
                for (let k = 1; k < bodyTextWidestGrapheme; k++) {
                    retVal.push(currentLine.join(''));
                }
            }
        }

        return retVal.join('\n');
    }

    private getGlyphMatrixFromFIGCharacter(figCharacter: FIGCharacter): Matrix<CanvasPixel> {
        const retVal: Matrix<CanvasPixel> = [];

        for (let i = 0; i < figCharacter.getGlyph().length; i++) {
            retVal[i] = [];
            retVal[i].push(...figCharacter.getGlyph()[i].map((x) => new CanvasPixel(x, { figCharacter: figCharacter })));
        }

        return retVal;
    }

    public addFCToCurrentLine(figCharacter: FIGCharacter) {
        // This method does not care about line length, etc.  It will always suceed in adding a FIGCharacter to the end of a line:

        // If the line is empty, or if we're not kerning or smushing, just add the character
        // console.debug(`Adding FC for ${figCharacter.character}`);
        if (!(this._flm.options.doHorizontalKerning() || this._flm.options.doHorizontalSmushing())) {
            this.currentLine.appendMatrixToRight(this.getGlyphMatrixFromFIGCharacter(figCharacter));

            // And add the FIGCharacter to the log of added chars
            this.currentLine.addFIGCharacter(figCharacter);

            return;
        }

        const existingBuffer = this.currentLine.line;
        // Get a copy of the glyph
        const glyphToAdd = this.getGlyphMatrixFromFIGCharacter(figCharacter);
        const existingBufferKernDistances: number[] = [];
        const glyphKernDistances: number[] =
            this._flm.options.getPrintDirection() === FIGFontPrintDirection.LEFT_TO_RIGHT ? figCharacter.paddingInfo.leftToRightDistances : figCharacter.paddingInfo.rightToLeftDistances;

        // The maximum distance we should try to smush according to the figlet source code
        // is the new glyph's width i.e. don't slide a 4-wide glyph more than 4 spaces to kern
        // it.
        // However... great results can be achieved by sliding all the way up to the width of
        // the previous character (render "F," using slant.flf), so I prefer that default
        // This mode can be controlled by the extra option "Horizontal Smush Plus Mode"
        const maxKernTestingDistance = this._flm.options.doHorizontalSmushPlus() ? Math.max(figCharacter.width, this.currentLine.getLastFIGCharacter()?.width ?? 0) : figCharacter.width;

        for (let j = 0; j < this._lineHeight; j++) {
            // Work out how far you can smush something into the existing buffer
            let dist = 0;

            // Hunt for non-white space characters.  That will give us our kerning distance
            for (let k = 0; k < maxKernTestingDistance; k++) {
                const existingBufferIndex = this._flm.options.getPrintDirection() === FIGFontPrintDirection.LEFT_TO_RIGHT ? existingBuffer[j].length - 1 - k : k;
                const pixel = existingBuffer[j][existingBufferIndex] ?? CanvasPixel.getWhitespacePixel();
                if (!pixel.equals(ASCIICodes.SPACE)) {
                    break;
                } else {
                    dist++;
                }
            }
            existingBufferKernDistances.push(dist);
        }

        // Work out kern distance (how many lines could we overlap the new glyph with the existing buffer, until some non-space characters touch)
        let kernDistance = maxKernTestingDistance;
        const maxDistances = [];
        for (let j = 0; j < existingBufferKernDistances.length; j++) {
            maxDistances.push(existingBufferKernDistances[j] + glyphKernDistances[j]);
            kernDistance = Math.min(kernDistance, existingBufferKernDistances[j] + glyphKernDistances[j]);
        }

        // If we're smushing, we can add one to the distance to cause overlap
        if (this._flm.options.doHorizontalSmushing()) {
            kernDistance++;
        }

        if (!this._flm.options.doHorizontalSmushPlus()) {
            // This next line says "don't smush further than the new character's width" (not that I actually agree with
            // this... Use slant.flf and render "F," to see what I mean.  That comma could go another space left...)
            // Hence I've added an extra flag to enable "horizontal smush plus mode" which allows over-smushing
            kernDistance = Math.min(kernDistance, figCharacter.width);
        }

        // console.debug(`Final Max Dist: ${kernDistance}`);

        let canSmush = false;
        let overlapBuffer: Matrix<CanvasPixel> = [];
        while (kernDistance > 0 && !canSmush) {
            overlapBuffer = [];
            canSmush = true;
            // Loop over each row
            for (let i = 0; i < this._lineHeight; i++) {
                overlapBuffer[i] = [];
                for (let j = 0; j < kernDistance && canSmush; j++) {
                    const existingBufferIndex = this._flm.options.getPrintDirection() === FIGFontPrintDirection.LEFT_TO_RIGHT ? existingBuffer[i].length - kernDistance + j : j;
                    const newGlyphBufferIndex = this._flm.options.getPrintDirection() === FIGFontPrintDirection.LEFT_TO_RIGHT ? j : glyphToAdd[i].length - kernDistance + j;

                    // TODO:  Work out if we should use something other than -1... it has meaning...
                    const existingChar = existingBuffer[i][existingBufferIndex] ?? new CanvasPixel(-1);
                    // console.debug(existingBuffer[i].length - kernDistance + j)
                    // console.debug(existingBuffer[i][existingBuffer[i].length - kernDistance + j])

                    const newGlyphChar = glyphToAdd[i][newGlyphBufferIndex] ?? CanvasPixel.getWhitespacePixel();
                    const smushResult = this._flm.getHorizontalSmushCharacter(existingChar, newGlyphChar, this._font.hardblankCharacter);
                    
                    // console.debug(`LEFT: ${String.fromCharCode(existingChar)}(from idx: ${existingBufferIndex})    RIGHT: ${String.fromCharCode(newGlyphChar)}(from idx: ${newGlyphBufferIndex})  RESULT: ${String.fromCharCode(smushResult)}`)

                    // If we can smush
                    if (smushResult !== null) {
                        if (existingBuffer[i].length - kernDistance + j >= 0) {
                            if (this._flm.options.getPrintDirection() === FIGFontPrintDirection.LEFT_TO_RIGHT) {
                                overlapBuffer[i].push(smushResult);
                            } else {
                                overlapBuffer[i].unshift(smushResult);
                            }
                        }
                    } else {
                        // Otherwise this can't be smushed... reduce the amount of kern and try again
                        canSmush = false;
                        kernDistance--;
                    }
                }
            }
        }

        if (canSmush) {
            const overlapBufferWidth = overlapBuffer[0].length;
            const existingBufferWidth = existingBuffer[0].length;
            const amountOfOverlapFromExistingBuffer = Math.min(existingBufferWidth, overlapBufferWidth);

            if (this._flm.options.getPrintDirection() === FIGFontPrintDirection.LEFT_TO_RIGHT) {
                // Trim the existing buffer
                for (let i = 0; i < existingBuffer.length; i++) {
                    existingBuffer[i].splice(existingBuffer[i].length - amountOfOverlapFromExistingBuffer, amountOfOverlapFromExistingBuffer);
                }

                // Add the overlap buffer
                for (let i = 0; i < overlapBuffer.length; i++) {
                    existingBuffer[i].push(...overlapBuffer[i].slice(0));
                }

                // Add the rest of the glyph characters
                for (let i = 0; i < glyphToAdd.length; i++) {
                    existingBuffer[i].push(...glyphToAdd[i].slice(kernDistance));
                }
            } else if (this._flm.options.getPrintDirection() === FIGFontPrintDirection.RIGHT_TO_LEFT) {
                // Trim the existing buffer
                for (let i = 0; i < existingBuffer.length; i++) {
                    for (let j = 0; j < amountOfOverlapFromExistingBuffer; j++) {
                        existingBuffer[i].shift();
                    }
                }

                // Add the overlap buffer
                for (let i = 0; i < overlapBuffer.length; i++) {
                    existingBuffer[i].unshift(...overlapBuffer[i].slice(0).reverse());
                }

                // Add the rest of the glyph characters
                for (let i = 0; i < glyphToAdd.length; i++) {
                    existingBuffer[i].unshift(...glyphToAdd[i].slice().reverse().slice(kernDistance).reverse());
                }
            }
        } else {
            // Otherwise, it's not smush/kernable at all
            for (let i = 0; i < glyphToAdd.length; i++) {
                existingBuffer[i].push(...glyphToAdd[i].slice(kernDistance));
            }
        }

        // Add the FIGCharacter to the log of added chars
        this.currentLine.addFIGCharacter(figCharacter);
    }

    public addWord(inputToken: InputToken) {
        const word = inputToken.toString();

        if (inputToken.isNewline) {
            this.addLine();
        } else {
            for (let i = 0; i < word.length; i++) {
                const character = word[i];
                if (!this.addFIGCharacter(this._font.getFIGCharacter(character))) {
                    // If we've added more than one inputToken, then roll back to previous state and add a new line and start adding the inputToken again
                    this.restorePreviousCurrentLineState(this.STATE_NAME_WORD);
                    this.addLine();
                    // If the current word is whitespace, then don't try to add it - just finish
                    if (inputToken.isWhitespace) {
                        return;
                    }
                    i = -1;
                }
            }
            this.incrementCurrentLineWordCount();
        }

        if (!inputToken.isWhitespace) {
            this.saveCurrentLineState(this.STATE_NAME_WORD);
        }
    }

    public getTargetWidth() {
        return this._lineLength;
    }

    public getHeight() {
        return this._lines.length * this._lineHeight;
    }

    public getLineCount() {
        return this._lines.length;
    }

    public getWordCount() {
        return this._words.filter((w) => !w.isNewline && !w.isWhitespace).length;
    }

    public getLine(lineNumber: number) {
        return this._lines[lineNumber];
    }
}
