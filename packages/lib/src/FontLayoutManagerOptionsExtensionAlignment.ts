import { FontLayoutHorizontalAlignment } from './enums/FontLayoutHorizontalAlignment';
import { type FontLayoutManagerOptions } from './FontLayoutManagerOptions';

export class FontLayoutManagerOptionsExtensionAlignment {
    constructor(private readonly _driverOptions: FontLayoutManagerOptions) {}

    useFontDefaultAlignment() {
        this._driverOptions._renderingAlignment = FontLayoutHorizontalAlignment.FONT_DEFAULT;
    }

    left() {
        this._driverOptions._renderingAlignment = FontLayoutHorizontalAlignment.LEFT_ALIGN;
    }

    centre() {
        this._driverOptions._renderingAlignment = FontLayoutHorizontalAlignment.CENTRE_ALIGN;
    }

    right() {
        this._driverOptions._renderingAlignment = FontLayoutHorizontalAlignment.RIGHT_ALIGN;
    }
}
