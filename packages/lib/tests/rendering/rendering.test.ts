import fs from 'fs';
import { globSync } from 'glob';
import { FLFParser, FontLayoutManager, FontLayoutManagerOptions } from '../../src';

const testFixturesPath = new URL('../../../../assets/testFixtures/rendering/', import.meta.url).href + '/';
class TextRenderingTest {
    constructor(public inputTestFilename: string, public testNumber: number, public testString: string, public fontFileName: URL, public result: string) {}
}

function loadTestTextFile(textFilePath: string): TextRenderingTest {
    const filename = textFilePath.split('/').slice(-1)[0];
    const splitFilename = filename.split('.');
    const fontFolder: string = splitFilename[0];
    const fontName: string = splitFilename[1];
    const fontFilename: URL = new URL(`../../../../assets/fonts/${fontFolder}/${fontName}.flf`, testFixturesPath);
    const testNumber: number = parseInt(splitFilename[2]);
    const fileContents = fs.readFileSync(new URL(textFilePath, testFixturesPath)).toString('utf-8').replace(/\r\n/g, '\n');
    const splitFileContents = fileContents.split('\n');
    const testString: string = splitFileContents.splice(0, 1)[0];
    const expectedResult = splitFileContents.join('\n');

    return new TextRenderingTest(filename, testNumber, testString, fontFilename, expectedResult);
}

function getMapOfFontTestFiles(folder: string): Map<URL, TextRenderingTest[]> {
    const foundTestFiles = globSync(folder + '/**/@(+([A-Za-z0-9])).@(+([A-Za-z0-9])).@(+([0-9])).txt', { cwd: testFixturesPath }).map((x) => x.replaceAll('\\', '/'));

    const fontTests: Map<URL, TextRenderingTest[]> = new Map<URL, TextRenderingTest[]>();
    for (const filename of foundTestFiles) {
        const fontTest: TextRenderingTest = loadTestTextFile(filename);
        if (!fontTests.has(fontTest.fontFileName)) {
            fontTests.set(fontTest.fontFileName, []);
        }
        fontTests.get(fontTest.fontFileName)?.push(fontTest);
        fontTests.get(fontTest.fontFileName)?.sort((a, b) => a.testNumber - b.testNumber);
    }

    return fontTests;
}

function executeTests(folder: string, figDriverOptions: FontLayoutManagerOptions): void {
    const figdriver: FontLayoutManager = new FontLayoutManager(figDriverOptions);
    for (const [fontFileName, fontTests] of getMapOfFontTestFiles(folder)) {
        const parsedFont = FLFParser.parse(fs.readFileSync(fontFileName).toString()).font;

        fontTests.forEach((t) => {
            test(`Rendering test #${t.testNumber} of font ${t.fontFileName.pathname} with expected output file ${t.inputTestFilename}`, () => {
                expect(figdriver.renderText(t.testString, parsedFont).toString()).toEqual(t.result);
            });
        });
    }
}

describe('Default rendering tests', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.align.useFontDefaultAlignment();
    executeTests('default', figDriverOptions);
});

describe('Left-aligned rendering tests', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.align.left();
    executeTests('align/left', figDriverOptions);
});

describe('Right-aligned rendering tests', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.align.right();
    executeTests('align/right', figDriverOptions);
});

describe('Centre-aligned rendering tests', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.align.centre();
    executeTests('align/centre', figDriverOptions);
});

describe('40 width rendering tests', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.width.set(40);
    executeTests('width/40', figDriverOptions);
});

describe('137 width rendering tests', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.width.set(137);
    executeTests('width/137', figDriverOptions);
});

describe('1000 width rendering tests', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.width.set(1000);
    executeTests('width/1000', figDriverOptions);
});

describe('Centre-aligned default padding tests', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.width.set(80);
    figDriverOptions.align.centre();
    figDriverOptions.padding.default();
    executeTests('padding/centre-align-default', figDriverOptions);
});

describe('Centre-aligned no padding tests', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.width.set(80);
    figDriverOptions.align.centre();
    figDriverOptions.padding.noPadding();
    executeTests('padding/centre-align-no-padding', figDriverOptions);
});

describe('Centre-aligned no left padding tests', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.width.set(80);
    figDriverOptions.align.centre();
    figDriverOptions.padding.noLeftPadding();
    executeTests('padding/centre-align-no-left', figDriverOptions);
});

describe('Centre-aligned no right padding tests', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.width.set(80);
    figDriverOptions.align.centre();
    figDriverOptions.padding.noRightPadding();
    executeTests('padding/centre-align-no-right', figDriverOptions);
});

describe('Centre-aligned full padding tests', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.width.set(80);
    figDriverOptions.align.centre();
    figDriverOptions.padding.fullPadding();
    executeTests('padding/centre-align-full-padding', figDriverOptions);
});

describe('Left-aligned default padding tests', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.width.set(80);
    figDriverOptions.align.left();
    figDriverOptions.padding.default();
    executeTests('padding/left-align-default', figDriverOptions);
});

describe('Left-aligned no padding tests', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.width.set(80);
    figDriverOptions.align.left();
    figDriverOptions.padding.noPadding();
    executeTests('padding/left-align-no-padding', figDriverOptions);
});

describe('Left-aligned no left padding tests', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.width.set(80);
    figDriverOptions.align.left();
    figDriverOptions.padding.noLeftPadding();
    executeTests('padding/left-align-no-left', figDriverOptions);
});

describe('Left-aligned no right padding tests', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.width.set(80);
    figDriverOptions.align.left();
    figDriverOptions.padding.noRightPadding();
    executeTests('padding/left-align-no-right', figDriverOptions);
});

describe('Left-aligned full padding tests', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.width.set(80);
    figDriverOptions.align.left();
    figDriverOptions.padding.fullPadding();
    executeTests('padding/left-align-full-padding', figDriverOptions);
});

describe('Right-aligned default padding tests', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.width.set(80);
    figDriverOptions.align.right();
    figDriverOptions.padding.default();
    executeTests('padding/right-align-default', figDriverOptions);
});

describe('Right-aligned no padding tests', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.width.set(80);
    figDriverOptions.align.right();
    figDriverOptions.padding.noPadding();
    executeTests('padding/right-align-no-padding', figDriverOptions);
});

describe('Right-aligned no left padding tests', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.width.set(80);
    figDriverOptions.align.right();
    figDriverOptions.padding.noLeftPadding();
    executeTests('padding/right-align-no-left', figDriverOptions);
});

describe('Right-aligned no right padding tests', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.width.set(80);
    figDriverOptions.align.right();
    figDriverOptions.padding.noRightPadding();
    executeTests('padding/right-align-no-right', figDriverOptions);
});

describe('Right-aligned full padding tests', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.width.set(80);
    figDriverOptions.align.right();
    figDriverOptions.padding.fullPadding();
    executeTests('padding/right-align-full-padding', figDriverOptions);
});

describe('Test Horizontal Layout Mode: Full Width - Left-aligned', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.align.left();
    figDriverOptions.width.set(80);
    figDriverOptions.horizontalLayout.full();
    executeTests('horizontal-layout/full/left', figDriverOptions);
});

describe('Test Horizontal Layout Mode: Full Width - Right-aligned', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.align.right();
    figDriverOptions.width.set(80);
    figDriverOptions.horizontalLayout.full();
    executeTests('horizontal-layout/full/right', figDriverOptions);
});

describe('Test Horizontal Layout Mode: Full Width - Centre-aligned', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.align.centre();
    figDriverOptions.width.set(80);
    figDriverOptions.horizontalLayout.full();
    executeTests('horizontal-layout/full/centre', figDriverOptions);
});

describe('Test Horizontal Layout Mode: Kern - Left-aligned', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.align.left();
    figDriverOptions.width.set(80);
    figDriverOptions.horizontalLayout.kern();
    executeTests('horizontal-layout/kern/left', figDriverOptions);
});

describe('Test Horizontal Layout Mode: Kern - Right-aligned', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.align.right();
    figDriverOptions.width.set(80);
    figDriverOptions.horizontalLayout.kern();
    executeTests('horizontal-layout/kern/right', figDriverOptions);
});

describe('Test Horizontal Layout Mode: Kern - Centre-aligned', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.align.centre();
    figDriverOptions.width.set(80);
    figDriverOptions.horizontalLayout.kern();
    executeTests('horizontal-layout/kern/centre', figDriverOptions);
});

describe('Test Horizontal Layout Mode: Smush - Left-aligned', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.align.left();
    figDriverOptions.width.set(80);
    figDriverOptions.horizontalLayout.smush();
    executeTests('horizontal-layout/smush/left', figDriverOptions);
});

describe('Test Horizontal Layout Mode: Smush - Right-aligned', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.align.right();
    figDriverOptions.width.set(80);
    figDriverOptions.horizontalLayout.smush();
    executeTests('horizontal-layout/smush/right', figDriverOptions);
});

describe('Test Horizontal Layout Mode: Smush - Centre-aligned', () => {
    const figDriverOptions: FontLayoutManagerOptions = new FontLayoutManagerOptions();
    figDriverOptions.align.centre();
    figDriverOptions.width.set(80);
    figDriverOptions.horizontalLayout.smush();
    executeTests('horizontal-layout/smush/centre', figDriverOptions);
});
