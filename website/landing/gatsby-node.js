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
                    {
                        from: path.posix.join(path.resolve(__dirname, "../../examples/"), "*.html"),
                        to: "public/examples/",
                    },
                ],
            }),
        ],
    });
};

// Create presets pages
exports.createPages = async ({actions}) => {
    const {createPage} = actions;

    // Build examples page
    const examplesPath = path.resolve(__dirname, "../../examples");
    const examples = fs.readdirSync(examplesPath)
        .filter(f => !f.startsWith("_") && path.extname(f) === ".html")
        .map(file => {
            const content = fs.readFileSync(path.join(examplesPath, file), "utf8");
            const matches = [...content.matchAll(/<meta name="example:(\w+)" content="([^"]+)">/gm)];
            return {
                url: file,
                ...Object.fromEntries(matches.map(m => [m[1], m[2]])),
            };
        });

    createPage({
        path: "/examples",
        component: path.join(__dirname, "templates", "examples.js"),
        context: {
            examples: examples,
        },
    });
};
