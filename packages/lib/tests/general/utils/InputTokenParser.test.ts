import { InputToken } from '../../../src/utils/InputToken';
import { InputTokenParser } from '../../../src/utils/InputTokenParser';

describe('Test parsing inputs', () => {
    test('Empty input', () => {
        const parsedText: InputToken[] = InputTokenParser.parse('');
        expect(parsedText.length).toEqual(0);
    });

    test('Single line', () => {
        const parsedText: InputToken[] = InputTokenParser.parse('String to tokenise');
        expect(parsedText.length).toEqual(5);
        expect(parsedText[0].toString()).toEqual('String');
        expect(parsedText[1].isWhitespace).toEqual(true);
        expect(parsedText[1].toString()).toEqual(' ');
        expect(parsedText[4].toString()).toEqual('tokenise');
    });

    test('Single line with multiple concurrent spaces', () => {
        const parsedText: InputToken[] = InputTokenParser.parse('String   \t     to tokenise');
        expect(parsedText.length).toEqual(5);
        expect(parsedText[0].toString()).toEqual('String');
        expect(parsedText[1].isWhitespace).toEqual(true);
        expect(parsedText[1].toString()).toEqual('         ');
        expect(parsedText[4].toString()).toEqual('tokenise');
    });

    test('Multi-line', () => {
        const parsedText: InputToken[] = InputTokenParser.parse('This is \n a text string to tokenise\n\n \n');
        expect(parsedText.length).toEqual(19);
        expect(parsedText[8].toString()).toEqual('text');
        expect(parsedText[14].toString()).toEqual('tokenise');
        expect(parsedText[15].isNewline).toEqual(true);
        expect(parsedText[17].isWhitespace).toEqual(true);
    });
});
