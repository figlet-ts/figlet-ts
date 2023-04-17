import { InputToken } from './InputToken';

export class InputTokenParser {
    public static parse(text: string): InputToken[] {
        const retVal: InputToken[] = [];

        // Replace tabs with whitespace
        text = text.replace('\t', ' ');

        // Split around newlines
        const splitLines = text.split('\n');

        // Loop over every line of the input text
        while (splitLines.length > 0) {
            // Pop a line of text off the front of the list
            const line: string = splitLines.shift() || '';

            // If the line has no characters in it, insert a newline token and continue to the next line of input (if there are other lines...)
            if (line.length === 0) {
                // Only insert a newline if there are following lines of text
                if (splitLines.length >= 1) {
                    retVal.push(new InputToken('\n'));
                }
                continue;
            }

            // Start building a new token, based on the first character of the current line
            let currentToken: InputToken = new InputToken(line[0]);

            // Add the token to the token output - we will add to the token until the next whitespace or line break
            retVal.push(currentToken);

            // Loop through the rest of the characters in the line of text
            for (let i = 1; i < line.length; i++) {
                // If the current token is whitespace, and the next character is whitespace, append whitespace to the current token
                if (currentToken.isWhitespace && line[i] === ' ') {
                    currentToken.addSpace();
                    // If the current token is not whitespace and the next character is not whitespace, append the character to the current token
                } else if (!currentToken.isWhitespace && line[i] !== ' ') {
                    currentToken.addCharacter(line[i]);
                    // Otherwise we're at the end of a token (either the end of a series of whitespace, or the end of a series of non-whitespace)
                    // which means we need to finish the current token and start a new one
                } else {
                    currentToken = new InputToken(line[i]);
                    retVal.push(currentToken);
                }
            }

            // Add a newline token at the end of all except the last line
            if (splitLines.length > 0) {
                retVal.push(new InputToken('\n'));
            }
        }

        return retVal;
    }
}
