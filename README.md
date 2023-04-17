```text
______________        ______    _____
___  _______(________ ___  _______  /________________
__  /_   __  /__  __ `__  /_  _ _  __/___  ____  ___/
_  __/   _  / _  /_/ /_  / /  __/ /_  __  /  _____ \
/_/      /_/  _\__, / /_/  \___/\__/  _  /   ____/ /
              /____/                  /_/    /____/
```

Typescript implementation of the original (and the best!) ASCII font rendering tool: figlet

The figlet-ts library is a full implementation of the [2.0 DRAFT specification](./assets/reference/figfont.html) (downloaded from http://www.jave.de/figlet/figfont.html) (except vertical line supersmushing)

This repo is a monorepo, containing three components that make up the figlet-ts codebase.

| Package Name                       | Description  | Use-Cases                                                                                                                                                                                                    |
| ---------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [@figlet-ts/lib](packages/lib)     | Main library | Displaying awesome ASCII fonts in your browser app<br/>Displaying awesome ASCII fonts in your command-line tool                                                                                              |
| [@figlet-ts/cli](packages/cli)     | CLI App      | Creating awesome ASCII messages on your Windows / Mac / Linux shell / command-line <br/>Noodling around, wasting time and printing your name (a.k.a. having fun)                                             |
| [@figlet-ts/fonts](packages/fonts) | Font library | Embedding 15KB of the specific font you want in your lean, mean, brotlified, minified source code<br/>Embedding 11MB of text files to bloat your app because you forgot to make your bundler do tree-shaking |
