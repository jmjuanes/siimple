# @siimple/postcss

Integrate **siimple** in your PostCSS build process using our plugin for PostCSS.

## Installation

Add this package to your project using **npm**:

```bash
$ npm install --save @siimple/postcss
```

Note that **Node.js >=14** and **postcss-cli >=10** are required.

## Usage

In your `postcss.config.js`, include the plugin of **siimple** for PostCSS with the path to your `siimple.config.js` (or `siimple.config.mjs` if you are not in an ESM env):

```js
import autoprefixer from "autoprefixer";
import siimple from "@siimple/postcss";

export default {
    plugins: [
        siimple("./siimple.config.js"),
        autoprefixer(),
        // other plugins
    ],
};
```

## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
