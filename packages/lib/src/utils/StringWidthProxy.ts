import stringWidth from 'string-width';

/**
 * Acts as a proxy for any figlet-ts files that need to access string-width
 * to ensure we use common options when calling stringWidth
 */
export class StringWidthProxy {
    static getStringWidth(str: string) {
        return stringWidth(str, { ambiguousIsNarrow: false });
    }
}
