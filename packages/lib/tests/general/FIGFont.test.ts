import { jest } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { FIGFont, FLFParser } from '../../src';
import { FIGFontLayoutRule } from '../../src/enums/FIGFontLayoutRule';
import { FIGFontIllegalHardblankCharacter } from '../../src/errors/FIGFontErrors';
import { CharacterCodes } from '../../src/utils/CharacterCodes';

describe('Hardblank Tests', () => {
    test('Invalid hardblanks', () => {
        // @ts-expect-error Need to allow passing null (despite the function requiring a number) to test defense against null in JS use
        expect(() => (new FIGFont().hardblankCharacter = null)).toThrowError(FIGFontIllegalHardblankCharacter);
        expect(() => (new FIGFont().hardblankCharacter = CharacterCodes.ASCII_NULL)).toThrowError(FIGFontIllegalHardblankCharacter);
        expect(() => (new FIGFont().hardblankCharacter = CharacterCodes.ASCII_SPACE)).toThrowError(FIGFontIllegalHardblankCharacter);
        expect(() => (new FIGFont().hardblankCharacter = CharacterCodes.ASCII_CARRIAGE_RETURN)).toThrowError(FIGFontIllegalHardblankCharacter);
        expect(() => (new FIGFont().hardblankCharacter = CharacterCodes.ASCII_LINE_FEED)).toThrowError(FIGFontIllegalHardblankCharacter);
        expect(() => (new FIGFont().hardblankCharacter = -1)).toThrowError(FIGFontIllegalHardblankCharacter);
        expect(() => (new FIGFont().hardblankCharacter = 155)).toThrowError(FIGFontIllegalHardblankCharacter);
    });
});

describe('Signature Tests', () => {
    test('Invalid signatures', () => {
        expect(() => (new FIGFont().signature = '')).toThrowError('Signature not 5 characters in length');
        expect(() => (new FIGFont().signature = 'abcde')).toThrowError('Signature must start with flf2');
    });
    test('Unexpected signatures', () => {
        const debugSpy = jest.spyOn(console, 'debug');
        new FIGFont().signature = 'flf2b';
        expect(debugSpy).toHaveBeenCalledWith('Font signature expected to be flf2a but received "flf2b".  Non-fatal - continuing.');
    });
});

describe('General Invalid Uses', () => {
    test('Invalid heights', () => {
        expect(() => (new FIGFont().height = -1)).toThrowError('Height must be greater than 0');
        expect(() => (new FIGFont().height = 0)).toThrowError('Height must be greater than 0');
    });

    test('Invalid print directions', () => {
        const font = new FIGFont();
        expect(() => {
            font.printDirection = 1.32;
        }).toThrowError('Print Direction parameter must be zero (LTR) or one (RTL).  Received value was: 1.32');
        expect(() => {
            font.printDirection = 2;
        }).toThrowError('Print Direction parameter must be zero (LTR) or one (RTL).  Received value was: 2');
        expect(() => {
            font.printDirection = -3;
        }).toThrowError('Print Direction parameter must be zero (LTR) or one (RTL).  Received value was: -3');
    });

    test('Invalid full layout settings', () => {
        const font = new FIGFont();
        expect(() => {
            font.fullLayout = 1.42;
        }).toThrowError('Full Layout parameter must be an integer between 0 and 32,767 inclusive.  Received value was: 1.42');
        expect(() => {
            font.fullLayout = 32768;
        }).toThrowError('Full Layout parameter must be an integer between 0 and 32,767 inclusive.  Received value was: 32768');
        expect(() => {
            font.fullLayout = -3;
        }).toThrowError('Full Layout parameter must be an integer between 0 and 32,767 inclusive.  Received value was: -3');
    });

    test('Invalid code tag counts', () => {
        const font = new FIGFont();
        expect(() => {
            font.codetagCount = 1.42;
        }).toThrowError('Codetag Count parameter must be an integer greater than or equal to zero.  Received value was: 1.42');
        expect(() => {
            font.codetagCount = -3;
        }).toThrowError('Codetag Count parameter must be an integer greater than or equal to zero.  Received value was: -3');
    });
});

describe('Test NaN Defensive Cases', () => {
    test('NaN print directions', () => {
        const font = new FIGFont();
        font.printDirection = NaN;
        expect(font.getPrintDirection()).toEqual(0);
    });

    test('Invalid full layout settings', () => {
        const font = new FIGFont();
        font.fullLayout = NaN;
        expect(font.fullLayout).toEqual(0);
    });

    test('Invalid code tag counts', () => {
        const font = new FIGFont();
        font.codetagCount = NaN;
        expect(font.codetagCount).toEqual(0);
    });
});

describe('Test old layout flags', () => {
    const font = new FIGFont();
    test('Full width layout', () => {
        font.oldLayout = -1; // Full width, just means "not kerning nor smushing"
        expect(font.doHorizontalKerning()).toBe(false);
        expect(font.doHorizontalSmushing()).toBe(false);
    });
    test('Horizontal Kerning', () => {
        font.oldLayout = 0;
        expect(font.doHorizontalKerning()).toBe(true);
        expect(font.doHorizontalEqualCharacterSmushing()).toBe(false);
        expect(font.doHorizontalUnderscoreSmushing()).toBe(false);
        expect(font.doHorizontalHierarchySmushing()).toBe(false);
        expect(font.doHorizontalOppositePairSmushing()).toBe(false);
        expect(font.doHorizontalBigXSmushing()).toBe(false);
        expect(font.doHorizontalHardblankSmushing()).toBe(false);
    });
    test('Horizontal Equal Character & Underscore smushing flags', () => {
        font.oldLayout = 3;
        expect(font.doHorizontalEqualCharacterSmushing()).toBe(true);
        expect(font.doHorizontalUnderscoreSmushing()).toBe(true);
        expect(font.doHorizontalHierarchySmushing()).toBe(false);
        expect(font.doHorizontalOppositePairSmushing()).toBe(false);
        expect(font.doHorizontalBigXSmushing()).toBe(false);
        expect(font.doHorizontalHardblankSmushing()).toBe(false);
    });
    test('Horizontal Hierarchy & Opposite Pair & Big X smushing flags', () => {
        font.oldLayout = 28;
        expect(font.doHorizontalEqualCharacterSmushing()).toBe(false);
        expect(font.doHorizontalUnderscoreSmushing()).toBe(false);
        expect(font.doHorizontalHierarchySmushing()).toBe(true);
        expect(font.doHorizontalOppositePairSmushing()).toBe(true);
        expect(font.doHorizontalBigXSmushing()).toBe(true);
        expect(font.doHorizontalHardblankSmushing()).toBe(false);
    });
    test('Horizontal Hardblank smushing flag', () => {
        font.oldLayout = 32;
        expect(font.doHorizontalEqualCharacterSmushing()).toBe(false);
        expect(font.doHorizontalUnderscoreSmushing()).toBe(false);
        expect(font.doHorizontalHierarchySmushing()).toBe(false);
        expect(font.doHorizontalOppositePairSmushing()).toBe(false);
        expect(font.doHorizontalBigXSmushing()).toBe(false);
        expect(font.doHorizontalHardblankSmushing()).toBe(true);
    });
});

describe('Test full layout horizontal flags', () => {
    const font = new FIGFont();
    test('Full width layout', () => {
        font.fullLayout = 0; // Full width, just means "not kerning nor smushing"
        expect(font.doHorizontalKerning()).toBe(false);
        expect(font.doHorizontalSmushing()).toBe(false);
    });
    test('Horizontal Kerning', () => {
        font.fullLayout = FIGFontLayoutRule.HORIZONTAL_KERNING;
        expect(font.doHorizontalKerning()).toBe(true);
        expect(font.doHorizontalSmushing()).toBe(false);
        expect(font.doHorizontalEqualCharacterSmushing()).toBe(false);
        expect(font.doHorizontalUnderscoreSmushing()).toBe(false);
        expect(font.doHorizontalHierarchySmushing()).toBe(false);
        expect(font.doHorizontalOppositePairSmushing()).toBe(false);
        expect(font.doHorizontalBigXSmushing()).toBe(false);
        expect(font.doHorizontalHardblankSmushing()).toBe(false);
    });
    test('Horizontal Smushing', () => {
        font.fullLayout = FIGFontLayoutRule.HORIZONTAL_SMUSHING;
        expect(font.doHorizontalKerning()).toBe(false);
        expect(font.doHorizontalSmushing()).toBe(true);
        expect(font.doHorizontalEqualCharacterSmushing()).toBe(false);
        expect(font.doHorizontalUnderscoreSmushing()).toBe(false);
        expect(font.doHorizontalHierarchySmushing()).toBe(false);
        expect(font.doHorizontalOppositePairSmushing()).toBe(false);
        expect(font.doHorizontalBigXSmushing()).toBe(false);
        expect(font.doHorizontalHardblankSmushing()).toBe(false);
    });
    test('Horizontal Equal Character & Underscore smushing flags', () => {
        font.fullLayout = FIGFontLayoutRule.HORIZONTAL_EQUAL_CHARACTER_SMUSHING + FIGFontLayoutRule.HORIZONTAL_UNDERSCORE_SMUSHING;
        expect(font.doHorizontalEqualCharacterSmushing()).toBe(true);
        expect(font.doHorizontalUnderscoreSmushing()).toBe(true);
        expect(font.doHorizontalHierarchySmushing()).toBe(false);
        expect(font.doHorizontalOppositePairSmushing()).toBe(false);
        expect(font.doHorizontalBigXSmushing()).toBe(false);
        expect(font.doHorizontalHardblankSmushing()).toBe(false);
    });
    test('Horizontal Hierarchy & Opposite Pair & Big X smushing flags', () => {
        font.fullLayout = FIGFontLayoutRule.HORIZONTAL_HIERARCHY_SMUSHING + FIGFontLayoutRule.HORIZONTAL_OPPOSITE_PAIR_SMUSHING + FIGFontLayoutRule.HORIZONTAL_BIG_X_SMUSHING;
        expect(font.doHorizontalEqualCharacterSmushing()).toBe(false);
        expect(font.doHorizontalUnderscoreSmushing()).toBe(false);
        expect(font.doHorizontalHierarchySmushing()).toBe(true);
        expect(font.doHorizontalOppositePairSmushing()).toBe(true);
        expect(font.doHorizontalBigXSmushing()).toBe(true);
        expect(font.doHorizontalHardblankSmushing()).toBe(false);
    });
    test('Horizontal Hardblank smushing flag', () => {
        font.fullLayout = FIGFontLayoutRule.HORIZONTAL_HARDBLANK_SMUSHING;
        expect(font.doHorizontalEqualCharacterSmushing()).toBe(false);
        expect(font.doHorizontalUnderscoreSmushing()).toBe(false);
        expect(font.doHorizontalHierarchySmushing()).toBe(false);
        expect(font.doHorizontalOppositePairSmushing()).toBe(false);
        expect(font.doHorizontalBigXSmushing()).toBe(false);
        expect(font.doHorizontalHardblankSmushing()).toBe(true);
    });
});

describe('Test full layout vertical flags', () => {
    const font = new FIGFont();
    test('Full height layout', () => {
        font.fullLayout = 0; // Full height, just means "not kerning nor smushing"
        expect(font.doVerticalKerning()).toBe(false);
        expect(font.doVerticalSmushing()).toBe(false);
    });
    test('Vertical Kerning', () => {
        font.fullLayout = FIGFontLayoutRule.VERTICAL_KERNING;
        expect(font.doVerticalKerning()).toBe(true);
        expect(font.doVerticalSmushing()).toBe(false);
        expect(font.doVerticalEqualCharacterSmushing()).toBe(false);
        expect(font.doVerticalUnderscoreSmushing()).toBe(false);
        expect(font.doVerticalHierarchySmushing()).toBe(false);
        expect(font.doVerticalHorizontalLineSmushing()).toBe(false);
        expect(font.doVerticalVerticalLineSuperSmushing()).toBe(false);
    });
    test('Vertical Smushing', () => {
        font.fullLayout = FIGFontLayoutRule.VERTICAL_SMUSHING;
        expect(font.doVerticalKerning()).toBe(false);
        expect(font.doVerticalSmushing()).toBe(true);
        expect(font.doVerticalEqualCharacterSmushing()).toBe(false);
        expect(font.doVerticalUnderscoreSmushing()).toBe(false);
        expect(font.doVerticalHierarchySmushing()).toBe(false);
        expect(font.doVerticalHorizontalLineSmushing()).toBe(false);
        expect(font.doVerticalVerticalLineSuperSmushing()).toBe(false);
    });
    test('Vertical Equal Character & Underscore smushing flags', () => {
        font.fullLayout = FIGFontLayoutRule.VERTICAL_EQUAL_CHARACTER_SMUSHING + FIGFontLayoutRule.VERTICAL_UNDERSCORE_SMUSHING;
        expect(font.doVerticalEqualCharacterSmushing()).toBe(true);
        expect(font.doVerticalUnderscoreSmushing()).toBe(true);
        expect(font.doVerticalHierarchySmushing()).toBe(false);
        expect(font.doVerticalHorizontalLineSmushing()).toBe(false);
        expect(font.doVerticalVerticalLineSuperSmushing()).toBe(false);
    });
    test('Vertical Hierarchy & Vertical Horizontal Line smushing flags', () => {
        font.fullLayout = FIGFontLayoutRule.VERTICAL_HIERARCHY_SMUSHING + FIGFontLayoutRule.VERTICAL_HORIZONTAL_LINE_SMUSHING;
        expect(font.doVerticalEqualCharacterSmushing()).toBe(false);
        expect(font.doVerticalUnderscoreSmushing()).toBe(false);
        expect(font.doVerticalHierarchySmushing()).toBe(true);
        expect(font.doVerticalHorizontalLineSmushing()).toBe(true);
        expect(font.doVerticalVerticalLineSuperSmushing()).toBe(false);
    });
    test('Vertical Line Supersmushing flag', () => {
        font.fullLayout = FIGFontLayoutRule.VERTICAL_VERTICAL_LINE_SUPERSMUSHING;
        expect(font.doVerticalEqualCharacterSmushing()).toBe(false);
        expect(font.doVerticalUnderscoreSmushing()).toBe(false);
        expect(font.doVerticalHierarchySmushing()).toBe(false);
        expect(font.doVerticalHorizontalLineSmushing()).toBe(false);
        expect(font.doVerticalVerticalLineSuperSmushing()).toBe(true);
    });
});

describe('Test using the font as convenience proxy for a default FontLayoutManager', () => {
    test('Rendering standard.flf', () => {
        const fontStandard = FLFParser.parse(fs.readFileSync(path.join('..', '..', 'assets', 'fonts', 'core', 'standard.flf')).toString()).font;
        expect(fontStandard.renderText('AB').length).toEqual(95);
        expect(fontStandard.renderText('XA').length).toEqual(95);
    });
    test('Rendering ivrit.flf', () => {
        const fontStandard = FLFParser.parse(fs.readFileSync(path.join('..', '..', 'assets', 'fonts', 'core', 'ivrit.flf')).toString()).font;
        expect(fontStandard.renderText('AB').length).toEqual(485);
        expect(fontStandard.renderText('XA').length).toEqual(485);
    });
});
