let path = require("path");
let pkg = require("./package.json");

module.exports = {
    "source": __dirname,
    "target": path.join(__dirname, "www"),
    "theme": "@siimple/press-theme-siimple/config.js",
    "base": "/",
    "site": {
        //Global site links
        "links": {
            "documentation": "#",
            "privacy": "#",
            "repository": "https://github.com/siimplie/siimple",
            "twitter": "https://twitter.com/siimplecss",
            "gitter": "https://gitter.im/siimple", 
            "issues_bug": "https://github.com/siimple/siimple/issues/new?template=BUG_REPORT.md",
            "issues_feature": "https://github.com/siimple/siimple/issues/new?template=FEATURE_REQUEST.md"
        },
        //Navbar links
        "navbarLinks": [
            {"text": "Docs", "url": "#"}
        ]
    },
    //Custom head tags
    "head": [
        ["link", {"rel": "stylesheet", "href": "/assets/css/siimple-website.css"}]
    ],
    //Plugins
    "plugins": []
};

