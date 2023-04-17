import { FIGFont } from '@figlet-ts/lib';
import { FontFileUtils } from '../../src/utils/FontFileUtils';

const repoFontAssetsFolder = new URL('../../../../assets/fonts', import.meta.url);
describe('Testing FontFileUtils on the monorepo assets path', () => {
    const ffu: FontFileUtils = FontFileUtils.getInstance(repoFontAssetsFolder);
    test('Installed fonts', () => {
        expect(ffu.getInstalledFonts().fontCount).toEqual(305);
    });
    test('Loading fonts', () => {
        expect(ffu.getRandomFont()).toBeInstanceOf(FIGFont);
        expect(ffu.getFontByName('standard')).toBeInstanceOf(FIGFont);
    });
    test('Handling requests for missing fonts', () => {
        expect(ffu.getFontByName('no/font/here')).not.toBeDefined();
    });
});

describe('Testing FontFileUtils with default path - will not be able to find any FLF files', () => {
    const ffu: FontFileUtils = FontFileUtils.getInstance();
    test('Installed fonts', () => {
        expect(ffu.getInstalledFonts().fontCount).toEqual(0);
    });
    test('Loading fonts', () => {
        expect(ffu.getRandomFont()).not.toBeDefined();
        expect(ffu.getFontByName('standard')).not.toBeDefined();
    });
    test('Handling requests for missing fonts', () => {
        expect(ffu.getFontByName('no/font/here')).not.toBeDefined();
    });
});
