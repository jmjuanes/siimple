# [@siimple/preset-markup](https://www.siimple.xyz/presets/markup)

A preset for the **siimple CSS toolkit** for styling your markup elements.

## Installation

Use npm to install this preset in your project:

```bash
$ npm install --save @siimple/preset-markup
```

## Enable this preset

Include the styles that this preset is exporting in your `siimple.config.js` file:

```js
import markup from "@siimple/preset-markup";

export default {
    // ...other configuration
    styles: {
        ...markup.styles,
        // ...other custom styles
    },
};
```

## Using this preset

Read [the preset documentation](https://www.siimple.xyz/presets/markup).

## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
