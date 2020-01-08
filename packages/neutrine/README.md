# @siimple/neutrine 

> An experimental collection of React UI components based on @siimple/css.

[![npm](https://img.shields.io/npm/v/@siimple/neutrine.svg?style=flat-square)](https://www.npmjs.com/package/@siimple/neutrine)
[![npm](https://img.shields.io/npm/dt/@siimple/neutrine.svg?style=flat-square)](https://www.npmjs.com/package/@siimple/neutrine)
[![npm](https://img.shields.io/npm/l/@siimple/neutrine.svg?style=flat-square)](https://github.com/siimple/@siimple/neutrine)
[![pr](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()

**Its API is not as stable as that of @siimple/css, and does not follow the common versioning scheme.**

## Installation

Use `npm` to install this package: 

```
$ npm install --save @siimple/neutrine
```

## Usage

```javascript
import React from "react";
import {Btn} from "@siimple/neutrine";

export default class App extends React.Component {
    render() {
        return React.createElement(Btn, {color: "primary"}, "Say hello");
    }
}
```

## License 

Under the [MIT LICENSE](./LICENSE).

