import { type FontLayoutManagerOptions } from './FontLayoutManagerOptions';
import { Stylizer } from './rendering/Stylizer';

export class FontLayoutManagerOptionsExtensionStylizer {
    constructor(private readonly _driverOptions: FontLayoutManagerOptions) {}

    add(stylizer: Stylizer) {
        this._driverOptions._renderingStylizers.push(stylizer);
    }

    unset() {
        this._driverOptions._renderingStylizers = [];
    }
}
