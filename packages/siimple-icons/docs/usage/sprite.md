---
title: "Using SVG Sprite"
description: ""
---

You can use our SVG sprite stored in `siimple-icons.svg`. Just copy this file to the rest of your assets or static files. Then, you can reference any individual icon in a `<svg>` using a `<use>` tag as follows:

```html
<svg> 
    <use xlink:href="siimple-icons.svg#arrow-left"></use>
</svg>
```

Remember to change the location of the `siimple-icons.svg` file in the **href** attribute of the `<use>` tag.

:::error title="Some issues with SVG sprites"
There is a corss-origin protection on SVGs that are loaded using a URL in the `xlink:href` attribute, so SVG need to be loaded from the same domain or using a proxy.
:::


#### Style your icons

Style your icon using inlie styles in your `<svg>` tag element, or use CSS classes adding them to the **class** attribute of the `<svg>` element:

```html
<!-- Your custom icon style -->
<style>
    .red-arrow {
        width: 100px;
        height: 100px;
        fill: #f44242
    }
</style>

<svg viewbox="0 0 48 48" class="red-arrow">
    <use xlink:href="siimple-icons.svg#arrow-left"></use>
</svg>
```

