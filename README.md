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

### A themeable and customizable CSS framework



### A CSS engine

You can use the core of **siimple** for building your own themeable CSS framework.

## Packages


You will find the following packages in this repository:

| Package | Description | Version |
|---------|-------------|---------|
| [@siimple/preset-reboot](https://github.com/jmjuanes/siimple/tree/main/packages/reboot) | Reboot preset for the siimple CSS toolkit. | ![](https://badgen.net/npm/v/@siimple/preset-reboot) |
| [@siimple/preset-markup](https://github.com/jmjuanes/siimple/tree/main/presets/markup) | Markup preset for the siimple CSS toolkit. | ![](https://badgen.net/npm/v/@siimple/preset-markup) |
| [@siimple/preset-utilities](https://github.com/jmjuanes/siimple/tree/main/presets/utilities) | Utilities preset for the siimple CSS toolkit. | ![](https://badgen.net/npm/v/@siimple/preset-utilities) |
| [@siimple/preset-icons](https://github.com/jmjuanes/siimple/tree/main/presets/icons) | Icons preset for the siimple CSS toolkit. | ![](https://badgen.net/npm/v/@siimple/preset-icons) |


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

### Generate the demo CSS

Run the following command to generate a demo CSS version of **siimple** in `siimple/siimple.css`:

```bash
$ npm run build
```

### Local playground

You can run the playground editor in your local machine after building the demo CSS of **siimple** and then running the following command: 

```bash
$ npm run playground
```

### Documentation

We are using [Gatsby](https://www.gatsbyjs.com/) for documentation. After building the demo CSS of **siimple** you can build and start the documentation site running the following command:

```bash
$ npm run website
```


## License

Code and documentation of **siimple** &copy; 2015-present **Josemi Juanes**. 

The code is released unde the [MIT License](LICENSE) and the documentation is released under the [Creative Commons CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/).
