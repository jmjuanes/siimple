# Contributing to siimple

First, thanks a lot for taking the time to contribute to the **siimple** project! :blush::tada:

Here you have the guidelines that you must read before start contributing to **siimple**.

## Code of Conduct

You must read and follow the [code of conduct](./CODE_OF_CONDUCT.md) of **siimple**.

## Questions or problems

We are happy to help you if you have any problem or question using **siimple**. Please, send your problem to our [public chat](https://gitter.im/siimple/siimple).

## Issues or bugs

If you want to report a bug or issue, please open a new [issue here](https://github.com/siimple/siimple/issues) and include as many details as possible with your report. Adding code or screenshots are very helpful.

Also, you can help us and publish a new [pull request](https://github.com/siimple/siimple/pulls) with the fix of the bug or issue.

## New features

You can request a new feature by [submitting a new issue](https://github.com/siimple/siimple/issues), or implement your new feature and [submit a new pull request](https://github.com/siimple/siimple/pulls) to the main repository. Keep in mind that the new feature must follow the style of **siimple**.


## Developing

Make sure that [Node](https://nodejs.org), [npm](https://npmjs.com) and [Make](https://www.gnu.org/software/make/) are installed in your computer before starting.

### Setup environment

Run the following commands: 

```bash
$ git clone https://github.com/siimple/siimple
$ cd siimple
$ make install
```

After the `make install` you can update the node dependencies at any time running `make update`.

**WARNING**: please never run `npm install` directly in the repository. Use `make install` to reinstall all dependencies or `make update` to update the dependencies instead. 

### Building a package

You can run

```
$ make build pkg="{{PKG_NAME}}"
```

to build the specified package. Note that you should replace `{{PKG_NAME}}` with the **name of the folder** in `/packages`. For example, if you want to build the `@siimple/css` package, you sould run `make build pkg="siimple-css"`.

Check the [packages description](/packages/README.md) for more information about the available packages.


