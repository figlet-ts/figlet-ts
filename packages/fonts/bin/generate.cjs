#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const FLFPATH = path.join(__dirname, '..', '..', '..', 'assets', 'fonts');
const TSPATH = path.join(__dirname, '..', 'src', 'fonts');

const allTsFiles = [];

const CONTENTS = `import { FontFile } from '@@DEPTH@@/FontFile';

const @@EXPORTNAME@@ = new FontFile(
    '@@FILENAME@@',
    '@@BASE64@@'
);

export default @@EXPORTNAME@@;
`;

const indexFiles = new Map();
const testFiles = new Map();

function recurse(pathUrl = FLFPATH, depth = 1) {
    fs.readdirSync(pathUrl).forEach((a) => {
        const sub = path.join(pathUrl, a);
        const subStat = fs.lstatSync(sub);

        if (subStat.isDirectory()) {
            recurse(sub + '/', depth + 1);
        } else if (subStat.isFile() && sub.endsWith('flf')) {
            let relativePath = path.relative(FLFPATH, path.dirname(sub));

            const tsFilename = path.basename(sub, path.extname(sub));
            const fullTsPath = path.join(TSPATH, relativePath, tsFilename + '.ts');
            const indexFilePath = path.join(TSPATH, relativePath, '_index.ts');
            const relativeTsPath = path.relative(TSPATH, fullTsPath);
            const fileContents = fs.readFileSync(sub).toString('base64');

            allTsFiles.push(relativePath);

            if (!indexFiles.has(indexFilePath)) {
                indexFiles.set(indexFilePath, []);
            }

            if (!testFiles.has(relativePath)) {
                testFiles.set(relativePath, []);
            }

            indexFiles.get(indexFilePath).push(`export { default as ${tsFilename} } from './${tsFilename}';`);
            testFiles.get(relativePath).push(`    { name: '${tsFilename}' },`);

            // console.log(`export {default as ${tsFilename}} from './${tsFilename}';`);

            fs.writeFileSync(
                fullTsPath,
                CONTENTS.replaceAll('@@DEPTH@@', new Array(depth).fill('..').join('/'))
                    .replaceAll('@@EXPORTNAME@@', tsFilename)
                    .replaceAll('@@FILENAME@@', tsFilename)
                    .replaceAll('@@BASE64@@', fileContents)
            );
        }
    });
}

recurse();

for (const k of indexFiles.keys()) {
    fs.writeFileSync(k, indexFiles.get(k).join('\n'));
}

for (const k of testFiles.keys()) {
    console.log(`-- ${k} --`);
    console.log(testFiles.get(k).join('\n'));
}
