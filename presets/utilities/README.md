# [@siimple/preset-utilities](https://www.siimple.xyz/presets/utilities)

A preset for the **siimple CSS toolkit** for adding basic utilities for your project.

## Installation

Use npm to install this preset in your project:

```bash
$ npm install --save @siimple/preset-utilities
```

## Enable this preset

Include the styles that this preset is exporting in your `siimple.config.js` file:

```js
import utilities from "@siimple/preset-utilities";

export default {
    // ...other configuration
    styles: {
        ...utilities.styles,
        // ...other custom styles
    },
};
```

## Using this preset

Read [the preset documentation](https://www.siimple.xyz/presets/utilities).

## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
