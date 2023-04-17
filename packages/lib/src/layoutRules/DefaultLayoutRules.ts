import { FIGFontPrintDirection } from '../enums/FIGFontPrintDirection';
import { LayoutRulesBase } from './LayoutRulesBase';

export class DefaultLayoutRules extends LayoutRulesBase {
    doHorizontalBigXSmushing(): boolean {
        return false;
    }

    doHorizontalEqualCharacterSmushing(): boolean {
        return false;
    }

    doHorizontalKerning(): boolean {
        return false;
    }

    doHorizontalHardblankSmushing(): boolean {
        return false;
    }

    doHorizontalHierarchySmushing(): boolean {
        return false;
    }

    doHorizontalOppositePairSmushing(): boolean {
        return false;
    }

    doHorizontalSmushing(): boolean {
        return true;
    }

    doHorizontalUnderscoreSmushing(): boolean {
        return false;
    }

    doVerticalKerning(): boolean {
        return true;
    }

    doVerticalSmushing(): boolean {
        return false;
    }

    doVerticalEqualCharacterSmushing(): boolean {
        return false;
    }

    doVerticalHierarchySmushing(): boolean {
        return false;
    }

    doVerticalHorizontalLineSmushing(): boolean {
        return false;
    }

    doVerticalUnderscoreSmushing(): boolean {
        return false;
    }

    doVerticalVerticalLineSuperSmushing(): boolean {
        return false;
    }

    getPrintDirection(): FIGFontPrintDirection {
        return FIGFontPrintDirection.LEFT_TO_RIGHT;
    }

    getRenderingWidth(): number {
        return 80;
    }
}
