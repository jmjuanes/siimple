# @siimple/preset-ice

A frosty and clean theme for **siimple**. Based on [Nord Theme](https://www.nordtheme.com).

## Installation

Install this package using **npm**:

```
$ npm install --save siimple @siimple/preset-ice
```

## Usage

Use this theme in your `siimple.config.js` file:

```js
import ice from "@siimple/preset-ice";

export default {
    ...ice,
    // ...other configuration
};
```

This preset uses `Poppins` as default font for body text and headings. You will need to import this font in your HTML file:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700" rel="stylesheet">
```

## Additional variants

This preset introduces additional variants for some elements like buttons, alerts and badges. You can use the `success`, `warning` and `danger` variants to style your buttons, alerts and badges:

```html
<!-- Buttons -->
<button class="button is-danger">Danger button</button>
<button class="button is-warning">Warning button</button>
<button class="button is-success">Success button</button>

<!-- Alerts -->
<div class="alert is-danger">Danger alert</div>
<div class="alert is-warning">Warning alert</div>
<div class="alert is-success">Success alert</div>

<!-- Badges -->
<span class="badge is-danger">Danger badge</span>
<span class="badge is-warning">Warning badge</span>
<span class="badge is-success">Success badge</span>
```

## Acknowledgement

This theme has been inspired in [Nord Color palette](https://www.nordtheme.com).
