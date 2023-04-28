import { FIGFont } from '@figlet-ts/lib';
import { jest } from '@jest/globals';
import { FontFileUtils } from '../../src/utils/FontFileUtils';
import { IOUtils } from '../../src/utils/IOUtils';

const repoFontAssetsFolder = new URL('../../../../assets/fonts', import.meta.url);
describe('Testing FontFileUtils on the monorepo assets path', () => {
    const ffu: FontFileUtils = FontFileUtils.getInstance(repoFontAssetsFolder);
    test('Installed fonts', () => {
        expect(ffu.getInstalledFonts().fontCount).toEqual(305);
    });
    test('Loading fonts', () => {
        const infoSpy = jest.spyOn(IOUtils, 'info').mockImplementation(() => {
            return;
        });

        expect(ffu.getRandomFont()).toBeInstanceOf(FIGFont);
        expect(infoSpy).toHaveBeenCalledTimes(1);
        expect(ffu.getFontByName('standard')).toBeInstanceOf(FIGFont);

        infoSpy.mockReset();
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
        const warningSpy = jest.spyOn(IOUtils, 'warn').mockImplementation(() => {
            return;
        });

        expect(ffu.getRandomFont()).not.toBeDefined();
        expect(warningSpy).toHaveBeenCalledTimes(1);
        expect(ffu.getFontByName('standard')).not.toBeDefined();

        warningSpy.mockReset();
    });
    test('Handling requests for missing fonts', () => {
        expect(ffu.getFontByName('no/font/here')).not.toBeDefined();
    });
});
