import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.ts'],
    collectCoverageFrom: ['**/src/**/*.ts'],
    coverageDirectory: '../../coverage/fonts',
    collectCoverage: true,
    verbose: true,
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                tsconfig: 'tsconfig.jest.json',
                useESM: true
            }
        ]
    }
};

export default jestConfig;
