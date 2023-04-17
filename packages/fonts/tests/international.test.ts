import fs from 'fs';
import { International } from '../src/index';

const assetFontsFolder = new URL('../../../assets/fonts', import.meta.url);

interface InternationalFontNames {
    name: keyof typeof International;
}

const fontNames: InternationalFontNames[] = [
    { name: 'jerusalem' },
    { name: 'katakana' },
    { name: 'morse' },
    { name: 'moscow' },
    { name: 'mshebrew210' },
    { name: 'ntgreek' },
    { name: 'runic' },
    { name: 'runyc' },
    { name: 'smtengwar' },
    { name: 'tengwar' },
    { name: 'tsalagi' }
];

describe('Test International Fonts', () => {
    for (const f of fontNames) {
        test(`Check font contents: ${f.name}`, () => {
            expect(International[f.name].contents).toEqual(
                fs
                    .readFileSync(new URL(`international/${f.name}.flf`, assetFontsFolder.href + '/'), { encoding: 'ascii' })
                    .replaceAll('\r\n', '\n')
                    .toString()
            );
        });
    }
});
