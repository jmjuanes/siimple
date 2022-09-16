// const fs = require("fs");
const path = require("path");
const postcss = require("postcss");

const resolveConfig = configOrPath => {
    if (configOrPath) {
        // if (typeof configOrPath === "string" && fs.existsSync(configOrPath)) {
        if (typeof configOrPath === "string") {
            const configPath = path.resolve(process.cwd(), configOrPath);
            return import(configPath).then(config => config.default);
        }
        else if (typeof configOrPath === "object") {
            return Promise.resolve(configOrPath);
        }
    }
    return Promise.resolve({}); // No configuration provided
};

const compileSiimple = config => {
    const allImports = [
        import("@siimple/core"),
        import("@siimple/modules"),
    ];
    return Promise.all(allImports).then(imports => {
        const {css} = imports[0]; // import {css} from "@siimple/core";
        const {injectModules} = imports[1]; // import {injectModules} from "@siimple/modules";
        return css(injectModules(config));
    });
};

module.exports = configOrPath => ({
    postcssPlugin: "siimple",
    plugins: [
        root => {
            console.warn("[siimple/postcss] DEPRECATION NOTICE!");
            console.warn("[siimple/postcss] The 'siimple/postcss.cjs' module is deprecated. Please migrate to '@siimple/postcss' for full ESM integration.");
            console.warn("[siimple/postcss] Read more at https://www.siimple.xyz/packages/postcss");
            return resolveConfig(configOrPath)
                .then(config => compileSiimple(config))
                .then(styles => root.append(postcss.parse(styles)));
        },
    ],
});

module.exports.postcss = true;
