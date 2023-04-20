import fs from 'fs';
import path from 'path';
import { FLFParser, FontLayoutManager } from '../../src';
import { CanvasPixel } from '../../src/rendering/CanvasPixel';

function testHorizontalSmush(flm: FontLayoutManager, leftChar: string, rightChar: string, hardblankChar: string): string | null {
    const result = flm.getHorizontalSmushCharacter(new CanvasPixel(leftChar.charCodeAt(0)), new CanvasPixel(rightChar.charCodeAt(0)), hardblankChar.charCodeAt(0));

    if (result) {
        return String.fromCharCode(result.character);
    }

    return null;
}

function testVerticalSmush(flm: FontLayoutManager, leftChar: string, rightChar: string, hardblankChar: string): string | null {
    const result = flm.getVerticalSmushCharacter(new CanvasPixel(leftChar.charCodeAt(0)), new CanvasPixel(rightChar.charCodeAt(0)), hardblankChar.charCodeAt(0));

    if (result) {
        return String.fromCharCode(result.character);
    }

    return null;
}

describe('Test Horizontal Equal Character Smushing', () => {
    const flm: FontLayoutManager = new FontLayoutManager();
    // Disable universal horizontal smushing to ensure we're testing just one rule at a time
    flm.horizontalLayout.disableHorizontalSmushing();

    test('When Enabled:  Two hardblanks refuse to smush', () => {
        flm.horizontalSmushingRules.enableEqualCharacterSmushing();
        expect(testHorizontalSmush(flm, '$', '$', '$')).toEqual(null);
    });

    test('When Enabled:  Two different characters refuse to smush', () => {
        flm.horizontalSmushingRules.enableEqualCharacterSmushing();
        expect(testHorizontalSmush(flm, '|', '/', '$')).toEqual(null);
    });

    test('When Enabled:  | and | resolve to |', () => {
        flm.horizontalSmushingRules.enableEqualCharacterSmushing();
        expect(testHorizontalSmush(flm, '|', '|', '$')).toEqual('|');
    });

    test('When Enabled:  X and X resolve to X', () => {
        flm.horizontalSmushingRules.enableEqualCharacterSmushing();
        expect(testHorizontalSmush(flm, 'X', 'X', '$')).toEqual('X');
    });

    test('When Enabled:  / and / resolve to /', () => {
        flm.horizontalSmushingRules.enableEqualCharacterSmushing();
        expect(testHorizontalSmush(flm, '/', '/', '$')).toEqual('/');
    });

    test('When Unset:  / and / refuse to smush', () => {
        flm.horizontalSmushingRules.unsetEqualCharacterSmushing();
        expect(testHorizontalSmush(flm, '/', '/', '$')).toEqual(null);
    });

    test('When Disabled:  | and | refuse to smush', () => {
        flm.horizontalSmushingRules.disableEqualCharacterSmushing();
        expect(testHorizontalSmush(flm, '|', '|', '$')).toEqual(null);
    });

    test('When Disabled:  X and X refuse to smush', () => {
        flm.horizontalSmushingRules.disableEqualCharacterSmushing();
        expect(testHorizontalSmush(flm, 'X', 'X', '$')).toEqual(null);
    });

    test('When Disabled:  / and / refuse to smush', () => {
        flm.horizontalSmushingRules.disableEqualCharacterSmushing();
        expect(testHorizontalSmush(flm, '/', '/', '$')).toEqual(null);
    });
});

describe('Test Horizontal Underscore Smushing', () => {
    const flm: FontLayoutManager = new FontLayoutManager();
    // Disable universal horizontal smushing to ensure we're testing just the one rule
    flm.horizontalLayout.disableHorizontalSmushing();

    const underscoreReplacers = ['|', '/', '\\', '[', ']', '{', '}', '(', ')', '<', '>'];

    for (const c of underscoreReplacers) {
        test(`When Enabled:  _ and ${c} resolves to ${c}`, () => {
            flm.horizontalSmushingRules.enableUnderscoreSmushing();
            expect(testHorizontalSmush(flm, '_', c, '$')).toEqual(c);
        });
        test(`When Enabled:  ${c} and _ resolves to ${c}`, () => {
            flm.horizontalSmushingRules.enableUnderscoreSmushing();
            expect(testHorizontalSmush(flm, c, '_', '$')).toEqual(c);
        });
        test(`When Unset:  ${c} and _ refuse to smush`, () => {
            flm.horizontalSmushingRules.unsetUnderscoreSmushing();
            expect(testHorizontalSmush(flm, c, '_', '$')).toEqual(null);
        });
    }

    for (const c of underscoreReplacers) {
        test(`When Disabled:  _ and ${c} refuse to smush`, () => {
            flm.horizontalSmushingRules.disableUnderscoreSmushing();
            expect(testHorizontalSmush(flm, '_', c, '$')).toEqual(null);
        });
        test(`When Disabled:  ${c} and _ refuse to smush`, () => {
            flm.horizontalSmushingRules.disableUnderscoreSmushing();
            expect(testHorizontalSmush(flm, c, '_', '$')).toEqual(null);
        });
    }
});

describe('Test Horizontal Hierarchy Smushing', () => {
    const flm: FontLayoutManager = new FontLayoutManager();
    // Disable universal horizontal smushing to ensure we're testing just the one rule
    flm.horizontalLayout.disableHorizontalSmushing();

    test('When Enabled:  | and / resolve to /', () => {
        flm.horizontalSmushingRules.enableHierarchySmushing();
        expect(testHorizontalSmush(flm, '|', '/', '$')).toEqual('/');
    });
    test('When Enabled:  \\ and [ resolve to [', () => {
        flm.horizontalSmushingRules.enableHierarchySmushing();
        expect(testHorizontalSmush(flm, '\\', '[', '$')).toEqual('[');
    });
    test('When Enabled:  ] and { resolve to {', () => {
        flm.horizontalSmushingRules.enableHierarchySmushing();
        expect(testHorizontalSmush(flm, ']', '{', '$')).toEqual('{');
    });
    test('When Enabled:  } and ( resolve to (', () => {
        flm.horizontalSmushingRules.enableHierarchySmushing();
        expect(testHorizontalSmush(flm, '}', '(', '$')).toEqual('(');
    });
    test('When Enabled:  ) and > resolve to >', () => {
        flm.horizontalSmushingRules.enableHierarchySmushing();
        expect(testHorizontalSmush(flm, ')', '>', '$')).toEqual('>');
    });
    test('When Enabled:  | and > resolve to >', () => {
        flm.horizontalSmushingRules.enableHierarchySmushing();
        expect(testHorizontalSmush(flm, '|', '>', '$')).toEqual('>');
    });
    test('When Enabled:  ) and / resolve to )', () => {
        flm.horizontalSmushingRules.enableHierarchySmushing();
        expect(testHorizontalSmush(flm, ')', '/', '$')).toEqual(')');
    });
    test('When Unset:  ) and / refuse to smush', () => {
        flm.horizontalSmushingRules.unsetHierarchySmushing();
        expect(testHorizontalSmush(flm, ')', '/', '$')).toEqual(null);
    });
    test('When Disabled:  | and / refuse to smush', () => {
        flm.horizontalSmushingRules.disableHierarchySmushing();
        expect(testHorizontalSmush(flm, '|', '/', '$')).toEqual(null);
    });
    test('When Disabled:  \\ and [ refuse to smush', () => {
        flm.horizontalSmushingRules.disableHierarchySmushing();
        expect(testHorizontalSmush(flm, '\\', '[', '$')).toEqual(null);
    });
    test('When Disabled:  ] and { refuse to smush', () => {
        flm.horizontalSmushingRules.disableHierarchySmushing();
        expect(testHorizontalSmush(flm, ']', '{', '$')).toEqual(null);
    });
    test('When Disabled:  } and ( refuse to smush', () => {
        flm.horizontalSmushingRules.disableHierarchySmushing();
        expect(testHorizontalSmush(flm, '}', '(', '$')).toEqual(null);
    });
    test('When Disabled:  ) and > refuse to smush', () => {
        flm.horizontalSmushingRules.disableHierarchySmushing();
        expect(testHorizontalSmush(flm, ')', '>', '$')).toEqual(null);
    });
    test('When Disabled:  | and > refuse to smush', () => {
        flm.horizontalSmushingRules.disableHierarchySmushing();
        expect(testHorizontalSmush(flm, '|', '>', '$')).toEqual(null);
    });
    test('When Disabled:  ) and / refuse to smush', () => {
        flm.horizontalSmushingRules.disableHierarchySmushing();
        expect(testHorizontalSmush(flm, ')', '/', '$')).toEqual(null);
    });
});

describe('Test Horizontal Opposite Pair Smushing', () => {
    const flm: FontLayoutManager = new FontLayoutManager();
    // Disable universal horizontal smushing to ensure we're testing just the one rule
    flm.horizontalLayout.disableHorizontalSmushing();

    test('When Enabled:  [ and ] resolve to |', () => {
        flm.horizontalSmushingRules.enableOppositePairSmushing();
        expect(testHorizontalSmush(flm, '[', ']', '$')).toEqual('|');
    });
    test('When Enabled:  ] and [ resolve to |', () => {
        flm.horizontalSmushingRules.enableOppositePairSmushing();
        expect(testHorizontalSmush(flm, ']', '[', '$')).toEqual('|');
    });
    test('When Enabled:  { and } resolve to |', () => {
        flm.horizontalSmushingRules.enableOppositePairSmushing();
        expect(testHorizontalSmush(flm, '{', '}', '$')).toEqual('|');
    });
    test('When Enabled:  } and { resolve to |', () => {
        flm.horizontalSmushingRules.enableOppositePairSmushing();
        expect(testHorizontalSmush(flm, '}', '{', '$')).toEqual('|');
    });
    test('When Enabled:  ( and ) resolve to |', () => {
        flm.horizontalSmushingRules.enableOppositePairSmushing();
        expect(testHorizontalSmush(flm, '(', ')', '$')).toEqual('|');
    });
    test('When Enabled:  ) and ( resolve to |', () => {
        flm.horizontalSmushingRules.enableOppositePairSmushing();
        expect(testHorizontalSmush(flm, ')', '(', '$')).toEqual('|');
    });
    test('When Unset:  ) and ( refuse to smush', () => {
        flm.horizontalSmushingRules.unsetOppositePairSmushing();
        expect(testHorizontalSmush(flm, ')', '(', '$')).toEqual(null);
    });
    test('When Disabled:  [ and ] refuse to smush', () => {
        flm.horizontalSmushingRules.disableOppositePairSmushing();
        expect(testHorizontalSmush(flm, '[', ']', '$')).toEqual(null);
    });
    test('When Disabled:  ] and [ refuse to smush', () => {
        flm.horizontalSmushingRules.disableOppositePairSmushing();
        expect(testHorizontalSmush(flm, ']', '[', '$')).toEqual(null);
    });
    test('When Disabled:  { and } refuse to smush', () => {
        flm.horizontalSmushingRules.disableOppositePairSmushing();
        expect(testHorizontalSmush(flm, '{', '}', '$')).toEqual(null);
    });
    test('When Disabled:  } and { refuse to smush', () => {
        flm.horizontalSmushingRules.disableOppositePairSmushing();
        expect(testHorizontalSmush(flm, '}', '{', '$')).toEqual(null);
    });
    test('When Disabled:  ( and ) refuse to smush', () => {
        flm.horizontalSmushingRules.disableOppositePairSmushing();
        expect(testHorizontalSmush(flm, '(', ')', '$')).toEqual(null);
    });
    test('When Disabled:  ) and ( refuse to smush', () => {
        flm.horizontalSmushingRules.disableOppositePairSmushing();
        expect(testHorizontalSmush(flm, ')', '(', '$')).toEqual(null);
    });
});

describe('Test Horizontal Big X Smushing', () => {
    const flm: FontLayoutManager = new FontLayoutManager();
    // Disable universal horizontal smushing to ensure we're testing just the one rule
    flm.horizontalLayout.disableHorizontalSmushing();

    test('When Enabled:  / and \\ resolve to |', () => {
        flm.horizontalSmushingRules.enableBigXSmushing();
        expect(testHorizontalSmush(flm, '/', '\\', '$')).toEqual('|');
    });
    test('When Enabled:  \\ and / resolve to Y', () => {
        flm.horizontalSmushingRules.enableBigXSmushing();
        expect(testHorizontalSmush(flm, '\\', '/', '$')).toEqual('Y');
    });
    test('When Enabled:  > and < resolve to X', () => {
        flm.horizontalSmushingRules.enableBigXSmushing();
        expect(testHorizontalSmush(flm, '>', '<', '$')).toEqual('X');
    });
    test('When Enabled:  < and > refuse to smush', () => {
        flm.horizontalSmushingRules.enableBigXSmushing();
        expect(testHorizontalSmush(flm, '<', '>', '$')).toEqual(null);
    });
    test('When Unset:  > and < refuse to smush', () => {
        flm.horizontalSmushingRules.unsetBigXSmushing();
        expect(testHorizontalSmush(flm, '>', '<', '$')).toEqual(null);
    });
    test('When Disabled:  / and \\ refuse to smush', () => {
        flm.horizontalSmushingRules.disableBigXSmushing();
        expect(testHorizontalSmush(flm, '/', '\\', '$')).toEqual(null);
    });
    test('When Disabled:  \\ and / refuse to smush', () => {
        flm.horizontalSmushingRules.disableBigXSmushing();
        expect(testHorizontalSmush(flm, '\\', '/', '$')).toEqual(null);
    });
    test('When Disabled:  > and < refuse to smush', () => {
        flm.horizontalSmushingRules.disableBigXSmushing();
        expect(testHorizontalSmush(flm, '>', '<', '$')).toEqual(null);
    });
});

describe('Test Horizontal Hardblank Smushing', () => {
    const flm: FontLayoutManager = new FontLayoutManager();
    // Disable universal horizontal smushing to ensure we're testing just the one rule
    flm.horizontalLayout.disableHorizontalSmushing();

    test('When Enabled:  Two hardblanks resolve to hardblank', () => {
        flm.horizontalSmushingRules.enableHardblankSmushing();
        expect(testHorizontalSmush(flm, '$', '$', '$')).toEqual('$');
    });
    test('When Unset:  Two hardblanks refuse to smush', () => {
        flm.horizontalSmushingRules.unsetHardblankSmushing();
        expect(testHorizontalSmush(flm, '$', '$', '$')).toEqual(null);
    });
    test('When Disabled:  Two hardblanks refuse to smush', () => {
        flm.horizontalSmushingRules.disableHardblankSmushing();
        expect(testHorizontalSmush(flm, '$', '$', '$')).toEqual(null);
    });
});

describe('Test Horizontal Universal Smushing - LTR', () => {
    const flm: FontLayoutManager = new FontLayoutManager();
    flm.horizontalLayout.enableHorizontalSmushing();
    flm.printDirection.leftToRight();

    test('| and } resolves to }', () => {
        expect(testHorizontalSmush(flm, '|', '}', '$')).toEqual('}');
    });
    test('} and | resolve to |', () => {
        expect(testHorizontalSmush(flm, '}', '|', '$')).toEqual('|');
    });
    test('Hardblank and } resolves to }', () => {
        expect(testHorizontalSmush(flm, '$', '}', '$')).toEqual('}');
    });
    test('| and hardblank resolves to |', () => {
        expect(testHorizontalSmush(flm, '|', '$', '$')).toEqual('|');
    });
});

describe('Test Horizontal Universal Smushing - RTL', () => {
    const flm: FontLayoutManager = new FontLayoutManager();
    flm.horizontalLayout.enableHorizontalSmushing();
    flm.printDirection.rightToLeft();

    test('| and } resolves to |', () => {
        expect(testHorizontalSmush(flm, '|', '}', '$')).toEqual('|');
    });
    test('} and | resolve to }', () => {
        expect(testHorizontalSmush(flm, '}', '|', '$')).toEqual('}');
    });
    test('Hardblank and } resolves to }', () => {
        expect(testHorizontalSmush(flm, '$', '}', '$')).toEqual('}');
    });
    test('| and hardblank resolves to |', () => {
        expect(testHorizontalSmush(flm, '|', '$', '$')).toEqual('|');
    });
});

describe('Test Vertical Equal Character Smushing', () => {
    const flm: FontLayoutManager = new FontLayoutManager();
    // Disable universal vertical smushing to ensure we're testing just one rule at a time
    flm.verticalLayout.disableVerticalSmushing();

    test('When Enabled:  Two hardblanks smush to whitespace', () => {
        flm.verticalSmushingRules.enableEqualCharacterSmushing();
        expect(testVerticalSmush(flm, '$', '$', '$')).toEqual(' ');
    });

    test('When Enabled:  Two different characters refuse to smush', () => {
        flm.verticalSmushingRules.enableEqualCharacterSmushing();
        expect(testVerticalSmush(flm, '|', '/', '$')).toEqual(null);
    });

    test('When Enabled:  | and | resolve to |', () => {
        flm.verticalSmushingRules.enableEqualCharacterSmushing();
        expect(testVerticalSmush(flm, '|', '|', '$')).toEqual('|');
    });

    test('When Enabled:  X and X resolve to X', () => {
        flm.verticalSmushingRules.enableEqualCharacterSmushing();
        expect(testVerticalSmush(flm, 'X', 'X', '$')).toEqual('X');
    });

    test('When Enabled:  / and / resolve to /', () => {
        flm.verticalSmushingRules.enableEqualCharacterSmushing();
        expect(testVerticalSmush(flm, '/', '/', '$')).toEqual('/');
    });

    test('When Unset:  / and / refuse to smush', () => {
        flm.verticalSmushingRules.unsetEqualCharacterSmushing();
        expect(testVerticalSmush(flm, '/', '/', '$')).toEqual(null);
    });

    test('When Disabled:  | and | refuse to smush', () => {
        flm.verticalSmushingRules.disableEqualCharacterSmushing();
        expect(testVerticalSmush(flm, '|', '|', '$')).toEqual(null);
    });

    test('When Disabled:  X and X refuse to smush', () => {
        flm.verticalSmushingRules.disableEqualCharacterSmushing();
        expect(testVerticalSmush(flm, 'X', 'X', '$')).toEqual(null);
    });

    test('When Disabled:  / and / refuse to smush', () => {
        flm.verticalSmushingRules.disableEqualCharacterSmushing();
        expect(testVerticalSmush(flm, '/', '/', '$')).toEqual(null);
    });
});

describe('Test Vertical Underscore Smushing', () => {
    const flm: FontLayoutManager = new FontLayoutManager();
    // Disable universal vertical smushing to ensure we're testing just the one rule
    flm.verticalLayout.disableVerticalSmushing();

    const underscoreReplacers = ['|', '/', '\\', '[', ']', '{', '}', '(', ')', '<', '>'];

    for (const c of underscoreReplacers) {
        test(`When Enabled:  _ and ${c} resolves to ${c}`, () => {
            flm.verticalSmushingRules.enableUnderscoreSmushing();
            expect(testVerticalSmush(flm, '_', c, '$')).toEqual(c);
        });
        test(`When Enabled:  ${c} and _ resolves to ${c}`, () => {
            flm.verticalSmushingRules.enableUnderscoreSmushing();
            expect(testVerticalSmush(flm, c, '_', '$')).toEqual(c);
        });
        test(`When Unset:  ${c} and _ refuse to smush`, () => {
            flm.verticalSmushingRules.unsetUnderscoreSmushing();
            expect(testVerticalSmush(flm, c, '_', '$')).toEqual(null);
        });
    }

    for (const c of underscoreReplacers) {
        test(`When Disabled:  _ and ${c} refuse to smush`, () => {
            flm.verticalSmushingRules.disableUnderscoreSmushing();
            expect(testVerticalSmush(flm, '_', c, '$')).toEqual(null);
        });
        test(`When Disabled:  ${c} and _ refuse to smush`, () => {
            flm.verticalSmushingRules.disableUnderscoreSmushing();
            expect(testVerticalSmush(flm, c, '_', '$')).toEqual(null);
        });
    }
});

describe('Test Vertical Hierarchy Smushing', () => {
    const flm: FontLayoutManager = new FontLayoutManager();
    // Disable universal vertical smushing to ensure we're testing just the one rule
    flm.verticalLayout.disableVerticalSmushing();

    test('When Enabled:  | and / resolve to /', () => {
        flm.verticalSmushingRules.enableHierarchySmushing();
        expect(testVerticalSmush(flm, '|', '/', '$')).toEqual('/');
    });
    test('When Enabled:  \\ and [ resolve to [', () => {
        flm.verticalSmushingRules.enableHierarchySmushing();
        expect(testVerticalSmush(flm, '\\', '[', '$')).toEqual('[');
    });
    test('When Enabled:  ] and { resolve to {', () => {
        flm.verticalSmushingRules.enableHierarchySmushing();
        expect(testVerticalSmush(flm, ']', '{', '$')).toEqual('{');
    });
    test('When Enabled:  } and ( resolve to (', () => {
        flm.verticalSmushingRules.enableHierarchySmushing();
        expect(testVerticalSmush(flm, '}', '(', '$')).toEqual('(');
    });
    test('When Enabled:  ) and > resolve to >', () => {
        flm.verticalSmushingRules.enableHierarchySmushing();
        expect(testVerticalSmush(flm, ')', '>', '$')).toEqual('>');
    });
    test('When Enabled:  | and > resolve to >', () => {
        flm.verticalSmushingRules.enableHierarchySmushing();
        expect(testVerticalSmush(flm, '|', '>', '$')).toEqual('>');
    });
    test('When Enabled:  ) and / resolve to )', () => {
        flm.verticalSmushingRules.enableHierarchySmushing();
        expect(testVerticalSmush(flm, ')', '/', '$')).toEqual(')');
    });
    test('When Unset:  ) and / refuse to smush', () => {
        flm.verticalSmushingRules.unsetHierarchySmushing();
        expect(testVerticalSmush(flm, ')', '/', '$')).toEqual(null);
    });
    test('When Disabled:  | and / refuse to smush', () => {
        flm.verticalSmushingRules.disableHierarchySmushing();
        expect(testVerticalSmush(flm, '|', '/', '$')).toEqual(null);
    });
    test('When Disabled:  \\ and [ refuse to smush', () => {
        flm.verticalSmushingRules.disableHierarchySmushing();
        expect(testVerticalSmush(flm, '\\', '[', '$')).toEqual(null);
    });
    test('When Disabled:  ] and { refuse to smush', () => {
        flm.verticalSmushingRules.disableHierarchySmushing();
        expect(testVerticalSmush(flm, ']', '{', '$')).toEqual(null);
    });
    test('When Disabled:  } and ( refuse to smush', () => {
        flm.verticalSmushingRules.disableHierarchySmushing();
        expect(testVerticalSmush(flm, '}', '(', '$')).toEqual(null);
    });
    test('When Disabled:  ) and > refuse to smush', () => {
        flm.verticalSmushingRules.disableHierarchySmushing();
        expect(testVerticalSmush(flm, ')', '>', '$')).toEqual(null);
    });
    test('When Disabled:  | and > refuse to smush', () => {
        flm.verticalSmushingRules.disableHierarchySmushing();
        expect(testVerticalSmush(flm, '|', '>', '$')).toEqual(null);
    });
    test('When Disabled:  ) and / refuse to smush', () => {
        flm.verticalSmushingRules.disableHierarchySmushing();
        expect(testVerticalSmush(flm, ')', '/', '$')).toEqual(null);
    });
});

describe('Test Vertical Horizontal Line Smushing', () => {
    const flm: FontLayoutManager = new FontLayoutManager();
    // Disable universal vertical smushing to ensure we're testing just the one rule
    flm.verticalLayout.disableVerticalSmushing();

    test('When Enabled:  - and _ resolve to =', () => {
        flm.verticalSmushingRules.enableHorizontalLineSmushing();
        expect(testVerticalSmush(flm, '-', '_', '$')).toEqual('=');
    });
    test('When Enabled:  _ and - resolve to =', () => {
        flm.verticalSmushingRules.enableHorizontalLineSmushing();
        expect(testVerticalSmush(flm, '_', '-', '$')).toEqual('=');
    });
    test('When Enabled:  - and - refuse to smush', () => {
        flm.verticalSmushingRules.enableHorizontalLineSmushing();
        expect(testVerticalSmush(flm, '-', '-', '$')).toEqual(null);
    });
    test('When Enabled:  _ and _ refuse to smush', () => {
        flm.verticalSmushingRules.enableHorizontalLineSmushing();
        expect(testVerticalSmush(flm, '_', '_', '$')).toEqual(null);
    });
    test('When Disabled:  - and - refuse to smush', () => {
        flm.verticalSmushingRules.disableHorizontalLineSmushing();
        expect(testVerticalSmush(flm, '-', '-', '$')).toEqual(null);
    });
    test('When Unset:  - and - refuse to smush', () => {
        flm.verticalSmushingRules.unsetHorizontalLineSmushing();
        expect(testVerticalSmush(flm, '-', '-', '$')).toEqual(null);
    });
});

describe('Test (the *INACTIVE* rule) Vertical Vertical Line SuperSmushing', () => {
    const flm: FontLayoutManager = new FontLayoutManager();
    // Disable universal vertical smushing to ensure we're testing just the one rule
    flm.verticalLayout.disableVerticalSmushing();

    test('When Enabled:  | and | refuse to smush', () => {
        flm.verticalSmushingRules.enableVerticalLineSuperSmushing();
        expect(testVerticalSmush(flm, '|', '|', '$')).toEqual(null);
    });
    test('When Disabled:  | and | refuse to smush', () => {
        flm.verticalSmushingRules.disableVerticalLineSuperSmushing();
        expect(testVerticalSmush(flm, '|', '|', '$')).toEqual(null);
    });
    test('When Unset:  | and | refuse to smush', () => {
        flm.verticalSmushingRules.unsetVerticalLineSuperSmushing();
        expect(testVerticalSmush(flm, '|', '|', '$')).toEqual(null);
    });
});

describe('Test Whitespace and Padding Character Replacement', () => {
    const flm = new FontLayoutManager();
    flm.width.set(30);
    flm.padding.fullPadding();
    flm.characterReplacement.setWhitespaceCharacter('.');
    flm.characterReplacement.setPaddingCharacter('X');
    const fontStandard = FLFParser.parse(fs.readFileSync(path.join('..', '..', 'assets', 'fonts', 'core', 'standard.flf')).toString()).font;
    test('Replace whitespace with . and padding with X - Left Align', () => {
        flm.align.left();
        expect(flm.renderText('A', fontStandard)).toEqual(`...._....XXXXXXXXXXXXXXXXXXXXX
.../.\\...XXXXXXXXXXXXXXXXXXXXX
../._.\\..XXXXXXXXXXXXXXXXXXXXX
./.___.\\.XXXXXXXXXXXXXXXXXXXXX
/_/...\\_\\XXXXXXXXXXXXXXXXXXXXX
.........XXXXXXXXXXXXXXXXXXXXX`);
    });

    test('Replace whitespace with . - Centre Align', () => {
        flm.align.centre();
        expect(flm.renderText('A', fontStandard)).toEqual(`XXXXXXXXXX...._....XXXXXXXXXXX
XXXXXXXXXX.../.\\...XXXXXXXXXXX
XXXXXXXXXX../._.\\..XXXXXXXXXXX
XXXXXXXXXX./.___.\\.XXXXXXXXXXX
XXXXXXXXXX/_/...\\_\\XXXXXXXXXXX
XXXXXXXXXX.........XXXXXXXXXXX`);
    });
    test('Replace whitespace with . and padding with X - Right Align', () => {
        flm.align.right();
        expect(flm.renderText('A', fontStandard)).toEqual(`XXXXXXXXXXXXXXXXXXXXX...._....
XXXXXXXXXXXXXXXXXXXXX.../.\\...
XXXXXXXXXXXXXXXXXXXXX../._.\\..
XXXXXXXXXXXXXXXXXXXXX./.___.\\.
XXXXXXXXXXXXXXXXXXXXX/_/...\\_\\
XXXXXXXXXXXXXXXXXXXXX.........`);
    });
    test('Replace whitespace with . - Font Default Alignment', () => {
        flm.align.useFontDefaultAlignment();
        expect(flm.renderText('A', fontStandard)).toEqual(`...._....XXXXXXXXXXXXXXXXXXXXX
.../.\\...XXXXXXXXXXXXXXXXXXXXX
../._.\\..XXXXXXXXXXXXXXXXXXXXX
./.___.\\.XXXXXXXXXXXXXXXXXXXXX
/_/...\\_\\XXXXXXXXXXXXXXXXXXXXX
.........XXXXXXXXXXXXXXXXXXXXX`);
    });
    test('Reset whitespace to default - Font Default Alignment', () => {
        flm.align.useFontDefaultAlignment();
        flm.characterReplacement.resetWhitespaceCharacter();
        flm.characterReplacement.resetPaddingCharacter();
        expect(flm.renderText('A', fontStandard)).toEqual(`    _                         
   / \\                        
  / _ \\                       
 / ___ \\                      
/_/   \\_\\                     
                              `);
    });
});

describe('Test Arbitrary Character Replacement', () => {
    const flm = new FontLayoutManager();
    flm.width.set(30);
    flm.padding.fullPadding();
    flm.characterReplacement.setWhitespaceCharacter('.');
    flm.characterReplacement.setPaddingCharacter('.');
    flm.characterReplacement.addBodyTextCharacterReplacer('/'.charCodeAt(0), '*');
    const fontStandard = FLFParser.parse(fs.readFileSync(path.join('..', '..', 'assets', 'fonts', 'core', 'standard.flf')).toString()).font;
    test('Replace / with * - Left Align', () => {
        flm.align.left();
        expect(flm.renderText('A', fontStandard)).toEqual(`...._.........................
...*.\\........................
..*._.\\.......................
.*.___.\\......................
*_*...\\_\\.....................
..............................`);
    });
});

describe('Test width setting', () => {
    const flm = new FontLayoutManager();
    test('Terminal width', () => {
        expect(() => flm.width.useTerminalWidth()).not.toThrow();
    });
    test('Unset width should revert to default', () => {
        flm.width.useDefault();
        expect(flm.width.get()).toEqual(80);
    });
});

describe('Test LTR Font Rendering', () => {
    const flm = new FontLayoutManager();
    flm.width.set(200);
    const fontStandard = FLFParser.parse(fs.readFileSync(path.join('..', '..', 'assets', 'fonts', 'core', 'standard.flf')).toString()).font;
    test('Rendering standard.flf - Horizontal Full Width', () => {
        flm.horizontalLayout.full();
        flm.characterReplacement.setPaddingCharacter('X');
        expect(flm.renderText('Testing Figlet', fontStandard).length).toEqual(521);
    });
    test('Rendering standard.flf - Horizontal Kerning', () => {
        flm.horizontalLayout.kern();
        expect(flm.renderText('Testing Figlet', fontStandard).length).toEqual(425);
    });
    test('Rendering standard.flf - Horizontal Smushing', () => {
        flm.horizontalLayout.smush();
        expect(flm.renderText('Testing Figlet', fontStandard).length).toEqual(365);
    });
    test('Rendering standard.flf - Vertical Full Width', () => {
        flm.horizontalLayout.default();
        flm.verticalLayout.full();
        expect(flm.renderText('Testing\nFiglet', fontStandard).length).toEqual(365);
    });
    test('Rendering standard.flf - Vertical Kerning', () => {
        flm.horizontalLayout.default();
        flm.verticalLayout.kern();
        expect(flm.renderText('Testing\nFiglet', fontStandard).length).toEqual(338);
    });
    test('Rendering standard.flf - Vertical Smushing', () => {
        flm.horizontalLayout.default();
        flm.verticalLayout.smush();
        expect(flm.renderText('Testing\nFiglet', fontStandard).length).toEqual(311);
    });
    test('Rendering standard.flf - Unset Overrides', () => {
        flm.horizontalLayout.default();
        flm.verticalLayout.default();
        expect(flm.renderText('Testing Figlet', fontStandard).length).toEqual(365);
    });
    test('Rendering standard.flf as RTL', () => {
        flm.horizontalLayout.default();
        flm.verticalLayout.default();
        flm.printDirection.rightToLeft();
        expect(flm.renderText('Testing Figlet', fontStandard).length).toEqual(1205);
    });
    test('Rendering standard.flf as default (LTR)', () => {
        flm.horizontalLayout.default();
        flm.verticalLayout.default();
        flm.printDirection.default();
        expect(flm.renderText('Testing Figlet', fontStandard).length).toEqual(365);
    });
});

describe('Test RTL Rendering', () => {
    const flm = new FontLayoutManager();
    flm.width.set(200);
    const fontIvrit = FLFParser.parse(fs.readFileSync(path.join('..', '..', 'assets', 'fonts', 'core', 'ivrit.flf')).toString()).font;
    test('Rendering ivrit.flf - Horizontal Full Width', () => {
        flm.horizontalLayout.full();
        flm.padding.noPadding();
        expect(flm.renderText('Testing Figlet', fontIvrit).length).toEqual(521);
    });
    test('Rendering invrit.flf - Horizontal Kerning', () => {
        flm.horizontalLayout.kern();
        flm.padding.noPadding();
        expect(flm.renderText('Testing Figlet', fontIvrit).length).toEqual(431);
    });
    test('Rendering ivrit.flf - Horizontal Smushing', () => {
        flm.horizontalLayout.smush();
        flm.padding.noPadding();
        expect(flm.renderText('Testing Figlet', fontIvrit).length).toEqual(365);
    });
    test('Rendering ivrit.flf - Vertical Full Height', () => {
        flm.horizontalLayout.default();
        flm.verticalLayout.full();
        flm.padding.noPadding();
        expect(flm.renderText('Testing\nFiglet', fontIvrit).length).toEqual(371);
    });
    test('Rendering invrit.flf - Vertical Kerning', () => {
        flm.horizontalLayout.default();
        flm.verticalLayout.kern();
        flm.padding.noPadding();
        expect(flm.renderText('Testing\nFiglet', fontIvrit).length).toEqual(371);
    });
    test('Rendering ivrit.flf - Vertical Smushing', () => {
        flm.horizontalLayout.default();
        flm.verticalLayout.smush();
        flm.padding.noPadding();
        expect(flm.renderText('Testing\nFiglet', fontIvrit).length).toEqual(344);
    });
    test('Rendering ivrit.flf as LTR', () => {
        flm.horizontalLayout.default();
        flm.verticalLayout.default();
        flm.printDirection.leftToRight();
        flm.padding.default();
        expect(flm.renderText('Testing Figlet', fontIvrit).length).toEqual(365);
    });
    test('Rendering ivrit.flf as default (RTL)', () => {
        flm.horizontalLayout.default();
        flm.verticalLayout.default();
        flm.printDirection.default();
        flm.padding.default();
        expect(flm.renderText('Testing Figlet', fontIvrit).length).toEqual(1205);
    });
    test('Rendering ivrit.flf with horizontal overlaps', () => {
        flm.horizontalLayout.default();
        flm.verticalLayout.default();
        flm.printDirection.default();
        flm.padding.default();
        expect(flm.renderText('F.T.F', fontIvrit).length).toEqual(1205);
    });
});

describe('Test Vertical Kerning Max Offset', () => {
    const flm = new FontLayoutManager();
    flm.width.set(30);
    flm.padding.fullPadding();
    flm.characterReplacement.setWhitespaceCharacter('.');
    flm.characterReplacement.setPaddingCharacter('.');
    const fontStandard = FLFParser.parse(fs.readFileSync(path.join('..', '..', 'assets', 'fonts', 'core', 'standard.flf')).toString()).font;
    test('Kerning Offset 0', () => {
        flm.align.left();
        flm.verticalLayout.smush();
        flm.verticalLayout.setVerticalKernMaxOffset(0);
        expect(flm.renderText('A\n            B', fontStandard)).toEqual(`...._........____.............
.../.\\......|.__.)............
../._.\\.....|.._.\\............
./.___.\\....|.|_).|...........
/_/...\\_\\...|____/............
..............................`);
    });
    test('Kerning Offset 2', () => {
        flm.align.left();
        flm.verticalLayout.smush();
        flm.verticalLayout.setVerticalKernMaxOffset(2);
        expect(flm.renderText('A\n            B', fontStandard)).toEqual(`...._.........................
.../.\\........................
../._.\\......____.............
./.___.\\....|.__.)............
/_/...\\_\\...|.._.\\............
............|.|_).|...........
............|____/............
..............................`);
    });
    test('Kerning Offset Default', () => {
        flm.align.left();
        flm.verticalLayout.smush();
        flm.verticalLayout.setDefaultVerticalKernMaxOffset();
        expect(flm.renderText('A\n            B', fontStandard)).toEqual(`...._.........................
.../.\\.......____.............
../._.\\.....|.__.)............
./.___.\\....|.._.\\............
/_/...\\_\\...|.|_).|...........
............|____/............
..............................`);
    });
});

describe('Test Horizontal Smush Plus Mode', () => {
    const flm = new FontLayoutManager();
    flm.width.set(13);
    flm.padding.fullPadding();
    flm.characterReplacement.setWhitespaceCharacter('.');
    flm.characterReplacement.setPaddingCharacter('P');
    const fontSlant = FLFParser.parse(fs.readFileSync(path.join('..', '..', 'assets', 'fonts', 'core', 'slant.flf')).toString()).font;
    test('Smush Plus Enabled', () => {
        flm.horizontalSmushingRules.enableHorizontalSmushPlusMode();
        expect(flm.renderText('F,', fontSlant)).toEqual(`....______PPP
.../.____/PPP
.././_....PPP
./.__/....PPP
/_/.(.)...PPP
....|/....PPP`);
    });
    test('Smush Plus Disabled', () => {
        flm.horizontalSmushingRules.disableHorizontalSmushPlusMode();
        expect(flm.renderText('F,', fontSlant)).toEqual(`....______PPP
.../.____/PPP
.././_....PPP
./.__/.._.PPP
/_/....(.)PPP
.......|/.PPP`);
    });
});
