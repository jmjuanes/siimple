# @siimple/components (Experimental, WIP)

A collection of React UI components based on Siimple.

> **Note**: this is an experimental package. API may change at any time.

## Installation

Install this package using **npm**:

```bash
$ npm install --save @siimple/components
```

## Usage

```jsx
import React from "react";
import {Elements} from "@siimple/components";

export const App = () => (
    <div>
        <Elements.title>Welcome</Elements.title>
        <Elements.button variant="secondary">
            Say hello!
        </Elements.button>
    </div>
);
```


## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
