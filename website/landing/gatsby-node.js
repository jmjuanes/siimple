const fs = require("fs");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const package = require("../../package.json");

// Write custom webpack configuration
exports.onCreateWebpackConfig = ({plugins, actions}) => {
    return actions.setWebpackConfig({
        devtool: false,
        resolve: {
            alias: {
                "siimple-icons": path.resolve(__dirname, "../../siimple-icons/"),
            },
        },
        plugins: [
            plugins.define({
                "process.env.VERSION": JSON.stringify(package.version),
                "process.env.REPO_URL": JSON.stringify(package.repository),
            }),
            new CopyPlugin({
                patterns: [
                    path.resolve(__dirname, "../../siimple/siimple.css"),
                    path.resolve(__dirname, "../../siimple-icons/siimple-icons.css"),
                    path.resolve(__dirname, "../../node_modules/codecake/codecake.css"),
                    "assets/landing.css",
                ],
            }),
        ],
    });
};

// Create presets pages
exports.createPages = async ({actions}) => {
    const {createPage} = actions;
};
