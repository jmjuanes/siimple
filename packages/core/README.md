# @siimple/core

The core engine of the **siimple CSS toolkit**, that can be used for building your own themeable CSS framework.

## Install

Install this package using **npm**:

```bash
$ npm install --save @siimple/core
```

## API

### css(config)

Given a [configuration object](https://www.siimple.xyz/configuration), this method will generate a CSS string with the parsed styles in `config.styles` and using the provided theme in the configuration object.

```js
import {css} from "@siimple/core";

const result = css({
    useBorderBox: false,
    useRootStyles: false,
    colors: {
        primary: "#34dde5",
    },
    styles: {
        button: {
            backgroundColor: "primary",
            color: "white",
            p: "2rem",
        },
    },
});
```

This will generate the following CSS string:

```css
button {
    background-color: #34dde5;
    color: white;
    padding: 2rem;
}
```

### mergeStyles(source, target)

Performs a **deep merge** of the styles defined in the `target` object into the `source` object, and returns the merged styles object.

```js
import {mergeStyles} from "@siimple/core";

const sourceStyles = {
    ".button": {
        backgroundColor: "primary",
        color: "white",
        padding: "1.5rem",
        "&:hover": {
            backgroundColor: "secondary",
        },
    },
};

const mergedStyles = mergeStyles(sourceStyles, {
    ".button": {
        borderRadius: "0.5rem",
        "&:hover": {
            backgroundColor: "inherit",
            opacity: "0.5",
        },
    },
});
``` 

In the previous example the merged styles will be:

```js
mergedStyles = {
    ".button": {
        backgroundColor: "primary",
        borderRadius: "0.5rem",
        color: "white",
        padding: "1.5rem",
        "&:hover": {
            backgroundColor: "inherit",
            opacity: "0.5",
        },
    },
};
```

### mergeConfig(source, target)

This function will return a new configuration object as a result of performing a **deep merge** of the `target` configuration object into `source`.

```js
import {mergeConfig} from "@siimple/core";

const config = mergeConfig({ /* source */}, {/* target */});
```


## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
