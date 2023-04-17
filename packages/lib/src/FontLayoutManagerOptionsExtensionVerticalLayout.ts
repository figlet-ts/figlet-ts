import { type FontLayoutManagerOptions } from './FontLayoutManagerOptions';

export class FontLayoutManagerOptionsExtensionVerticalLayout {
    constructor(private readonly _driverOptions: FontLayoutManagerOptions) {}

    default() {
        this.unsetVerticalKerning();
        this.unsetVerticalSmushing();
    }

    full() {
        this.disableVerticalKerning();
        this.disableVerticalSmushing();
    }

    kern() {
        this.enableVerticalKerning();
        this.disableVerticalSmushing();
    }

    smush() {
        this.disableVerticalKerning();
        this.enableVerticalSmushing();
    }

    public enableVerticalKerning() {
        this._driverOptions._overrideVerticalKerning = true;
    }

    public disableVerticalKerning() {
        this._driverOptions._overrideVerticalKerning = false;
    }

    public unsetVerticalKerning() {
        this._driverOptions._overrideVerticalKerning = undefined;
    }

    public enableVerticalSmushing() {
        this._driverOptions._overrideVerticalSmushing = true;
    }

    public disableVerticalSmushing() {
        this._driverOptions._overrideVerticalSmushing = false;
    }

    public unsetVerticalSmushing() {
        this._driverOptions._overrideVerticalSmushing = undefined;
    }

    getVerticalKernMaxOffset(): number {
        return this._driverOptions._renderingVerticalKernMaxOffset;
    }

    setVerticalKernMaxOffset(value: number) {
        this._driverOptions._renderingVerticalKernMaxOffset = value;
    }

    setDefaultVerticalKernMaxOffset() {
        this._driverOptions._renderingVerticalKernMaxOffset = 1;
    }

    enablePreserveAspectRatio(): void {
        this._driverOptions._renderingPreserveAspectRatio = true;
    }

    disablePreserveAspectRatio() {
        this._driverOptions._renderingPreserveAspectRatio = false;
    }
}
