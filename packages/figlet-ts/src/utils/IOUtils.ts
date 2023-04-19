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
export type StdErrOptions = IOOptions & {
    showPrefix?: boolean;
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

    static stderr(message: string, opts: StdErrOptions = { newlineCount: 1 }): void {
        if (opts.showPrefix) {
            process.stderr.write(`${chalk.bold.red('ERROR: ')} `);
        }

        process.stderr.write(message);

        if (opts.newlineCount) {
            process.stderr.write(new Array(opts.newlineCount).fill('\n').join(''));
        }
    }

    static bindStdin(dataLineHandler: (data: Buffer) => void): void {
        process.stdin.on('data', dataLineHandler);
    }

    static unbindStdin(): void {
        process.stdin.removeAllListeners('data');
        process.stdin.pause();
    }

    static quit(opts: ProcessExitOptions = {}): never {
        if (opts.showVersionInfo) {
            IOUtils.stderr(getFigletCLIVersionString(), { newlineCount: 1, showPrefix: false });
        }

        if (opts.errorMessage) {
            IOUtils.stderr(opts.errorMessage, { newlineCount: 2, showPrefix: true });
        }

        process.exit(opts.returnCode);
    }
}
