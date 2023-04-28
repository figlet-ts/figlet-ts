import { globSync } from 'glob';
import { FontMetadata } from './FontMetadata';

export class FontList {
    _fontCategories: Record<string, FontMetadata[]> = {};

    constructor(public absolutePath: URL) {
        const fontFiles = globSync('**/*.flf', { cwd: absolutePath, absolute: false, nodir: true })
            .sort()
            .map((x) => x.replaceAll('\\', '/'));

        for (const fontRelativePath of fontFiles) {
            const categoryName = fontRelativePath.substring(0, fontRelativePath.lastIndexOf('/'));
            const fontAbsolutePath = new URL(fontRelativePath, absolutePath.href + '/');

            if (!this._fontCategories[categoryName]) {
                this._fontCategories[categoryName] = [];
            }

            this._fontCategories[categoryName].push({
                name: fontRelativePath.split('/').slice(-1)[0].replace('.flf', ''),
                relativePath: fontRelativePath.replace('.flf', ''),
                absolutePath: fontAbsolutePath
            });
        }
    }

    public getFontByName(fontIdentifier: string): FontMetadata | undefined {
        let category = '';
        let font = fontIdentifier;
        if (fontIdentifier.includes('/')) {
            category = fontIdentifier.substring(0, fontIdentifier.lastIndexOf('/'));
            font = fontIdentifier.split('/').slice(-1)[0];
            return this.getFontsInCategory(category).find((f) => f.name === font);
        } else {
            // Otherwise we check each category in turn to find one with this name
            let foundFount: FontMetadata | undefined;
            for (const catName of this.categories) {
                foundFount = this.getFontsInCategory(catName).find((f) => f.name === font);
                if (foundFount !== undefined) return foundFount;
            }
        }
    }

    public getFontsInCategory(categoryName: string): FontMetadata[] {
        return this._fontCategories[categoryName] || [];
    }

    public get categories(): string[] {
        return Object.keys(this._fontCategories);
    }

    get categoryCount(): number {
        return this.categories.length;
    }

    get fontCount(): number {
        return Object.keys(this._fontCategories)
            .map((x) => this._fontCategories[x].length)
            .reduce((c, a) => c + a, 0);
    }

    public getRandomFont(): FontMetadata | undefined {
        const allFonts: FontMetadata[] = [];

        for (const categoryName of this.categories) {
            allFonts.push(...this.getFontsInCategory(categoryName));
        }

        return allFonts[Math.floor(Math.random() * allFonts.length)];
    }
}
