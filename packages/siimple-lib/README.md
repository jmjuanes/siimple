# siimple-lib

![npm-version](https://img.shields.io/npm/v/siimple-lib.svg?style=flat-square)
![npm-downloads](https://img.shields.io/npm/dt/siimple-lib.svg?style=flat-square)
![npm-license](https://img.shields.io/npm/l/siimple-lib.svg?style=flat-square)

> The core library of the siimple toolkit.

## Installation

This library is included in the main **siimple** package and a separate installation is no required, but you can install it using **npm**:

```bash
$ npm install --save siimple-lib
```

## Usage

Import this library in your scss file:

```scss
@use "siimple-lib" as lib;
```

## API

### lib.theme($theme)

A mixin to specify the theme configuration for siimple. The `$theme` argument is a map with the theme configuration.

```scss
@include lib.theme((
    "colors": (
        "primary": #1D1F9F,
        "body": #000,
    ),
    "fonts": (
        "body": "Roboto",
    ),
));
```

## License

Released under the **MIT License**.
