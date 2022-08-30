# @siimple/modules

Core modules for the **siimple CSS toolkit**.

> This package is included in the main `siimple` package and a separate installation is not required.


## Install

```bash
$ npm install --save @siimple/modules
```

## Usage

> This module is already integrated in the build process of the `siimple` main package, so you do not need to use the `injectModules` function.

You can use the `injectModules` function to inject core modules in your configuration, using the `modules` field of your configuration object:

```js
import {css} from "@siimple/core";
import {injectModules} from "@siimple/modules";

const result = css(injectModules({
    modules: [
        "button",
        "markup",
        "reset",
    ],
    // ...other configuration
}));
```

## API

### injectModules(config)

Returns a new configuration object with the styles of the modules specified in the `config.modules` field of the provided configuration. The following values for the `config.modules` field are allowed:

- **Array of strings**, to specify **only the module's styles** that will be injected in the configuration.
- **Object** where the keys are the modules names and the values have a falsy value, to specify the modules that will be skipped.
- **A falsy value** (for example `false` or `null`), to skip all modules.

### createHelper(options)

Use this function to create new custom helpers. The `options` argument is an object with the configuration of the helper.

Example:

```js
import {css} from "@siimple/core";
import {createHelper} from "@siimple/modules";

const result = css({
    // ...other configuration
    styles: {
        ...createHelper({
            prefix: "is",
            states: ["default"],
            responsive: false,
            properties: ["textDecoration"],
            values: {
                "underlined": "underline",
                "not-underlined": ["none", "!important"],
            },
        }),
        // ...other styles
    },
});

// Will generate the following styles:
// .is-underlined {text-decoration: underline;}
// .is-not-underlined {text-decoration: none !important;}
```

The `options` object accepts the following keys:

- `prefix`: prefix for the helper, for example `is` or `has`. Default is an empty string `""`. This field is required if no shortcut is specified.
- `shortcut`: shortcut name of the helper, for example you can use `m` as a shortcut for `margin` helpers. Required if no prefix are specified.
- `states`: an array for generating additional helpers to match states like hovering or focus. Allowed values in the array: `"default"`, `"hover"` and `"focus"`.
- `responsive`: a boolean to generate also responsive helpers based on the breakpoints specified in the configuration. Default is `false`.
- `properties`: a list of CSS properties for the helper.
- `values`: an object list of values to assign to the list of properties. The object key will be used as the helper name, and the value will be used as the CSS property value.


## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
