import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import { RollupOptions } from 'rollup';
import dts from 'rollup-plugin-dts';
import gzipPlugin from 'rollup-plugin-gzip';
import { promisify } from 'util';
import { brotliCompress } from 'zlib';

const brotliPromise = promisify(brotliCompress);

/*
Don't forget @rollup/plugin-node-resolve if we end up needing any dependencies
 */

const outputs: string[] = ['figlet-ts-lib.mjs', 'figlet-ts-lib.min.mjs', 'figlet-ts-lib.cjs', 'figlet-ts-lib.min.cjs'];
const rollupBundles: RollupOptions[] = [];

outputs.forEach((outputFilename) => {
    const isToBeMinimised: boolean = outputFilename.includes('.min.');
    const isCommonJS: boolean = outputFilename.endsWith('.cjs');

    const plugins = [
        typescript({ compilerOptions: { declarationDir: './types' } }),
        commonjs(),
        nodeResolve({ exportConditions: ['node'], preferBuiltins: true }),
        gzipPlugin(),
        gzipPlugin({
            customCompression: (content) => brotliPromise(Buffer.from(content)),
            fileName: '.br'
        })
    ];

    if (isToBeMinimised) {
        plugins.push(terser());
    }

    const rollupConfig: RollupOptions = {
        input: 'src/index.ts',
        output: {
            file: path.join('dist', outputFilename),
            format: isCommonJS ? 'cjs' : 'esm',
            minifyInternalExports: true,
            sourcemap: true,
            compact: true
        },
        plugins: plugins,
        external: isCommonJS ? [] : ['fs', 'https']
    };

    rollupBundles.push(rollupConfig);
});

// Finally, to export a single d.ts file, we need to use the dts plugin
const dtsRollupConfig: RollupOptions = {
    input: './dist/types/src/index.d.ts',
    output: [{ file: 'dist/figlet-ts-lib.d.ts', format: 'es' }],
    plugins: [dts({})]
};

rollupBundles.push(dtsRollupConfig);

export default rollupBundles;
