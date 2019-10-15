let path = require("path");
//let pkg = require("../package.json");

module.exports = {
    "source": __dirname,
    "target": path.join(__dirname, "public"),
    "theme": "@siimple/press-theme-siimple/config.js",
    "site": {
        "name": "docs",
        "description": "Documentation for siimple toolkits",
        "version": null,
        "license": "MIT License",
        //Breadcrumb links
        "breadcrumbLinks": [],
        //Navbar links
        "navbarLinks": [],
        //Footer links
        "footerLinks": [
            {"text": "Github Repo", "url": "https://github.com/siimple/siimple", "target": "_blank"},
            {"text": "Issues", "url": "https://github.com/siimple/siimple/issues", "target": "_blank"}
        ]
    },
    //Custom head tags
    "head": [],
    //Plugins
    "plugins": []
};

