import Debug from 'debug';

export abstract class Debuggable {
    protected _debug:Debug.Debugger;

    constructor(debugSymbol:symbol) {
        this._debug = Debugger.getNamespacedDebugger(debugSymbol.toString());
    }
}

export class Debugger {
    static _debugOut = Debug('figlet-ts:lib');
    static debug(message: string): void {
        this._debugOut(message, arguments.callee.name);
    }
    static getNamespacedDebugger(scopeName: string): Debug.Debugger {
        return Debug(`figlet-ts:lib:${scopeName}`);
    }
}
