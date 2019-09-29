//Import dependencies
let path = require("path");

//Import webpack plugins
let MiniCssExtract = require("mini-css-extract-plugin");
//let HtmlWebpackPlugin = require("html-webpack-plugin");
let modulesPath = path.resolve(process.cwd(), "../../node_modules");

//Export the webpack configuration
module.exports = function (env) {
    //Export webpack configuration
    return {
        "entry": path.join(process.cwd(), "src", "index.js"),
        "mode": "development",
        "target": "web",
        "output": {
            "path": path.join(process.cwd(), "www"),
            "filename": "app.js"
        },
        "resolve": {
            "modules": [modulesPath],
        },
        "module": {
            "rules": Object.values({
                "scssLoader": {
                    "test": /\.scss$/,
                    "use": Object.values({
                        "cssExtractLoader": {
                            "loader": MiniCssExtract.loader,
                            "options": {
                                "publicPath": "./"
                            }
                        },
                        "cssLoader": {
                            "loader": "css-loader"
                        },
                        "sassLoader": {
                            "loader": "sass-loader",
                            "options": {
                                "includePaths": [modulesPath],
                                "implementation": require("sass")
                            }
                        }
                    })
                },
                "cssLoader": {
                    "test": /\.css$/,
                    "use": Object.values({
                        "cssExtractLoader": {
                            "loader": MiniCssExtract.loader,
                            "options": {
                                "publicPath": "./"
                            }
                        },
                        "cssLoader": {
                            "loader": "css-loader"
                        }
                    })
                },
                "imageLoader": {
                    "test": /\.(png|jpg|gif|svg)$/,
                    "use": {
                        "loader": "file-loader",
                        "options": {
                            "name": "[hash].[ext]",
                            "outputPath": "img/"
                        }
                    }
                },
                "fontLoader": {
                    "test": /\.(ttf|woff|woff2)$/,
                    "use": {
                        "loader": "file-loader",
                        "options": {
                            "name": "[hash].[ext]",
                            "outputPath": "fonts/"
                        }
                    }
                },
                "jsxLoader": {
                    "test": /\.js$/,
                    "include": [
                        path.join(process.cwd(), "src")
                    ],
                    "exclude": /(node_modules|bower_components)/,
                    "loader": "babel-loader"
                }
            })
        },
        "plugins": [
            new MiniCssExtract({
                "filename": "app.css"
            })
        ]
    };
};

