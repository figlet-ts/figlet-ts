import { Command, CommandOptions } from 'commander';
import { FontFileUtils } from './FontFileUtils';
import { IOUtils } from './IOUtils';
import { ProgramModeOptions } from './ProgramModeOptions';

export abstract class ProgramMode {
    program: Command;
    localCommand: Command;
    options: ProgramModeOptions = {};

    fontFileUtils: FontFileUtils = FontFileUtils.getInstance();

    constructor(program: Command, opts: CommandOptions = {}, pathToFontsFolder?: URL) {
        this.program = program;

        if (pathToFontsFolder) {
            this.fontFileUtils = FontFileUtils.getInstance(pathToFontsFolder);
        }

        this.localCommand = this.buildCommand();

        this.localCommand.action(() => {
            this.executionWrapper();
        });

        program.addCommand(this.localCommand, opts);

        // Check if there are installed fonts
        if (this.fontFileUtils.getInstalledFonts().fontCount === 0) {
            IOUtils.quit({ errorMessage: `No font files found in the font path:  ${this.fontFileUtils.getInstalledFonts().absolutePath}` });
        }
    }

    executionWrapper(): void {
        this.options = this.localCommand.opts();
        this.options.remainingArguments = this.localCommand.args;
        this.execute();
    }

    abstract execute(): void;

    abstract buildCommand(): Command;
}
