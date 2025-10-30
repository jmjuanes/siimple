const path = require("path");
const package = require("../package.json");

const DOCS_ONLY = process.env?.DOCS_ONLY === "true";

module.exports = {
    pathPrefix: DOCS_ONLY ? `/${package.version}` : "/",
    siteMetadata: {
        title: "siimple CSS",
        description: "The minimal and themeable CSS toolkit",
        url: "https://siimple.josemi.xyz/",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                extensions: [".mdx", ".md"],
                defaultLayouts: {
                    page: path.join(__dirname, "layouts/Page.jsx"),
                    docs: path.join(__dirname, "layouts/Docs.jsx"),
                },
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "docs",
                path: path.resolve(__dirname, "../docs/"),
            },
        },
        !DOCS_ONLY && {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "page",
                path: path.resolve(__dirname, "./pages/"),
            },
        },
        !DOCS_ONLY && {
            resolve: "gatsby-plugin-page-creator",
            options: {
                path: path.resolve(__dirname, "./pages/"),
            },
        },
        {
            resolve: "gatsby-plugin-page-creator",
            options: {
                path: path.resolve(__dirname, "../docs/"),
                // ignore: !DOCS_ONLY ? ["index.mdx"] : null,
            },
        },
    ].filter(Boolean),
};
