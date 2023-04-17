import stringWidth from 'string-width';

export class CharacterReplacementMap {
    private _map: Map<number, [string, number]> = new Map();
    constructor(initMap: Map<number, string> | null) {
        if (initMap) {
            for (const i of initMap) {
                this._map.set(i[0], [i[1], stringWidth(i[1])]);
            }
        }
    }

    public get(n: number): string | undefined {
        const got = this._map.get(n);
        return got ? got[0] : undefined;
    }

    public set(n: number, s: string): void {
        this._map.set(n, [s, stringWidth(s)]);
    }

    public has(n: number): boolean {
        return this._map.has(n);
    }

    public delete(n: number): boolean {
        return this._map.delete(n);
    }

    public getStringWidth(n: number): number | undefined {
        const got = this._map.get(n);
        return got ? got[1] : undefined;
    }

    public getMaxStringWidth(): number | undefined {
        if (this._map.size === 0) {
            return undefined;
        }
        let widest = 1;
        for (const r of this._map) {
            widest = Math.max(widest, r[1][1]);
        }
        return widest;
    }
}
