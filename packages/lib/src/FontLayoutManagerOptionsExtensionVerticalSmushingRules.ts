import { type FontLayoutManagerOptions } from './FontLayoutManagerOptions';

export class FontLayoutManagerOptionsExtensionVerticalSmushingRules {
    constructor(private readonly _driverOptions: FontLayoutManagerOptions) {}

    public enableEqualCharacterSmushing() {
        this._driverOptions._overrideVerticalEqualCharacterSmushing = true;
    }

    public disableEqualCharacterSmushing() {
        this._driverOptions._overrideVerticalEqualCharacterSmushing = false;
    }

    public unsetEqualCharacterSmushing() {
        this._driverOptions._overrideVerticalEqualCharacterSmushing = undefined;
    }

    public enableUnderscoreSmushing() {
        this._driverOptions._overrideVerticalUnderscoreSmushing = true;
    }

    public disableUnderscoreSmushing() {
        this._driverOptions._overrideVerticalUnderscoreSmushing = false;
    }

    public unsetUnderscoreSmushing() {
        this._driverOptions._overrideVerticalUnderscoreSmushing = undefined;
    }

    public enableHierarchySmushing() {
        this._driverOptions._overrideVerticalHierarchySmushing = true;
    }

    public disableHierarchySmushing() {
        this._driverOptions._overrideVerticalHierarchySmushing = false;
    }

    public unsetHierarchySmushing() {
        this._driverOptions._overrideVerticalHierarchySmushing = undefined;
    }

    public enableHorizontalLineSmushing() {
        this._driverOptions._overrideVerticalHorizontalLineSmushing = true;
    }

    public disableHorizontalLineSmushing() {
        this._driverOptions._overrideVerticalHorizontalLineSmushing = false;
    }

    public unsetHorizontalLineSmushing() {
        this._driverOptions._overrideVerticalHorizontalLineSmushing = undefined;
    }

    public enableVerticalLineSuperSmushing() {
        this._driverOptions._overrideVerticalVerticalLineSuperSmushing = true;
    }

    public disableVerticalLineSuperSmushing() {
        this._driverOptions._overrideVerticalVerticalLineSuperSmushing = false;
    }

    public unsetVerticalLineSuperSmushing() {
        this._driverOptions._overrideVerticalVerticalLineSuperSmushing = undefined;
    }
}
