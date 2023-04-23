import { FIGFont, FontLayoutManager } from '@figlet-ts/lib';
import { Command, Option } from 'commander';
import { CyclicRasterisationStyle } from '../stylizers/CyclicRasterisationStyle';
import { IOUtils } from '../utils/IOUtils';
import { ProgramMode } from '../utils/ProgramMode';
import { ProgramModeOptions } from '../utils/ProgramModeOptions';

export interface ModePrintMessageOptions extends ProgramModeOptions {
    font: string;
    randomFont: boolean;
    align: 'font-default' | 'left' | 'right' | 'centre' | 'center';
    width: number;
    paddingMode: 'full' | 'none' | 'noleft' | 'noright' | 'default';
    horizontalLayoutMode: 'full' | 'kern' | 'smush' | 'smushplus' | 'font';
    verticalLayoutMode: 'full' | 'kern' | 'smush' | 'font';
    verticalKernMaxOffset: number;
    paddingCharacter?: string;
    whitespaceCharacter?: string;
    message?: string[];
}

export class ModePrintMessage extends ProgramMode {
    private _font: FIGFont | undefined;

    options: ModePrintMessageOptions = {
        font: 'core/standard',
        randomFont: false,
        align: 'font-default',
        width: 0,
        paddingMode: 'default',
        horizontalLayoutMode: 'font',
        verticalLayoutMode: 'font',
        verticalKernMaxOffset: 0
    };

    buildCommand(): Command {
        return new Command('print')
            .addOption(new Option('-f, --font <value>', 'Either a built-in font name (see --list-fonts) or a path to a local FLF file').default('core/standard'))
            .addOption(new Option('-r, --random-font', 'A random font will be selected for your message'))
            .addOption(
                new Option('-a, --align <alignment>', 'Choose rendering alignment: left, right or centre').choices(['font-default', 'left', 'right', 'center', 'centre']).default('font-default')
            )
            .addOption(
                new Option('-w, --width <width>', 'Specify the maximum width of the output.  If set to zero (the default) the width will be set to the width of the current terminal.')
                    .argParser(Number)
                    .default(0)
            )
            .addOption(new Option('--padding-mode <mode>', 'Sets the horizontal padding mode to one of').choices(['full', 'none', 'noleft', 'noright', 'default']).default('default'))
            .addOption(new Option('-H, --horizontal-layout-mode <mode>', 'Sets the horizontal layout mode').choices(['full', 'kern', 'smush', 'smushplus', 'font']).default('font'))
            .addOption(new Option('-V, --vertical-layout-mode <mode>', 'Sets the vertical layout mode to one of: none, kern, smush, font').choices(['full', 'kern', 'smush', 'font']).default('font'))
            .addOption(new Option('--vertical-kern-max-offset <n>', 'Sets how close to the line above vertical kerning will move lines up').argParser(Number).default(0))
            .addOption(new Option('-W, --whitespace-character <char>', 'The character to use to replace the whitespace character.'))
            .addOption(new Option('-P, --padding-character <char>', 'The character to use when adding padding (see --padding-mode).'))
            .addOption(new Option('--verbose', 'Generate extra diagnostic messages (printed to stderr)'));
        // .addArgument(new Argument('<message...>','The text to fligletify (yes, that is a word)'))
    }

    private renderMessage(message: string) {
        message = message.replaceAll('\\n', '\n');

        if (this._font !== undefined) {
            const flm: FontLayoutManager = new FontLayoutManager();

            if (this.options.width === 0) {
                flm.width.useTerminalWidth();
            } else {
                flm.width.set(this.options.width);
            }

            if (this.options.align === 'left') {
                flm.options.align.left();
            } else if (this.options.align === 'right') {
                flm.options.align.right();
            } else if (this.options.align === 'centre' || this.options.align === 'center') {
                flm.options.align.centre();
            }

            switch (this.options.horizontalLayoutMode) {
                case 'full':
                    flm.options.horizontalLayout.full();
                    break;
                case 'kern':
                    flm.options.horizontalLayout.kern();
                    break;
                case 'smush':
                    flm.options.horizontalLayout.smush();
                    break;
                case 'smushplus':
                    flm.options.horizontalLayout.smush();
                    flm.options.horizontalSmushing.enableHorizontalSmushPlusMode();
                    break;
                case 'font':
                    flm.options.horizontalLayout.default();
                    break;
            }

            switch (this.options.verticalLayoutMode) {
                case 'full':
                    flm.options.verticalLayout.full();
                    break;
                case 'kern':
                    flm.options.verticalLayout.kern();
                    break;
                case 'smush':
                    flm.options.verticalLayout.smush();
                    break;
                case 'font':
                    flm.options.verticalLayout.default();
                    break;
                default:
                    flm.options.verticalLayout.kern();
                    break;
            }

            flm.verticalLayout.setVerticalKernMaxOffset(this.options.verticalKernMaxOffset);

            switch (this.options.paddingMode) {
                case 'full':
                    flm.options.padding.fullPadding();
                    break;
                case 'none':
                    flm.options.padding.noPadding();
                    break;
                case 'noleft':
                    flm.options.padding.noLeftPadding();
                    break;
                case 'noright':
                    flm.options.padding.noRightPadding();
                    break;
                case 'default':
                    flm.options.padding.default();
                    break;
            }

            if (this.options.paddingCharacter) {
                flm.characterReplacement.setPaddingCharacter(this.options.paddingCharacter);
            }

            if (this.options.whitespaceCharacter) {
                flm.characterReplacement.setWhitespaceCharacter(this.options.whitespaceCharacter);
            }

            flm.stylization.set(
                new CyclicRasterisationStyle('Rainbow', {
                    colourMode: 'foreground',
                    paletteWidth: 'longestLine',
                    bgColour: '#000',
                    startColour: '#f00'
                })
            );

            IOUtils.stdout(flm.renderText(message, this._font), { newlineCount: 1 });
        }
    }

    execute(): void {
        if (this.options.randomFont) {
            this._font = this.fontFileUtils.getRandomFont();
        } else {
            // Try to load from the installed font list
            this._font = this.fontFileUtils.getFontByName(this.options.font);

            // And if that fails, try to load from local disk
            if (this._font === undefined) {
                this._font = this.fontFileUtils.loadFontFile(new URL(this.options.font, import.meta.url));
            }
        }

        // Check we've found a font
        if (this._font === undefined) {
            IOUtils.quit({
                errorMessage: `Could not load the requested font file: ${this.options.font}`,
                showVersionInfo: true
            });
        }

        if (this.options.remainingArguments !== undefined && this.options.remainingArguments.length !== 0) {
            this.renderMessage(this.options.remainingArguments.join(' '));
        } else {
            const isTty = IOUtils.bindStdin((data) => {
                this.renderMessage(data.toString().trimEnd());
            });

            if (isTty) {
                IOUtils.stdout('Reading from stdin.  Type something and hit return.  Use \\n for newlines.  Press Ctrl-C to quit.', { newlineCount: 2 });
                IOUtils.stdout('figlet-ts> ', { newlineCount: 0 });
                // Bind a pseudo-prompt
                IOUtils.bindStdin(() => {
                    IOUtils.stdout('figlet-ts> ', { newlineCount: 0 });
                });
            }
        }
    }
}
