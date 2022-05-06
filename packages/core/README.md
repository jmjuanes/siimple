# @siimple/core

The core engine of the **siimple CSS toolkit**, that can be used for building your own themeable CSS framework.

## Install

Install this package using **npm**:

```bash
$ npm install --save @siimple/core
```

## API

### buildStyles(styles, theme)

Given a `styles` object and a `theme` object, this method will generate a CSS string with the parsed styles using the provided theme.

```js
import {buildStyles} from "@siimple/core";

// Example theme
const theme = {
    colors: {
        text: "#000",
        background: "#fff",
    },
};

// Styles to compile
const styles = {
    html: {
        backgroundColor: "background",
        color: "text",
    },
};

const css = buildStyles(styles, theme);
```

This will generate the following CSS string:

```css
html {
    background-color: #fff;
    color: #000;
}
```

### mergeStyles(source, target)

Performs a **deep merge** of the styles defined in the `target` object into `source`, and returns the merged styles.

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


## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
