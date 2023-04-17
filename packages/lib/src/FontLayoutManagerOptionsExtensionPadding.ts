import { FontLayoutHorizontalPaddingMode } from './enums/FontLayoutHorizontalPaddingMode';
import { type FontLayoutManagerOptions } from './FontLayoutManagerOptions';

export class FontLayoutManagerOptionsExtensionPadding {
    constructor(private readonly _driverOptions: FontLayoutManagerOptions) {}

    default() {
        this._driverOptions._renderingHorizontalPaddingMode = FontLayoutHorizontalPaddingMode.DEFAULT;
    }

    noPadding() {
        this._driverOptions._renderingHorizontalPaddingMode = FontLayoutHorizontalPaddingMode.NO_PADDING;
    }

    noLeftPadding() {
        this._driverOptions._renderingHorizontalPaddingMode = FontLayoutHorizontalPaddingMode.NO_LEFT_PADDING;
    }

    noRightPadding() {
        this._driverOptions._renderingHorizontalPaddingMode = FontLayoutHorizontalPaddingMode.NO_RIGHT_PADDING;
    }

    fullPadding() {
        this._driverOptions._renderingHorizontalPaddingMode = FontLayoutHorizontalPaddingMode.FULL_PADDING;
    }
}
