let path = require("path");
let pkg = require("../package.json");

module.exports = {
    "source": __dirname,
    "target": path.join(__dirname, "public"),
    "theme": "@siimple/press-theme-siimple/config.js",
    "site": {
        "name": "colors",
        "description": "An elegant and minimalistic color palette for UI design",
        "version": pkg.version,
        "license": "MIT License",
        //Navbar links
        "navbarLinks": [
            {"text": "Getting started", "url": "/installation.html"},
            {"text": "Colors", "url": "/colors.html"},
            {"text": "GitHub", "url": "https://github.com/siimple/colors", "target": "_blank"}
        ],
        //Footer links
        "footerLinks": [
            {"text": "Releases", "url": "https://github.com/siimple/colors/releases", "target": "_blank"},
            {"text": "Repository", "url": "https://github.com/siimple/colors", "target": "_blank"}
        ],
        "repository": "https://github.com/siimple/colors",
        "issues": "https://github.com/siimple/colors/issues",
        "releases": "https://github.com/siimple/colors/releases"
    },
    //Custom head tags
    "head": [
        ["link", {"rel": "stylesheet", "href": "/css/siimple-colors.min.css"}],
        ["link", {"rel": "stylesheet", "href": "/css/siimple-colors-docs.css"}]
    ],
    //Plugins
    "plugins": [
        {
            "plugin": "@siimple/press-plugin-sass",
            "source": path.join(__dirname, "styles", "index.scss"),
            "target": "/css/siimple-colors-docs.css"
        }
    ]
};

