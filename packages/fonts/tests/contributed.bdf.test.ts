import fs from 'fs';
import { ContributedBDF } from '../src/index';

const assetFontsFolder = new URL('../../../assets/fonts', import.meta.url);

interface ContributedBDFFontNames {
    name: keyof typeof ContributedBDF;
}

const fontNames: ContributedBDFFontNames[] = [
    { name: 'chartr' },
    { name: 'chartri' },
    { name: 'clb6x10' },
    { name: 'clb8x10' },
    { name: 'clb8x8' },
    { name: 'cli8x8' },
    { name: 'clr4x6' },
    { name: 'clr5x10' },
    { name: 'clr5x6' },
    { name: 'clr5x8' },
    { name: 'clr6x10' },
    { name: 'clr6x6' },
    { name: 'clr6x8' },
    { name: 'clr7x10' },
    { name: 'clr7x8' },
    { name: 'clr8x10' },
    { name: 'clr8x8' },
    { name: 'cour' },
    { name: 'courb' },
    { name: 'courbi' },
    { name: 'couri' },
    { name: 'helv' },
    { name: 'helvb' },
    { name: 'helvbi' },
    { name: 'helvi' },
    { name: 'n5x7' },
    { name: 'n6x10' },
    { name: 'n6x9' },
    { name: 'sbook' },
    { name: 'sbookb' },
    { name: 'sbookbi' },
    { name: 'sbooki' },
    { name: 'times' },
    { name: 'utopia' },
    { name: 'utopiab' },
    { name: 'utopiabi' },
    { name: 'utopiai' },
    { name: 'xchartr' },
    { name: 'xchartri' },
    { name: 'xcour' },
    { name: 'xcourb' },
    { name: 'xcourbi' },
    { name: 'xcouri' },
    { name: 'xhelv' },
    { name: 'xhelvb' },
    { name: 'xhelvbi' },
    { name: 'xhelvi' },
    { name: 'xsbook' },
    { name: 'xsbookb' },
    { name: 'xsbookbi' },
    { name: 'xsbooki' },
    { name: 'xtimes' }
];

describe('Test Contributed BDF Fonts', () => {
    for (const f of fontNames) {
        test(`Check font contents: ${f.name}`, () => {
            expect(ContributedBDF[f.name].contents).toEqual(
                fs
                    .readFileSync(new URL(`contributed/bdffonts/${f.name}.flf`, assetFontsFolder.href + '/'), { encoding: 'ascii' })
                    .replaceAll('\r\n', '\n')
                    .toString()
            );
        });
    }
});
