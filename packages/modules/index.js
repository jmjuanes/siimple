import {elements} from "./elements.js";
import {helpers} from "./helpers.js";
import {markup} from "./markup.js";
import {reset} from "./reset.js";

const elementsList = Object.keys(elements);
const helpersList = Object.keys(helpers);

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

// Generate values
const buildValue = (v, isImportant) => {
    let value = [v].flat(1);
    if (isImportant && value[value.length - 1] !== "!important") {
        value.push("!important");
    }
    return value;
};

// Get the list of enabled modules
const getEnabledModules = config => {
    const list = new Set();
    if (config.modules && Array.isArray(config.modules)) {
        if (config.modules.includes("elements")) {
            elementsList.forEach(name => list.add(name));
        }
        if (config.modules.includes("helpers")) {
            helpersList.forEach(name => list.add(name));
        }
        // Add other modules
        config.modules.forEach(name => list.add(name));
    }
    else if (typeof config.modules === "undefined" || config.modules) {
        const modulesList = config.modules || {};
        if (typeof modulesList["elements"] === "undefined") {
            elementsList.forEach(n => list.add(n));
        }
        if (typeof modulesList["helpers"] === "undefined") {
            helpersList.forEach(n => list.add(n));
        }
        // Enable by default markup and reset modules
        ["markup", "reset"].forEach(name => list.add(name));
        Object.keys(modulesList).forEach(key => list.delete(key));
    }
    return list;
};

export const injectElements = (config, modulesList) => {
    modulesList = modulesList || getEnabledModules(config);
    return elementsList.reduce((prevStyles, key) => {
        if (modulesList.has(key)) {
            const el = elements[key];
            // const selector = `.{{ prefix }}${el.displayName?.toLowerCase() || key}`;
            const selector = `.{{ prefix }}${key}`;
            prevStyles[selector] = {...el.styles};
            // Check for additional variants modifiers
            if (typeof el.variants === "string" && el.variants) {
                const variants = {
                    ...(el.defaultVariants || {}),
                };
                if (config[el.variants] && typeof config[el.variants] === "object") {
                    const excludedVariants = new Set(el.excludeVariants || []);
                    Object.keys(config[el.variants]).forEach(variantKey => {
                        if (!excludedVariants.has(variantKey)) {
                            variants[variantKey] = config[el.variants][variantKey];
                        }
                    });
                }
                // Generate variants modifiers
                Object.keys(variants).forEach(name => {
                    prevStyles[selector][`&.is-${name}`] = variants[name];
                });
            }
        }
        return prevStyles;
    }, {});
};

export const injectHelpers = (config, modulesList) => {
    modulesList = modulesList || getEnabledModules(config);
    return helpersList.reduce((prevStyles, key) => {
        if (modulesList.has(key)) {
            mergeStyles(prevStyles, createHelper(helpers[key], config));
        }
        return prevStyles;
    }, {});
};

export const injectModules = config => {
    const modulesList = getEnabledModules(config);
    const styles = {
        ...(modulesList.has("reset") ? reset : {}),
        ...(modulesList.has("markup") ? markup : {}),
        ...injectElements(config, modulesList),
        ...injectHelpers(config, modulesList),
    };
    return Object.assign(config, {
        styles: mergeStyles(styles, config.styles || {}),
    });
};

// Helpers generator
export const createHelper = (item, config) => {
    if (typeof item.styles === "object" && item.styles) {
        return {...item.styles};
    }
    const styles = {};
    const isImportant = !!item.important;
    const prefix = [item.prefix, item.shortcut].filter(n => !!n).join("-");
    const values = {...item.values};
    
    // Add scale values
    if (item.scale && config && config[item.scale]) {
        const excludeFromScale = new Set(item.excludeFromScale);
        Object.keys(config[item.scale]).forEach(key => {
            if (!excludeFromScale.has(key)) {
                values[key] = config[item.scale][key];
            }
        });
    }

    Object.keys(values).forEach(name => {
        const valueStyles = Object.fromEntries(item.properties.map(property => {
            return [property, buildValue(values[name], isImportant)];
        }));
        // Generate states
        (item.states || ["default"]).forEach(state => {
            if (state === "default") {
                styles[`.${prefix}-${name}`] = valueStyles;
            }
            else if (state === "hover" || state === "focus") {
                styles[`.${prefix}-${name}-${state}:${state}`] = valueStyles;
            }
        });
        // Responsive styles
        if (!!item.responsive) {
            styles[`.${prefix}-${name}-{{breakpoint}}`] = {
                "@breakpoints": {
                    "&": valueStyles,
                },
            };
        }
    });
    return styles;
};

