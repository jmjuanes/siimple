![Siimple header](./header.svg)

[![NPM Version](https://badgen.net/npm/v/siimple)](https://npmjs.com/package/siimple)
[![Follow @siimplecss](https://badgen.net/badge/Twitter/siimplecss/blue)](https://twitter.com/siimplecss)
[![Get help](https://badgen.net/badge/Discussions/Join%20us/cyan)](https://github.com/jmjuanes/siimple/discussions)
[![MIT License](https://badgen.net/github/license/jmjuanes/siimple)](https://github.com/jmjuanes/siimple)
[![PRs welcome](https://badgen.net/badge/PR/Welcome/green)](https://github.com/jmjuanes/siimple)
[![CI](https://github.com/jmjuanes/siimple/actions/workflows/ci.yml/badge.svg)](https://github.com/jmjuanes/siimple/actions/workflows/ci.yml)

Welcome to the **siimple CSS toolkit** repository :tada: 

- :books: **Documentation**: https://www.siimple.xyz.
- :pencil: **Try siimple**: play with **siimple** in your browser with our [online playground](https://www.siimple.xyz/playground).
- :pray: **Contributing**: check out our [CONTRIBUTING guide](/CONTRIBUTING.md) to get started.
- :question: **Questions**: join our [discussion forum](https://github.com/jmjuanes/siimple/discussions).
- :sparkles: **Releases**: check out our [latest releases](https://github.com/jmjuanes/siimple/releases).
- :leftwards_arrow_with_hook: Documentation for **v3**: [v3.siimple.xyz](https://v3.siimple.xyz).

## What is siimple

We call **siimple** a **CSS toolkit** because it is a themeable and customizable CSS framework, but also a CSS engine that you can use for building your own CSS framework.

Inspired by other CSS frameworks (like [bulma](https://bulma.io)), but:

- **Fully themeable**: use your own theme to customize and extend **siimple**. 
- **Use what you really need**: include the core modules (elements, helpers, ...) and themes that you **REALLY** need for your project.
- **No dependencies**: written all from scratch without any dependencies.
- **No CSS preprocessors needed**: we provide a tiny CLI to compile the CSS, so you do not need any other preprocessor like SASS or LESS.
- **Color palette included**: we provide a flat color palette to customize **siimple** with different colors.
- **Pure CSS icons included**: we provide a collection of pure CSS icons.

## Packages

Along with `siimple` and `siimple-icons` packages, the packages listed in the table below are also available on this repository. These packages are published in the `@siimple` organization in [npm](https://npmjs.com).

| Package | Description | Included in `siimple` |
|---------|-------------|:---------------------:|
| [@siimple/core](https://github.com/jmjuanes/siimple/tree/main/packages/core/) | Core engine of the siimple CSS toolkit. | :heavy_check_mark: |
| [@siimple/modules](https://github.com/jmjuanes/siimple/tree/main/packages/modules/) | Core modules of siimple. | :heavy_check_mark: |
| [@siimple/colors](https://github.com/jmjuanes/siimple/tree/main/packages/colors/) | Color palette for siimple. | :heavy_check_mark: |
| [@siimple/cli](https://github.com/jmjuanes/siimple/tree/main/packages/cli/) | Command line for siimple. | :heavy_check_mark: |
| [@siimple/postcss](https://github.com/jmjuanes/siimple/tree/main/packages/postcss/) | PostCSS plugin for siimple. | :heavy_check_mark: |
| [@siimple/presets](https://github.com/jmjuanes/siimple/tree/main/packages/presets/) | A collection of all official presets for siimple. | :x: |
| [@siimple/preset-base](https://github.com/jmjuanes/siimple/tree/main/packages/preset-base/) | Base theme of siimple. | :heavy_check_mark: |
| [@siimple/preset-dark](https://github.com/jmjuanes/siimple/tree/main/packages/preset-dark/) | Dark theme for siimple. | :x: |
| [@siimple/preset-ice](https://github.com/jmjuanes/siimple/tree/main/packages/preset-ice/) | A frosty and clean theme for siimple. | :x: |
| [@siimple/preset-noir](https://github.com/jmjuanes/siimple/tree/main/packages/preset-noir/) | Classic and elegant theme for siimple. | :x: |
| [@siimple/preset-mustard](https://github.com/jmjuanes/siimple/tree/main/packages/preset-mustard/) | Yellowish and very clean theme preset. | :x: |
| [@siimple/standalone](https://github.com/jmjuanes/siimple/tree/main/packages/standalone/) | Run **siimple** directly in the browser. | :x: |
| [@siimple/css](https://github.com/jmjuanes/siimple/tree/main/packages/css/) | Our tiny and agnostic CSS-in-JS library with the power of the siimple framework. | :x: |
| [@siimple/react](https://github.com/jmjuanes/siimple/tree/main/packages/react/) | Style your React components using **siimple**. | :x: |
| [@siimple/components](https://github.com/jmjuanes/siimple/tree/main/packages/components/) | A collection of React UI components based on **siimple**. | :x: |
| [@siimple/icons](https://github.com/jmjuanes/siimple/tree/main/packages/icons/) | Siimple icons in JSON format. | :x: |

The version of these packages are different from the main `siimple` and `siimple-icons` packages, but follows this convention: the version `4.x.y` of `siimple` equals to version `0.x.y` of all packages published in the `@siimple` organization.

## Development

Here are the instructions for building **siimple** from the source code. Before you get started, ensure you have [Node 14 and Yarn](https://nodejs.org/en/download/) installed in your computer.

First clone this repository in your local machine running the following command:

```bash
$ git clone https://github.com/jmjuanes/siimple
```

Navigate into the repository folder and then install dependencies with **yarn**:

```bash
$ yarn install
```

### Build siimple and siimple-icons

Run the following command to build the **siimple** CSS framework in `siimple/siimple.css` and the **siimple-icons** CSS in `siimple-icons/siimple-icons.css`:

```bash
$ yarn run build
```

### Documentation

We are using [Gatsby](https://www.gatsbyjs.com/) for documentation. After building the CSS of the **siimple** framework you can build the documentation site with the following command:

```bash
$ yarn run build:website
```

Start the website server with the following command:

```bash
$ yarn run serve
```

### Playground

You can build our playground tool as a standalone web application with the following command:

```bash
$ yarn run build:playground
```

This will generate a new folder `playground/public` with the code of the playground app. Start the playground web service with the following command:

```bash
$ yarn run start:playground
``` 

## Acknowledgements

- CSS naming methodology based on [SMACSS](http://smacss.com).
- CSS-In-JS engine inspired by [Emotion](https://emotion.sh) and [Stitches](https://stitches.dev).
- Theme configuration, presets demo and React integration inspired by [Theme UI](https://theme-ui.com) and [System UI](https://system-ui.com).
- Standalone package inspired by [Babel Standalone](https://babel.dev).

## License

Code and documentation of **siimple** &copy; 2015-present **Josemi Juanes**. Code released under the [MIT license](./LICENSE). Documentation released under [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/).
