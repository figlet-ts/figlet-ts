import { type FontLayoutManagerOptions } from './FontLayoutManagerOptions';

export class FontLayoutManagerOptionsExtensionHorizontalSmushingRules {
    constructor(private readonly _driverOptions: FontLayoutManagerOptions) {}

    public enableEqualCharacterSmushing() {
        this._driverOptions._overrideHorizontalEqualCharacterSmushing = true;
    }

    public disableEqualCharacterSmushing() {
        this._driverOptions._overrideHorizontalEqualCharacterSmushing = false;
    }

    public unsetEqualCharacterSmushing() {
        this._driverOptions._overrideHorizontalEqualCharacterSmushing = undefined;
    }

    public enableUnderscoreSmushing() {
        this._driverOptions._overrideHorizontalUnderscoreSmushing = true;
    }

    public disableUnderscoreSmushing() {
        this._driverOptions._overrideHorizontalUnderscoreSmushing = false;
    }

    public unsetUnderscoreSmushing() {
        this._driverOptions._overrideHorizontalUnderscoreSmushing = undefined;
    }

    public enableHierarchySmushing() {
        this._driverOptions._overrideHorizontalHierarchySmushing = true;
    }

    public disableHierarchySmushing() {
        this._driverOptions._overrideHorizontalHierarchySmushing = false;
    }

    public unsetHierarchySmushing() {
        this._driverOptions._overrideHorizontalHierarchySmushing = undefined;
    }

    public enableOppositePairSmushing() {
        this._driverOptions._overrideHorizontalOppositePairSmushing = true;
    }

    public disableOppositePairSmushing() {
        this._driverOptions._overrideHorizontalOppositePairSmushing = false;
    }

    public unsetOppositePairSmushing() {
        this._driverOptions._overrideHorizontalOppositePairSmushing = undefined;
    }

    public enableBigXSmushing() {
        this._driverOptions._overrideHorizontalBigXSmushing = true;
    }

    public disableBigXSmushing() {
        this._driverOptions._overrideHorizontalBigXSmushing = false;
    }

    public unsetBigXSmushing() {
        this._driverOptions._overrideHorizontalBigXSmushing = undefined;
    }

    public enableHardblankSmushing(): void {
        this._driverOptions._overrideHorizontalHardblankSmushing = true;
    }

    public disableHardblankSmushing(): void {
        this._driverOptions._overrideHorizontalHardblankSmushing = false;
    }

    public unsetHardblankSmushing(): void {
        this._driverOptions._overrideHorizontalHardblankSmushing = undefined;
    }

    public enableHorizontalSmushPlusMode(): void {
        this._driverOptions._renderingHorizontalSmushPlusModeEnabled = true;
    }

    public disableHorizontalSmushPlusMode(): void {
        this._driverOptions._renderingHorizontalSmushPlusModeEnabled = false;
    }
}
