import { jest } from '@jest/globals';
import * as appLauncher from '../../src/utils/AppLauncher';

const assetsOneFontPath = new URL('../../../../assets/testFixtures/oneFont', import.meta.url);

jest.retryTimes(0);
describe('Testing App Launcher', () => {
    test('Launching Help Mode', () => {
        const processExitSpy = jest.spyOn(process, 'exit');
        processExitSpy.mockImplementation((number) => {
            throw new Error('process.exit called: ' + number);
        });

        const stdoutWriteSpy = jest.spyOn(process.stdout, 'write').mockImplementation(() => {
            return true;
        });

        expect(() => appLauncher.default(assetsOneFontPath, process.argv[0], process.argv[1], '-h')).toThrow();
        expect(processExitSpy).toHaveBeenCalledTimes(1);
        expect(stdoutWriteSpy).toHaveBeenCalledTimes(2);

        stdoutWriteSpy.mockReset();
        processExitSpy.mockReset();
    });

    test('Launching No Params - Forced Interactive Mode', () => {
        const stdoutWriteSpy = jest.spyOn(process.stdout, 'write').mockImplementation(() => {
            return true;
        });

        expect(() => appLauncher.default(assetsOneFontPath, process.argv[0], process.argv[1], '--force-interactive-mode')).not.toThrow();
        process.stdin.pause();

        expect(stdoutWriteSpy).toHaveBeenCalledTimes(3);

        stdoutWriteSpy.mockReset();
    });
});
