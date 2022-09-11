# @siimple/preset-base

Default theme preset for the **siimple CSS toolkit**.

## Install

Install this package using **npm**:

```bash
$ npm install --save @siimple/preset-base
```

## Usage

Use the base theme in your `siimple.config.js` file:

```js
import base from "@siimple/preset-base";

export default {
    // Import all default scales, breakpoints and root styles
    ...base,
    // Extend default theme scales
    colors: {
        ...base.colors,
        text: "#000",
    },
    // ...other configuration
};
```
