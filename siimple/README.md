![Siimple header](https://github.com/jmjuanes/siimple/raw/main/header.svg)

[![NPM Version](https://badgen.net/npm/v/siimple)](https://npmjs.com/package/siimple)
[![Get help](https://badgen.net/badge/Discussions/Join%20us/cyan)](https://github.com/jmjuanes/siimple/discussions)
[![MIT License](https://badgen.net/github/license/jmjuanes/siimple)](https://github.com/jmjuanes/siimple)


## Links

- Documentation: https://www.siimple.xyz.
- Online playground: https://playground.siimple.xyz.
- Report a bug or request a feature: https://github.com/jmjuanes/siimple/issues.
- Get help: https://github.com/jmjuanes/siimple/discussions.

## Features

- **Themeable**: customize **siimple** with your project specific colors, fonts, and more!
- **Fast**: generate your customized version of **siimple** in milliseconds.
- **Tiny**: the core of **siimple** has less than 500 lines of code.
- **Icons**: **siimple** comes with a collection of hand-made icons.

## Getting started

### Hosted version

You can use **siimple** in your project just including the default CSS from our published package:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/siimple/siimple.min.css" />
```

### CLI usage

Install the package using **npm**:

```bash
$ npm install --save siimple
```

Create a file called `siimple.config.js` with your configuration:

```js
export default {
    prefix: "",
};
```

Generate your customized version of **siimple**:

```bash
$ npx siimple -c ./siimple.config.js -o ./output.css
```

Check out our [configuration guide](https://dev.siimple.xyz/configuration/).


## License

[MIT License](https://github.com/jmjuanes/siimple/blob/main/LICENSE).
