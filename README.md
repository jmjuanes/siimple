![Siimple header](./header.svg)

[![NPM Version](https://badgen.net/npm/v/siimple)](https://npmjs.com/package/siimple)
[![Follow @siimplecss](https://badgen.net/badge/Twitter/siimplecss/blue)](https://twitter.com/siimplecss)
[![Get help](https://badgen.net/badge/Discussions/Join%20us/cyan)](https://github.com/jmjuanes/siimple/discussions)
[![MIT License](https://badgen.net/github/license/jmjuanes/siimple)](https://github.com/jmjuanes/siimple)
[![PRs welcome](https://badgen.net/badge/PR/Welcome/green)](https://github.com/jmjuanes/siimple)
[![CI](https://github.com/jmjuanes/siimple/actions/workflows/ci.yml/badge.svg)](https://github.com/jmjuanes/siimple/actions/workflows/ci.yml)

Welcome to the **siimple CSS toolkit** repository :tada: 

- :books: **Documentation**: read our documentation at https://www.siimple.xyz.
- :pencil: **Try siimple**: play with **siimple** in your browser with our [online playground](https://playground.siimple.xyz).
- :pray: **Contributing**: check out our [CONTRIBUTING guide](/CONTRIBUTING.md) to get started.
- :question: **Questions**: join our [discussion forum](https://github.com/jmjuanes/siimple/discussions).
- :bird: **Stay tunned**: follow us on [twitter](https://twitter.com/siimplecss).


## What is siimple

We call **siimple** a **CSS toolkit** because it is a themeable and customizable CSS framework, but also a CSS engine that you can use for building your own CSS framework.

Inspired by other CSS frameworks (like [bulma](https://bulma.io)), but:

- **Fully themeable**: use your own theme to customize and extend **siimple**. 
- **Use what you really need**: include the presets (elements, helpers, ...) that you **REALLY** need for your project.
- **No dependencies**: written all from scratch without any dependencies.
- **No CSS preprocessors needed**: we provide a tiny CLI to compile the CSS, so you do not need any other preprocessor like SASS or LESS.
- **Color palette included**: we provide a flat color palette to customize **siimple** with different colors.
- **Pure CSS icons included**: we provide a collection of pure CSS icons.


## Packages

Along with the main `siimple` package, the packages listed in the table below are also available on this repository. These packages are published in the `@siimple` organization in [npm](https://npmjs.com).

| Package | Description | Included in `siimple` |
|---------|-------------|-----------------------|
| [@siimple/core](https://github.com/jmjuanes/siimple/tree/main/packages/core/) | Core engine of the siimple CSS toolkit. | :heavy_check_mark: |
| [@siimple/colors](https://github.com/jmjuanes/siimple/tree/main/packages/colors/) | Color palette for siimple. | :heavy_check_mark: |
| [@siimple/preset-reboot](https://github.com/jmjuanes/siimple/tree/main/packages/preset-reboot/) | Reboot preset for the siimple CSS toolkit. | :heavy_check_mark: |
| [@siimple/preset-elements](https://github.com/jmjuanes/siimple/tree/main/packages/preset-elements/) | Elements preset for the siimple CSS toolkit. | :heavy_check_mark: |
| [@siimple/preset-helpers](https://github.com/jmjuanes/siimple/tree/main/packages/preset-helpers/) | Helpers preset for the siimple CSS toolkit. | :heavy_check_mark: |
| [@siimple/preset-markup](https://github.com/jmjuanes/siimple/tree/main/packages/preset-markup) | Markup preset for the siimple CSS toolkit. | :heavy_check_mark: |
| [@siimple/preset-icons](https://github.com/jmjuanes/siimple/tree/main/packages/preset-icons/) | Pure CSS icons preset. | :heavy_check_mark: |

The version of these packages are different from the main `siimple` package, but follows this convention: the version `4.x.y` of `siimple` equals to version `0.x.y` of all packages published in the `@siimple` organization.


## Development

Here are the instructions for building **siimple** from the source code. Before you get started, ensure you have [Node and NPM](https://nodejs.org/en/download/) installed in your computer.

First clone this repository in your local machine running the following command:

```bash
$ git clone https://github.com/jmjuanes/siimple
```

Navigate into the repository folder and then install dependencies with **npm**:

```bash
$ npm run install
```

### Generate the framework CSS

Run the following command to generate the CSS of the **siimple** framework in `siimple/siimple.css`:

```bash
$ npm run build
```

### Local playground

You can run the playground editor in your local machine after building the framework CSS and then running the following command: 

```bash
$ npm run playground
```

### Documentation

We are using [Gatsby](https://www.gatsbyjs.com/) for documentation. After building the CSS of the **siimple** framework you can build and start the documentation site running the following command:

```bash
$ npm run website
```


## License

Code and documentation of **siimple** &copy; 2015-present **Josemi Juanes**. 
