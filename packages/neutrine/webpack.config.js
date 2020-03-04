let path = require("path");
let MiniCssExtract = require("mini-css-extract-plugin");

//Export the webpack configuration
module.exports = {
    "entry": path.join(process.cwd(), "index.js"),
    "mode": "development",
    "output": {
        "library": "Neutrine",
        "libraryTarget": "umd",
        "path": path.join(process.cwd(), "dist"),
        "filename": "neutrine.js"
    },
    "externals": {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    "resolve": {
        "modules": [
            path.resolve(process.cwd(), "../../node_modules/")
        ],
    },
    "module": {
        "rules": Object.values({
            "scssParser": {
                "test": /\.scss$/,
                "use": [
                    MiniCssExtract.loader,
                    {loader: "css-loader"},
                    {
                        "loader": "sass-loader",
                        "options": {
                            "implementation": require("sass"),
                            "sassOptions": {
                                "includePaths": [
                                    path.resolve(process.cwd(), "../../node_modules/")
                                ]
                            }
                        }
                    }
                ]
            },
            "cssParser": {
                "test": /\.css$/,
                "use": Object.values({
                    "cssExtract": MiniCssExtract.loader,
                    "cssLoader": {
                        "loader": "css-loader"
                    }
                })
            },
            "imageParser": {
                "test": /\.(png|jpg|gif|svg)$/,
                "use": [
                    {
                        "loader": "file-loader",
                        "options": {
                            "name": "[hash].[ext]",
                            "outputPath": "images/"
                        }
                    }
                ]
            },
            "fontParser": {
                "test": /\.(ttf|woff|woff2)$/,
                "use": Object.values({
                    "fileLoader": {
                        "loader": "file-loader",
                        "options": {
                            "name": "[hash].[ext]",
                            "outputPath": "fonts/"
                        }
                    }
                })
            }
        })
    },
    "plugins": [
        new MiniCssExtract({
            "filename": "neutrine.css"
        })
    ]
};

