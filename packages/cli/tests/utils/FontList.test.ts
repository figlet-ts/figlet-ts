import { FontList } from '../../src/utils/FontList';

describe('Testing FontList', () => {
    const pathToAssets = new URL('../../../../assets/fonts', import.meta.url);
    const fl: FontList = new FontList(pathToAssets);

    test('General font resolving tests', () => {
        expect(fl.fontCount).toEqual(305);
        expect(fl.getFontsInCategory('core').length).toEqual(17);
        expect(fl.getFontByName('core/slant')?.name).toEqual('slant');
        expect(fl.getFontByName('standard')?.relativePath).toEqual('core/standard');
        expect(fl.getFontByName('speed')?.relativePath).toEqual('contributed/speed');
        expect(fl.getRandomFont()).not.toEqual(undefined);
        expect(fl.categoryCount).toEqual(4);
    });

    test('Resolving missing items', () => {
        expect(fl.getFontsInCategory('nonexistent').length).toEqual(0);
        expect(fl.getFontByName('no/font/here')).toEqual(undefined);
    });
});
