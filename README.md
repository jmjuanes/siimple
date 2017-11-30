<div align="center">
  <img height="300px" src="https://rawgit.com/siimple/siimple/master/media/logo-inverted.png" alt="siimple-core">
  <br>
</div>

# siimple

[![npm](https://img.shields.io/npm/v/siimple.svg?style=flat-square)](https://www.npmjs.com/package/siimple)
[![npm](https://img.shields.io/npm/dt/siimple.svg?style=flat-square)](https://www.npmjs.com/package/siimple)
[![devDependency Status](https://david-dm.org/siimple/siimple/dev-status.svg?style=flat-square)](https://david-dm.org/siimple/siimple#info=devDependencies)
[![](https://data.jsdelivr.com/v1/package/npm/siimple/badge)](https://www.jsdelivr.com/package/npm/siimple)
[![npm](https://img.shields.io/npm/l/siimple.svg?style=flat-square)](https://github.com/siimpl/siimple)


## About

**siimple** is a light, responsive and open source framework for design flat and clean websites. It has been built in SASS/SCSS and provides a clean starting point for your web design.

You can find the documentation and the reference guide in https://www.siimple.xyz/documentation

## Getting started

First, install **siimple** in your project using one of the following methods:

### Using npm (recomended)

Install the latest version from [npm](http://npmjs.org/package/siimple):

```
npm install --save siimple
```

### Using bower 

Install the latest version from [bower](http://bower.io):

```
bower install siimple --save
```


### Clone the git repository

You can also clone the git repository hosted on [GitHub](https://github.com/siimple/siimple):

```
git clone https://github.com/siimple/siimple.git
```

## Usage

The main `css` file is located in the `dist/` folder. Include it on every `HTML` file of your project by adding the following tag:

```html
<link rel="stylesheet" type="text/css" href="./path/to/siimple/dist/siimple.css">
```

Or you can use the hosted version on [jsDelivr](https://www.jsdelivr.com/projects/siimple):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/siimple@VERSION/dist/siimple.min.css">
```

Guides and reference are published in [https://www.siimple.xyz/documentation](https://wwww.siimple.xyz/documentation). Take a look and start creating your web page!

## Using the SCSS/SASS mixins

You can use the SASS/SCSS mixins located in the `scss/` folder. For this, first install **siimple** and all his dependencies using [NPM](http://npmjs.com):

```
npm install siimple
```

This will create a folder called `node_modules` with the latest version of **siimple**. Then, import all mixins in your `.scss` files by adding the following line:

```sass
@import "siimple/scss/_all.scss"
```

Remember that you must add the `node_modules` path to the SASS [load_paths](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#load_paths-option) option. If you are using [libsass](https://github.com/sass/node-sass#includepaths) with [gulp](http://gulpjs.com), here is an example of usage: https://github.com/siimple/siimple/blob/ae838b102b2a585a91453fb8e347a680b3bec22e/scripts/build.js#L41.


## Build siimple

First, clone this repository:

```
git clone https://github.com/siimple/siimple.git
```

Now, `cd` to the **siimple** repository and install all the develop dependencies using `npm`:

```
npm install
```

Compile the SCSS files and generate the `.css` files in the `dist/` folder by running the following command

```
npm run build
```

Also, the previous command will  generate the minimized version of **siimple**.


## Contribute

We appreciate all contributions to the **siimple** project and help make it better! Please, read the [contributing guidelines](./CONTRIBUTING.md) before starting your contribution.

## License

**siimple** is under the [MIT](LICENSE) license. &copy; The **siimple team**.
