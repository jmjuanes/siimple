import {css} from "@siimple/core";
import colors from "@siimple/colors";
import reboot from "@siimple/preset-reboot";
import elements from "@siimple/preset-elements";
import markup from "@siimple/preset-markup";
import helpers from "@siimple/preset-helpers";
import * as helpersUtils from "@siimple/preset-helpers/utils.js";
import icons from "@siimple/preset-icons";
import theme from "@siimple/preset-theme";

const AsyncFunction = Object.getPrototypeOf(async () => {}).constructor;

// Available modules from siimple
const modules = {
    "colors": colors,
    "preset-reboot": reboot,
    "preset-markup": markup,
    "preset-elements": elements,
    "preset-helpers": helpers,
    "preset-helpers/utils": helpersUtils,
    "preset-icons": icons,
    "preset-theme": theme,
};

let prevConfig = null;
let prevCss = null;

// Evaluate configuration
const evaluateConfig = configStr => {
    return Promise.resolve().then(() => {
        const configCode = configStr
            .replace(/import\s*(.*?)\s*from\s*(['"])@siimple\/(.*?)(\.js)?\2(;)?/g, `const $1 = __require("$3");`)
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
        .then(config => css(config))
        .then(result => {
            prevConfig = event.data.config;
            prevCss = result;
            return self.postMessage({
                id: event.data.id,
                css: result,
            });
        })
        .catch(error => {
            return self.postMessage({
                id: event.data.id,
                error: error,
            });
        });
});
