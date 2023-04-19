import { parseStringOrIntToAsciiCode } from '../../src/utils/ascii';

describe('ASCII Utils Tests', () => {
    test('Valid numerical inputs', () => {
        expect(parseStringOrIntToAsciiCode(100)).toEqual(100);
        expect(parseStringOrIntToAsciiCode(0)).toEqual(0);
        expect(parseStringOrIntToAsciiCode(5252)).toEqual(5252);
        expect(parseStringOrIntToAsciiCode(100.342)).toEqual(100);
    });
    test('Valid string inputs', () => {
        expect(parseStringOrIntToAsciiCode('100')).toEqual(100);
        expect(parseStringOrIntToAsciiCode('0')).toEqual(0);
        expect(parseStringOrIntToAsciiCode('5252')).toEqual(5252);
        expect(parseStringOrIntToAsciiCode('100.342')).toEqual(100);
    });
    test('Non numerical inputs', () => {
        expect(parseStringOrIntToAsciiCode('-100')).toEqual('-'.charCodeAt(0));
        expect(parseStringOrIntToAsciiCode('-100.34325')).toEqual('-'.charCodeAt(0));
        expect(parseStringOrIntToAsciiCode('-10a')).toEqual('-'.charCodeAt(0));
        expect(parseStringOrIntToAsciiCode(' ')).toEqual(' '.charCodeAt(0));
        expect(parseStringOrIntToAsciiCode('SDNDSKDNDS')).toEqual('S'.charCodeAt(0));
        expect(parseStringOrIntToAsciiCode('')).toEqual(0);
    });
});
