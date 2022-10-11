![Siimple header](https://github.com/jmjuanes/siimple/raw/main/header.svg)

[![NPM Version](https://badgen.net/npm/v/siimple)](https://npmjs.com/package/siimple)
[![Get help](https://badgen.net/badge/Discussions/Join%20us/cyan)](https://github.com/jmjuanes/siimple/discussions)
[![MIT License](https://badgen.net/github/license/jmjuanes/siimple)](https://github.com/jmjuanes/siimple)

> **siimple**: a minimal and themeable CSS toolkit for flat and clean designs.

## Links

- Documentation: https://www.siimple.xyz/.
- Online playground: https://www.siimple.xyz/playground.
- Report a bug or request a feature: https://github.com/jmjuanes/siimple/issues.
- Get help: https://github.com/jmjuanes/siimple/discussions.

## Features

- **Modular UI blocks**: **siimple** provides a collection of small UI blocks, called **elements**, that you can use to build complex UI components.
- **Themeable**: customize **siimple** with your project specific colors, fonts, and more!
- **Fast**: generate your customized version of **siimple** in milliseconds.
- **Tiny**: the core of **siimple** has less than 500 lines of code.
- **Pure CSS in JS implementation**: **siimple** implements a pure CSS in JS parser with no dependencies.
- **Easy to extend**: extend **siimple** with reusable styles and themes.

## Usage

### CLI usage

Make sure you have **Node.js 14.x** installed on your computer. Add **siimple** to your project running the following command:

```bash
$ npm install --save siimple
```

Create a file called `siimple.config.js` with your configuration:

```js
import colors from "@siimple/colors";
import base from "@siimple/preset-base";

export default {
    ...base,
    useRootStyles: false,
    useBorderBox: true,
    prefix: "",
    colors: {
        primary: colors.blue["500"],
        secondary: colors.mint["600"],
        text: colors.gray["800"],
        background: "#fff",
        muted: colors.gray["200"],
    },
    fonts: {
        body: "'Roboto',sans-serif",
        heading: "'Montserrat',sans-serif",
        code: "monospace",
    },
};
```

Generate your customized version of **siimple**:

```bash
$ npx siimple -c ./siimple.config.js -o ./output.css
```

> **Note**: **siimple** uses ECMAScript modules, so you will need to set `"type": "module"` in your `package.json` file or use `.mjs` as the extension for your configuration file (`siimple.config.mjs`).

### PostCSS usage

You can integrate **siimple** in your PostCSS build process using our plugin for PostCSS in `@siimple/postcss`. In your `postcss.config.js`, include the plugin of **siimple** for PostCSS with the path to your `siimple.config.js` (or `siimple.config.mjs`):

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

**Note**: the plugin `siimple/postcss.cjs` introduced in `v4.2.0` is deprecated and will be removed in a future major release. Please migrate as soon as possible to the new `@siimple/postcss` plugin instead.

## Configuration

A configuration file is where you can provide your custom theme scales, variants and styles for generating your customized version of **siimple** or to adapt it to your project look and feel.

Read more about the [configuration](https://www.siimple.xyz/configuration/).

### Core modules (added in v4.1.0)

In the `modules` field of your configuration you can disable the core modules (elements, helpers, markup or reset) that you do not need for your project.

```js title=siimple.config.js
export default {
    modules: {
        button: false,
        badge: false,
        margin: false,
        reset: false,
    },
    // ...other configuration
};
```

### Theme scales

Use the theme scales to configure the list of CSS properties specific for your project, that includes colors, fonts, sizes, and more!

```js title=siimple.config.js
import colors from "@siimple/colors";

export default {
    colors: {
        primary: colors.blue["500"],
        secondary: colors.mint["600"],
        text: colors.gray["800"],
        background: "#fff",
    },
    fonts: {
        body: "'Roboto',sans-serif",
        heading: "'Montserrat',sans-serif",
        code: "monospace",
    },
    // ...other configuration
};
```

Read more about [theming](https://www.siimple.xyz/theme).

### Color Modes

Color modes makes it easy to change the color mode of your website, including support for **dark and light modes**. Color modes can be configured in the `colorModes` field of your theme configuration:

```js
import colors from "@siimple/colors";

export default {
    useColorModes: true,
    colors: {
        text: colors.gray["700"],
        background: "#fff",
        primary: colors.blue["500"],
        // ...other colors
    },
    colorModes: {
        dark: {
            text: "#fff",
            background: colors.gray["800"],
        },
        // ...other color modes
    },
    // ...other configuration
};
```

Read more about [color modes](https://www.siimple.xyz/color-modes).

### Mixins

Mixins can be used to recycle blocks of styles and to change the look and feel of elements. 

```js title=siimple.config.js
export default {
    buttons: {
        backgroundColor: "primary",
        color: "white",
    },
    // ...other theme configuration
    styles: {
        "button": {
            // ...other button styles
            apply: "buttons",
        },
    },
};
```

### Custom styles

You can specify your custom styles in the configuration file, using a [CSS-in-JS styles syntax](https://www.siimple.xyz/syntax).

```js
export default {
    // ...other configuration
    styles: {
        ".comment": {
            backgroundColor: "gray",
            color: "currentColor",
            padding: "1rem",
        },
    },
};
```

This will generate:

```css
.comment {
    background-color: gray;
    color: currentColor;
    padding: 1rem;
}
```

### Presets

Presets allows to extend **siimple** using reusable theme scales (like colors and fonts) and styles. Presets can be imported and used in your configuration file:

```js
import base from "@siimple/preset-base";

export default {
    ...base,
    // ...other configuration
};
```

## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
