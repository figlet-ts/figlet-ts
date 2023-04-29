import { FIGFont, FontLayoutManager } from '@figlet-ts/lib';
import { Command, Option } from 'commander';
import { pathToFileURL } from 'url';
import { CyclicRasterisationStyle } from '../stylizers/CyclicRasterisationStyle';
import { SingleColourStyle } from '../stylizers/SingleColourStyle';
import { TwoColourStyle } from '../stylizers/TwoColourStyle';
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
    foregroundColour?: 'rainbow' | string;
    foregroundEffect: 'solid' | 'cycle' | 'fadeToBlack' | 'fadeToWhite';
    backgroundColour?: 'rainbow' | string;
    backgroundEffect: 'solid' | 'cycle' | 'fadeToBlack' | 'fadeToWhite';
    forceInteractiveMode: boolean;
    quickstyle?:
        | 'rainbow'
        | 'rainbow1'
        | 'rainbow2'
        | 'rainbowbg'
        | 'rainbowbg1'
        | 'rainbowbg2'
        | 'error'
        | 'error1'
        | 'error2'
        | 'warn'
        | 'warn1'
        | 'warn2'
        | 'info'
        | 'info1'
        | 'info2'
        | 'success'
        | 'success1'
        | 'success2'
        | 'mono'
        | 'mono1'
        | 'mono2'
        | 'grey'
        | 'grey1'
        | 'grey2'
        | 'grey3'
        | 'grey4'
        | 'grey5'
        | 'grey6';
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
        verticalKernMaxOffset: 0,
        foregroundEffect: 'solid',
        backgroundEffect: 'fadeToBlack',
        forceInteractiveMode: false
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

            .addOption(
                new Option('-q, --quickstyle <QuickstyleName>', 'Convenient set of styles for easier fancy formatting').choices([
                    'rainbow',
                    'rainbow1',
                    'rainbow2',
                    'rainbowbg',
                    'rainbowbg1',
                    'rainbowbg2',
                    'error',
                    'error1',
                    'error2',
                    'warn',
                    'warn1',
                    'warn2',
                    'info',
                    'info1',
                    'info2',
                    'success',
                    'success1',
                    'success2',
                    'mono',
                    'mono1',
                    'mono2',
                    'grey',
                    'grey1',
                    'grey2',
                    'grey3',
                    'grey4',
                    'grey5',
                    'grey6'
                ])
            )

            .addOption(new Option('-F, --foreground-colour <HexColour>', 'Forground colour to use in console output'))
            .addOption(new Option('-Fx, --foreground-effect <Mode>', 'Effect to apply to foreground colour').choices(['solid', 'cycle', 'fadeToBlack', 'fadeToWhite']).default('solid'))
            .addOption(new Option('-B, --background-colour <HexColour>', 'Background colour to use in console output'))
            .addOption(new Option('-Bx, --background-effect <Mode>', 'Effect to apply to background colour').choices(['solid', 'cycle', 'fadeToBlack', 'fadeToWhite']).default('fadeToBlack'))

            .addOption(new Option('--force-interactive-mode', 'Forces interactive stdin mode, even if IsTTY returns false').hideHelp(true))
            .addOption(new Option('--no-force-interactive-mode', 'Forces non-interactive stdin mode, even if IsTTY returns false').hideHelp(true))

            .addOption(new Option('--verbose', 'Generate extra diagnostic messages (printed to stderr)'));
        // .addArgument(new Argument('<message...>','The text to fligletify (yes, that is a word)'))
    }

    private renderMessage(message: string) {
        message = message.replaceAll('\\n', '\n');

        if (this._font !== undefined) {
            const flm: FontLayoutManager = new FontLayoutManager();

            if (this.options.quickstyle) {
                // All current quickstyles use full width as they all try to set nice-looking backgrounds
                this.options.paddingMode = 'full';
                switch (this.options.quickstyle) {
                    case 'rainbow':
                        this.options.foregroundColour = 'f00';
                        this.options.foregroundEffect = 'cycle';
                        break;
                    case 'rainbow1':
                        this.options.foregroundColour = '0f0';
                        this.options.foregroundEffect = 'cycle';
                        break;
                    case 'rainbow2':
                        this.options.foregroundColour = '00f';
                        this.options.foregroundEffect = 'cycle';
                        break;
                    case 'rainbowbg':
                        this.options.backgroundColour = 'f00';
                        this.options.foregroundColour = '000';
                        this.options.backgroundEffect = 'cycle';
                        break;
                    case 'rainbowbg1':
                        this.options.backgroundColour = 'a00';
                        this.options.foregroundColour = 'fff';
                        this.options.backgroundEffect = 'cycle';
                        break;
                    case 'rainbowbg2':
                        this.options.backgroundColour = '700';
                        this.options.foregroundColour = 'fff';
                        this.options.backgroundEffect = 'cycle';
                        break;
                    case 'error':
                        this.options.backgroundColour = 'f00';
                        this.options.foregroundColour = 'fff';
                        this.options.backgroundEffect = 'solid';
                        break;
                    case 'error1':
                        this.options.backgroundColour = 'd00';
                        this.options.foregroundColour = 'fff';
                        this.options.backgroundEffect = 'fadeToBlack';
                        break;
                    case 'error2':
                        this.options.backgroundColour = '400';
                        this.options.foregroundColour = 'f00';
                        this.options.backgroundEffect = 'fadeToBlack';
                        break;
                    case 'warn':
                        this.options.backgroundColour = 'fcae1e';
                        this.options.foregroundColour = '000';
                        this.options.backgroundEffect = 'solid';
                        break;
                    case 'warn1':
                        this.options.backgroundColour = 'd90';
                        this.options.foregroundColour = 'fff';
                        this.options.backgroundEffect = 'fadeToBlack';
                        break;
                    case 'warn2':
                        this.options.backgroundColour = '830';
                        this.options.foregroundColour = 'ff0';
                        this.options.backgroundEffect = 'fadeToBlack';
                        break;
                    case 'info':
                        this.options.backgroundColour = '0df';
                        this.options.foregroundColour = '000';
                        this.options.backgroundEffect = 'solid';
                        break;
                    case 'info1':
                        this.options.backgroundColour = '09b';
                        this.options.foregroundColour = 'fff';
                        this.options.backgroundEffect = 'fadeToBlack';
                        break;
                    case 'info2':
                        this.options.backgroundColour = '034';
                        this.options.foregroundColour = '0ff';
                        this.options.backgroundEffect = 'fadeToBlack';
                        break;
                    case 'success':
                        this.options.backgroundColour = '0f0';
                        this.options.foregroundColour = '000';
                        this.options.backgroundEffect = 'solid';
                        break;
                    case 'success1':
                        this.options.backgroundColour = '0b0';
                        this.options.foregroundColour = 'fff';
                        this.options.backgroundEffect = 'fadeToBlack';
                        break;
                    case 'success2':
                        this.options.backgroundColour = '060';
                        this.options.foregroundColour = '0f0';
                        this.options.backgroundEffect = 'fadeToBlack';
                        break;
                    case 'mono':
                        this.options.backgroundColour = 'aaa';
                        this.options.foregroundColour = '000';
                        this.options.backgroundEffect = 'solid';
                        break;
                    case 'mono1':
                        this.options.backgroundColour = '666';
                        this.options.foregroundColour = 'fff';
                        this.options.backgroundEffect = 'fadeToBlack';
                        break;
                    case 'mono2':
                        this.options.backgroundColour = '333';
                        this.options.foregroundColour = '888';
                        this.options.backgroundEffect = 'fadeToBlack';
                        break;
                    case 'grey':
                        this.options.backgroundColour = '333';
                        this.options.foregroundColour = 'fff';
                        this.options.backgroundEffect = 'fadeToBlack';
                        break;
                    case 'grey1':
                        this.options.backgroundColour = '333';
                        this.options.foregroundColour = 'ff7415';
                        this.options.backgroundEffect = 'fadeToBlack';
                        break;
                    case 'grey2':
                        this.options.backgroundColour = '333';
                        this.options.foregroundColour = '0ff';
                        this.options.backgroundEffect = 'fadeToBlack';
                        break;
                    case 'grey3':
                        this.options.backgroundColour = '333';
                        this.options.foregroundColour = 'ff0';
                        this.options.backgroundEffect = 'fadeToBlack';
                        break;
                    case 'grey4':
                        this.options.backgroundColour = '333';
                        this.options.foregroundColour = 'f0f';
                        this.options.backgroundEffect = 'fadeToBlack';
                        break;
                    case 'grey5':
                        this.options.backgroundColour = '333';
                        this.options.foregroundColour = 'f00';
                        this.options.backgroundEffect = 'fadeToBlack';
                        break;
                    case 'grey6':
                        this.options.backgroundColour = '333';
                        this.options.foregroundColour = '0f0';
                        this.options.backgroundEffect = 'fadeToBlack';
                        break;
                }
            }

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

            if (this.options.foregroundColour) {
                if (this.options.foregroundColour === 'rainbow') {
                    flm.stylization.add(
                        new CyclicRasterisationStyle('Rainbow', {
                            colourMode: 'foreground',
                            paletteWidth: 'renderWidth',
                            startColour: '#f00'
                        })
                    );
                } else {
                    switch (this.options.foregroundEffect) {
                        case 'solid':
                            flm.stylization.add(
                                new SingleColourStyle('ForegroundSolid', {
                                    colour: this.options.foregroundColour,
                                    mode: 'foreground'
                                })
                            );
                            break;
                        case 'cycle':
                            flm.stylization.add(
                                new CyclicRasterisationStyle('Rainbow', {
                                    colourMode: 'foreground',
                                    paletteWidth: 'longestLine',
                                    startColour: this.options.foregroundColour
                                })
                            );
                            break;
                        case 'fadeToBlack':
                            flm.stylization.add(
                                new TwoColourStyle('ForegroundFadeToBlack', {
                                    mode: 'foreground',
                                    startColour: this.options.foregroundColour,
                                    endColour: '#000'
                                })
                            );
                            break;
                        case 'fadeToWhite':
                            flm.stylization.add(
                                new TwoColourStyle('ForegroundFadeToWhite', {
                                    mode: 'foreground',
                                    startColour: this.options.foregroundColour,
                                    endColour: '#fff'
                                })
                            );
                            break;
                    }
                }
            }

            if (this.options.backgroundColour) {
                if (this.options.backgroundColour === 'rainbow') {
                    flm.stylization.add(
                        new CyclicRasterisationStyle('Rainbow', {
                            colourMode: 'background',
                            paletteWidth: 'renderWidth',
                            startColour: '#f00'
                        })
                    );
                } else {
                    switch (this.options.backgroundEffect) {
                        case 'solid':
                            flm.stylization.add(
                                new SingleColourStyle('BackgroundSolid', {
                                    colour: this.options.backgroundColour,
                                    mode: 'background'
                                })
                            );
                            break;
                        case 'cycle':
                            flm.stylization.add(
                                new CyclicRasterisationStyle('BGRainbow', {
                                    colourMode: 'background',
                                    paletteWidth: 'renderWidth',
                                    startColour: this.options.backgroundColour
                                })
                            );
                            break;
                        case 'fadeToBlack':
                            flm.stylization.add(
                                new TwoColourStyle('BackgroundgroundFadeToBlack', {
                                    mode: 'background',
                                    startColour: this.options.backgroundColour,
                                    endColour: '#000'
                                })
                            );
                            break;
                        case 'fadeToWhite':
                            flm.stylization.add(
                                new TwoColourStyle('BackgroundFadeToWhite', {
                                    mode: 'background',
                                    startColour: this.options.backgroundColour,
                                    endColour: '#fff'
                                })
                            );
                            break;
                    }
                }
            }

            // flm.stylization.add(
            //     new TwoColourBGStyle('BlackRed', {
            //         applyTo: 'all',
            //         endColour: '#002',
            //         startColour: '#00f'
            //     })
            // );
            // flm.stylization.add(
            //     new TwoColourBGStyle('BlackRed', {
            //         applyTo: 'leftPadding',
            //         endColour: '#00f',
            //         startColour: '#fff'
            //     })
            // );
            // flm.stylization.add(
            //     new SingleColourBGStyle('BlackRed', {
            //         applyTo: 'standard',
            //         colour: '#00f'
            //     })
            // );
            // flm.stylization.add(new SingleColourFGStyle('Black FG', { applyTo: 'standard', colour: '#fff' }));

            // flm.stylization.add(
            //     new CyclicRasterisationStyle('Rainbow', {
            //         colourMode: 'foreground',
            //         paletteWidth: 'longestLine',
            //         bgColour: '#000',
            //         startColour: '#f00'
            //     })
            // );

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
                this._font = this.fontFileUtils.loadFontFile(new URL(this.options.font, pathToFileURL(process.cwd()) + '/'));
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

            if (isTty || this.options.forceInteractiveMode) {
                IOUtils.stdout('Reading from stdin in interactive mode.  Type something and hit return.  Use \\n for newlines.  Press Ctrl-C to quit.', { newlineCount: 2 });
                IOUtils.stdout('figlet-ts> ', { newlineCount: 0 });
                // Bind a pseudo-prompt
                IOUtils.bindStdin(() => {
                    IOUtils.stdout('figlet-ts> ', { newlineCount: 0 });
                });
            } else {
                IOUtils.info('Reading from stdin in non-interactive mode');
            }
        }
    }
}
