import { FIGFontPrintDirection } from '../../src/enums/FIGFontPrintDirection';
import { GlyphType } from '../../src/enums/GlyphType';
import { FIGCharacter } from '../../src/FIGCharacter';

const HBLANK = '$'.charCodeAt(0);

describe('Test FIGCharacter parsing required glyphs', () => {
    const REQUIRED_EMPTY_GLYPH = '@\n@\n@\n@\n@@';

    const REQUIRED_MALFORMED_GLYPH_NO_CONTENT = '';
    const REQUIRED_MALFORMED_GLYPH_NOT_TERMINATED = '@\n@\n@\n@\n   ';

    const REQUIRED_GLPYH_WIDTH_1 = '@@\n$@\n$@\n$@\n$@';
    const REQUIRED_GLPYH_WIDTH_4 = '    @\n    @\n    @\n    @\n    @';
    const REQUIRED_GLPYH_WIDTH_4_WITH_HARDBLANK = '    @\n   $@\n    @\n    @\n    @';
    const REQUIRED_GLPYH_WIDTH_4_INCONSISTENT_WIDTH = '  @\n @\n @\n @\n    @';

    test('Handling empty glyphs', () => {
        expect(FIGCharacter.fromRequiredFIGCharacterString(32, HBLANK, REQUIRED_EMPTY_GLYPH).isEmptyGlyph).toEqual(true);
    });

    test('Handling malformed glyphs: zero glyph content', () => {
        expect(() => FIGCharacter.fromRequiredFIGCharacterString(32, HBLANK, REQUIRED_MALFORMED_GLYPH_NO_CONTENT)).toThrowError('Character glyph has zero content');
    });

    test('Handling malformed glyphs: no termination', () => {
        expect(() => FIGCharacter.fromRequiredFIGCharacterString(32, HBLANK, REQUIRED_MALFORMED_GLYPH_NOT_TERMINATED)).toThrowError('Character line was not terminated with character @');
    });

    test('Correctly padding inconsistent-width glyph', () => {
        const glyph = FIGCharacter.fromRequiredFIGCharacterString(32, HBLANK, REQUIRED_GLPYH_WIDTH_4_INCONSISTENT_WIDTH);

        expect(glyph.width).toEqual(4);
        expect(glyph.getGlyph()).toEqual([
            [32, 32, 32, 32],
            [32, 32, 32, 32],
            [32, 32, 32, 32],
            [32, 32, 32, 32],
            [32, 32, 32, 32]
        ]);
    });

    test('Handling well-formed glyph: 1-wide', () => {
        const glyph = FIGCharacter.fromRequiredFIGCharacterString(32, HBLANK, REQUIRED_GLPYH_WIDTH_1);
        expect(glyph.width).toEqual(1);
        expect(glyph.comment).toEqual('Required ASCII character code 32 / " "');
    });

    test('Handling well-formed glyph: 4-wide', () => {
        const glyph = FIGCharacter.fromRequiredFIGCharacterString(32, HBLANK, REQUIRED_GLPYH_WIDTH_4);
        expect(glyph.width).toEqual(4);
        expect(glyph.height).toEqual(5);
        expect(glyph.comment).toEqual('Required ASCII character code 32 / " "');
        expect(glyph.characterCode).toEqual(32);
        expect(glyph.character).toEqual(' ');
        expect(glyph.getGlyph()).toEqual([
            [32, 32, 32, 32],
            [32, 32, 32, 32],
            [32, 32, 32, 32],
            [32, 32, 32, 32],
            [32, 32, 32, 32]
        ]);
        expect(glyph.getGlyphLine(0)).toEqual([32, 32, 32, 32]);
        expect(glyph.hardblankCharacter).toEqual(36);
        expect(glyph.paddingInfo).not.toEqual(undefined);
        expect(glyph.glyphType).toEqual(GlyphType.FLF_MANDATORY);
    });

    test('Handling well-formed glyph: 4-wide with hardblank', () => {
        const glyph = FIGCharacter.fromRequiredFIGCharacterString(32, HBLANK, REQUIRED_GLPYH_WIDTH_4_WITH_HARDBLANK);
        expect(glyph.getGlyph()).toEqual([
            [32, 32, 32, 32],
            [32, 32, 32, 36],
            [32, 32, 32, 32],
            [32, 32, 32, 32],
            [32, 32, 32, 32]
        ]);
        expect(glyph.getGlyphLine(1)).toEqual([32, 32, 32, 36]);
        expect(glyph.getTotalMaxHorizontalSmushDistance(FIGFontPrintDirection.LEFT_TO_RIGHT)).toEqual(3);
        expect(glyph.getTotalMaxHorizontalSmushDistance(FIGFontPrintDirection.RIGHT_TO_LEFT)).toEqual(0);
    });
});

describe('Test FIGCharacter parsing code-tagged glyphs', () => {
    const CODE_TAGGED_EMPTY_GLYPH = '0 BLANK\n@\n@\n@\n@\n@@';

    const CODE_TAGGED_MALFORMED_GLYPH_TOO_FEW_LINEST = '0 BLANK';
    const CODE_TAGGED_MALFORMED_GLYPH_ZERO_CONTENT = '0 BLANK\n';
    const CODE_TAGGED_MALFORMED_GLYPH_NO_TAGGED_CHARACTER = '@\n@\n@\n@\n   ';
    const CODE_TAGGED_MALFORMED_GLYPH_NOT_TERMINATED = '0 BLANK\n@\n@\n@\n@\n   ';

    const CODE_TAGGED_GLPYH_WIDTH_1 = '0 BLANK\n@@\n$@\n$@\n$@\n$@';
    const CODE_TAGGED_GLPYH_WIDTH_4 = '0x64 BLANK\n    @\n    @\n    @\n    @\n    @';
    const CODE_TAGGED_GLYPH_WIDTH_4_INCONSISTENT_WIDTH = '0x64 BLANK\n  @\n @\n @\n @\n    @';

    const CODE_TAGGED_GLPYH_OCT_011 = '011 BLANK\n@@\n$@\n$@\n$@\n$@';
    const CODE_TAGGED_GLPYH_OCT_0144 = '0144 BLANK\n@@\n$@\n$@\n$@\n$@';
    const CODE_TAGGED_GLPYH_HEX_0X00 = '0x00 BLANK\n@@\n$@\n$@\n$@\n$@';
    const CODE_TAGGED_GLPYH_HEX_0X64 = '0x64 BLANK\n@@\n$@\n$@\n$@\n$@';
    const CODE_TAGGED_GLPYH_DEC_100 = '100 BLANK\n@@\n$@\n$@\n$@\n$@';

    const CODE_TAGGED_GLPYH_OCT_NEGATIVE_011 = '-011 BLANK\n@@\n$@\n$@\n$@\n$@';
    const CODE_TAGGED_GLPYH_OCT_NEGATIVE_0144 = '-0144 BLANK\n@@\n$@\n$@\n$@\n$@';
    const CODE_TAGGED_GLPYH_HEX_NEGATIVE_0X64 = '-0x64 BLANK\n@@\n$@\n$@\n$@\n$@';
    const CODE_TAGGED_GLPYH_DEC_NEGATIVE_100 = '-100 BLANK\n@@\n$@\n$@\n$@\n$@';

    test('Handling empty glyphs', () => {
        expect(FIGCharacter.fromCodeTaggedFIGCharacterString(0, CODE_TAGGED_EMPTY_GLYPH).isEmptyGlyph).toEqual(true);
    });

    test('Handling malformed glyphs: non parseable code tag', () => {
        expect(() => FIGCharacter.fromCodeTaggedFIGCharacterString(0, CODE_TAGGED_MALFORMED_GLYPH_NO_TAGGED_CHARACTER)).toThrowError(
            'Cannot parse code tag line "@" as hexadecimal, octal nor decimal value'
        );
    });

    test('Handling malformed glyphs: no termination', () => {
        expect(() => FIGCharacter.fromCodeTaggedFIGCharacterString(0, CODE_TAGGED_MALFORMED_GLYPH_NOT_TERMINATED)).toThrowError('Character line was not terminated with character @');
    });

    test('Handling malformed glyphs: too few lines', () => {
        expect(() => FIGCharacter.fromCodeTaggedFIGCharacterString(0, CODE_TAGGED_MALFORMED_GLYPH_TOO_FEW_LINEST)).toThrowError('Code tagged character has insufficient glyph lines');
    });

    test('Handling malformed glyphs: zero glyph content', () => {
        expect(() => FIGCharacter.fromCodeTaggedFIGCharacterString(0, CODE_TAGGED_MALFORMED_GLYPH_ZERO_CONTENT)).toThrowError('Character glyph has zero content');
    });

    test('Handling well-formed glyph: 1-wide', () => {
        const glyph = FIGCharacter.fromCodeTaggedFIGCharacterString(0, CODE_TAGGED_GLPYH_WIDTH_1);
        expect(glyph.width).toEqual(1);
        expect(glyph.comment).toEqual('BLANK');
        expect(glyph.hardblankCharacter).toEqual(0);
    });

    test('Handling well-formed glyph: 4-wide', () => {
        const glyph = FIGCharacter.fromCodeTaggedFIGCharacterString(44, CODE_TAGGED_GLPYH_WIDTH_4);
        expect(glyph.width).toEqual(4);
        expect(glyph.height).toEqual(5);
        expect(glyph.comment).toEqual('BLANK');
        expect(glyph.characterCode).toEqual(100);
        expect(glyph.character).toEqual('d');
        expect(glyph.getGlyph()).toEqual([
            [32, 32, 32, 32],
            [32, 32, 32, 32],
            [32, 32, 32, 32],
            [32, 32, 32, 32],
            [32, 32, 32, 32]
        ]);
        expect(glyph.getGlyphLine(0)).toEqual([32, 32, 32, 32]);
        expect(glyph.hardblankCharacter).toEqual(44);
        expect(glyph.paddingInfo).not.toEqual(undefined);
        expect(glyph.glyphType).toEqual(GlyphType.FLF_CODE_TAGGED);
    });

    test('Correctly padding inconsistent-width glyph', () => {
        const glyph = FIGCharacter.fromCodeTaggedFIGCharacterString(44, CODE_TAGGED_GLYPH_WIDTH_4_INCONSISTENT_WIDTH);
        expect(glyph.width).toEqual(4);
        expect(glyph.height).toEqual(5);
        expect(glyph.comment).toEqual('BLANK');
        expect(glyph.characterCode).toEqual(100);
        expect(glyph.character).toEqual('d');
        expect(glyph.getGlyph()).toEqual([
            [32, 32, 32, 32],
            [32, 32, 32, 32],
            [32, 32, 32, 32],
            [32, 32, 32, 32],
            [32, 32, 32, 32]
        ]);
        expect(glyph.getGlyphLine(0)).toEqual([32, 32, 32, 32]);
        expect(glyph.hardblankCharacter).toEqual(44);
    });

    test('Handling well-formed glyph: octal character codes', () => {
        expect(FIGCharacter.fromCodeTaggedFIGCharacterString(0, CODE_TAGGED_GLPYH_OCT_011).characterCode).toEqual(9);
        expect(FIGCharacter.fromCodeTaggedFIGCharacterString(0, CODE_TAGGED_GLPYH_OCT_0144).characterCode).toEqual(100);
        expect(FIGCharacter.fromCodeTaggedFIGCharacterString(0, CODE_TAGGED_GLPYH_OCT_NEGATIVE_011).characterCode).toEqual(-9);
        expect(FIGCharacter.fromCodeTaggedFIGCharacterString(0, CODE_TAGGED_GLPYH_OCT_NEGATIVE_0144).characterCode).toEqual(-100);
    });

    test('Handling well-formed glyph: hexadecimal character codes', () => {
        expect(FIGCharacter.fromCodeTaggedFIGCharacterString(0, CODE_TAGGED_GLPYH_HEX_0X00).characterCode).toEqual(0);
        expect(FIGCharacter.fromCodeTaggedFIGCharacterString(0, CODE_TAGGED_GLPYH_HEX_0X64).characterCode).toEqual(100);
        expect(FIGCharacter.fromCodeTaggedFIGCharacterString(0, CODE_TAGGED_GLPYH_HEX_NEGATIVE_0X64).characterCode).toEqual(-100);
    });

    test('Handling well-formed glyph: decimal character codes', () => {
        expect(FIGCharacter.fromCodeTaggedFIGCharacterString(0, CODE_TAGGED_GLPYH_DEC_100).characterCode).toEqual(100);
        expect(FIGCharacter.fromCodeTaggedFIGCharacterString(0, CODE_TAGGED_GLPYH_DEC_NEGATIVE_100).characterCode).toEqual(-100);
    });
});
