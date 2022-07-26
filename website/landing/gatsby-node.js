const fs = require("fs");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const package = require("../../package.json");

const pkgs = path.resolve(__dirname, "../../packages");
const presets = fs.readdirSync(pkgs, "utf8")
    .filter(name => name.startsWith("preset-"))
    .map(name => {
        const pkgPath = path.join(pkgs, name, "package.json");
        const coverPath = path.join(pkgs, name, `${name}.svg`);
        const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
        return {
            id: name.replace("preset-", ""),
            name: pkg.name,
            version: pkg.version,
            description: pkg.description,
            hasCoverImage: fs.existsSync(coverPath),
            ...(pkg.presetDemo || {}),
        };
    });

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
                    ...presets.filter(p => p.hasCoverImage).map(p => {
                        return path.join(pkgs, `preset-${p.id}`, `preset-${p.id}.svg`);
                    }),
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

    // Build presets page
    createPage({
        path: "/presets",
        component: path.join(__dirname, "templates", "presets.js"),
        context: {
            presets: presets,
        },
    });

    // Build presets pages
    for (let i = 0; i < presets.length; i++) {
        const preset = presets[i];
        const themePath = path.join(pkgs, `preset-${preset.id}`, "index.js");
        const {default: theme} = await import(themePath);
        createPage({
            path: `/presets/${preset.id}`,
            component: path.join(__dirname, "layouts", "presets.js"),
            context: {
                theme: theme,
                fonts: [],
                ...preset,
            },
        });
    }
};
