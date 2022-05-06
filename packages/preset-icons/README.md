# @siimple/preset-icons

A preset for the **siimple CSS toolkit** that provides a collection of **pure CSS icons**.

## Install

```bash
$ npm install --save @siimple/preset-icons
```

Include the preset styles in your `siimple.config.js` file:

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

## Usage

Use the class `icon-<icon-name>` to include icons in your HTML content. By default, icons will have the size and the color of the parent's font size and text color. This can be customized providing a custom `font-size` and `color` style properties.

```html
<!-- Moon icon with the same size and color of the parent's font size and color -->
<i class="icon-moon"></i>

<!-- Arrows icon in red and with a size of 32px -->
<i class="icon-arrows" style="font-size:32px;color:red;"></i>

<!-- Circle icon in blue and with a size of 64px-->
<i class="icon-circle" style="font-size:64px;color:blue;"></i>
```

## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
