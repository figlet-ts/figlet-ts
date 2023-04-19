```text

______________        ______    _____
___  _______(________ ___  _______  /_ _______________
__  /_   __  /__  __ `__  /_  _ _  __/ ___  ____  ___/
_  __/   _  / _  /_/ /_  / /  __/ /_   __  /  _____ \
/_/      /_/  _\__, / /_/  \___/\__/   _  /   ____/ /
              /____/                   /_/    /____/

figlet-ts version v0.6.0 (built: 2023-04-19T12:30:02.463Z)
Running on node v18.15.0 (executable: /Users/adicks/.nvm/versions/node/v18.15.0/bin/node)

Usage: figlet-ts print [options]

Options:
  -f, --font <value>                   Either a built-in font name (see --list-fonts) or a path to a local FLF file (default: "core/standard")
  -r, --random-font                    A random font will be selected for your message
  -a, --align <alignment>              Choose rendering alignment: left, right or centre (choices: "font-default", "left", "right", "center", "centre", default: "font-default")
  -w, --width <width>                  Specify the maximum width of the output.  If set to zero (the default) the width will be set to the width of the current terminal. (default: 0)
  --padding-mode <mode>                Sets the horizontal padding mode to one of (choices: "full", "none", "noleft", "noright", "default", default: "default")
  -H, --horizontal-layout-mode <mode>  Sets the horizontal layout mode (choices: "full", "kern", "smush", "smushplus", "font", default: "font")
  -V, --vertical-layout-mode <mode>    Sets the vertical layout mode to one of: none, kern, smush, font (choices: "full", "kern", "smush", "font", default: "font")
  --vertical-kern-max-offset <n>       Sets how close to the line above vertical kerning will move lines up (default: 0)
  -W, --whitespace-character <char>    The character to use to replace the whitespace character.
  -P, --padding-character <char>       The character to use when adding padding (see --padding-mode).
  --verbose                            Generate extra diagnostic messages (printed to stderr)
  -h, --help                           display help for command
```

# figlet-ts

Command-line app for making ASCII font sentences.

Use it for:

-   Creating awesome ASCII messages on your Windows / Mac / Linux shell / command-line
-   Noodling around, wasting time and printing your name (a.k.a. having fun)

## Installation

You will likely want to install this globally, so you can run it as a standard command-line tool in your shell.

Note that it installs itself under the command-line aliases `figlet` and `figlet-ts`. I have added the `figlet-ts` variant in case there is a conflict with an existing figlet installation.

```bash
# npm
npm install -g figlet-ts

# yarn
yarn global add figlet-ts
```

## Usage

> Note you can use the command `figlet-ts` or `figlet` to run the commands below.

```text
shell> figlet-ts 'Figlet Rules!!!'
 _____ _       _      _     ____        _           _ _ _
|  ___(_) __ _| | ___| |_  |  _ \ _   _| | ___  ___| | | |
| |_  | |/ _` | |/ _ \ __| | |_) | | | | |/ _ \/ __| | | |
|  _| | | (_| | |  __/ |_  |  _ <| |_| | |  __/\__ \_|_|_|
|_|   |_|\__, |_|\___|\__| |_| \_\\__,_|_|\___||___(_|_|_)
         |___/
## Usage - Server-Side

shell> figlet-ts -f speed 'Figlet Awesomeness'
_______________          ______      _____        _______
___  ____/___(_)_______ ____  /_____ __  /_       ___    |___      _______ ______________ _______ ___ _____ _______ _____ ________________
__  /_    __  / __  __ `/__  / _  _ \_  __/       __  /| |__ | /| / /_  _ \__  ___/_  __ \__  __ `__ \_  _ \__  __ \_  _ \__  ___/__  ___/
_  __/    _  /  _  /_/ / _  /  /  __// /_         _  ___ |__ |/ |/ / /  __/_(__  ) / /_/ /_  / / / / //  __/_  / / //  __/_(__  ) _(__  )
/_/       /_/   _\__, /  /_/   \___/ \__/         /_/  |_|____/|__/  \___/ /____/  \____/ /_/ /_/ /_/ \___/ /_/ /_/ \___/ /____/  /____/
                /____/

shell> figlet-ts -f speed -H smushplus 'Figlet Awesomeness'
______________        ______    _____   _______
___  _______(________ ___  _______  /_  ___    ___      __________________________ ___________________________________
__  /_   __  /__  __ `__  /_  _ _  __/  __  /| __ | /| / _  _ __  ____  __ __  __ `__ _  _ __  __ _  _ __  _____  ___/
_  __/   _  / _  /_/ /_  / /  __/ /_    _  ___ __ |/ |/ //  ___(__  )/ /_/ _  / / / / /  ___  / / /  ___(__  )_(__  )
/_/      /_/  _\__, / /_/  \___/\__/    /_/  |_____/|__/ \___//____/ \____//_/ /_/ /_/\___//_/ /_/\___//____/ /____/
              /____/
```

# Goals

-   ✅ Provide multi-platform command-line tool to generate figlet-powered awesome ASCII text
-   To support:
    -   ✅ Having fun on the command line
    -   ✴️ Colourful output
    -   ✴️ Comment-style formatting for use in source code comments

### Key

-   🔲️ Not Started
-   ✴️ In Progress
-   ✅ Done
-   ❌ Cancelled
