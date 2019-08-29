let path = require("path");
let pkg = require("../package.json");

module.exports = {
    "source": __dirname,
    "target": path.join(__dirname, "public"),
    "theme": "@siimple/press-theme-siimple/config.js",
    "site": {
        "name": "css",
        "description": "A minimal CSS toolkit for building flat, clean and responsive web designs",
        "version": pkg.version,
        "license": "MIT License",
        //Navbar links
        "navbarLinks": [
            {"text": "Getting started", "url": "/installation.html"}
        ],
        //Footer links
        "footerLinks": [
            {"text": "Github Repo", "url": "https://github.com/siimple/siimple", "target": "_blank"},
            {"text": "Issues", "url": "https://github.com/siimple/siimple/issues", "target": "_blank"}
        ],
        "repository": "https://github.com/siimple/siimple",
        "issues": "https://github.com/siimple/siimple/issues"
    },
    //Custom head tags
    "head": [
        ["link", {"rel": "stylesheet", "href": "/css/siimple-docs.css"}]
    ],
    //Plugins
    "plugins": [
        {
            "plugin": "@siimple/press-plugin-sass",
            "options": {
                "includePaths": [path.join(process.cwd(), "node_modules")]
            },
            "source": path.join(__dirname, "styles", "index.scss"),
            "target": "/css/siimple-docs.css"
        }
    ]
};

