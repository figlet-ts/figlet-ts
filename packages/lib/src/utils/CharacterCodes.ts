/**
 * This class is purely a convenience / helper class.
 *
 * It's a lookup for a set of character codes (ASCII and internally-used) that are used within the figlet-ts codebase.
 */
export class CharacterCodes {
    public static FIGLET_TS_LEFT_PADDING_MARKER = -0x133c9dc;
    public static FIGLET_TS_RIGHT_PADDING_MARKER = -0x1348cbf;
    public static FIGLET_TS_SINGLE_WIDTH_WHITESPACE = -0x12d870c;

    public static ASCII_NULL = 0;
    public static ASCII_LINE_FEED = 10;
    public static ASCII_CARRIAGE_RETURN = 13;
    public static ASCII_SPACE = 32;
    public static ASCII_OPEN_PARENTHESIS: number = 40;
    public static ASCII_CLOSED_PARENTHESIS: number = 41;
    public static ASCII_FORWARD_SLASH: number = 47;
    public static ASCII_LESS_THAN: number = 60;
    public static ASCII_GREATER_THAN: number = 62;
    public static ASCII_OPEN_BRACKET: number = 91;
    public static ASCII_BACKWARD_SLASH: number = 92;
    public static ASCII_CLOSED_BRACKET: number = 93;
    public static ASCII_UNDERSCORE: number = 95;
    public static ASCII_OPEN_BRACE: number = 123;
    public static ASCII_PIPE: number = 124;
    public static ASCII_CLOSED_BRACE: number = 125;
}
