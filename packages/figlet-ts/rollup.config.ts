import copyPlus from '@andrewdicks/rollup-plugin-copy-files-plus';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import * as fs from 'fs';
import path from 'path';
import { RollupOptions } from 'rollup';

const packageJson = JSON.parse(fs.readFileSync(new URL('package.json', import.meta.url)).toString());

const outputs: string[] = ['figlet-ts-cli.mjs'];
const rollupBundles: RollupOptions[] = [];

outputs.forEach((outputFilename) => {
    const plugins = [
        replace({
            ___FIGLET_TS_VERSION___: `v${packageJson.version}`,
            ___FIGLET_TS_BUILD_DATE___: () => new Date().toISOString(),
            preventAssignment: true
        }),
        typescript({ tsconfig: './tsconfig.json' }),
        commonjs(),
        json(),
        nodeResolve({ exportConditions: ['node'], preferBuiltins: true }),
        terser(),
        copyPlus({
            verbose: false,
            dryRun: false,
            targets: [
                {
                    basePath: '../../assets/fonts/',
                    matchGlobs: ['**/*.flf'],
                    dest: './fonts'
                }
            ]
        })
    ];

    const rollupConfig: RollupOptions = {
        input: 'src/index.ts',
        output: {
            file: path.join('dist', outputFilename),
            format: 'esm',
            exports: 'named',
            sourcemap: false,
            banner: '#!/usr/bin/env node'
        },
        treeshake: 'smallest',
        plugins: plugins,
        external: []
    };

    rollupBundles.push(rollupConfig);
});

export default rollupBundles;
