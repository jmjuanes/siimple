const path = require("path");
//const paths = require("../../paths.js");

const filterPlugins = p => p.filter(Boolean);

//Export gatsby configuration
module.exports = {
    "siteMetadata": {
        "title": "siimple",
        "siteUrl": "https://www.siimple.xyz/"
    },
    "plugins": filterPlugins([
        {
            "resolve": "gatsby-source-filesystem",
            "options": {
                "name": "docs",
                "path": path.resolve(__dirname, "./docs/")
            }
        },
        {
            "resolve": "gatsby-plugin-page-creator",
            "options": {
                "path": path.resolve(__dirname, "./docs/")
            }
        },
        {
            "resolve": "gatsby-plugin-mdx",
            "options": {
                "extensions": [".mdx", ".md"],
                "defaultLayouts": {
                    "docs": path.join(__dirname, "/src/layouts/documentation.js")
                }
            }
        },
    ]),
};

