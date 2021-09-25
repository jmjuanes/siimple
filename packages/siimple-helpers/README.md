# siimple-helpers

![npm-version](https://img.shields.io/npm/v/siimple-helpers.svg?style=flat-square)
![npm-downloads](https://img.shields.io/npm/dt/siimple-helpers.svg?style=flat-square)
![npm-license](https://img.shields.io/npm/l/siimple-helpers.svg?style=flat-square)

> The helpers plugin for the siimple toolkit.

## Installation

This library is included in the main **siimple** package and a separate installation is no required, but you can install it using **npm**:

```bash
$ npm install --save siimple-helpers
```

## Usage

Import this library in your scss file:

```scss
@use "siimple-helpers" as helpers;
```

After configuring your theme, you can include all helpers of this plugin:

```scss
@include helpers.all();
```

You can include only the helpers that you really need: 

```scss
@include helpers.themed();
@include helpers.flexbox();
```

## License

Released under the **MIT License**.
