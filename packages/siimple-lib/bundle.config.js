const path = require("path");

module.exports = {
    "bundle": "lib.scss",
    "cwd": path.resolve(__dirname, "./scss"),
    "entry": [
        "./constants.scss",
        "./theme.scss",
        "./naming.scss",
        "./component.scss",
        "./sheet.scss",
        "./plugins.scss",
    ],
    "resolve": {
        //"siimple-components": "./components.scss",
        "siimple-colors": "./colors.scss",
        "siimple-utils": "./utils.scss",
    },
};

