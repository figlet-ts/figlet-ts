import { FIGFontPrintDirection } from '../../../src/enums/FIGFontPrintDirection';
import { DefaultLayoutRules } from '../../../src/layoutRules/DefaultLayoutRules';

describe('Check the default layout rules are as expected', () => {
    const defaultLayoutRules = new DefaultLayoutRules();
    test('', () => {
        expect(defaultLayoutRules.doHorizontalSmushing()).toEqual(true);
        expect(defaultLayoutRules.doHorizontalUniversalSmushing()).toEqual(true);

        expect(defaultLayoutRules.doHorizontalBigXSmushing()).toEqual(false);
        expect(defaultLayoutRules.doHorizontalEqualCharacterSmushing()).toEqual(false);
        expect(defaultLayoutRules.doHorizontalKerning()).toEqual(false);
        expect(defaultLayoutRules.doHorizontalHardblankSmushing()).toEqual(false);
        expect(defaultLayoutRules.doHorizontalHierarchySmushing()).toEqual(false);
        expect(defaultLayoutRules.doHorizontalOppositePairSmushing()).toEqual(false);
        expect(defaultLayoutRules.doHorizontalUnderscoreSmushing()).toEqual(false);
        expect(defaultLayoutRules.doHorizontalFullWidthLayout()).toEqual(false);

        expect(defaultLayoutRules.doVerticalKerning()).toEqual(true);
        expect(defaultLayoutRules.doVerticalSmushing()).toEqual(false);
        expect(defaultLayoutRules.doVerticalEqualCharacterSmushing()).toEqual(false);
        expect(defaultLayoutRules.doVerticalHierarchySmushing()).toEqual(false);
        expect(defaultLayoutRules.doVerticalHorizontalLineSmushing()).toEqual(false);
        expect(defaultLayoutRules.doVerticalUnderscoreSmushing()).toEqual(false);
        expect(defaultLayoutRules.doVerticalVerticalLineSuperSmushing()).toEqual(false);

        expect(defaultLayoutRules.getRenderingWidth()).toEqual(80);
        expect(defaultLayoutRules.getPrintDirection()).toEqual(FIGFontPrintDirection.LEFT_TO_RIGHT);
    });
});
