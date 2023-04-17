export class FontFile {
    constructor(private readonly _filename: string, private readonly _contents: string) {}

    get contents(): string {
        return Buffer.from(this._contents, 'base64').toString('ascii');
    }
}
