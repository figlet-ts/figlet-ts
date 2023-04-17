import { type FontLayoutManagerOptions } from './FontLayoutManagerOptions';

export class FontLayoutManagerOptionsExtensionHorizontalLayout {
    constructor(private readonly _driverOptions: FontLayoutManagerOptions) {}

    default() {
        this.unsetHorizontalKerning();
        this.unsetHorizontalSmushing();
    }

    full() {
        this.disableHorizontalKerning();
        this.disableHorizontalSmushing();
    }

    kern() {
        this.enableHorizontalKerning();
        this.disableHorizontalSmushing();
    }

    smush() {
        this.disableHorizontalKerning();
        this.enableHorizontalSmushing();
    }

    public enableHorizontalKerning() {
        this._driverOptions._overrideHorizontalKerning = true;
    }

    public disableHorizontalKerning() {
        this._driverOptions._overrideHorizontalKerning = false;
    }

    public unsetHorizontalKerning() {
        this._driverOptions._overrideHorizontalKerning = undefined;
    }

    public enableHorizontalSmushing() {
        this._driverOptions._overrideHorizontalSmushing = true;
    }

    public disableHorizontalSmushing() {
        this._driverOptions._overrideHorizontalSmushing = false;
    }

    public unsetHorizontalSmushing() {
        this._driverOptions._overrideHorizontalSmushing = undefined;
    }
}
