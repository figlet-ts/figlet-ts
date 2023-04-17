import { jest } from '@jest/globals';
import { Command } from 'commander';
import { ModeDemoFonts } from '../../src/modes/ModeDemoFonts';
import { IOUtils } from '../../src/utils/IOUtils';

describe('Basic Tests', () => {
    const program = new Command();

    program.name('figlet-ts').description('Typescript implementation of figlet').version('1.0.0');

    const assetFontsPath = new URL('../../../../assets/fonts', import.meta.url);
    const mdf = new ModeDemoFonts(program, {}, assetFontsPath);

    test('Test fonts load', () => {
        expect(mdf.fontFileUtils.getInstalledFonts().fontCount).toEqual(305);
    });
    test('Test execution', () => {
        const stdoutSpy = jest.spyOn(IOUtils, 'stdout').mockImplementation(() => {
            return;
        });

        program.parse([process.argv[0], process.argv[1], 'demo', '-c', 'core']);
        expect(stdoutSpy).toHaveBeenCalledTimes(51);

        stdoutSpy.mockReset();
    });
});

describe('Test Bad Fonts', () => {
    const program = new Command();

    program.name('figlet-ts').description('Typescript implementation of figlet').version('1.0.0');

    const assetBadFontsPath = new URL('../../../../assets/testFixtures/badFonts', import.meta.url);
    new ModeDemoFonts(program, {}, assetBadFontsPath);

    test('Test handling of broken FLF file', () => {
        const stdoutSpy = jest.spyOn(IOUtils, 'stdout').mockImplementation(() => {
            return;
        });

        const stderrSpy = jest.spyOn(IOUtils, 'stderr').mockImplementation(() => {
            return;
        });

        program.parse([process.argv[0], process.argv[1], 'demo']);

        expect(stderrSpy).toHaveBeenCalledTimes(1);
        expect(stdoutSpy).toHaveBeenCalledTimes(5);

        stdoutSpy.mockReset();
        stderrSpy.mockReset();
    });
});

describe('Test Empty Fonts', () => {
    const program = new Command();

    program.name('figlet-ts').description('Typescript implementation of figlet').version('1.0.0');

    test('Test handling of no font files', () => {
        const ioutilsSpy = jest.spyOn(IOUtils, 'quit');
        ioutilsSpy.mockImplementation((number) => {
            throw new Error('IOUtils.quit called: ' + number);
        });

        expect(() => {
            new ModeDemoFonts(program);
        }).toThrow();
        expect(ioutilsSpy).toHaveBeenCalledTimes(1);
        ioutilsSpy.mockReset();
    });
});
