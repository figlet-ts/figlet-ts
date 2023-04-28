import { Command } from 'commander';
import { ModeDemoFonts } from '../modes/ModeDemoFonts';
import { ModeFontDiagnosticInfo } from '../modes/ModeFontDiagnosticInfo';
import { ModeListFonts } from '../modes/ModeListFonts';
import { ModePrintMessage } from '../modes/ModePrintMessage';
import { getFigletCLIVersionString } from './VersionUtils';

export default function run(pathToFontsRoot?: URL, ...args: string[]) {
    const program = new Command();

    // prettier-ignore
    program
        .name('figlet-ts')
        .description('Typescript implementation of figlet')
        .addHelpText('beforeAll', getFigletCLIVersionString)
        .version(`${getFigletCLIVersionString()}`, '-v, --version');

    new ModePrintMessage(program, { isDefault: true }, pathToFontsRoot);
    new ModeDemoFonts(program, {}, pathToFontsRoot);
    new ModeListFonts(program, {}, pathToFontsRoot);
    new ModeFontDiagnosticInfo(program, {}, pathToFontsRoot);

    if (args.length > 0) {
        program.parse(args);
    } else {
        program.parse(process.argv);
    }
}
