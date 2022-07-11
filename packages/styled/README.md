# @siimple/styled

A tiny CSS-in-JS solution with the power of **siimple** and its configuration, mixins, and presets.

> **Note**: this is an experimental package. API may change at any time.

## Installation

Use **npm** or **yarn** for adding this package to your project:

```bash
$ yarn add @siimple/styled
``` 

## Usage

### Usage with React

You can use the `css` function to style your React components:

```js title=Button.jsx
import React from "react";
import {css} from "@siimple/styled";

const buttonClass = css({
    backgroundColor: "primary",
    borderRadius: "0.5rem",
    color: "white",
    padding: "0.5rem 1rem",
    "&:hover": {
        cursor: "pointer",
    },
});

export default props => {
    return (
        <button className={buttonClass} onClick={props.onClick}>
            {props.text}
        </button>
    );
};

```


## API

### css(styles)

A function to generate a classname from the specified styles object.

```js
import {css} from "@siimple/styled";

const name = css({
    color: "red",
    fontWeight: "bold",
    "&:hover": {
        color: "blue",
        cursor: "pointer",
    },
});
```

### globalCss(styles)

A function to convert the speicifed styles object to global styles:

```js
import {globalCss} from "@siimple/styled";

globalCss({
    body: {
        backgroundColor: "#fff",
        color: "#000",
    },
    a: {
        textDecoration: "none",
    },
});
```

### keyframes(obj)

Generate global `@keyframes` from the specified keyframes configuration object:

```js
import {keyframes, css} from "@siimple/styled";

const animationName = keyframes({
    from: {
        opacity: 0,
    },
    to: {
        opacity: 1,
    },
});

const name = css({
    animation: `${animationName} 500ms`,
});
```

### create(config)

Generate a custom instance of the `css`, `keyframes` and `globalCss` functions that will use the specified **siimple** configuration object.

```js
import {create} from "@siimple/styled";
import colors from "@siimple/colors";

const {css, keyframes, globalCss} = create({
    colors: {
        primary: colors.mint["500"],
        secondary: colors.blue["500"],
    }
    // ...other theme configuration
});
```

### classNames(obj)

A tiny utility for conditionally joining class names.

```js
import {classNames} from "@siimple/styled";

const names = classNames({
    "foo": true,
    "bar": trueCondition === true,
    "baz": null,
});
// names === "foo bar"
```


# License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
