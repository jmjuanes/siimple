export {elements} from "./elements.js";
export {helpers} from "./helpers.js";
export {markup} from "./markup.js";
export {reset} from "./reset.js";

const all = {
    ...elements,
    ...helpers,
    markup,
    reset,
};

export const injectModules = config => {
    const styles = {};
    // Check for array --> only include specified modules
    if (config.modules && Array.isArray(config.modules)) {
        config.modules.forEach(key => {
            all[key] && Object.assign(styles, all[key]);
        });
    }
    // Check for object or undefined --> exclude modules
    if (typeof config.modules === "undefined" || config.modules) {
        const excludeModules = new Set();
        Object.keys(config.modules || {}).forEach(key => {
            if (typeof config.modules[key] === "boolean" && !config.modules[key]) {
                excludeModules.add(key);
            }
        });
        Object.keys(all).forEach(key => {
            !excludeModules.has(key) && Object.assign(styles, all[key]);
        });
    }
    return Object.assign(config, {
        styles: {
            ...styles,
            ...(config.styles || {}),
        },
    });
};
