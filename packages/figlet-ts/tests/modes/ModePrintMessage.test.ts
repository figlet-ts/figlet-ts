import { jest } from '@jest/globals';
import { Command } from 'commander';
import { ModePrintMessage } from '../../src/modes/ModePrintMessage';
import { IOUtils } from '../../src/utils/IOUtils';

const assetsOneFontPath = new URL('../../../../assets/testFixtures/oneFont', import.meta.url);

jest.retryTimes(0);

function doTest(args: string[]) {
    test(`Test args: ${args.slice(2).join(' ')}`, () => {
        const program = new Command();

        new ModePrintMessage(program, {}, assetsOneFontPath);

        const stdoutSpy = jest.spyOn(IOUtils, 'stdout').mockImplementation(() => {
            return;
        });

        program.parse(args);

        expect(stdoutSpy).toHaveBeenCalledTimes(1);

        stdoutSpy.mockReset();
    });
}

describe('One Font Tests', () => {
    doTest([process.argv[0], process.argv[1], 'print', '-f', 'standard', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-f', '../../assets/fonts/core/mini.flf', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-r', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-a', 'left', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-a', 'centre', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-a', 'center', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-a', 'right', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-w', '0', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-w', '40', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '--padding-mode', 'full', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '--padding-mode', 'none', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '--padding-mode', 'noleft', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '--padding-mode', 'noright', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '--padding-mode', 'default', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-H', 'full', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-H', 'kern', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-H', 'smush', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-H', 'smushplus', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-H', 'font', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-V', 'full', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-V', 'kern', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-V', 'smush', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-V', 'font', 'Text']);
    // Character Replacement Tests
    doTest([process.argv[0], process.argv[1], 'print', '-W', '.', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-P', '.', 'Text']);
    // Colourful Tests
    doTest([process.argv[0], process.argv[1], 'print', '-F', '44f', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-F', 'rainbow', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-F', '44f', '-Fx', 'solid', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-F', '44f', '-Fx', 'cycle', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-F', '44f', '-Fx', 'fadeToBlack', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-F', '44f', '-Fx', 'fadeToWhite', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-B', '44f', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-B', 'rainbow', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-B', '44f', '-Bx', 'solid', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-B', '44f', '-Bx', 'cycle', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-B', '44f', '-Bx', 'fadeToBlack', 'Text']);
    doTest([process.argv[0], process.argv[1], 'print', '-B', '44f', '-Bx', 'fadeToWhite', 'Text']);
});

describe('Error handling', () => {
    test('Test Missing FLF File', () => {
        const processExitSpy = jest.spyOn(IOUtils, 'quit');
        processExitSpy.mockImplementation((opts) => {
            throw new Error('IOUtils.quit called: ' + opts);
        });
        const stderrWriteSpy = jest.spyOn(process.stderr, 'write').mockImplementation(() => {
            return true;
        });

        const program = new Command();

        new ModePrintMessage(program, {}, assetsOneFontPath);

        expect(() => program.parse([process.argv[0], process.argv[1], 'print', '-f', 'nofontcalledthis', 'Text'])).toThrow();

        expect(processExitSpy).toHaveBeenCalledTimes(1);
        expect(stderrWriteSpy).toHaveBeenCalledTimes(2);

        processExitSpy.mockReset();
        stderrWriteSpy.mockReset();
    });
});

describe('Interactive Mode Tests', () => {
    test('Check stdin/stdout handling', () => {
        const program = new Command();

        new ModePrintMessage(program, {}, assetsOneFontPath);

        const stdoutSpy = jest.spyOn(IOUtils, 'stdout').mockImplementation(() => {
            return;
        });
        const stdinBindSpy = jest.spyOn(process.stdin, 'on');
        const stdinUnbindSpy = jest.spyOn(process.stdin, 'removeAllListeners');

        program.parse([process.argv[0], process.argv[1], 'print', '--force-interactive-mode']);

        process.stdin.emit('data', Buffer.from([45, 13]));

        IOUtils.unbindStdin();

        expect(stdinBindSpy).toHaveBeenCalledTimes(2);
        expect(stdinUnbindSpy).toHaveBeenCalledTimes(1);
        expect(stdoutSpy).toHaveBeenCalledTimes(4);

        stdinBindSpy.mockReset();
        stdinUnbindSpy.mockReset();
        stdoutSpy.mockReset();
    });
});

describe('Non-Interactive Mode Tests', () => {
    test('Check stdin/stdout handling', () => {
        const program = new Command();

        new ModePrintMessage(program, {}, assetsOneFontPath);

        const stdoutSpy = jest.spyOn(IOUtils, 'stdout').mockImplementation(() => {
            return;
        });
        const infoSpy = jest.spyOn(IOUtils, 'info').mockImplementation(() => {
            return;
        });
        const stdinBindSpy = jest.spyOn(process.stdin, 'on');
        const stdinUnbindSpy = jest.spyOn(process.stdin, 'removeAllListeners');

        program.parse([process.argv[0], process.argv[1], 'print', '--no-force-interactive-mode']);

        process.stdin.emit('data', Buffer.from([45, 13]));

        IOUtils.unbindStdin();

        expect(stdinBindSpy).toHaveBeenCalledTimes(1);
        expect(stdinUnbindSpy).toHaveBeenCalledTimes(1);
        expect(stdoutSpy).toHaveBeenCalledTimes(1);
        expect(infoSpy).toHaveBeenCalledTimes(1);

        stdinBindSpy.mockReset();
        stdinUnbindSpy.mockReset();
        infoSpy.mockReset();
        stdoutSpy.mockReset();
    });
});
