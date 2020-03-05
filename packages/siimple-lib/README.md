# @siimple/lib

[![npm](https://img.shields.io/npm/v/@siimple/lib.svg?style=flat-square)](https://www.npmjs.com/package/@siimple/lib)
[![npm](https://img.shields.io/npm/dt/@siimple/lib.svg?style=flat-square)](https://www.npmjs.com/package/@siimple/lib)
[![npm](https://img.shields.io/npm/l/@siimple/lib.svg?style=flat-square)](https://github.com/siimple/siimple)
[![Join us on Gitter](https://img.shields.io/badge/chat-on_gitter-4EB897.svg?style=flat-square)](https://gitter.im/siimple/siimple)

**@siimple/lib**  is the core scss library for the siimple ecosystem.


## Installation

Install **@siimple/lib** using npm:

```bash
$ npm install --save @siimple/lib
```


## Usage

Import this library as a module in your `.scss` files using the [@use rule](https://sass-lang.com/documentation/at-rules/use). There is a basic example:

```scss
@use "@siimple/lib" as siimple;

.button {
    background-color: siimple.$primary;
    color: siimple.$white;
}
```

You can override the default variables defined in the library. Check the [configuring modules](https://sass-lang.com/documentation/at-rules/use#configuring-modules) section of the Sass documentation.

```scss
@use "@siimple/lib" as siimple with (
    $primary: #000000
);

.button {
    background-color: siimple.$primary;
    color: siimple.$white;
}
```


## License

Code copyright 2020 Josemi Juanes. Code released under the **MIT license**.

