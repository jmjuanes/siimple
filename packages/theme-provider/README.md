# @siimple/theme-provider (Experimental)

A wrapper component for providing access to your theme in all React components.

## Installation

Install this package using **npm**:

```bash
 npm install --save @siimple/theme-provider
```

## Usage

```jsx
import React from "react";
import {ThemeProvider, useTheme} from "@siimple/theme-provider";

const defaultTheme = {
    colors: {
        primary: "coral",
    },
};

const MyText = props => {
    const theme = useTheme();
    
    return (
        <span style={{color: theme.colors.primary}}>
            {props.children}
        </span>
    );
};

export default App = () => (
    <ThemeProvider theme={defaultTheme}>
        <MyText>Hello world</MyText>
    </ThemeProvider>
);

```


## API

### ThemeProvider

A simple React component that accepts a **siimple theme object** as a prop and pass it top-down using [Context](https://reactjs.org/docs/context.html).

```jsx
import {ThemeProvider} from "@siimple/theme-provider";

export default App = () => (
    <ThemeProvider theme={theme}>
        ...
    </ThemeProvider>
);
```


### useTheme

A React [Hook](https://reactjs.org/docs/hooks-intro.html) that returns the current theme provided to `<ThemeProvider>`.

```jsx
import {useTheme} from "@siimple/theme-provider";

export const Text = props => {
    const theme = useTheme();

    return (
        <span style={{color: theme.colors.primary}}>
            {props.children}
        </span>
    );
};
```


## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
