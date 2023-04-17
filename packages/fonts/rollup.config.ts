import copyPlus from '@andrewdicks/rollup-plugin-copy-files-plus';
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

/* NOTE:  There's no point in .min. versions of these files as they're 99% non-minifiable Base64 strings */
const outputs: string[] = ['fonts.mjs', 'fonts.cjs'];
const rollupBundles: RollupOptions[] = [];

let firstPass = true;

outputs.forEach((outputFilename) => {
    const isToBeMinimised: boolean = outputFilename.includes('.min.');
    const isCommonJS: boolean = outputFilename.endsWith('.cjs');

    const plugins = [typescript({ compilerOptions: { declarationDir: './types' } })];

    if (firstPass) {
        firstPass = false;
        //   Copy the flf files for distribution
        plugins.push(
            copyPlus({
                verbose: false,
                dryRun: false,
                targets: [
                    {
                        basePath: '../../assets/fonts/',
                        matchGlobs: ['**/*.flf'],
                        dest: 'fonts'
                    }
                ]
            })
        );
    }

    if (process.env.BUILD === 'production') {
        // Do compression only on production releases as it's so slow (mainly brotli is slow)
        plugins.push(
            gzipPlugin(),
            gzipPlugin({
                customCompression: (content) => brotliPromise(Buffer.from(content)),
                fileName: '.br'
            })
        );
    }

    if (isToBeMinimised) {
        plugins.push(terser());
    }

    const rollupConfig: RollupOptions = {
        input: 'src/index.ts',
        output: {
            file: path.join('dist', outputFilename),
            format: isCommonJS ? 'cjs' : 'esm',
            exports: 'named'
        },
        plugins: plugins,
        external: []
    };

    rollupBundles.push(rollupConfig);
});

// Finally, to export a single d.ts file, we need to use the dts plugin (which is a bit annoying, as parcel didn't need this...)
const dtsRollupConfig: RollupOptions = {
    input: './dist/types/src/index.d.ts',
    output: [{ file: 'dist/fonts.d.ts', format: 'es' }],
    plugins: [dts()]
};

rollupBundles.push(dtsRollupConfig);

export default rollupBundles;
