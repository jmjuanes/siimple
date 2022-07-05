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

Individual modules can be also manually injected in the `styles` field of your configuration:

```js
import {elements} from "@siimple/modules";

export default {
    modules: false, // Disable all modules by default
    // ...other configuration
    styles: {
        ...elements.button,
        ...elements.card,
        // ... other styles
    },
};
```


## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
