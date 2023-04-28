import chalk from 'chalk';
import * as readline from 'readline';
import { getFigletCLIVersionString } from './VersionUtils';

export type IOOptions = {
    newlineCount?: number;
};
export type StdOutOptions = IOOptions & {
    replacer?: (t: string) => string;
    clearLine?: boolean;
};
export type ProcessExitOptions = {
    returnCode?: number;
    errorMessage?: string;
    showVersionInfo?: boolean;
};

export class IOUtils {
    static stdout(message: string, opts: StdOutOptions = { newlineCount: 1 }): void {
        if (opts.clearLine) {
            readline.clearLine(process.stdout, 0);
        }

        process.stdout.write(opts.replacer ? opts.replacer(message) : message);

        if (opts.newlineCount) {
            process.stdout.write(new Array(opts.newlineCount).fill('\n').join(''));
        }
    }

    static info(message: string, opts: IOOptions = { newlineCount: 1 }): void {
        IOUtils.stderr(`${chalk.bold.blueBright('INFO: ')} ${message}`, opts);
    }

    static warn(message: string, opts: IOOptions = { newlineCount: 1 }): void {
        IOUtils.stderr(`${chalk.bold.yellow('WARN: ')} ${message}`, opts);
    }

    static error(message: string, opts: IOOptions = { newlineCount: 1 }): void {
        IOUtils.stderr(`${chalk.bold.red('ERROR: ')} ${message}`, opts);
    }

    static stderr(message: string, opts: IOOptions = { newlineCount: 1 }): void {
        process.stderr.write(message);

        if (opts.newlineCount) {
            process.stderr.write(new Array(opts.newlineCount).fill('\n').join(''));
        }
    }

    /**
     * Binds a handler to the on('data') event on stdin, and
     *
     * @param dataLineHandler
     * @return boolean          Returns true if the session is TTY (interactive) and false otherwise
     */
    static bindStdin(dataLineHandler: (data: Buffer) => void): boolean {
        process.stdin.on('data', dataLineHandler);

        return process.stdin.isTTY;
    }

    static unbindStdin(): void {
        process.stdin.removeAllListeners('data');
        process.stdin.pause();
    }

    static quit(opts: ProcessExitOptions = {}): never {
        if (opts.showVersionInfo) {
            process.stderr.write(getFigletCLIVersionString());
            process.stderr.write('\n');
        }

        if (opts.errorMessage) {
            IOUtils.error(opts.errorMessage, { newlineCount: 2 });
        }

        process.exit(opts.returnCode);
    }
}
