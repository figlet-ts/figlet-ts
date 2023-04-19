import { appInfo, getFigletCLIVersionString } from '../../src/utils/VersionUtils';
describe('Test appInfo', () => {
    test('Checking rollup-replaceable appInfo Props', () => {
        expect(appInfo.version).toBe('___FIGLET_TS_VERSION___');
        expect(appInfo.buildDate).toBe('___FIGLET_TS_BUILD_DATE___');
    });
    test('Checking logo', () => {
        expect(appInfo.logo).toBe(`______________        ______    _____
___  _______(________ ___  _______  /_ _______________
__  /_   __  /__  __ \`__  /_  _ _  __/ ___  ____  ___/
_  __/   _  / _  /_/ /_  / /  __/ /_   __  /  _____ \\
/_/      /_/  _\\__, / /_/  \\___/\\__/   _  /   ____/ /
              /____/                   /_/    /____/
`);
    });
});
describe('Test Version Info', () => {
    test('getFigletCLIVersionString', () => {
        expect(getFigletCLIVersionString).not.toThrow();
        expect(getFigletCLIVersionString().length).toBeGreaterThan(200);
    });
});
