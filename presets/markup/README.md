# [@siimple/preset-markup](https://www.siimple.xyz/presets/markup)

A preset for the **siimple CSS toolkit** for styling your markup elements.

## Install

```bash
$ npm install --save @siimple/preset-markup
```

Include the preset styles in your `siimple.config.js` file:

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

## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
