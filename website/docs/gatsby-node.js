const fs = require("fs");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const package = require("../../package.json");

const pkgs = path.resolve(__dirname, "../../packages");
const presets = fs.readdirSync(pkgs, "utf8")
    .filter(name => name.startsWith("preset-"))
    .map(name => {
        const pkgPath = path.join(pkgs, name, "package.json");
        const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
        return {
            id: name.replace("preset-", ""),
            name: pkg.name,
            version: pkg.version,
            description: pkg.description,
            fonts: pkg.presetFonts || [],
        };
    });



exports.onCreateWebpackConfig = ({plugins, actions}) => {
    return actions.setWebpackConfig({
        devtool: false,
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
                    "assets/docs.css",
                ],
            }),
        ],
    });
};

// Create presets pages
exports.createPages = async ({actions}) => {
    const {createPage} = actions;

    // Build presets pages
    for (let i = 0; i < presets.length; i++) {
        const preset = presets[i];
        const themePath = path.join(pkgs, `preset-${preset.id}`, "index.js");
        const {default: theme} = await import(themePath);
        createPage({
            path: `/presets/${preset.id}`,
            component: path.join(__dirname, "templates", "presets.js"),
            context: {
                theme: theme,
                fonts: [],
                ...preset,
            },
        });
    }
};
