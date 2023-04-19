import { jest } from '@jest/globals';
import { Command } from 'commander';
import { ModeListFonts } from '../../src/modes/ModeListFonts';
import { IOUtils } from '../../src/utils/IOUtils';

describe('All Fonts Tests', () => {
    const program = new Command();

    program.name('figlet-ts').description('Typescript implementation of figlet').version('1.0.0');

    const assetFontsPath = new URL('../../../../assets/fonts', import.meta.url);
    const mlf = new ModeListFonts(program, {}, assetFontsPath);

    test('Test fonts load', () => {
        expect(mlf.fontFileUtils.getInstalledFonts().fontCount).toEqual(305);
    });

    test('Test execution', () => {
        const stdoutSpy = jest.spyOn(IOUtils, 'stdout').mockImplementation(() => {
            return;
        });

        program.parse([process.argv[0], process.argv[1], 'list', '-c', 'core']);
        expect(stdoutSpy).toHaveBeenCalledTimes(5);

        stdoutSpy.mockReset();
    });
});

describe('One Font Tests', () => {
    const program = new Command();

    program.name('figlet-ts').description('Typescript implementation of figlet').version('1.0.0');

    const assetFontsPath = new URL('../../../../assets/testFixtures/oneFont', import.meta.url);
    new ModeListFonts(program, {}, assetFontsPath);

    test('Test execution', () => {
        const stdoutSpy = jest.spyOn(IOUtils, 'stdout').mockImplementation(() => {
            return;
        });

        program.parse([process.argv[0], process.argv[1], 'list']);
        expect(stdoutSpy).toHaveBeenCalledTimes(5);

        stdoutSpy.mockReset();
    });
});
