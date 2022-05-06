# @siimple/colors

A color palette for the **siimple CSS toolkit**.

## Install

Install this module using **npm**:

```bash
$ npm install --save @siimple/colors
```

## Usage

You can use the colors exported by this module in your `siimple.config.js` file, for example to generate your colors scale:

```js
import colors from "@siimple/colors";

export default {
    colors: {
        text: colors.gray["700"],
        background: colors.gray["100"],
        primary: colors.mint["600"],
    },
    // ...other configuration
};
```

Check out the [full list of available colors](https://www.siimple.xyz/colors).

## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
