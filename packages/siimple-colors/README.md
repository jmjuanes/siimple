# siimple-colors

[![npm](https://img.shields.io/npm/v/siimple-colors.svg?style=flat-square)](https://www.npmjs.com/package/siimple-colors)
[![npm](https://img.shields.io/npm/dt/siimple-colors.svg?style=flat-square)](https://www.npmjs.com/package/siimple-colors)
[![npm](https://img.shields.io/npm/l/siimple-colors.svg?style=flat-square)](https://github.com/siimple/siimple)

> An elegant and minimalistic color palette plugin for the siimple toolkit.


## Installation

Use npm to install this plugin in your project:

```bash
$ npm install --save siimple-colors
```

## Usage 

Import this plugin in your theme configuration file.

```scss
@use "siimple-colors" as colors;
```

### Using helpers mixins

You can generate colors helpers calling the `all` mixin:

```scss
@include colors.all();
```

This will generate color helpers for text and backgrounds. You can do a separate import using `text-colors` or `background-colors` mixins:

```scss
@include colors.text-colors();
@include colors.background-colors();
```

### Using colors functions

This plugin also provides a collection of SASS functions for working with colors.

#### colors.get-color($name, $shade: "500")

Returns a color with the specified name and the shade.

```scss
$blue: colors.get-color("blue"); // Default blue color
$red: colors.get-color("red", "600"); //Red color with 600 of shade
```

#### colors.has-color($name)

Returns `True` if the specified color name exists in the palette, `False` if not. 


## Using the CSS styles

This plugin generates CSS classes that can be used to change the color of your elements. We use the helpers naming convention of siimple, followd the color name (red, blue, green...) and the numeric scale of the color (where 100 is the lightest, 900 is the darkest).

```html
<button class="siimple-btn has-text-blue-900 has-text-blue-100">
    Light blue button
</button>
```


## License

Under the **MIT License**.

