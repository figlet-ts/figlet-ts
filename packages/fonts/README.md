```text
______________        ______    _____                        __________            _____
___  _______(________ ___  _______  /_ _______________       ___  ___________________  /________
__  /_   __  /__  __ `__  /_  _ _  __/ ___  ____  ___/       __  /_   _  __ __  __ _  ____  ___/
_  __/   _  / _  /_/ /_  / /  __/ /_   __  /  _____ \        _  __/   / /_/ _  / / / /_ _(__  )
/_/      /_/  _\__, / /_/  \___/\__/   _  /   ____/ /        /_/      \____//_/ /_/\__/ /____/
              /____/                   /_/    /____/
```

# @figlet-ts/fonts

A library of ASCII fonts (FLF-format) for use with [@figlet-ts/lib](../lib/README.md)

Use it for:

-   Embedding 15KB of the specific font you want in your lean, mean, brotlified, minified source code
-   Embedding 11MB of text files to bloat your app because you forgot to make your bundler do tree-shaking

## Installation

You will likely want this installed as a dev dependency, so you can use a bundler to cherry-pick / tree-shake the subset of fonts that you want.

**NOTE**: you don't **need** this fonts library to be able to use figlet-ts. The simplest implementation is to just embed a FLF font file (it's plain text) somewhere in your assets path, and use [@figlet-ts/lib](../lib/README.md) to load the FLF file directly.

This fonts bundle just makes things a little easier.

```bash
# npm
npm install -D @figlet-ts/fonts    # Install this fonts library as dev-dependency
npm install @figlet-ts/lib   # Install figlet-ts library to use the fonts in your app

# yarn
yarn add --dev @figlet-ts/fonts    # Install this fonts library as
yarn add @figlet-ts/lib      # Install figlet-ts library to be able to use the fonts in your app
```

## Usage - Server-Side

```ts
// index.ts
```

## Usage - Vue.js

```ts
// component.vue
```

# Goals

-   ✅ Strongly-typed source code and published declarations
-   ✅ Provide an importable library of fonts
-   To support:
    -   ✅ Tree-shaking
    -   ✅ ES-style imports
    -   ✅ CommonJS-style imports

### Key

-   🔲️ Not Started
-   ✴️ In Progress
-   ✅ Done
-   ❌ Cancelled
