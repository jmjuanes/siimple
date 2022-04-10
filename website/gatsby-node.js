const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const package = require("../package.json");

const s = str => JSON.stringify(str);

// Write custom webpack configuration
exports.onCreateWebpackConfig = ({getConfig, plugins, actions}) => {
    return actions.setWebpackConfig({
        "devtool": false,
        "resolve": {
            "modules": [
                path.resolve(__dirname, "./node_modules"),
            ],
            "alias": {
                "siimple-colors": path.resolve(__dirname, "../siimple/colors.js"),
                "siimple-icons": path.resolve(__dirname, "../siimple/icons.js"),
                "siimple": path.resolve(__dirname, "../siimple/"),
            },
        },
        "plugins": [
            plugins.define({
                "process.env.VERSION": s(package.version),
                "process.env.REPO_URL": s(package.repository),
                "process.env.ISSUES_URL": s(package.bugs),
                "process.env.DISCUSSIONS_URL": s(`${package.repository}/discussions`),
                "process.env.TWITTER_URL": s(package.twitter),
                "process.env.PLAYGROUND_URL": s(package.playground),
            }),
            // Object.fromEntries(Object.entries(env).map(e => {
            //     return [`process.env.${e[0]}`, JSON.stringify(e[1])];
            // }))),
            new CopyPlugin({
                patterns: [
                    path.resolve(__dirname, "../siimple/siimple.min.css"),
                    path.resolve(__dirname, "../siimple/siimple-icons.ttf"),
                    path.resolve(__dirname, "../siimple/siimple-icons.woff"),
                    "src/docs.css",
                    "node_modules/codecake/codecake.css",
                ],
            }),
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
