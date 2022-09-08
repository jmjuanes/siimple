const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const package = require("../package.json");

const DOCS_ONLY = process.env?.DOCS_ONLY === "true";

// Write custom webpack configuration
exports.onCreateWebpackConfig = ({plugins, actions}) => {
    return actions.setWebpackConfig({
        devtool: false,
        plugins: [
            plugins.define({
                "process.env.VERSION": JSON.stringify(package.version),
                "process.env.REPO_URL": JSON.stringify(package.repository),
                "process.env.DOCS_ONLY": JSON.stringify(DOCS_ONLY),
            }),
            new CopyPlugin({
                patterns: [
                    path.resolve(__dirname, "../siimple/siimple.css"),
                    path.resolve(__dirname, "../siimple-icons/siimple-icons.css"),
                    path.resolve(__dirname, "../node_modules/codecake/codecake.css"),
                    "assets/styles.css",
                    !DOCS_ONLY && {
                        from: path.posix.join(path.resolve(__dirname, "../examples/"), "*.html"),
                        to: "examples/",
                    },
                ].filter(Boolean),
            }),
        ],
    });
};
