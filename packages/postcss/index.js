import path from "node:path";
import postcss from "postcss";
import {css} from "@siimple/core";
import {injectModules} from "@siimple/modules";

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

export default configOrPath => ({
    postcssPlugin: "siimple",
    plugins: [
        root => {
            return resolveConfig(configOrPath)
                .then(config => css(injectModules(config)))
                .then(styles => root.append(postcss.parse(styles)));
        },
    ],
});
