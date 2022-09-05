# @siimple/preset-noir

An elegand and classic theme for **siimple**.

## Install

Install this package using **npm**:

```bash
$ npm install --save @siimple/preset-noir
```

## Demo

See the demo page at https://www.siimple.xyz/presets/noir.

## Usage

Add this theme to your `siimple.config.js` file:

```js
import noir from "@siimple/preset-noir";

export default {
    ...noir,
    // ...other configuration
    styles: {
        ...noir.styles,
        // other custom styles
    },
};
```

This preset uses [`Rubik`](https://fonts.google.com/specimen/Rubik) for body text and [`EB Garamond`](https://fonts.google.com/specimen/EB+Garamond) for headings, so you will need to import both fonts in your HTML file:

```html
<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;800" rel="stylesheet">
```

## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
