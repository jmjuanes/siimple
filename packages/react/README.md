# @siimple/react (Experimental)

Style your React components using siimple.

> **Note**: this is an experimental package. API may change at any time.

## Installation

Install this package using **npm**:

```bash
 npm install --save @siimple/react
```

## Usage

You can use `ThemeProvider` component for using your theme, and the `styled` function to create styled components:

```js
import React from "react";
import {ThemeProvider, styled} from "@siimple/react";

const theme = {
    colors: {
        primary: "cadetblue",
    },
};

const Button = styled("a", {
    backgroundColor: "primary",
    color: "white",
    padding: "1rem",
    width: "100%",
});

const App = () => (
    <ThemeProvider theme={theme}>
        <Button href="/">Hello world</Button>
    </ThemeProvider>
);
```

## API

### ThemeProvider

A simple React component that accepts a **siimple theme object** as a prop and pass it top-down using [Context](https://reactjs.org/docs/context.html).

```jsx
import {ThemeProvider} from "@siimple/react";

export default App = () => (
    <ThemeProvider theme={theme}>
        ...
    </ThemeProvider>
);
```

### styled(type, css)

Generate a styled React component with the specified type and CSS styles. If the returned component is used as a child of `<ThemeProvider>`, the theme provided will be used to generate the styles.

```jsx
import {styled} from "@siimple/react";

const ButtonLink = styled("a", {
    color: "primary",
    display: "block",
    padding: "2rem",
    textDecoration: "none",
    "&:hover": {
        cursor: "pointer",
    },
});

const App = () => (
    <div align="center">
        <ButtonLink href="/login">
            Login
        </ButtonLink>
    </div>
);
```

### useTheme()

A React [Hook](https://reactjs.org/docs/hooks-intro.html) that returns the current theme provided to `<ThemeProvider>`.

```jsx
import {useTheme} from "@siimple/react";

export const Text = props => {
    const theme = useTheme();

    return (
        <span style={{color: theme.colors.primary}}>
            {props.children}
        </span>
    );
};
```

### useCss(css)

A React Hook that accepts a CSS object and returns a classname for the provided styles. This hook will use the theme object provided in the `<ThemeProvider>` component (if used).

```jsx
import React from "react";
import {useCss} from "@siimple/react";

const theme = {
    colors: {
        primary: "cadetblue",
    },
};

const Button = props => {
    const className = useCss({
        backgroundColor: "primary",
        borderRadius: "0.5rem",
        color: "white",
        padding: "2re",
        width: "100%",
    });
    return (
        <a className={className} href={props.href}>
            {props.children}
        </a>
    );
};

const App = () => (
    <ThemeProvider theme={theme}>
        <Button href="/">Hello world</Button>
    </ThemeProvider>
);
```

### classNames(obj)

A tiny utility for conditionally joining class names.

```js
import {classNames} from "@siimple/react";

const names = classNames({
    "foo": true,
    "bar": trueCondition === true,
    "baz": null,
});
// names === "foo bar"
```

## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
