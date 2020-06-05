---
title: "Contents"
description: ""
---

The **siimple icons** package includes the source icons, the SASS styles and the precompiled CSS, fonts and sprites. It follows the next structure:

```x
siimple-icons/
+-- dist/
|   +-- fonts/
+-- scss/
+-- svg/
+-- index.scss
```

The `dist/` folder inclues all precompiled CSS styles, fonts and SVG sprites. The `scss/` folder includes all SCSS files, and the `index.scss` is the entry SCSS file. And finally the `svg/` folder includes all raw icons in SVG format. Other files (like `README.md` or `package.json`) are only required for publishing the package.


#### Precompiled content

Inside the `dist/` folder, you will see something like this:

```x
dist/
+-- fonts/
|   +-- siimple-icons.font.ttf
|   +-- siimple-icons.font.woff
|   +-- siimple-icons.font.woff2
+-- siimple-icons.css
+-- siimple-icons.min.css
+-- siimple-icons.svg
```

- The `siimple-icons.css` and the `siimple-icons.min.css` includes all precompiled styles to use our icons in your HTML pages. Read [how to use our CSS styles](../usage/css.html) for including the icons in your website.
- The `siimple-icons.svg` is a SVG sprite with all icons of the toolkit. Read [how to use our SVG sprite](../usage/sprite.html).
- The folder `fonts/` contains all precompiled typeface files used by `siimple-icons.css` in three formats: **ttf**, **woff** and **woff2**.


