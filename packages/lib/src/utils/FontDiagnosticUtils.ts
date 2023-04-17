import { FIGFontPrintDirection } from '../enums/FIGFontPrintDirection';
import { GlyphType } from '../enums/GlyphType';
import { FIGCharacter } from '../FIGCharacter';
import { type FIGFont } from '../FIGFont';
import { type LayoutRulesBase } from '../layoutRules/LayoutRulesBase';

export class FontDiagnosticUtils {
    constructor(private readonly _font: FIGFont) {}

    public getFontInfo(): string {
        const retVal: string[] = [];

        retVal.push('-- Font Header Info --');
        retVal.push('');
        retVal.push(`Raw Header Line           :  ${this._font.headerRaw}`);
        retVal.push(`Signature                 :  ${this._font.signature}`);
        retVal.push(`Hardblank Character       :  ${this._font.hardblankCharacter}`);
        retVal.push(`Font Height               :  ${this._font.height}`);
        retVal.push(`Font Baseline             :  ${this._font.baseline}`);
        retVal.push(`Max Character Length      :  ${this._font.maxLength}`);
        retVal.push(`Old Layout                :  ${this._font.oldLayout}`);
        retVal.push(`# Comment Lines           :  ${this._font.commentLineCount}`);
        retVal.push(`Print Direction           :  ${this._font.getPrintDirection() === FIGFontPrintDirection.LEFT_TO_RIGHT ? 'Left to Right' : 'Right to Left'}`);
        retVal.push(`Full Layout               :  ${this._font.fullLayout}`);
        retVal.push(`Code Tag Count            :  ${this._font.codetagCount}`);

        retVal.push('');
        retVal.push('-- Font Glyph Info --');
        retVal.push('');

        retVal.push(`Glyph Count               :  ${this._font.getFIGCharacterCount()}`);
        retVal.push(`Empty Glyph Count         :  ${this._font.getEmptyGlyphCount()}`);
        retVal.push(`Code Tagged Glyphs Count  :  ${this._font.getGlyphTypeCount(GlyphType.FLF_CODE_TAGGED)}`);

        retVal.push('');
        retVal.push('Comments:');
        retVal.push('');
        if (this._font.commentLineCount > 0) {
            retVal.push(...this._font.comments.map((x) => '    ' + x));
        }

        retVal.push('');
        retVal.push('');

        retVal.push(FontDiagnosticUtils.getLayoutInfo(this._font));

        retVal.push('');
        return retVal.join('\n');
    }

    static getLayoutInfo(layoutRulesBase: LayoutRulesBase): string {
        const retVal: string[] = [];

        retVal.push('-- General Layout Info --');
        retVal.push('');
        retVal.push(`Print direction                       :  ${layoutRulesBase.getPrintDirection() === FIGFontPrintDirection.LEFT_TO_RIGHT ? 'Left to Right' : 'Right to Left'}`);
        retVal.push(`Rendering width                       :  ${layoutRulesBase.getRenderingWidth()}`);
        retVal.push('');

        retVal.push('-- Horizontal Layout Rules --');
        retVal.push('');

        retVal.push(`Horizontal Kerning (aka Fitting)?     :  ${layoutRulesBase.doHorizontalKerning()}`);
        retVal.push(`Horizontal Smushing?                  :  ${layoutRulesBase.doHorizontalSmushing()}`);
        retVal.push(`Horizontal Universal Smushing?        :  ${layoutRulesBase.doHorizontalUniversalSmushing()}`);

        retVal.push('');

        retVal.push(`Horizontal Equal Character Smushing?  :  ${layoutRulesBase.doHorizontalEqualCharacterSmushing()}`);
        retVal.push(`Horizontal Underscore Smushing?       :  ${layoutRulesBase.doHorizontalUnderscoreSmushing()}`);
        retVal.push(`Horizontal Hierarchy Smushing?        :  ${layoutRulesBase.doHorizontalUnderscoreSmushing()}`);
        retVal.push(`Horizontal Opposite Pair Smushing?    :  ${layoutRulesBase.doHorizontalOppositePairSmushing()}`);
        retVal.push(`Horizontal Big X Smushing?            :  ${layoutRulesBase.doHorizontalBigXSmushing()}`);
        retVal.push(`Horizontal Hardblank Smushing?        :  ${layoutRulesBase.doHorizontalHardblankSmushing()}`);

        retVal.push('');
        retVal.push('-- Vertical Layout Rules --');
        retVal.push('');

        retVal.push(`Vertical Kerning (aka Fitting)?       :  ${layoutRulesBase.doVerticalKerning()}`);
        retVal.push(`Vertical Smushing?                    :  ${layoutRulesBase.doVerticalSmushing()}`);
        retVal.push(`Vertical Universal Smushing?          :  ${layoutRulesBase.doVerticalUniversalSmushing()}`);

        retVal.push('');

        retVal.push(`Vertical Equal Character Smushing?    :  ${layoutRulesBase.doVerticalEqualCharacterSmushing()}`);
        retVal.push(`Vertical Underscore Smushing?         :  ${layoutRulesBase.doVerticalUnderscoreSmushing()}`);
        retVal.push(`Vertical Hierarchy Smushing?          :  ${layoutRulesBase.doVerticalUnderscoreSmushing()}`);
        retVal.push(`Vertical Horizontal Line Smushing?    :  ${layoutRulesBase.doVerticalHorizontalLineSmushing()}`);

        return retVal.join('\n');
    }

    public getCharacterPaddingInfo(char: string): string {
        const figCharacter = this._font.getFIGCharacter(char[0]);

        // If the font doesn't have the character, then we'll have got back a blank (either generated or provided as part of Font)
        if (figCharacter.characterCode !== char.charCodeAt(0)) {
            return `Font does not have a glyph for character "${char}"`;
        }
        return FontDiagnosticUtils.getFIGCharacterPaddingInfo(figCharacter);
    }

    public static getFIGCharacterPaddingInfo(figCharacter: FIGCharacter): string {
        const retVal: string[] = [];

        const threePad: (x: number) => string = (x: number) => x.toString().substring(0, 3).padStart(3, ' ');
        const threePadAndConvertToASCII: (x: number) => string = (x: number) => String.fromCharCode(x).substring(0, 3).padStart(3, ' ');

        retVal.push(`           ${figCharacter.paddingInfo.topDownCharacters.map(threePad).join(' ')}       \n`);
        retVal.push(`           ${figCharacter.paddingInfo.topDownCharacters.map(threePadAndConvertToASCII).join(' ')}       \n`);
        retVal.push(`           ${figCharacter.paddingInfo.topDownDistances.map(threePad).join(' ')}       \n`);
        for (let i = 0; i < figCharacter.height; i++) {
            retVal.push(
                `${threePad(figCharacter.paddingInfo.leftToRightCharacters[i])} ${threePadAndConvertToASCII(figCharacter.paddingInfo.leftToRightCharacters[i])} ${threePad(
                    figCharacter.paddingInfo.leftToRightDistances[i]
                )}${figCharacter.getGlyphLine(i).map(threePadAndConvertToASCII).join(' ')} ${threePad(figCharacter.paddingInfo.rightToLeftDistances[i])} ${threePadAndConvertToASCII(
                    figCharacter.paddingInfo.rightToLeftCharacters[i]
                )} ${threePad(figCharacter.paddingInfo.rightToLeftCharacters[i])}\n`
            );
        }
        retVal.push(`           ${figCharacter.paddingInfo.bottomUpDistances.map(threePad).join(' ')}       \n`);
        retVal.push(`           ${figCharacter.paddingInfo.bottomUpCharacters.map(threePadAndConvertToASCII).join(' ')}       \n`);
        retVal.push(`           ${figCharacter.paddingInfo.bottomUpCharacters.map(threePad).join(' ')}       \n`);

        return retVal.join('\n');
    }
}
