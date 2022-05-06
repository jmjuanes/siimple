# @siimple/preset-markup

A preset for the **siimple CSS toolkit** for styling your markup elements.

## Install

```bash
$ npm install --save @siimple/preset-markup
```

Include the preset styles in your `siimple.config.js` file:

```js
import markup from "@siimple/preset-markup";

export default {
    // ...other configuration
    styles: {
        ...markup.styles,
        // ...other custom styles
    },
};
```

## Usage

### Headings

This preset includes styles for your heading elements, from `<h1>` through `<h6>`. Headings will reuse styles defined in the `text.heading` field of your theme configuration.

```html live=true
<h1>h1. Siimple heading</h1>
<h2>h2. Siimple heading</h2>
<h3>h3. Siimple heading</h3>
<h4>h4. Siimple heading</h4>
<h5>h5. Siimple heading</h5>
<h6>h6. Siimple heading</h6>
```

### Paragraph

This preset includes styles for your `<p>` elements. Paragraphs will reuse styles defined in the `text.paragraph` field of your theme configuration.

```html live=true
<p class="has-mb-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua.
</p>
```

### Blockquotes

This preset includes styles for your `<blockquote>` elements:

```html live=true
<blockquote>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua.
</blockquote>
```

### Inline links

This preset includes styles for your inline links elements. Links will reuse styles defined in the `text.link` field of your theme configuration.

```html live=true
You can style your <a href="">link</a> elements.
``` 

### Small text

This preset adds styles for your `<small>` elements, and reuse styles defined in the `text.small` field of your theme configuration.

```html live=true
You can style your <small>small text</small> elements.
```

### Inline code

This preset includes styles for your inline code elements, and will reuse styles defined in the `text.code` field of your theme configuration.

```html live=true
You can style your <code>inline code</code> elements.
```

### Horizontal rule

This preset includes styles for your `<hr>` elements: 

```html
<hr>
```

## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
