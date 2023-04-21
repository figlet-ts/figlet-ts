import fs from 'fs';
import path from 'path';
import { FIGFont, FLFParser, FontLayoutManager } from '../../../src';
import { FIGCharacter } from '../../../src/FIGCharacter';
import { DisplayCanvas } from '../../../src/rendering/DisplayCanvas';
import { InputToken } from '../../../src/utils/InputToken';

describe('Test canvas rendering', () => {
    test('Simple smushable character addition - HSmush with VKern', () => {
        // Create FLM
        const flm = new FontLayoutManager();

        // Set kerning/smushing rules
        flm.verticalLayout.kern();
        flm.horizontalLayout.smush();

        // Set a short width (easier for triggering state rollbacks)
        flm.width.set(6);

        // Create a dummy font
        const font = new FIGFont();
        font.height = 3;

        // Bind the reference font to the FLM
        flm.options.setReferenceFont(font);

        // Create canvas for tests
        const dc: DisplayCanvas = new DisplayCanvas(font, flm);

        // Create a dummy FIGcharacter
        const squareFc = FIGCharacter.fromRequiredFIGCharacterString(44, '$'.charCodeAt(0), '|-|@\n| |@\n|-|@@');

        expect(dc.getTotalCharacterCount()).toEqual(0);
        dc.addFIGCharacter(squareFc);
        dc.addFIGCharacter(squareFc);
        expect(dc.getTotalCharacterCount()).toEqual(2);
        expect(dc.toString()).toEqual('|-|-|\n| | |\n|-|-|');
        dc.addFIGCharacter(squareFc);
        dc.addFIGCharacter(squareFc);
        expect(dc.getTotalCharacterCount()).toEqual(4);
        expect(dc.toString()).toEqual('|-|-|\n| | |\n|-|-|\n|-|-|\n| | |\n|-|-|');
    });

    test('Simple unsmushable character addition', () => {
        // Create FLM
        const flm = new FontLayoutManager();
        // Create a dummy font
        const font = new FIGFont();
        font.height = 3;
        // Set a short width (easier for triggering state rollbacks)
        flm.width.set(8);
        flm.options.setReferenceFont(font);
        flm.horizontalLayout.smush();
        flm.horizontalSmushingRules.enableOppositePairSmushing();

        // Create canvas for tests
        const dc: DisplayCanvas = new DisplayCanvas(font, flm);

        // Create unsmushable dummy FIGcharacters
        const squareFc = FIGCharacter.fromRequiredFIGCharacterString(44, '$'.charCodeAt(0), '|-|@\n| |@\n|-|@@');
        const squareFcColons = FIGCharacter.fromRequiredFIGCharacterString(44, '$'.charCodeAt(0), ':-:@\n: :@\n:-:@@');

        expect(dc.getTotalCharacterCount()).toEqual(0);
        dc.addFIGCharacter(squareFc);
        dc.addFIGCharacter(squareFcColons);
        expect(dc.getTotalCharacterCount()).toEqual(2);
        expect(dc.toString()).toEqual('|-|:-:\n| |: :\n|-|:-:');
    });

    test('Wide first character', () => {
        // Create FLM
        const flm = new FontLayoutManager();
        // Create a dummy font
        const font = new FIGFont();
        font.height = 3;
        // Set a short width (easier for triggering state rollbacks)
        flm.options.width.set(2);
        flm.options.setReferenceFont(font);

        // Create canvas for tests
        const dc: DisplayCanvas = new DisplayCanvas(font, flm);

        // Create a dummy FIGcharacter
        const squareFc = FIGCharacter.fromRequiredFIGCharacterString(44, '$'.charCodeAt(0), '|-|@\n| |@\n|-|@@');

        expect(dc.getTotalCharacterCount()).toEqual(0);
        dc.addFIGCharacter(squareFc);
        expect(dc.getTotalCharacterCount()).toEqual(1);
        expect(dc.toString()).toEqual('|-|\n| |\n|-|');
    });
});

describe('Vertical kerning / smushing tests', () => {
    // Create FLM
    const flm = new FontLayoutManager();
    // Create a dummy font
    const font = new FIGFont();
    font.height = 4;
    // Set a short width (easier for triggering state rollbacks)
    flm.width.set(6);
    flm.horizontalLayout.smush();
    flm.options.setReferenceFont(font);

    // Create canvas for tests
    const dc: DisplayCanvas = new DisplayCanvas(font, flm);

    // Create a dummy FIGcharacter
    const squareFc = FIGCharacter.fromRequiredFIGCharacterString(44, '$'.charCodeAt(0), '|-|@\n| |@\n|-|@\n   @@');

    dc.addFIGCharacter(squareFc);
    dc.addFIGCharacter(squareFc);
    dc.addFIGCharacter(squareFc);
    dc.addFIGCharacter(squareFc);

    test('Vertical full layout', () => {
        flm.verticalLayout.full();
        expect(dc.toString()).toEqual('|-|-|\n| | |\n|-|-|\n     \n|-|-|\n| | |\n|-|-|\n     ');
    });

    test('Vertical kerning', () => {
        flm.verticalLayout.kern();
        expect(dc.toString()).toEqual('|-|-|\n| | |\n|-|-|\n|-|-|\n| | |\n|-|-|\n     ');
    });

    test('Vertical smushing, no rules enabled - universal vertical smushing', () => {
        flm.verticalLayout.smush();
        expect(dc.toString()).toEqual('|-|-|\n| | |\n|-|-|\n| | |\n|-|-|\n     ');
    });

    test('Vertical smushing, equal character smushing', () => {
        flm.verticalLayout.smush();
        flm.verticalSmushingRules.enableEqualCharacterSmushing();
        expect(dc.toString()).toEqual('|-|-|\n| | |\n|-|-|\n| | |\n|-|-|\n     ');
    });
});

describe('Font-based tests', () => {
    test('Adding two tokens in standard.flf', () => {
        // Create FLM
        const flm = new FontLayoutManager();
        // Set a short width (easier for triggering state rollbacks)
        flm.options.width.set(8);

        const parsedFont = FLFParser.parse(fs.readFileSync(path.join('..', '..', 'assets', 'fonts', 'core', 'standard.flf')).toString()).font;

        // Create canvas for tests
        const dc: DisplayCanvas = new DisplayCanvas(parsedFont, flm);

        dc.addWord(new InputToken('A'));
        dc.addWord(new InputToken(' '));
        dc.addWord(new InputToken('B'));
        expect(dc.getTotalWordCount()).toEqual(2);
        expect(dc.getNumberOfLines()).toEqual(2);
    });

    test('Adding multiple words in ivrit.flf', () => {
        // Create FLM
        const flm = new FontLayoutManager();
        flm.options.width.set(80);

        const fontIvrit = FLFParser.parse(fs.readFileSync(path.join('..', '..', 'assets', 'fonts', 'core', 'ivrit.flf')).toString()).font;
        flm.options.setReferenceFont(fontIvrit);

        // Create canvas for tests
        const dc: DisplayCanvas = new DisplayCanvas(fontIvrit, flm);

        dc.addWord(InputToken.fromWord('Figlet'));
        dc.addWord(InputToken.fromWord('Rules'));
        dc.addWord(InputToken.fromWord('\n'));
        dc.addWord(InputToken.fromWord('Seriously'));
        expect(dc.getTotalWordCount()).toEqual(3);
        expect(dc.getNumberOfLines()).toEqual(2);
    });
});
