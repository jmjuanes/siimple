import {elements} from "./elements.js";
import {helpers} from "./helpers.js";
import {markup} from "./markup.js";
import {reset} from "./reset.js";

const all = {
    ...elements,
    ...helpers,
    markup,
    reset,
};

// Merge CSS styles
const mergeStyles = (source, target) => {
    Object.keys(target).forEach(key => {
        if (typeof source[key] === "object" && typeof target[key] === "object") {
            return mergeStyles(source[key], target[key]);
        }
        source[key] = target[key];
    });
    return source;
};

export const injectModules = config => {
    const styles = {};
    // Check for array --> only include specified modules
    if (config.modules && Array.isArray(config.modules)) {
        config.modules.forEach(key => {
            all[key] && mergeStyles(styles, all[key]);
        });
    }
    // Check for object or undefined --> exclude modules
    else if (typeof config.modules === "undefined" || config.modules) {
        const excludeModules = new Set();
        Object.keys(config.modules || {}).forEach(key => {
            if (typeof config.modules[key] === "boolean" && !config.modules[key]) {
                excludeModules.add(key);
            }
        });
        Object.keys(all).forEach(key => {
            !excludeModules.has(key) && mergeStyles(styles, all[key]);
        });
    }
    return Object.assign(config, {
        styles: mergeStyles(styles, config.styles || {}),
    });
};
