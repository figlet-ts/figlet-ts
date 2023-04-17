import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.ts'],
    collectCoverageFrom: ['**/src/**/*.ts'],
    coverageDirectory: '../../coverage/figlet-ts',
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
