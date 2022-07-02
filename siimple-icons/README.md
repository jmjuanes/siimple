![Siimple header](https://github.com/jmjuanes/siimple/raw/main/siimple-icons/header.png)

[![NPM Version](https://badgen.net/npm/v/siimple-icons)](https://npmjs.com/package/siimple-icons)
[![Get help](https://badgen.net/badge/Discussions/Join%20us/cyan)](https://github.com/jmjuanes/siimple/discussions)
[![MIT License](https://badgen.net/github/license/jmjuanes/siimple)](https://github.com/jmjuanes/siimple)

> **siimple-icons**: a collection of Pure CSS and Open-Source icons for the **siimple** CSS toolkit.

## Links

- Documentation: https://www.siimple.xyz/icons.
- Report a bug or request a feature: https://github.com/jmjuanes/siimple/issues.
- Get help: https://github.com/jmjuanes/siimple/discussions.

## Install

Add **siimple-icons** to your project running the following command:

```bash
$ npm install --save siimple-icons
```

Or include the icons stylesheet in your HTML file using our CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/siimple-icons/siimple-icons.css">
```

## Usage

### Using CSS classes

You can use the CSS classes defined in `siimple-icons.css` to reference icons in your HTML:

```html
<i class="si-star"></i>
```

You can use `font-size` and `color` style properties for customizing the icon:

```html
<i class="si-tools" style="color:#025cca;font-size:24px;"></i>
```

### Using SVG Sprite

Use the SVG sprite `siimple-icons.svg` to insert any icon through the `<use>` element and using the icon ID as the fragment identifier. You can customize the icon color using the `stroke` attribute or the icon size using `width` and `height`:

```html
<svg width="32" height="32" stroke="currentColor">
    <use xlink:href="siimple-icons.svg#image" />
</svg>
```

## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
