import fs from 'fs';
import path from 'path';
import { FLFParser, FontDiagnosticUtils } from '../../../src';
import { FIGCharacter } from '../../../src/FIGCharacter';

describe('Test diagnostic tools', () => {
    const squareFc = FIGCharacter.fromRequiredFIGCharacterString(44, '$'.charCodeAt(0), '|-|@\n| |@\n|-|@@');
    const fontStandard = FLFParser.parse(fs.readFileSync(path.join('..', '..', 'assets', 'fonts', 'core', 'standard.flf')).toString()).font;
    const fontIvrit = FLFParser.parse(fs.readFileSync(path.join('..', '..', 'assets', 'fonts', 'core', 'ivrit.flf')).toString()).font;

    const fontStandardDiagnostics = fs.readFileSync(path.join('..', '..', 'assets', 'testFixtures', 'diagnosticUtils', 'standard.fontInfo.txt')).toString();
    const fontStandardAGlyphPaddingInfo = fs.readFileSync(path.join('..', '..', 'assets', 'testFixtures', 'diagnosticUtils', 'standard.a.paddingInfo.txt')).toString();

    const fontIvritDiagnostics = fs.readFileSync(path.join('..', '..', 'assets', 'testFixtures', 'diagnosticUtils', 'ivrit.fontInfo.txt')).toString();
    const fontIvritAGlyphPaddingInfo = fs.readFileSync(path.join('..', '..', 'assets', 'testFixtures', 'diagnosticUtils', 'ivrit.a.paddingInfo.txt')).toString();

    test('Character diagnostics', () => {
        expect(FontDiagnosticUtils.getFIGCharacterPaddingInfo(squareFc).length).toEqual(293);
    });
    test('Font diagnostics - LTR font', () => {
        const fontDiagnosticUtils: FontDiagnosticUtils = new FontDiagnosticUtils(fontStandard);
        expect(fontDiagnosticUtils.getFontInfo()).toBe(fontStandardDiagnostics);
        expect(fontDiagnosticUtils.getCharacterPaddingInfo('a')).toBe(fontStandardAGlyphPaddingInfo);
        expect(fontDiagnosticUtils.getCharacterPaddingInfo(String.fromCharCode(2))).toEqual(`Font does not have a glyph for character "${String.fromCharCode(2)}"`);
    });
    test('Font diagnostics - RTL font', () => {
        const fontDiagnosticUtils: FontDiagnosticUtils = new FontDiagnosticUtils(fontIvrit);
        expect(fontDiagnosticUtils.getFontInfo()).toBe(fontIvritDiagnostics);
        expect(fontDiagnosticUtils.getCharacterPaddingInfo('a')).toBe(fontIvritAGlyphPaddingInfo);
        expect(fontDiagnosticUtils.getCharacterPaddingInfo(String.fromCharCode(2))).toEqual(`Font does not have a glyph for character "${String.fromCharCode(2)}"`);
    });
});
