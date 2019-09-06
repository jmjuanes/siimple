# v3.x.x to v4.x.x

The first remarkable change is that we have change our npm package from `siimple` to `@siimple/css`. 
Also, we have extracted the experimental modules introduced in `v3.2.0` to a new package called `@siimple/experiments`.

Here are the steps that you need to migrate:

## npm

Install the new package running:

```bash
$ npm install --save @siimple/css
```

If you have previously installed the `siimple` package, you can unistall it running:

```bash
$ npm unistall --save siimple
```

If you need the experiments package, install it running:

```bash
$ npm install --save @siimple/experiments
```

## Sass

If you use Sass, you will need to change a couple of things when migrating to `v4.x.x`.

### Sass imports

If you are only importing `siimple/index.scss`, just replace the import with `@siimple/css/index.scss` and you are done.

If you are importing individual modules, follow the next steps:
- Replace `siimple/` with `@siimple/css/`.
- Remove the underscore `_` character of the file that you are importing.
- If you are importing the `_utils.scss` module, replace it witih `mixins.scss`.

For example, if you are importing the old buttons module:

```scss
@import "siimple/scss/elements/_btn.scss";
```

You should replace this with:

```scss
@import "@siimple/css/scss/elements/btn.scss";
```

### Sass include paths

Make soure that you have added your `node_modules` folder to your Sass [include paths](https://github.com/sass/node-sass#includepaths).

## Css

Read the [changelog](./CHANGELOG.md) for more information about the changes in the Css styles. 

# Get more help

Feel free to open an issue if you need help in the migration process or send us a message in our [Gitter chat](https://gitter.im/siimple/siimple).

