let path = require("path");
let pkg = require("./package.json");

module.exports = {
    "source": __dirname,
    "target": path.join(__dirname, "www"),
    "theme": "@siimple/press-theme-siimple/config.js",
    "base": "/",
    "site": {
        "analytics": null
    },
    //Custom head tags
    "head": [
        ["link", {"rel": "stylesheet", "href": "/assets/css/siimple-website.css"}]
    ],
    //Plugins
    "plugins": []
};

