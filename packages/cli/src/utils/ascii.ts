export function parseStringOrIntToAsciiCode(v: string | number): number {
    if (typeof v === 'number') {
        if (Number.isInteger(v)) {
            return v;
        }

        return Math.floor(v);
    } else {
        if (v === '') {
            return 0;
        }

        const parsedInteger = parseInt(v);
        if (!isNaN(parsedInteger) && parsedInteger >= 0) {
            return parsedInteger;
        } else {
            return v.charCodeAt(0);
        }
    }
}
