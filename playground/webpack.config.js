const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const package = require("../package.json");

const PLAYGROUND_ONLY = process.env?.PLAYGROUND_ONLY === "true";
const publicPath = !PLAYGROUND_ONLY ? "/playground/" : "/";

module.exports = {
    mode: "production",
    target: "web",
    entry: path.join(__dirname, "App.jsx"),
    output: {
        path: path.join(__dirname, "public"),
        publicPath: publicPath,
        filename: "[contenthash:9].js",
    },
    // resolve: {
    //     alias: {
    //         "@siimple/colors": path.resolve(__dirname, "../packages/colors/"),
    //         "@siimple/core": path.resolve(__dirname, "../packages/core/"),
    //         "@siimple/modules": path.resolve(__dirname, "../packages/modules/"),
    //         "@siimple/preset-theme": path.resolve(__dirname, "../packages/preset-theme/"),
    //     },
    // },
    module: {
        rules: [
            {
                // Parse JSX using babel
                // BUT: ignore all .js files in node_modules and bower_components folders
                test: /\.(js|jsx)$/,
                include: [
                    __dirname,
                ],
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env", 
                        "@babel/preset-react",
                    ],
                    plugins: [
                        "@babel/plugin-transform-react-jsx",
                        "@babel/plugin-transform-runtime",
                    ],
                },
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.VERSION": JSON.stringify(package.version),
            "process.env.HOMEPAGE_URL": JSON.stringify(package.homepage),
            // "process.end.SIIMPLE_VERSION": JSON.stringify(siimpleVersion),
            "process.env.PUBLIC_PATH": JSON.stringify(publicPath),
        }),
        new CopyPlugin({
            patterns: [
                path.resolve(__dirname, "../siimple/siimple.css"),
                path.resolve(__dirname, "../siimple-icons/siimple-icons.css"),
                path.resolve(__dirname, "../node_modules/codecake/codecake.css"),
                "playground.html",
            ],
        }),
        new HtmlWebpackPlugin({
            title: "Siimple Playground",
            template: path.join(__dirname, "index.html"),
            meta: {
                viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
            },
        }),
    ],
};
