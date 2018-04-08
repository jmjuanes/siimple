<div align="center">
  <img height="300px" src="https://rawgit.com/siimple/siimple/develop/media/logo-colored.png" alt="siimple">
  <br>
</div>

# siimple

[![npm](https://img.shields.io/npm/v/siimple.svg?style=flat-square)](https://www.npmjs.com/package/siimple)
[![npm](https://img.shields.io/npm/dt/siimple.svg?style=flat-square)](https://www.npmjs.com/package/siimple)
[![devDependency Status](https://david-dm.org/siimple/siimple/dev-status.svg?style=flat-square)](https://david-dm.org/siimple/siimple#info=devDependencies)
[![](https://data.jsdelivr.com/v1/package/npm/siimple/badge)](https://www.jsdelivr.com/package/npm/siimple)
[![npm](https://img.shields.io/npm/l/siimple.svg?style=flat-square)](https://github.com/siimple/siimple)
[![pr](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/siimple/siimple)


**siimple** is a light, responsive and open source framework for design flat and clean websites. It has been built in SASS/SCSS and provides a clean starting point for your web design.

## Getting started

**siimple** is available on [npm](https://npmjs.com/package/siimple), so you can run `npm install siimple` to install it in your project. It is also available on a [CDN](https://www.jsdelivr.com/package/npm/siimple), so you can import the compiled CSS files directly on your HTML page.

You can also download a [ZIP file](https://github.com/siimple/siimple/releases) with the code of each release, or clone the repository: 

```
git clone https://github.com/siimple/siimple.git
```

You can include `siimple` in your HTML files: 

```html
<link rel="stylesheet" href="./node_modules/siimple/dist/siimple.min.css">
```

Or you can import the full library in your SASS/SCSS files: 

```scss
@import "siimple/scss/_all.scss";
```

Or import only the styles that you need: 

```scss
@import "siimple/scss/elements/_tip.scss";
```

## Develop

Follow the steps described in this section if you are going to contribute, extend or modify **siimple**. Our main branch is `develop`, which reflects a state with the latest delivered development changes. 

### Setup environment

Follow these steps:

1. Download and install [Node.js](https://nodejs.org/download/) on your computer.
2. Clone this repository: `git clone https://github.com/siimple/siimple.git`.
3. Navigate to the cloned repository folder, and run `npm install` to download all the dependencies listed in `package.json`.

### Building siimple

Run the following command to compile the SCSS files:

```
npm run css:compile
```

This will generate a file called `siimple.css` on the `dist` folder. You can also generate a minified version of **siimple** running the following command: 

```
npm run css:minify
```

This will generate a file called `siimple.min.css` on the `dist` folder. You can also run both commands in only one: 

```
npm run build
```

This will generate `siimple.css` and `siimple.min.css` on `dist`.


## Documentation 

We are working on a new documentation for version `v3.1.0`. You can find the documentation and the reference guide for `v3.0.0` in https://www.siimple.xyz/documentation

### Running documentation locally

The documentation for `v3.1.0` will be available on this repository. 


## Questions 

For questions and support, please use our [community chat](http://chat.siimple.xyz) on **Gitter**.


## Bugs and new features

Found any bug? Have you a feature request? Please make sure to read our [contributing guidelines](./CONTRIBUTING.md) and search for existing or similar issues. If your problem or idea is not addressed yet, please feel free to open a new issue!


## Contribute

We appreciate all contributions to the **siimple** project and help make it better! Please, read the [contributing guidelines](./CONTRIBUTING.md) before starting your contribution.


## License

**siimple** is under the [MIT](LICENSE) license. &copy; The **siimple team**.
