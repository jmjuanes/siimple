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

### Using npm

Install the latest version from [npm](http://npmjs.org/package/siimple):

```
npm install --save siimple
```

### Using bower

Install the latest version from [bower](http://bower.io):

```
bower install siimple
```

### Clone the git repository

You can also clone the git repository hosted on [GitHub](https://github.com/siimple/siimple):

```
git clone https://github.com/siimple/siimple.git
```

## Usage

The main `css` file is located in the `dist/` folder. Include it on every `HTML` file of your project by adding the following tag:

```
<link rel="stylesheet" type="text/css" href="./path/to/siimple/dist/siimple.css">
```

Or you can use the hosted version on [jsDelivr](https://www.jsdelivr.com/projects/siimple):

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/siimple/VERSION/siimple.min.css">
```

Guides and reference are published in [siimple.juanes.xyz/docs](http://siimple.juanes.xyz/docs). Take a look and start creating your web page!

## Using the SCSS/SASS mixins

You can use the SASS/SCSS mixins located in the `scss/` folder. You need also the **siimple-colors**.

#### Install using npm

This is the easy way. Simply run the following command:

```
npm install siimple
```

This will download **siimple** and **siimple-colors** in the `node_modules` folder. You can then include all the mixins adding the following line to your `.scss` file:

```
@import "./node_modules/siimple/scss/_mixins.scss";
```

#### Install using bower

Run the following command:

```
bower install siimple siimple-colors
```

And then include all the mixins adding the following line to your `.scss` file:

```
@import "./bower_components/siimple/scss/_mixins.scss";
```

## Build siimple

First, install [gulp](http://gulpjs.com) globally:

```
npm install -g gulp
```

Then, clone this repository:

```
git clone https://github.com/siimple/siimple.git
```

and also clone the **siimple-colors** repository at the same parent folder:

```
git clone https://github.com/siimple/siimple-colors.git
```

Now, `cd` to the **siimple** repository and install all the dependencies using `npm`:

```
cd ./siimple
npm install
```

Use `gulp` to compile the SCSS files and generate the `.css` files in the `dist/` folder running the following commands

```
gulp build:scss
gulp minimize
```


## Contribute

We appreciate all contributions to the **siimple** project and help make it better! Please, read the [contributing guidelines](./CONTRIBUTING.md) before starting your contribution.


## License

**siimple** is under the [MIT](LICENSE) license. &copy; Josemi Juanes.
