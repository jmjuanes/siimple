# @siimple/react (Experimental)

Style your React components using Siimple.

> **Note**: this is an experimental package. API may change at any time.

## Installation

Install this package using **npm**:

```bash
 npm install --save @siimple/react
```

## Usage

Our custom `jsx` transform allows you to provide a custom CSS styles object using a `css` prop:

```js
/** @jsxImportSource @siimple/react */

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

You can use `ThemeProvider` component for using your own theme:

```js
/** @jsxImportSource @siimple/react */
import {ThemeProvider} from "@siimple/react";

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

Remember that you should tell Babel to use `@siimple/react` as the [automatic runtime import](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx#customizing-the-automatic-runtime-import):

```js
/** @jsxImportSource @siimple/react */

const App = () => (
    <div css={{color: "blue"}}>
        <strong>Hello world</strong>
    </div>
);
```

You can also use it as the [classic runtime](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx#customizing-the-classic-runtime-import):

```js
/** @jsx jsx */
import {jsx} from "@siimple/react";

const App = () => (
    <div css={{color: "blue"}}>
        <strong>Hello world</strong>
    </div>
);
```

## API

### jsx(type, props, ...children)

The JSX transform function that automatically converts the `props.css` property to a className.

```js
/** @jsx jsx */
import {jsx} from "@siimple/react";

const App = () => (
    <div css={{color: "blue"}}>
        <strong>Hello world</strong>
    </div>
);
```

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

### styled(type, css)

Generate a styled React component with the specified type and CSS.

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

## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
