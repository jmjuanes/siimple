const path = require("path");

module.exports = {
    "output": {
        "filename": "index.scss",
        "path": path.resolve(__dirname, "./"),
    },
    "cwd": path.resolve(__dirname, "./scss"),
    "entry": [
        "./utils.scss",
        "./constants.scss",
        "./theme.scss",
        "./naming.scss",
        "./breakpoints.scss",
        "./sheet.scss",
        "./reboot.scss",
        "./body.scss",
        "./plugins.scss",
        "./build.scss",
    ],
    "resolve": {
        //"siimple-components": "./components.scss",
        //"siimple-colors": "siimple-colors/index.scss",
    },
};

