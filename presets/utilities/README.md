# [@siimple/preset-utilities](https://www.siimple.xyz/presets/utilities)

A preset for the **siimple CSS toolkit** for adding basic utilities for your project.

## Install

```bash
$ npm install --save @siimple/preset-utilities
```

Include the preset styles in your `siimple.config.js` file:

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

## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
