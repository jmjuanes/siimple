const path = require("path");

module.exports = {
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
                name: "pages",
                path: path.resolve(__dirname, "./pages/"),
            },
        },
        {
            resolve: "gatsby-plugin-page-creator",
            options: {
                path: path.resolve(__dirname, "./pages/"),
            },
        },
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                extensions: [".mdx", ".md"],
                defaultLayouts: {
                    "pages": path.join(__dirname, "layouts", "default.js"),
                },
            },
        },
    ],
};

