# @siimple/components (Experimental, WIP)

A collection of React components based on Siimple.

> **Note**: this is an experimental package. API may change at any time.


## Installation

Install this package using **npm**:

```bash
$ npm install --save @siimple/components
```

## Usage

```jsx
/** @jsx jsx */
import {jsx} from "@siimple/react";
import {Button, Title} from "@siimple/components";

export const App = () => (
    <div
        css={{
            padding: "2rem",
        }}
    >
        <Title>Welcome</Title>
        <Button variant="secondary">Say hello!</Button>
    </div>
);
```


## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
