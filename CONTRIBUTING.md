# Contributing to siimple

First, thanks a lot for taking the time to contribute to the **siimple** project! :blush::tada:

Here you have the guidelines that you must read before start contributing to **siimple**.

## Code of Conduct

You must read and follow the [code of conduct](./CODE_OF_CONDUCT.md) of **siimple**.

## Questions or problems

We are happy to help you if you have any problem or question using **siimple**. Please, send your problem to our [discussions forum](https://github.com/jmjuanes/siimple/discussions).

## Issues or bugs

If you want to report a bug or issue, please open a new [issue here](https://github.com/jmjuanes/siimple/issues) and include as many details as possible with your report. Adding code or screenshots are very helpful.

Also, you can help us and publish a new [pull request](https://github.com/jmjuanes/siimple/pulls) with the fix of the bug or issue.

## New features

You can request a new feature by [submitting a new issue](https://github.com/jmjuanes/siimple/issues), or implement your new feature and [submit a new pull request](https://github.com/jmjuanes/siimple/pulls) to the main repository. 

## Developing

Make sure that [Node](https://nodejs.org) and [npm](https://npmjs.com) are installed in your computer before starting.

### Setup environment

Run the following commands: 

```bash
$ git clone https://github.com/jmjuanes/siimple
$ cd siimple
$ npm install
```

If you plan to build the documentation site, you will need to run also the following command:

```bash
$ npm run website:init
```

If you plan to use the playground tool, you will need to install the playground tool dependencies running the following command:

```bash
$ npm run playground:init
```

### Building siimple

```
$ npm run build
```

This will generate the output CSS and the icons fonts in the `./siimple` folder.

### Running documentation

Just run `npm run website` to build the documentation site and start the documentation server Then, open a new browser window and navigate to `http://localhost:5000`.

### Running playground

Just run `npm run playground` to build the playground tool and start the playground server. Then, open a new browser window and navigate to `http://localhost:5000`.
