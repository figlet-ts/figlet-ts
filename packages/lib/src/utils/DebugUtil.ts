import Debug from 'debug';

export abstract class Debuggable {
    protected _debug: Debug.Debugger;

    constructor(debugName: string) {
        this._debug = Debugger.getInternalNamespacedDebugger(debugName);
    }
}

export abstract class ExternalDebuggable {
    protected _debug: Debug.Debugger;

    constructor(debugName: string) {
        this._debug = Debugger.getExternalNamespacedDebugger(debugName);
    }
}

export class Debugger {
    static _debugOut = Debug('figlet-ts:lib');
    static debug(message: string): void {
        this._debugOut(message, arguments.callee.name);
    }
    static getInternalNamespacedDebugger(scopeName: string): Debug.Debugger {
        return Debug(`figlet-ts:lib:${scopeName}`);
    }
    static getExternalNamespacedDebugger(scopeName: string): Debug.Debugger {
        return Debug(`figlet-ts:external:${scopeName}`);
    }
}
