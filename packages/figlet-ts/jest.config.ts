import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.ts'],
    maxConcurrency: 1,
    collectCoverageFrom: ['**/src/*/*.ts'],
    coverageDirectory: '../../coverage/cli',
    collectCoverage: true,
    verbose: true,
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                tsconfig: 'tsconfig.tests.json',
                useESM: true
            }
        ]
    }
};

export default jestConfig;
