# [@siimple/preset-reboot](https://www.siimple.xyz/presets/reboot)

A preset for the **siimple CSS toolkit** for adding CSS reset styles.

## Installation

Use npm to install this preset in your project:

```bash
$ npm install --save @siimple/preset-reboot
```

## Enable this preset

Include the styles that this preset is exporting in your `siimple.config.js` file:

```js
import reboot from "@siimple/preset-reboot";

export default {
    // ...other configuration
    styles: {
        ...reboot.styles,
        // ...other custom styles
    },
};
```

## Using this preset

Read [the preset documentation](https://www.siimple.xyz/presets/reboot).

## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
