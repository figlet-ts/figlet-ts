import { FIGCharacterPaddingInfo } from '../../src/FIGCharacterPaddingInfo';

const slantSpace: number[][] = [
    '     $$'.split('').map((x) => x.charCodeAt(0)),
    '    $$ '.split('').map((x) => x.charCodeAt(0)),
    '   $$  '.split('').map((x) => x.charCodeAt(0)),
    '  $$   '.split('').map((x) => x.charCodeAt(0)),
    ' $$    '.split('').map((x) => x.charCodeAt(0)),
    '$$     '.split('').map((x) => x.charCodeAt(0))
];

const standardAmpersand: number[][] = [
    '   ___   '.split('').map((x) => x.charCodeAt(0)),
    '  ( _ )  '.split('').map((x) => x.charCodeAt(0)),
    '  / _ \\/\\'.split('').map((x) => x.charCodeAt(0)),
    ' | (_>  <'.split('').map((x) => x.charCodeAt(0)),
    '  \\___/\\/'.split('').map((x) => x.charCodeAt(0)),
    '         '.split('').map((x) => x.charCodeAt(0))
];

describe('Test parsed glyph padding calculations', () => {
    test('Padding on slant font space character', () => {
        const slantSpacePadding: FIGCharacterPaddingInfo = new FIGCharacterPaddingInfo(slantSpace);
        expect(slantSpacePadding.topDownDistances).toEqual([5, 4, 3, 2, 1, 0, 0]);
        expect(slantSpacePadding.bottomUpDistances).toEqual([0, 0, 1, 2, 3, 4, 5]);
        expect(slantSpacePadding.leftToRightDistances).toEqual([5, 4, 3, 2, 1, 0]);
        expect(slantSpacePadding.rightToLeftDistances).toEqual([0, 1, 2, 3, 4, 5]);

        expect(slantSpacePadding.topDownCharacters).toEqual([36, 36, 36, 36, 36, 36, 36]);
        expect(slantSpacePadding.bottomUpCharacters).toEqual([36, 36, 36, 36, 36, 36, 36]);
        expect(slantSpacePadding.leftToRightCharacters).toEqual([36, 36, 36, 36, 36, 36]);
        expect(slantSpacePadding.rightToLeftCharacters).toEqual([36, 36, 36, 36, 36, 36]);
    });

    test('Padding on standard font ampersand character', () => {
        const standardAmpersandPadding: FIGCharacterPaddingInfo = new FIGCharacterPaddingInfo(standardAmpersand);
        expect(standardAmpersandPadding.topDownDistances).toEqual([Infinity, 3, 1, 0, 0, 0, 1, 2, 2]);
        expect(standardAmpersandPadding.bottomUpDistances).toEqual([Infinity, 2, 1, 1, 1, 1, 1, 1, 1]);
        expect(standardAmpersandPadding.leftToRightDistances).toEqual([3, 2, 2, 1, 2, Infinity]);
        expect(standardAmpersandPadding.rightToLeftDistances).toEqual([3, 2, 0, 0, 0, Infinity]);

        expect(standardAmpersandPadding.topDownCharacters).toEqual([32, 124, 40, 95, 95, 95, 41, 47, 92]);
        expect(standardAmpersandPadding.bottomUpCharacters).toEqual([32, 124, 92, 95, 95, 95, 47, 92, 47]);
        expect(standardAmpersandPadding.leftToRightCharacters).toEqual([95, 40, 47, 124, 92, 32]);
        expect(standardAmpersandPadding.rightToLeftCharacters).toEqual([95, 41, 92, 60, 47, 32]);
    });
});
