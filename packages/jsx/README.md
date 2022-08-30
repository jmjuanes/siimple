# @siimple/jsx (Experimental)

A simple JSX transform function to create React Elements that supports the `css` prop.

> **Note**: this is an experimental package. API may change at any time.

## Installation

Install this package using **npm**:

```bash
 npm install --save @siimple/jsx
```

## Usage

This transform allows you to provide a custom CSS styles object using a `css` prop:

```js
/** @jsxImportSource @siimple/jsx */

const App = () => (
    <div
        align="center"
        css={{
            color: "cadetblue",
            fontFamily: "Roboto, sans-serif",
            padding: "4rem",
            "&:hover": {
                cursor: "pointer",
                color: "navy",
            },
        }}
    >
        <strong>Hello world</strong>
    </div>
);
```

You can use `ThemeProvider` from `@siimple/theme-provider` for using your own theme:

```js
/** @jsxImportSource @siimple/jsx */
import ThemeProvider from "@siimple/theme-provider";

const theme = {
    colors: {
        primary: "cadetblue",
    },
};

const App = () => (
    <ThemeProvider theme={theme}>
        <div css={{color: "primary"}}>
            <strong>Hello world</strong>
        </div>
    </ThemeProvider>
);
```

Remember that you should tell Babel to use `@siimple/jsx` as the [automatic runtime import](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx#customizing-the-automatic-runtime-import):

```js
/** @jsxImportSource @siimple/jsx */

const App = () => (
    <div css={{color: "blue"}}>
        <strong>Hello world</strong>
    </div>
);
```

You can also use it as the [classic runtime](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx#customizing-the-classic-runtime-import):

```js
/** @jsx jsx */
import {jsx} from "@siimple/jsx";

const App = () => (
    <div css={{color: "blue"}}>
        <strong>Hello world</strong>
    </div>
);
```

## API

### jsx(type, props, ...children)

The JSX transform function that converts the `props.css` property to a className.

### styled(type, css)

Generate a styled React component with the specified type and CSS.

```jsx
import {styled} from "@siimple/jsx";

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

## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
