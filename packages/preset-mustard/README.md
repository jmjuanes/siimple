# @siimple/preset-mustard

A very clean and yellowish theme preset for the **siimple CSS toolkit**.

## Installation

Add this preset to your project using **npm** or **yarn**:

```bash
$ npm install --save @siimple/preset-mustard
```

## Usage

Include this preset in your `siimple.config.js` file:

```js
import mustard from "@siimple/preset-mustard";

export default {
    ...mustard,
    // ...other configuration

    // If you need to define your own variants, first extend the preset variants.
    // For example:
    buttons: {
        ...mustard.buttons,
        // ...your custom buttons variants
    },

    // In case that you need to add your custom styles, first extend the styles
    // defined in mustard.styles:
    styles: {
        ...mustard.styles,
        // ...your custom styles
    },
};
```

This preset uses [`Inter`](https://fonts.google.com/specimen/Inter) as the default font family for both body and headings, so you will need to import this font in your HTML file:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap">
```

## Additional variants

This preset introduces additional variants for some elements like buttons, alerts and badges. For example, you can use the `light` variant to create a more lithen alert, badge or button:

```html
<!-- Light button -->
<button class="button is-light">Light button</button>

<!-- Light alert -->
<div class="alert is-light">
    Light alert content
</div>

<!-- Light badge -->
<span class="badge is-light">Light badge</span>
```

You can also create `outlined` buttons or badges:

```html
<button class="button is-outlined">Outlined button</button>
```
