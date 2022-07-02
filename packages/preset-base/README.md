# @siimple/preset-base

Default theme preset for the **siimple CSS toolkit**.

## Install

Install this package using **npm**:

```bash
$ npm install --save @siimple/preset-base
```

## Usage

Use default theme in your `siimple.config.js` file:

```js
import theme from "@siimple/preset-base";

export default {
    // Import all default scales, breakpoints and root styles
    ...theme,
    // Extend default theme scales
    colors: {
        ...theme.colors,
        text: "#000",
    },
    // ...other configuration
};
```

## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
