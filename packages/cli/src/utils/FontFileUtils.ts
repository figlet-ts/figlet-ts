import { FLFParser, type FIGFont } from '@figlet-ts/lib';
import * as fs from 'fs';
import { FontList } from './FontList';
import { IOUtils } from './IOUtils';

export class FontFileUtils {
    private _installedFontList: FontList;
    private static _instances: Map<URL, FontFileUtils> = new Map<URL, FontFileUtils>();

    static getInstance(absolutPathToFontInstallLocation = new URL('fonts', import.meta.url)): FontFileUtils {
        let instance = FontFileUtils._instances.get(absolutPathToFontInstallLocation);

        if (instance === undefined) {
            instance = new FontFileUtils(absolutPathToFontInstallLocation);
            FontFileUtils._instances.set(absolutPathToFontInstallLocation, instance);
        }

        return instance;
    }

    private constructor(private _fontInstallPath: URL) {
        this._installedFontList = new FontList(_fontInstallPath);
    }

    getInstalledFonts(): FontList {
        return this._installedFontList;
    }

    getFontByName(name: string): FIGFont | undefined {
        const font = this._installedFontList.getFontByName(name);

        return font === undefined ? undefined : this.loadFontFile(font.absolutePath);
    }

    getRandomFont(): FIGFont | undefined {
        const randomFont = this._installedFontList.getRandomFont();

        return randomFont === undefined ? undefined : this.loadFontFile(randomFont.absolutePath);
    }

    loadFontFile(flfPath: URL): FIGFont | undefined {
        if (!fs.existsSync(flfPath)) {
            IOUtils.stderr(`File Not Found: ${flfPath}`, { showPrefix: true });
            return undefined;
        }
        return FLFParser.parse(fs.readFileSync(flfPath).toString()).font;
    }
}
