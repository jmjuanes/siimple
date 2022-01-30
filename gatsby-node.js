const path = require("path");
// const fs = require("fs");
// const {createFilePath} = require("gatsby-source-filesystem");
// const paths = require("./config/paths.js");
const env = require("./env.js");
// const MiniCssExtract = require("mini-css-extract-plugin");

// Write custom webpack configuration
exports.onCreateWebpackConfig = ({getConfig, plugins, actions}) => {
    return actions.setWebpackConfig({
        "devtool": false,
        "resolve": {
            "modules": [
                path.resolve(__dirname, "./node_modules"),
            ],
            "alias": {
                "siimple-colors": path.resolve(__dirname, "./config/colors.json"),
                "siimple-icons": path.resolve(__dirname, "./config/icons.json"),
            },
        },
        "plugins": [
            plugins.define(Object.fromEntries(Object.entries(env).map(e => {
                return [`process.env.${e[0]}`, JSON.stringify(e[1])];
            }))),
        ],
    });
};

// Add /docs prefix to markdown files
// See: https://www.gatsbyjs.com/docs/tutorial/part-seven/
// See: https://www.gatsbyjs.com/plugins/gatsby-source-filesystem#createfilepath
exports.onCreateNode = ({ node, getNode }) => {
    // console.log(`Node created of type "${node.internal.type}"`)
    // if (node.internal.type !== "MarkdownRemark") {
    //     return console.log("---> skip this node");
    // }
    // //console.log(node);
    // console.log(node.path);
    // let value = createFilePath({ node, getNode, basePath: "docs" });
    // console.log(value);
    // console.log("???");
    return null; //Nothing to do
};

// Create extra pages
exports.createPages = async ({actions}) => {
    // const toolsPath = path.join(__dirname, "src", "tools");
    // // Generate tools pages
    // fs.readdirSync(toolsPath, "utf8").forEach(name => {
    //     const entryPath = path.join(toolsPath, name, "index.js");
    //     return fs.existsSync(entryPath) && actions.createPage({
    //         "path": `/${name}`,
    //         "component": entryPath,
    //         "context": {},
    //     });
    // });
};
