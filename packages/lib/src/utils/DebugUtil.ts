import Debug from 'debug';

export class Debugger {
    static _debugOut = Debug('figlet-ts:lib');
    static debug(message: string): void {
        this._debugOut(message, arguments.callee.name);
    }
    static getNamespacedDebugger(scopeName: string) {
        return Debug(`figlet-ts:${scopeName}`);
    }
}
