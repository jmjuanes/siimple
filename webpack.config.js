const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const globalEnv = require("./env.js");
const applications = require("./config/applications.json");

// Generate the default configuration
module.exports = env => {
    const app = env.target || "";
    return {
        // mode: env.production ? "production" : "development",
        mode: "production",
        target: "web",
        entry: path.join(__dirname, "src", `${app}.js`),
        output: {
            path: path.join(__dirname, "public"),
            publicPath: "/",
            filename: "static/[contenthash:9].js",
        },
        // optimization: {
        //     splitChunks: {
        //         chunks: "all",
        //         cacheGroups: {
        //             vendor: {
        //                 test: /[\\/]node_modules[\\/]/,
        //                 name: () => "vendor",
        //             },
        //         },
        //     },
        // },
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
            new HtmlWebpackPlugin({
                title: applications[app].title,
                template: path.join(__dirname, "src", "template.html"),
                meta: {
                    "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
                },
            }),
        ],
    };
};
