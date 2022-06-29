const path = require("path");

module.exports = {
    pathPrefix: process.env?.DOCS_PREFIX || "/docs",
    siteMetadata: {
        title: "siimple CSS",
        description: "The minimal and themeable CSS toolkit",
        url: "https://www.siimple.xyz/",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "docs",
                path: path.resolve(__dirname, "../../docs/"),
            },
        },
        {
            resolve: "gatsby-plugin-page-creator",
            options: {
                path: path.resolve(__dirname, "../../docs/"),
            },
        },
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                extensions: [".mdx", ".md"],
                defaultLayouts: {
                    docs: path.join(__dirname, "layout.js"),
                },
            },
        },
    ],
};

