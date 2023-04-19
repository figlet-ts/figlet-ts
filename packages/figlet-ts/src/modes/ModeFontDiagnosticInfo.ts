import { FIGFont, FontDiagnosticUtils } from '@figlet-ts/lib';
import { Command, Option } from 'commander';
import { IOUtils } from '../utils/IOUtils';
import { ProgramMode } from '../utils/ProgramMode';
import { ProgramModeOptions } from '../utils/ProgramModeOptions';

export interface ModeFontDiagnosticInfoOptions extends ProgramModeOptions {
    font: string;
}

export class ModeFontDiagnosticInfo extends ProgramMode {
    private _font: FIGFont | undefined;

    options: ModeFontDiagnosticInfoOptions = {
        font: 'core/standard'
    };

    buildCommand(): Command {
        return new Command('fontinfo').addOption(new Option('-f, --font <value>', 'Either a built-in font name (see --list-fonts) or a path to a local FLF file').default('core/standard'));
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
        } else {
            const FDU = new FontDiagnosticUtils(this._font);

            console.log(FDU.getFontInfo());
        }
    }
}
