# siimple

[![npm](https://img.shields.io/npm/v/siimple.svg?style=flat-square)](https://www.npmjs.com/package/siimple)
[![npm](https://img.shields.io/npm/dt/siimple.svg?style=flat-square)](https://www.npmjs.com/package/siimple)
[![devDependency Status](https://david-dm.org/siimple/siimple/dev-status.svg?style=flat-square)](https://david-dm.org/siimple/siimple#info=devDependencies)
[![npm](https://img.shields.io/npm/l/siimple.svg?style=flat-square)](https://github.com/siimpl/siimple)


## About

**siimple** is a light, responsive and open source framework for design flat and clean websites. It has built in SASS/SCSS and provides a clean starting point for your web design.

You can find the documentation and the reference guide in https://siimple.juanes.xyz/docs

## Getting started

First, install **siimple** in your project using one of the following methods:

### Using bower (recomended)

Install the latest version from [bower](http://bower.io):

```
bower install siimple --save
```

### Using npm

Install the latest version from [npm](http://npmjs.org/package/siimple):

```
npm install --save siimple
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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/siimple/VERSION/siimple.min.css">
```

Guides and reference are published in [siimple.juanes.xyz/docs](http://siimple.juanes.xyz/docs). Take a look and start creating your web page!

## Using the SCSS/SASS mixins

You can use the SASS/SCSS mixins located in the `scss/` folder. For this, first install **siimple** and all his dependencies using [bower](http://bower.io):

```
bower install siimple
```

This will create a folder called `bower_components` with the latest version of **siimple** and **siimple-colors**. Then, import the mixins in your `.scss` files by adding the following line:

```sass
@import "siimple/scss/_mixins.scss"
```

Remember that you must add the `bower_components` components to the SASS [load_paths](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#load_paths-option) option. If you are using [libsass](https://github.com/sass/node-sass#includepaths) with [gulp](http://gulpjs.com), here is an example of usage: https://github.com/siimple/siimple/blob/master/gulpfile.js#L43.


## Build siimple

First, install [gulp](http://gulpjs.com) globally:

```
npm install -g gulp
```

Then, clone this repository:

```
git clone https://github.com/siimple/siimple.git
```

Now, `cd` to the **siimple** repository and install all the develop dependencies using `npm`:

```
npm install
```

Install also the `scss` dependencies using `bower`:

```
bower install
```

Use `gulp` to compile the SCSS files and generate the `.css` files in the `dist/` folder running the following command

```
gulp clean build
```

Also, you can generate the minimized version by running:

```
gulp minimize
```

## Contribute

We appreciate all contributions to the **siimple** project and help make it better! Please, read the [contributing guidelines](./CONTRIBUTING.md) before starting your contribution.

## License

**siimple** is under the [MIT](LICENSE) license. &copy; The **siimple team**.
