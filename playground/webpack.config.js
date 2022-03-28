const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const package = require("../package.json");

// Generate the default configuration
module.exports = {
    mode: "production",
    target: "web",
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.join(__dirname, "public"),
        publicPath: "/",
        filename: "[contenthash:9].js",
    },
    resolve: {
        modules: [
            path.resolve(__dirname, "./node_modules"),
        ],
        alias: {
            "siimple-colors": path.resolve(__dirname, "../colors.js"),
            "siimple": path.resolve(__dirname, "../lib.js"),
        },
    },
    module: {
        rules: [
            {
                // Parse JSX using babel
                // BUT: ignore all .js files in node_modules and bower_components folders
                test: /\.(js|jsx)$/,
                include: [
                    path.join(__dirname, "src"),
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
                    ],
                },
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.VERSION": JSON.stringify(package.version),
        }),
        new CopyPlugin({
            patterns: [
                path.resolve(__dirname, "../siimple.min.css"),
                path.resolve(__dirname, "../siimple-icons.ttf"),
                path.resolve(__dirname, "../siimple-icons.woff"),
                "node_modules/codecake/codecake.css",
                "playground.html",
            ],
        }),
        new HtmlWebpackPlugin({
            title: "Siimple Playground",
            template: path.join(__dirname, "index.html"),
            meta: {
                "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
            },
        }),
    ],
};
