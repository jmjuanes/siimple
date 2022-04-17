import {build, mergeConfig} from "siimple";
import defaultConfig from "siimple/defaultConfig.js";
import colors from "siimple/colors.js";
import reboot from "@siimple/preset-reboot";
import markup from "@siimple/preset-markup";
import utilities from "@siimple/preset-utilities";
import icons from "@siimple/preset-icons";

const AsyncFunction = Object.getPrototypeOf(async () => {}).constructor;
const modules = {
    colors,
    reboot,
    markup,
    utilities,
    icons,
};

let prevConfig = null;
let prevCss = null;

// Evaluate configuration
const evaluateConfig = configStr => {
    return Promise.resolve().then(() => {
        const configCode = configStr
            .replace(/import\s*(.*?)\s*from\s*(['"])siimple\/colors(\.js)?\2/g, `const $1 = __require("colors");`)
            .replace(/import\s*(.*?)\s*from\s*(['"])@siimple\/preset-(\w)(\.js)?\2/g, `const $1 = __require("$3");`)
            .replace(/export default /, "return ");
        
        // Custom require function
        const __require = name => modules[name];
        const fn = new AsyncFunction("__require", configCode);
        return fn(__require);
    });
};

// Register worker message listener
self.addEventListener("message", event => {
    if (!event.data?.id || !event.data?.config) {
        return null;
    }
    if (event.data.config === prevConfig) {
        return self.postMessage({
            id: event.data.id,
            css: prevCss,
        });
    }
    evaluateConfig(event.data.config)
        .then(config => {
            return build(mergeConfig({...defaultConfig}, config));
        })
        .then(css => {
            prevConfig = event.data.config;
            prevCss = css;
            return self.postMessage({
                id: event.data.id,
                css: css,
            });
        })
        .catch(error => {
            return self.postMessage({
                id: event.data.id,
                error: error,
            });
        });
});
