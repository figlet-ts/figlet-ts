import { type FIGFontPrintDirection } from '../enums/FIGFontPrintDirection';

export abstract class LayoutRulesBase {
    abstract doHorizontalEqualCharacterSmushing(): boolean;
    abstract doHorizontalUnderscoreSmushing(): boolean;
    abstract doHorizontalHierarchySmushing(): boolean;
    abstract doHorizontalOppositePairSmushing(): boolean;
    abstract doHorizontalBigXSmushing(): boolean;
    abstract doHorizontalHardblankSmushing(): boolean;
    abstract doHorizontalKerning(): boolean;
    abstract doHorizontalSmushing(): boolean;
    abstract doVerticalEqualCharacterSmushing(): boolean;
    abstract doVerticalUnderscoreSmushing(): boolean;
    abstract doVerticalHierarchySmushing(): boolean;
    abstract doVerticalHorizontalLineSmushing(): boolean;
    abstract doVerticalVerticalLineSuperSmushing(): boolean;
    abstract doVerticalKerning(): boolean;
    abstract doVerticalSmushing(): boolean;
    abstract getPrintDirection(): FIGFontPrintDirection;
    abstract getRenderingWidth(): number;

    doHorizontalUniversalSmushing(): boolean {
        // Universal Smushing is defined as "smushing is allowed, but no rules were specified"
        return (
            this.doHorizontalSmushing() &&
            !this.doHorizontalEqualCharacterSmushing() &&
            !this.doHorizontalUnderscoreSmushing() &&
            !this.doHorizontalHierarchySmushing() &&
            !this.doHorizontalOppositePairSmushing() &&
            !this.doHorizontalBigXSmushing() &&
            !this.doHorizontalHardblankSmushing()
        );
    }

    doVerticalUniversalSmushing(): boolean {
        // Universal Smushing is defined as "smushing is allowed, but no rules were specified"
        return (
            this.doVerticalSmushing() &&
            !this.doVerticalEqualCharacterSmushing() &&
            !this.doVerticalHierarchySmushing() &&
            !this.doVerticalHorizontalLineSmushing() &&
            !this.doVerticalUnderscoreSmushing()
        );
    }

    doHorizontalFullWidthLayout(): boolean {
        return !this.doHorizontalKerning() && !this.doHorizontalSmushing();
    }
}
