![Siimple header](https://github.com/jmjuanes/siimple/raw/main/header.svg)

[![NPM Version](https://badgen.net/npm/v/siimple)](https://npmjs.com/package/siimple)
[![Get help](https://badgen.net/badge/Discussions/Join%20us/cyan)](https://github.com/jmjuanes/siimple/discussions)
[![MIT License](https://badgen.net/github/license/jmjuanes/siimple)](https://github.com/jmjuanes/siimple)


## Links

- Documentation: https://www.siimple.xyz.
- Online playground: https://playground.siimple.xyz.
- Report a bug or request a feature: https://github.com/jmjuanes/siimple/issues.
- Get help: https://github.com/jmjuanes/siimple/discussions.

## Features

- **Modular UI blocks**: **siimple** provides a collection of small UI blocks, called **elements**, that you can use to build complex UI components.
- **Themeable**: customize **siimple** with your project specific colors, fonts, and more!
- **Fast**: generate your customized version of **siimple** in milliseconds.
- **Tiny**: the core of **siimple** has less than 500 lines of code.
- **Pure CSS in JS implementation**: **siimple** implements a pure CSS in JS parser with no dependencies.
- **Easy to extend**: extend **siimple** with reusable styles and themes.

## Install

Add **siimple** to your project running the following command:

```bash
$ npm install --save siimple
```

Create a file called `siimple.config.js` with your configuration:

```js
export default {
    // ...your custom configuration
};
```

Generate your customized version of **siimple**:

```bash
$ npx siimple -c ./siimple.config.js -o ./output.css
```

## Configuration

A configuration file is where you can provide your custom theme scales, variants and styles for generating your customized version of **siimple** or to adapt it to your project look and feel.

Read more about the [configuration](https://dev.siimple.xyz/configuration/).

### Theme scales

Use the theme scales to configure the list of CSS properties specific for your project, that includes colors, fonts, sizes, and more!

```js title=siimple.config.js
import colors from "siimple/colors";

export default {
    colors: {
        primary: colors.blue["500"],
        secondary: colors.mint["600"],
        text: colors.gray["800"],
        background: "#fff",
    },
    fonts: {
        body: ["Roboto", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
        monospace: ["monospace"],
    },
};
```

Read more about [theme scales](https://www.siimple.xyz/scales).

### Variants

Variants can be used to register custom modifiers that are used to change the look and feel of elements. 

```js title=siimple.config.js
export default {
    variants: {
        button: {
            default: {
                backgroundColor: "primary",
                color: "white",
            },
            secondary: {
                backgroundColor: "secondary",
            },
        },
    },
};
```

Read more about [variants](https://www.siimple.xyz/variants).

### Custom styles

You can specify your custom styles in the configuration file, using a [CSS-in-JS styles syntax](https://www.siimple.xyz/guides/styles).

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
import reboot from "@siimple/preset-reboot";

export default {
    // ...other configuration
    styles: {
        ...reboot.styles,
    },
};
```

##### Official presets

- [@siimple/preset-reboot](https://github.com/jmjuanes/siimple/tree/main/presets/reboot): reboot preset for the siimple CSS toolkit. 
- [@siimple/preset-markup](https://github.com/jmjuanes/siimple/tree/main/presets/markup): markup preset for the siimple CSS toolkit.
- [@siimple/preset-utilities](https://github.com/jmjuanes/siimple/tree/main/presets/utilities): utilities preset for the siimple CSS toolkit.
- [@siimple/preset-icons](https://github.com/jmjuanes/siimple/tree/main/presets/icons): icons preset for the siimple CSS toolkit.


## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
