# @siimple/lib

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

See the [@siimple/lib documentation site](#) for a full description of all variables, mixins and functions defined in the library.


## License

Code copyright 2020 Josemi Juanes. Code released under the **MIT license**.

