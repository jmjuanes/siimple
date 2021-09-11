//const path = require("path");

module.exports = {
    "name": "siimple-lib",
    "cwd": __dirname,
    "output": "./index.scss",
    "entry": [
        "./scss/utils.scss",
        "./scss/constants.scss",
        "./scss/sheet.scss",
        "./scss/naming.scss",
        "./scss/scales.scss",
        "./scss/breakpoints.scss",
        "./scss/variants.scss",
        "./scss/selectors.scss",
        "./scss/build.scss",
        "./scss/theme.scss",
        "./scss/base.scss",
    ],
    "resolve": {
        //"siimple-components": "./components.scss",
        //"siimple-colors": "siimple-colors/index.scss",
    },
};

