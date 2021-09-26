//const path = require("path");

module.exports = {
    "name": "siimple-components",
    "cwd": __dirname,
    "output": "index.scss",
    "entry": [
        "./scss/*.scss",
    ],
    "resolve": {
        "siimple": "siimple-lib/index.scss",
        "siimple-lib": "siimple-lib/index.scss",
    },
    "dependencies": [
        "siimple-lib",
    ],
};

