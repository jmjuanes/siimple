// Css properties to scales mapping
const scales = {
    backgroundColor: "colors",
    borderColor: "colors",
    borderBottomColor: "colors",
    borderLeftColor: "colors",
    borderRightColor: "colors",
    borderTopColor: "colors",
    borderRadius: "radius",
    borderBottomLeftRadius: "radius",
    borderBottomRightRadius: "radius",
    borderTopLeftRadius: "radius",
    borderTopRightRadius: "radius",
    borderWidth: "sizes",
    borderBottomWidth: "sizes",
    borderLeftWidth: "sizes",
    borderRightWidth: "sizes",
    borderTopWidth: "sizes",
    bottom: "spacing",
    boxShadow: "shadows",
    color: "colors",
    fill: "colors",
    fontFamily: "fonts",
    fontSize: "fontSizes",
    fontWeight: "fontWeights",
    height: "sizes",
    left: "spacing",
    lineHeight: "lineHeights",
    margin: "spacing",
    marginBottom: "spacing",
    marginLeft: "spacing",
    marginRight: "spacing",
    marginTop: "spacing",
    maxHeight: "sizes",
    maxWidth: "sizes",
    minHeight: "sizes",
    minWidth: "sizes",
    opacity: "opacities",
    padding: "spacing",
    paddingBottom: "spacing",
    paddingLeft: "spacing",
    paddingRight: "spacing",
    paddingTop: "spacing",
    right: "spacing",
    textShadow: "shadows",
    top: "spacing",
    width: "sizes",
};

// CSS aliases
const aliases = {
    bc: ["border-color"],
    bg: ["background-color"],
    m: ["margin"],
    mb: ["margin-bottom"],
    ml: ["margin-left"],
    mr: ["margin-right"],
    mt: ["margin-top"],
    mx: ["margin-left", "margin-right"],
    my: ["margin-top", "margin-bottom"],
    p: ["padding"],
    pb: ["padding-bottom"],
    pl: ["padding-left"],
    pr: ["padding-right"],
    pt: ["padding-top"],
    px: ["padding-left", "padding-right"],
    py: ["padding-top", "padding-bottom"],
    radius: ["border-radius"],
    size: ["width", "height"],
};

// Map for css variables names
const cssVariablesNames = {
    colors: "color",
    fonts: "font",
};

// Merge two object
const mergeObject = (source, target) => ({...source, ...target});

// Get value in object from path
const getInObject = (obj, path) => {
    return path.split(".").reduce((o, p) => o?.[p], obj);
};

// Exclude a field from the specified object
const excludeInObject = (obj, field) => {
    return Object.fromEntries(Object.entries(obj).filter(e => e[0] !== field));
};

// Tiny reducer alias
const toObject = (list, fn) => list.reduce(fn, {});

// Replace variables in the provided string
const format = (str, vars) => {
    return str.replace(/\{\{\s*([^{}\s]+)\s*\}\}/g, (match, key) => {
        return typeof vars[key] !== "undefined" ? vars[key].toString() : match;
    });
};

// Merge configurations
export const mergeConfig = (source, target) => ({
    ...source,
    ...target,
    prefix: target.prefix || source.prefix || "",
    breakpoints: target.breakpoints || source.breakpoints || {},
    root: mergeObject(source.root || {}, target.root || {}),
    styles: mergeStyles(source.styles || {}, target.styles || {}),
});

// Parse CSS property name
const parseProperty = prop => {
    return (aliases[prop] || [prop]).map(item => {
        return item.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
    })
};

// Generate CSS variable name
const getCssVariable = (scale, key) => {
    return `--siimple-${cssVariablesNames[scale]}-${parseProperty(key)}`;
};

// Build CSS variables from scales
const buildCssVariables = (name, scale, prefix) => {
    prefix = prefix || [];
    const variables = Object.keys(scale).map(key => {
        if (scale[key] && typeof scale[key] === "object") {
            return buildCssVariables(name, scale[key], [...prefix, key]);
        }
        return `${["--siimple", name, ...prefix, key].join("-")}:${scale[key]};`;
    });
    return variables.flat();
};

// Wrap CSS Rule
const wrapRule = (ruleName, ruleContent, separator) => {
    return `${ruleName} {${separator || ""}${ruleContent}${separator || ""}}`;
};

// Generate media query rule
const buildMediaQuery = values => {
    const conditions = Object.keys(values).map(key => {
        if (values[key] === null || (key !== "min" && key !== "max")) {
            return null; // Not valid condition
        }
        // Return this condition
        return `(${key}-width: ${values[key]})`;
    });
    // Return the media rule
    return `@media screen and ${conditions.filter(item => !!item).join(" and ")}`;
};

// Merge CSS styles
export const mergeStyles = (source, target) => {
    Object.keys(target).forEach(key => {
        // Check for @font-face attribute
        if (key === "@font-face") {
            if (typeof source["@font-face"] !== "undefined") {
                source[key] = [source[key]].flat(1).concat(target[key]).flat(1);
                return;
            }
        }
        // Check for object property --> deep merge
        else if (typeof source[key] === "object" && typeof target[key] === "object") {
            return mergeStyles(source[key], target[key]);
        }
        // Other value --> override source property
        source[key] = target[key];
    });
    return source;
};

// Build css value
export const buildValue = (property, value, config, vars) => {
    const values = [value].flat(1);
    if (values[0] === "value" && typeof vars["value"] !== "undefined") {
        values[0] = vars["value"]; // Replace value for vars
    }
    if (scales[property] && typeof values[0] === "string") {
        const key = scales[property];
        if (config[key]?.[values[0]]) {
            // only colors and fonts are allowed to generate css variables
            if (config.useCssVariables && cssVariablesNames[key]) {
                values[0] = `var(${getCssVariable(key, values[0])})`;
            }
            else {
                values[0] = config[key][values[0]];
            }
        }
    }
    return values.join(" ");
};

// Build mixin styles
export const buildMixin = (styles, theme, prev) => {
    prev = prev || new Set();
    if (styles.apply && (typeof styles.apply === "string" || Array.isArray(styles.apply))) {
        const mixinsList = [styles.apply].flat().filter(n => n && typeof n === "string");
        return {
            ...excludeInObject(styles, "apply"),
            ...toObject(mixinsList, (newStyles, mixinName) => {
                // Check for circular mixins found
                if (prev.has(mixinName)) {
                    const items = Array.from(prev);
                    throw new Error(`Circular mixins found: ${items.join("->")}->${mixinName}`);
                }
                // Apply styles from this mixin
                prev.add(mixinName);
                let appliedStyles = getInObject(theme, mixinName) || {};
                if (appliedStyles.default && typeof appliedStyles.default === "object") {
                    appliedStyles = appliedStyles.default;
                }
                return {
                    ...newStyles,
                    ...buildMixin(appliedStyles, theme, prev),
                };
            }),
        };
    }
    // No mixin to apply --> return styles
    return styles;
};

// Build css rule
export const buildRule = (parent, styles, config, vars) => {
    if (styles && Array.isArray(styles)) {
        return styles.map(item => buildRule(parent, item, config, vars)).flat();
    }
    // Check for mixins to apply to this styles
    if (styles.apply) {
        return buildRule(parent, buildMixin(styles, config), config, vars);
    }
    const result = [""];
    Object.keys(styles).forEach(key => {
        // key = key.trim(); //Trim current key
        const value = styles[key];
        if (value === null) {
            return; // Ignore this property
        }
        //Check for object value --> build wrapped style
        else if (typeof value === "object" && Array.isArray(value) === false) {
            // Check for breakpoints rule
            if (key === "@breakpoints") {
                return Object.keys(config.breakpoints || {}).forEach(breakpointName => {
                    const mediaQuery = buildMediaQuery(config.breakpoints[breakpointName]);
                    const newContent = buildRule(parent, value, config, {
                        ...(vars || {}),
                        breakpoint: breakpointName,
                    });
                    if (newContent.length === 0) {
                        return; // Skip this rule
                    }
                    // Wrap the media rule
                    return result.push(wrapRule(mediaQuery, newContent.join("\n"), "\n"));
                });
            }
            // Check for theme rule
            else if (/^@theme (\w+)/.test(key.trim())) {
                const match = key.trim().match(/^@theme (\w+)(?:!\{([^\}]+)\})?$/);
                const scale = match[1]; // scale name
                const exclude = new Set((match[2] || "").split(",")); // excluded scale fields
                return Object.keys(config[scale] || {}).forEach(name => {
                    if (!exclude.has(name)) {
                        const newContent = buildRule(parent, value, config, {
                            ...(vars || {}),
                            name: name,
                            value: config[scale][name],
                        });
                        return result.push(newContent.join("\n"));
                    }
                });
            }
            // Check for media rule --> wrap content inside the media rule
            else if (/^@/.test(key)) {
                const newContent = buildRule(parent, value, config, vars || {});
                if (newContent.length === 0) {
                    return; // Skip this rule
                }
                // Wrap the media rule
                return result.push(wrapRule(key, newContent.join("\n"), "\n"));
            }
            // Add nested styles
            return result.push(buildRule(parent.map(p => key.replace(/&/g, p)), value, config, vars));
        }
        // Other value --> append to the current css
        parseProperty(key).forEach(prop => {
            result[0] = result[0] + `${prop}:${buildValue(key, value, config, vars)};`;
        });
    });
    // Wrap the main rule
    if (result[0] !== "") {
        result[0] = wrapRule(format(parent.join(","), vars), result[0], "");
    }
    // Filter items to remove empty
    return result.flat(2).filter(value => {
        return typeof value === "string" && value !== "";
    });
};

// Build css styles
export const buildStyles = (styles, config) => {
    const result = Object.keys(styles || {}).map(key => {
        const value = styles[key];
        // Check for at rule (media or keyframes)
        if (/^@(media|keyframes)/.test(key.trim())) {
            return wrapRule(key, buildStyles(value, config), "\n");
        }
        // Other value --> parse as regular classname
        return buildRule([key], value, config, {
            prefix: config.prefix || "",
        });
    });
    return result.flat().join("\n");
};

// Build CSS variables from scales
export const buildVariables = config => {
    const result = Object.keys(cssVariablesNames).map(scale => {
        if (config[scale]) {
            const variables = buildCssVariables(cssVariablesNames[scale], config[scale]);
            return wrapRule(":root", variables.join(""), "");
        }
        return "";
    });
    return result.filter(item => !!item).join("\n");
};

// Build color modes
export const buildColorModes = config => {
    const result = Object.keys(config.colorModes || {}).map(name => {
        const variables = buildCssVariables(cssVariablesNames["colors"], config.colorModes[name]);
        // Use the prefers-color-scheme media query instead
        if (config.useColorModesMediaQuery && (name === "light" || name === "dark")) {
            const rootVariables = wrapRule(":root", variables.join(""), "");
            return wrapRule(`@media (prefers-color-scheme: ${name})`, rootVariables);
        }
        // Default selector
        return wrapRule(`html[data-color-mode="${name}"]`, variables.join(""), "");
    });
    return result.filter(item => !!item).join("\n");
};

// Generate CSS styles from a configuration object
export const css = config => {
    const styles = {};
    const result = [];
    // Add borderbox styles
    if (typeof config.useBorderBox === "undefined" || !!config.useBorderBox) {
        styles["html"] = {
            boxSizing: "border-box",
        };
        styles["*,*:before,*:after"] = {
            boxSizing: "inherit",
        };
    }
    // Add root styles
    if (typeof config.useRootStyles === "undefined" || !!config.useRootStyles) {
        styles["html"] = {
            ...(styles["html"] || {}),
            background: "background",
            color: "text",
            ...(config.root || {}),
        };
    }
    // Build css variables
    if (config.useCssVariables || config.useColorModes) {
        result.push(buildVariables(config));
    }
    // Build color modes
    if (config.useColorModes) {
        result.push(buildColorModes(config));
    }
    // Add custom styles
    if (config.styles) {
        mergeStyles(styles, config.styles);
    }
    result.push(buildStyles(styles, config));
    return result.join("\n");
};
