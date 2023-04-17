import chalk from 'chalk';

export function getFigletCLIVersionString(): string {
    return `
${appInfo.logo}
${chalk.bold.white('figlet-ts')} version ${chalk.green(appInfo.version)} (built: ${appInfo.buildDate})
${chalk.gray(getRuntmeInfo())}
`;
}

function getRuntmeInfo(): string {
    return `Running on ${process.execPath.split('/').slice(-1)} ${process.version} (executable: ${process.execPath})`;
}

const appInfo = {
    version: '___FIGLET_TS_VERSION___',
    buildDate: '___FIGLET_TS_BUILD_DATE___',
    logo: `______________        ______    _____
___  _______(________ ___  _______  /_ _______________
__  /_   __  /__  __ \`__  /_  _ _  __/ ___  ____  ___/
_  __/   _  / _  /_/ /_  / /  __/ /_   __  /  _____ \\
/_/      /_/  _\\__, / /_/  \\___/\\__/   _  /   ____/ /
              /____/                   /_/    /____/
`
};

export { appInfo };
