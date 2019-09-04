let path = require("path");
let pkg = require("../package.json");

module.exports = {
    "source": __dirname,
    "target": path.join(process.cwd(), "packages", "docs", "public", "css"),
    "theme": "@siimple/press-theme-siimple/config.js",
    "base": "/css/",
    "site": {
        "name": "css",
        "description": "A minimal CSS toolkit for building flat, clean and responsive web designs",
        "version": pkg.version,
        "license": "MIT License",
        //Breadcrumb links
        "breadcrumbLinks": [
            {"text": "siimple@css", "url": "/css/"}
        ],
        //Navbar links
        "navbarLinks": [],
        //Footer links
        "footerLinks": [
            {"text": "Github Repo", "url": "https://github.com/siimple/siimple", "target": "_blank"},
            {"text": "Issues", "url": "https://github.com/siimple/siimple/issues", "target": "_blank"}
        ],
        "repository": "https://github.com/siimple/siimple",
    },
    //Custom head tags
    "head": [
        ["link", {"rel": "stylesheet", "href": "/assets/css/siimple-docs-css.css"}]
    ],
    //Plugins
    "plugins": []
};

