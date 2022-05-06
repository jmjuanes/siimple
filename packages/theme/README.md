# @siimple/theme

Default theme configuration for the **siimple CSS toolkit**.

## Install

Install this package using **npm**:

```bash
$ npm install --save @siimple/theme
```

## Usage

Use default theme scales in your `siimple.config.js` file:

```js
import theme from "@siimple/theme";

export default {
    // Import all default scales
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
