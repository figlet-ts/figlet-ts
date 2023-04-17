import { jest } from '@jest/globals';
import { IOUtils } from '../../src/utils/IOUtils';

jest.retryTimes(0);
describe('Test IOUtils Static Methods', () => {
    test('stdout', () => {
        const stdoutWriteSpy = jest.spyOn(process.stdout, 'write').mockImplementation(
            // eslint-disable-next-line
            (d) => {
                return true;
            }
        );

        IOUtils.stdout('test', { clearLine: true, replacer: (s) => s, newlineCount: 2 });
        IOUtils.stdout('test2');

        expect(stdoutWriteSpy).toHaveBeenCalledTimes(5);

        stdoutWriteSpy.mockReset();
    });

    test('stderr', () => {
        const stderrWriteSpy = jest.spyOn(process.stderr, 'write').mockImplementation(
            // eslint-disable-next-line
            (d) => {
                return true;
            }
        );

        IOUtils.stderr('test', { showPrefix: true, newlineCount: 5 });
        IOUtils.stderr('test2');

        expect(stderrWriteSpy).toHaveBeenCalledTimes(5);

        stderrWriteSpy.mockReset();
    });

    test('bindStdin', () => {
        const stdinBindSpy = jest.spyOn(process.stdin, 'on');
        const stdinUnbindSpy = jest.spyOn(process.stdin, 'removeAllListeners');

        IOUtils.bindStdin(() => {
            return;
        });

        IOUtils.unbindStdin();

        expect(stdinBindSpy).toHaveBeenCalledTimes(1);
        expect(stdinUnbindSpy).toHaveBeenCalledTimes(1);

        stdinBindSpy.mockReset();
        stdinUnbindSpy.mockReset();
    });

    test('quit', () => {
        const processExitSpy = jest.spyOn(process, 'exit');
        processExitSpy.mockImplementation((number) => {
            throw new Error('process.exit called: ' + number);
        });
        const stderrWriteSpy = jest.spyOn(process.stderr, 'write').mockImplementation(
            // eslint-disable-next-line
            (d) => {
                return true;
            }
        );

        expect(() => {
            IOUtils.quit({ returnCode: 1, errorMessage: 'Test Error', showVersionInfo: true });
        }).toThrow();

        expect(processExitSpy).toHaveBeenCalledTimes(1);
        expect(stderrWriteSpy).toHaveBeenCalledTimes(5);

        processExitSpy.mockReset();
        stderrWriteSpy.mockReset();
    });

    test('quit - no params', () => {
        const processExitSpy = jest.spyOn(process, 'exit');
        processExitSpy.mockImplementation((number) => {
            throw new Error('process.exit called: ' + number);
        });
        const stderrWriteSpy = jest.spyOn(process.stderr, 'write').mockImplementation(
            // eslint-disable-next-line
            (d) => {
                return true;
            }
        );

        expect(() => {
            IOUtils.quit();
        }).toThrow();

        expect(processExitSpy).toHaveBeenCalledTimes(1);
        expect(stderrWriteSpy).toHaveBeenCalledTimes(0);

        processExitSpy.mockReset();
        stderrWriteSpy.mockReset();
    });
});
