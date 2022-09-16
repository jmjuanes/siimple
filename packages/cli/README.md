# @siimple/cli

The **siimple** command line.

> This package is included in the main `siimple` package and a separate installation is not required.

## Installation

Add this package to your project using **npm**:

```bash
$ npm install --save @siimple/cli
```

Note that **Node.js version >=14** is required for running the CLI tool.

## Usage

The easiest way is using `npx` for running the **siimple** CLI tool:

```bash
$ npx siimple -c siimple.config.js -o siimple.css
```

Instead of using `npx`, you can drop it inside of an `npm run` script in your `package.json` file:

```json title=package.json
{
    "name": "my-project",
    "version": "1.0.0",
    "type": "module",
    "scripts": {
        "build-siimple": "siimple -c siimple.config.js -o siimple.css"
    },
    // ...other package.json content
}
```

Or you can directly execute it using the relative path to the executable file instead:

```bash
$ ./node_modules/.bin/siimple -c siimple.config.js -o siimple.css
```

## Generate your CSS

Create a file called `siimple.config.js` with your configuration, and print the output CSS **to stdout**: 

```bash
$ npx siimple -c siimple.config.js
```

If you would like to save the generated CSS **to a file**, use the `-o` option instead with the path of the output `.css` file:

```bash
$ npx siimple -c siimple.config.js -o siimple.css
```

> **Note**: **siimple** uses ECMAScript modules, so you will need to set `"type": "module"` in your `package.json` file or use `.mjs` as the extension for your configuration file (`siimple.config.mjs`).

## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
