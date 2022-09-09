# @siimple/preset-mustard

Default theme preset for the **siimple CSS toolkit**.

## Install

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
};
```

This preset uses [`Inter`](https://fonts.google.com/specimen/Inter) as the default font family for both body and headings, so you will need to import this font in your HTML file:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap">
```
