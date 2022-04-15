# [@siimple/preset-icons](https://www.siimple.xyz/presets/icons)

A preset for the **siimple CSS toolkit** that provides a collection of **pure CSS icons**.

## Installation

Use NPM to install this preset:

```bash
$ npm install --save @siimple/preset-icons
```

## Enable this preset

Include the styles that this preset is exporting in your `siimple.config.js` file:

```js
import icons from "@siimple/preset-icons";

export default {
    // ...other configuration
    styles: {
        ...icons.styles,
        // ...other custom styles
    },
};
```

## Using this preset

Use the pattern `icon-<icon-name>` to include icons in your HTML content. Icons can be customized using the properties `font-size` for the size and `color` for the color.

```html
<i class="icon-arrows" style="font-size:32px;color:red;"></i>
<i class="icon-circle" style="font-size:64px;color:blue;"></i>
```

## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
