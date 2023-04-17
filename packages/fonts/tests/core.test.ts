import fs from 'fs';
import { Core } from '../src/index';

const assetFontsFolder = new URL('../../../assets/fonts', import.meta.url);

interface CoreFontNames {
    name: keyof typeof Core;
}

const fontNames: CoreFontNames[] = [
    { name: 'banner' },
    { name: 'big' },
    { name: 'block' },
    { name: 'bubble' },
    { name: 'digital' },
    { name: 'ivrit' },
    { name: 'lean' },
    { name: 'mini' },
    { name: 'script' },
    { name: 'shadow' },
    { name: 'slant' },
    { name: 'small' },
    { name: 'smscript' },
    { name: 'smshadow' },
    { name: 'smslant' },
    { name: 'standard' },
    { name: 'term' }
];

describe('Test Core Fonts', () => {
    for (const f of fontNames) {
        test(`Check font contents: ${f.name}`, () => {
            expect(Core[f.name].contents).toEqual(
                fs
                    .readFileSync(new URL(`core/${f.name}.flf`, assetFontsFolder.href + '/'), { encoding: 'ascii' })
                    .replaceAll('\r\n', '\n')
                    .toString()
            );
        });
    }
});
