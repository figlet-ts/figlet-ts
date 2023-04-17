import { InputToken } from '../../../src/utils/InputToken';

describe('Test Special Tokens', () => {
    test('Newline token', () => {
        expect(new InputToken('\n')).toHaveProperty('isNewline', true);
    });
    test('Whitespace token from space character', () => {
        expect(new InputToken(' ')).toHaveProperty('isWhitespace', true);
    });
    test('Whitespace token tab character', () => {
        expect(new InputToken(' ')).toHaveProperty('isWhitespace', true);
    });
});

describe('Test Bad Inputs', () => {
    const whiteSpaceToken = new InputToken(' ');
    const newlineToken = new InputToken('\n');
    const standardToken = new InputToken('A');

    test('Empty-character constructor', () => {
        expect(() => new InputToken('')).toThrow('InputToken only accepts single-character inputs');
    });

    test('Multi-character constructor', () => {
        expect(() => new InputToken('  ')).toThrow('InputToken only accepts single-character inputs');
    });

    test('Empty-character additions', () => {
        expect(() => whiteSpaceToken.addCharacter('')).toThrow('InputToken only accepts single-character inputs');
        expect(() => newlineToken.addCharacter('')).toThrow('InputToken only accepts single-character inputs');
        expect(() => standardToken.addCharacter('')).toThrow('InputToken only accepts single-character inputs');
    });

    test('Multi-character additions', () => {
        expect(() => whiteSpaceToken.addCharacter('  ')).toThrow('InputToken only accepts single-character inputs');
        expect(() => newlineToken.addCharacter('  ')).toThrow('InputToken only accepts single-character inputs');
        expect(() => standardToken.addCharacter('  ')).toThrow('InputToken only accepts single-character inputs');
    });

    test('Incorrect addition of whitespace', () => {
        expect(() => newlineToken.addCharacter(' ')).toThrow('Cannot add space character to non-whitespace InputToken');
        expect(() => standardToken.addCharacter(' ')).toThrow('Cannot add space character to non-whitespace InputToken');
        expect(() => newlineToken.addSpace()).toThrow('Cannot add space character to non-whitespace InputToken');
        expect(() => standardToken.addSpace()).toThrow('Cannot add space character to non-whitespace InputToken');
    });

    test('Incorrect addition of non-whitespace', () => {
        expect(() => whiteSpaceToken.addCharacter('x')).toThrow('Cannot add non-whitespace character to whitespace InputToken');
        expect(() => newlineToken.addCharacter('x')).toThrow('Cannot add extra characters to newline InputToken');
    });

    test('Handling tab characters', () => {
        expect(() => whiteSpaceToken.addCharacter('\t')).not.toThrow();
        expect(() => newlineToken.addCharacter('\t')).toThrow('Cannot add space character to non-whitespace InputToken');
        expect(() => standardToken.addCharacter('\t')).toThrow('Cannot add space character to non-whitespace InputToken');
    });
});

describe('Test Good Inputs', () => {
    test('Whitespace additions', () => {
        const whiteSpaceToken = new InputToken(' ');
        whiteSpaceToken.addCharacter('\t');
        whiteSpaceToken.addCharacter(' ');
        whiteSpaceToken.addCharacter('\t');
        whiteSpaceToken.addSpace();
        expect(whiteSpaceToken.toString()).toEqual('     ');
    });
    test('Non-whitespace additions', () => {
        const standardToken = new InputToken('T');
        standardToken.addCharacter('e');
        standardToken.addCharacter('s');
        standardToken.addCharacter('t');
        standardToken.addCharacter('i');
        standardToken.addCharacter('n');
        standardToken.addCharacter('g');
        expect(standardToken.toString()).toEqual('Testing');
    });
});
