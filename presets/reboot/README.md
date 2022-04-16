# [@siimple/preset-reboot](https://www.siimple.xyz/presets/reboot)

A preset for the **siimple CSS toolkit** for adding CSS reset styles.

## Install

```bash
$ npm install --save @siimple/preset-reboot
```

Include the preset styles in your `siimple.config.js` file:

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

## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
