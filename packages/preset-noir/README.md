# @siimple/preset-noir

An elegant and classic theme for **siimple**.

## Installation

Install this package using **npm**:

```bash
$ npm install --save @siimple/preset-noir
```

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

This preset uses [`Noto Serif`](https://fonts.google.com/specimen/Noto+Serif) for body text and for headings, so you will need to import this font in your HTML file:

```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700" rel="stylesheet">
```

## Additional variants

This preset introduces additional variants for some elements. You can use the `outlined` variant to create an outlined button or badge:

```html
<!-- Outlined button -->
<button class="button is-outlined">Outlined button</button>

<!-- Outlined badge -->
<span class="badge is-outlined">Outlined badge</span>
```
