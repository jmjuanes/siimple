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
[![twitter](https://img.shields.io/badge/Twitter-%40siimplecss-blue.svg?style=flat-square)](https://twitter.com/siimplecss)
[![gitter](https://img.shields.io/gitter/room/siimple/siimple.svg?style=flat-square)](https://gitter.im/siimple/siimple)
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

Or you can import all the styles in your SASS/SCSS files: 

```scss
@import "siimple/scss/_all.scss";
```

Or import only the styles that you need: 

```scss
@import "siimple/scss/elements/_tip.scss";
```


## Documentation 

The documentation website is available at https://docs.siimple.xyz. The source code of the documentation is on this repository on the `./docs` folder. Follow the instructions below to build the documentation in your computer.

## Develop

Follow the steps described in this section if you are going to contribute, extend or modify **siimple**. Our main branch is `develop`, which reflects a state with the latest delivered development changes.

### Setup environment

Follow these steps:

1. Download and install [Node.js](https://nodejs.org/download/) on your computer.
2. Clone this repository: `git clone https://github.com/siimple/siimple.git`.
3. Navigate to the cloned repository folder, and run `npm install` to download all the dependencies listed in `package.json`.

We use [Make](https://www.tutorialspoint.com/unix_commands/make.htm) to automatize the building of **siimple**. 

### Building siimple

Navigate to the root folder of the **siimple** module and run the following command:

```
$ make build
```

This will generate `siimple.css` and `siimple.min.css` on `dist` folder.

### Running documentation locally

The documentation is generated using [bundle](https://bundler.io/) and [Jekyll](https://jekyllrb.com/docs/installation/). Make sure that you have them installed in your computer. Also, you will need [bower](https://bower.io) to download some front end dependencies. 

First, you should run the following command to download and configure all dependencies for the documentation:

```
$ make install
``` 

Then, to build the documentation you should run the following command:

```
$ make docs
```

This will generate a folder `docs/_site` with the generated static documentation website.
 

## Questions 

For questions and support, please use our [community chat](http://chat.siimple.xyz) on **Gitter**. You can also follow [@siimplecss on Twitter](https://twitter.com/siimplecss).


## Bugs and new features

Found any bug? Have you a feature request? Please make sure to read our [contributing guidelines][CONTRIBUTING] and search for existing or similar issues. If your problem or idea is not addressed yet, please feel free to open a new issue!


## Contribute

We appreciate all contributions to the **siimple** project and help make it better! Please, read the [contributing guidelines][CONTRIBUTING] before starting your contribution.


## Related projects

| Project | Description |
|---------|-------------|
| [siimple-rubygem](https://github.com/BerkhanBerkdemir/siimple-rubygem) | siimple Ruby Gem for any type of Ruby web application |
| [siimact](https://github.com/mirgj/siimact) | siimact: A set of React components for Siimple CSS Framework |

Have an awesome project or plugin related to **siimple**? Open a new issue and tell us! :)


## License

Code and documentation of **siimple** &copy; 2015-2018 **Josemi Juanes**. The code is released unde the [MIT License](LICENSE) and the documentation is released under the [Creative Commons CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/).

The **siimple** logo &copy; 2018 **Josemi Juanes**. Released under the [Creativa Commons CC BY-SA 4.0 License](https://creativecommons.org/licenses/by-sa/4.0/). 

[CONTRIBUTING]: .github/CONTRIBUTING.md

