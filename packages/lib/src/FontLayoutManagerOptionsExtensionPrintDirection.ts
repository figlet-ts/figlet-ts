import { FIGFontPrintDirection } from './enums/FIGFontPrintDirection';
import { type FontLayoutManagerOptions } from './FontLayoutManagerOptions';

export class FontLayoutManagerOptionsExtensionPrintDirection {
    constructor(private readonly _driverOptions: FontLayoutManagerOptions) {}

    unset() {
        this._driverOptions._overridePrintDirection = undefined;
    }

    default() {
        this.unset();
    }

    leftToRight() {
        this._driverOptions._overridePrintDirection = FIGFontPrintDirection.LEFT_TO_RIGHT;
    }

    rightToLeft() {
        this._driverOptions._overridePrintDirection = FIGFontPrintDirection.RIGHT_TO_LEFT;
    }
}
