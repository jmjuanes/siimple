# @siimple/press-plugin-sass

> **siimplepress** plugin to load SASS/SCSS files and compile into CSS

## Installation

Simply run the following command:

```bash
$ npm install --save @siimple/press-plugin-sass
```

## Examples 

```javascript
module.exports = {
    ...
    "plugins": [
        {
            "plugin": "@siimple/press-plugin-sass",
            "source": "path/to/index.scss",
            "target": "css/style.css"
        }
    ]
};
```

You can also pass options to [Dart Sass](http://sass-lang.com/dart-sass):

```javascript
module.exports = {
    ...
    "plugins": [
        {
            "plugin": "@siimple/press-plugin-sass",
            "source": "path/to/index.scss",
            "target": "css/style.css",
            "options": {
                "includePaths": ["path/to/module/a", "path/to/module/b"]
            }
        }
    ]
};
```

## License

Under the MIT license.

