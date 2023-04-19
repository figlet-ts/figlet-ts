import { OptionValues } from 'commander';

export interface ProgramModeOptions extends OptionValues {
    remainingArguments?: string[];
}
