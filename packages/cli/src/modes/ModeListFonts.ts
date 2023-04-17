import chalk from 'chalk';
import { Command, Option } from 'commander';
import { IOUtils } from '../utils/IOUtils';
import { ProgramMode } from '../utils/ProgramMode';
import { ProgramModeOptions } from '../utils/ProgramModeOptions';

export interface ModeListFontOptions extends ProgramModeOptions {
    category: string;
}

export class ModeListFonts extends ProgramMode {
    options: ModeListFontOptions = {
        category: 'all'
    };

    buildCommand(): Command {
        return new Command('list').addOption(
            new Option('-c, --category <font-category>')
                .makeOptionMandatory(true)
                .default('all')
                .choices(['all', ...this.fontFileUtils.getInstalledFonts().categories])
        );
    }

    execute(): void {
        const fontList = this.fontFileUtils.getInstalledFonts();
        fontList.categories
            .filter((c) => this.options.category === 'all' || c === this.options.category)
            .forEach((fontCategory) => {
                const numFonts = fontList.getFontsInCategory(fontCategory).length;
                IOUtils.stdout(chalk.bold.white(`Font Category: ${chalk.green(fontCategory)} (${numFonts} font${numFonts > 1 ? 's' : ''})`));
                IOUtils.stdout(
                    `   ${fontList
                        .getFontsInCategory(fontCategory)
                        .map((f) => f.name)
                        .join(', ')}`
                );
                IOUtils.stdout('');
                IOUtils.stdout(`'   Example: figlet -f ${fontCategory}/${fontList.getFontsInCategory(fontCategory)[Math.floor(Math.random() * numFonts)].name} Your message`);
                IOUtils.stdout('');
            });
    }
}
