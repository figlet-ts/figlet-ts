import { FLFParseErrorInvalidHeader, FLFParser } from '../../../src/FLFParser';

describe('Check FLF Parsing', () => {
    const invalidFLFFile: string = 'asdfsafd\nasfdjasdfkljasd';
    const validHeader: string = 'flf2a$ 7 5 16 0 0 0 3904 10';
    const mandatoryLinesOnly: string[] = new Array(102 * 7).fill('\n @');
    const tooFewOptionalLines: string[] = new Array(3 * 8).fill('\n0xff @');
    const correctNumberOfMalformedOptionalLines: string[] = new Array(10 * 8).fill('\nNaN');
    const correctNumberOfWellFormedOptionalLines: string[] = new Array(10 * 8).fill('\n0xff @');

    test('Invalid FLF', () => {
        expect(() => FLFParser.parse(invalidFLFFile)).toThrowError(FLFParseErrorInvalidHeader);
    });

    test('FLF Missing mandatory characters', () => {
        expect(FLFParser.parse([validHeader].join())).toHaveProperty('parseWarnings', [
            'FLF file does not contain enough lines to cover the mandatory 102 ASCII characters.  Missing characters will be replaced with blanks.',
            'FLF file does not contain enough lines to cover the mandatory 102 ASCII characters and the 10 code-tag characters that the FLF header indicates. Missing characters will be replaced with blanks.',
            'FLF Header indicated 10 code-tagged characters, but the file contains 0.'
        ]);
    });

    test('FLF Missing all code-tagged characters indicated in header', () => {
        expect(FLFParser.parse([validHeader, ...mandatoryLinesOnly].join(''))).toHaveProperty('parseWarnings', [
            'FLF file does not contain enough lines to cover the mandatory 102 ASCII characters and the 10 code-tag characters that the FLF header indicates. Missing characters will be replaced with blanks.',
            'FLF Header indicated 10 code-tagged characters, but the file contains 0.'
        ]);
    });

    test('FLF Missing some code-tagged characters indicated in header', () => {
        expect(FLFParser.parse([validHeader, ...mandatoryLinesOnly, ...tooFewOptionalLines].join(''))).toHaveProperty('parseWarnings', [
            'FLF file does not contain enough lines to cover the mandatory 102 ASCII characters and the 10 code-tag characters that the FLF header indicates. Missing characters will be replaced with blanks.',
            'FLF Header indicated 10 code-tagged characters, but the file contains 3.'
        ]);
    });

    test('FLF with malformed code-tagged characters', () => {
        expect(FLFParser.parse([validHeader, ...mandatoryLinesOnly, ...correctNumberOfMalformedOptionalLines].join(''))).toHaveProperty('parseWarnings', [
            'Error parsing character in FLF between lines 715 and 722: Cannot parse code tag line "NaN" as hexadecimal, octal nor decimal value',
            'FLF Header indicated 10 code-tagged characters, but the file contains 1.'
        ]);
    });

    test('Well-formed FLF file', () => {
        expect(FLFParser.parse([validHeader, ...mandatoryLinesOnly, ...correctNumberOfWellFormedOptionalLines].join(''))).toHaveProperty('parseWarnings', []);
    });
});
