#!/usr/bin/env node
import * as appLauncher from '../src/utils/AppLauncher';
try {
    appLauncher.default();
} catch (e: unknown) {
    if (e instanceof Error) {
        console.error(e.message);
    }
}
