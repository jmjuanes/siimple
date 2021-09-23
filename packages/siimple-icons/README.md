# siimple-icons

[![npm](https://img.shields.io/npm/v/siimple-icons.svg?style=flat-square)](https://www.npmjs.com/package/siimple-icons)
[![npm](https://img.shields.io/npm/dt/siimple-icons.svg?style=flat-square)](https://www.npmjs.com/package/@siimple-icons)
[![](https://data.jsdelivr.com/v1/package/npm/siimple-icons/badge)](https://www.jsdelivr.com/package/npm/siimple-icons)
[![npm](https://img.shields.io/npm/l/siimple-icons.svg?style=flat-square)](https://github.com/siimple/siimple)
[![twitter](https://img.shields.io/badge/Twitter-%40siimplecss-blue.svg?style=flat-square)](https://twitter.com/siimplecss)
[![pr](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/siimple/siimple)

> A icons plugin for the siimple toolkit.


## Installation 

Use [npm](https://npmjs.com) to install the latest version of **siimple icons**:

```
npm install siimple-icons --save
```

## Usage

Include this plugin in your theme configuration file. We provide an `all` mixin to include the base icons class, all icons variants and the font-faces.

```scss
// Import siimple-icons
@use "siimple-icons" as icons;

//Include the main mixin
@include icons.all();
```

## API

### icons.all([ options])

A mixin to include all icons classes and font-faces. The `options` argument is an optional map that can be use to custimize the generated css styles.

- `path`: path to the fonts folder. By default is `../fonts/`. **The path must end with a `/`**.
- `include`: a list of icons to include.
- `exclude`: a list of icons to exclude.

Example: 

```scss
@include icons.all((
    "path": "./fonts/",
    "include": (
        "star",
        "user",
    ),
));
```

## Fonts

Remember to copy the contents of the `siimple-icons/fonts` folder to your project assets folder. 

### Using the CSS styles

Create a `<i>` tag with the following classes: 

- `siimple-icon`: is the base class for **siimple icons**. You should include always this class for referencing an icon.
- `is-[ICON]`, where `[ICON]` is the name of the icon that you are going to add.  

```html 
<!-- Add a left arrow icon -->
<i class="siimple-icon is-arrow-left"></i>

<!-- Add a star icon -->
<i class="siimple-icon is-star"></i>
```

You can style your icon using `font-size` and `color` style properties:

```html 
<i class="siimple-icon is-star" style="color:#ffea66;font-size:20px;"></i>
```


## License 

Code and icons images are under the **MIT LICENSE**.

