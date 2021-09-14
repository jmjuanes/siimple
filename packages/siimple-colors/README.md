# siimple-colors

[![npm](https://img.shields.io/npm/v/siimple-colors.svg?style=flat-square)](https://www.npmjs.com/package/siimple-colors)
[![npm](https://img.shields.io/npm/dt/siimple-colors.svg?style=flat-square)](https://www.npmjs.com/package/siimple-colors)
[![npm](https://img.shields.io/npm/l/siimple-colors.svg?style=flat-square)](https://github.com/siimple/siimple)

**siimple colors** is an elegant and minimalistic color palette plugin for **siimple**. It provides a color palette for your project, and a collection of helpers to customize the color of your UI elements.


## Getting started

**siimple colors** can be installed using [npm](https://www.npmjs.com/package/siimple-colors):

```bash
$ npm install --save siimple-colors
```

## Color palette

Visit https://www.siimple.xyz/colors.

## Usage 

Import this plugin in your main SCSS file:

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

This package also provides a collection of methods for working with colors.

#### colors.get-color($name, $shade: "500")

Returns a color with the specified name and the shade.

```scss
$blue: colors.get-color("blue"); // Default blue color
$red: colors.get-color("red", "600"); //Red color with 600 of shade
```

#### colors.has-color($name)

Returns `True` if the specified color name exists in the palette, `False` if not. 


## License

Under the **MIT License**.

