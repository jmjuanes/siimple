
# @siimple/css

[![npm](https://img.shields.io/npm/v/@siimple/css.svg?style=flat-square)](https://www.npmjs.com/package/@siimple/css)
[![npm](https://img.shields.io/npm/dt/@siimple/css.svg?style=flat-square)](https://www.npmjs.com/package/@siimple/css)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/@siimple/css/badge)](https://www.jsdelivr.com/package/npm/@siimple/css)
[![npm](https://img.shields.io/npm/l/@siimple/css.svg?style=flat-square)](https://github.com/siimple/siimple)
[![Join us on Gitter](https://img.shields.io/badge/chat-on_gitter-4EB897.svg?style=flat-square)](https://gitter.im/siimple/siimple)

[**@siimple/css**](https://www.siimple.xyz) is a light, responsive and open source CSS toolkit for design flat and clean websites. 
It has been built in SASS/SCSS and provides a clean starting point for your web design.

- [Homepage](https://www.siimple.xyz) - Learn more about the **siimple** ecosystem.
- [Documentation](https://docs.siimple.xyz) - **siimple** documentation.
- [@siimplecss](https://twitter.com/siimplecss) - Follow us on Twitter and share your love to **siimple** with the HT [#siimplecss](https://twitter.com/search?q=%23siimplecss&src=typd).


## Migration

Please read our [migration guide](./MIGRATING.md) to migrate from older versions to `v4`.


## Installation

The **@siimple/css** package is available on [npm](https://npmjs.com/package/@siimple/css), so you can run the following command to add it to your project: 

```bash
$ npm install --save @siimple/css
``` 

This package is also available on a [CDN](https://www.jsdelivr.com/package/npm/@siimple/css), so you can import the compiled CSS files directly on your HTML page. 


## Usage

You can include the compiled styles in your HTML files: 

```html
<link rel="stylesheet" href="./node_modules/@siimple/css/dist/siimple.min.css">
```

The source files are written in [Sass](http://sass-lang.com/), so you can import all the styles in your scss files: 

```scss
@import "@siimple/css/index.scss";
```

Or import individual modules:

```scss
@import "@siimple/css/scss/elements/btn.scss";
@import "@siimple/css/scss/components/alert.scss";
```

Make sure that you have added your `node_modules` folder to your Sass [include paths](https://github.com/sass/node-sass#includepaths).


## Documentation 

The documentation website is available at [docs.siimple.xyz](https://docs.siimple.xyz). 


## Questions 

For questions and support, please use our [community chat](http://chat.siimple.xyz) on **Gitter**. 
You can also follow [@siimplecss on Twitter](https://twitter.com/siimplecss).


## Bugs and new features

Found any bug? Have you a feature request? Please make sure to read our [contributing guidelines](/CONTRIBUTING.md) and search for existing or similar issues. 
If your problem or idea is not addressed yet, please feel free to open a new issue!


## Contribute

We appreciate all contributions to the **siimple** project and help make it better! Please, read the [contributing guidelines](/CONTRIBUTING.md) before starting your contribution.


## Related projects

| Project | Description |
|---------|-------------|
| [siimple-rubygem](https://github.com/BerkhanBerkdemir/siimple-rubygem) | siimple Ruby Gem for any type of Ruby web application |
| [siimact](https://github.com/mirgj/siimact) | siimact: A set of React components for Siimple CSS Framework |

Have an awesome project or plugin related to **siimple**? Open a new issue and tell us! :)


## License

Code and documentation of **siimple** &copy; 2015-present **Josemi Juanes**. 
The code is released unde the [MIT License](LICENSE) and the documentation is released under the [Creative Commons CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/).

