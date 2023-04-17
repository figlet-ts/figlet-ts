import { type FontLayoutManagerOptions } from './FontLayoutManagerOptions';

export class FontLayoutManagerOptionsExtensionWidth {
    constructor(private readonly _driverOptions: FontLayoutManagerOptions) {}

    useTerminalWidth() {
        this._driverOptions._renderingWidth = process.stdout.columns;
    }

    set(width: number) {
        this._driverOptions._renderingWidth = width;
    }

    get(): number {
        return this._driverOptions.getRenderingWidth();
    }

    useDefault() {
        this._driverOptions._renderingWidth = undefined;
    }
}
