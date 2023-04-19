import { FontLayoutManager } from '@figlet-ts/lib';
import chalk from 'chalk';
import { Command, Option } from 'commander';
import { IOUtils } from '../utils/IOUtils';
import { ProgramMode } from '../utils/ProgramMode';
import { ProgramModeOptions } from '../utils/ProgramModeOptions';

export interface ModeDemoFontOptions extends ProgramModeOptions {
    category: string;
}

export class ModeDemoFonts extends ProgramMode {
    options: ModeDemoFontOptions = {
        category: 'all'
    };

    buildCommand(): Command {
        return new Command('demo').addOption(new Option('-c, --category <font-category>').default('all').choices(['all', ...this.fontFileUtils.getInstalledFonts().categories]));
    }

    execute(): void {
        const fontList = this.fontFileUtils.getInstalledFonts();
        fontList.categories
            .filter((c) => this.options.category === 'all' || c === this.options.category)
            .forEach((fontCategory) => {
                for (const f of fontList.getFontsInCategory(fontCategory)) {
                    const screenWideLine = new Array(process.stdout.columns).fill('-');

                    IOUtils.stdout(screenWideLine.join(''), { newlineCount: 1 });

                    const title = `  ${chalk.bold.white('Font Name:')} ${chalk.bold.green(f.relativePath)}  `.split('');
                    screenWideLine.splice(3, `  Font Name: ${f.relativePath}  `.length, ...title);

                    IOUtils.stdout(screenWideLine.join(''), { newlineCount: 1 });

                    try {
                        const figFont = this.fontFileUtils.loadFontFile(f.absolutePath);
                        if (figFont !== undefined) {
                            const flm: FontLayoutManager = new FontLayoutManager();

                            flm.width.useTerminalWidth();
                            flm.align.centre();

                            IOUtils.stdout(flm.renderText(f.name, figFont), { newlineCount: 1 });
                        }
                    } catch (err: unknown) {
                        let errMessage = ';';

                        if (err instanceof Error) {
                            errMessage = `Error parsing ${f.absolutePath}: ${err.message}`;
                            IOUtils.stderr(errMessage);
                        }
                    }
                }
            });
    }
}
