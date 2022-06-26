# @siimple/modules

Core modules for the **siimple CSS toolkit**, that includes 

> This package is included in the main `siimple` package and a separate installation is not required.


## Install

```bash
$ npm install --save @siimple/modules
```

## Usage

You can use the `injectModules` function to inject core modules in your configuration, using the `modules` field of your configuration:

```js
import {injectModules} from "@siimple/modules";

export default injectModules({
    modules: [
        "button",
        "markup",
        "reset",
    ],
    // ...other configuration
});
```

Individual modules can be also manually injected in the `stypes` field of your configuration:

```js
import {elements} from "@siimple/modules";

export default {
    modules: false,
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
