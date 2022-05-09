// Valid media-query features
const mediaQueriesFeatures = {
    min: "min-width",
    max: "max-width",
};

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
    variants: mergeObject(source.variants || {}, target.variants || {}),
    root: target.root || source.root || {},
    styles: mergeStyles(source.styles || {}, target.styles || {}),
});

// Parse CSS property name
const parseProperty = prop => {
    return (aliases[prop] || [prop]).map(item => {
        return item.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
    })
};

// Wrap CSS Rule
const wrapRule = (ruleName, ruleContent, separator) => {
    return `${ruleName} {${separator || ""}${ruleContent}${separator || ""}}`;
};

// Generate media query rule
const buildMediaQuery = values => {
    const conditions = Object.keys(values).map(key => {
        if (values[key] === null || typeof mediaQueriesFeatures[key] === "undefined") {
            return null; // Not valid condition
        }
        // Return this condition
        return `(${mediaQueriesFeatures[key]}: ${values[key]})`;
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
        values[0] = config[key]?.[values[0]] || values[0];
    }
    return values.join(" ");
};

// Build mixin styles
export const buildMixin = (styles, theme, prev) => {
    prev = prev || new Set();
    if (typeof styles.apply === "string" && styles.apply) {
        // Check for circular mixins found
        if (prev.has(styles.apply)) {
            const items = Array.from(prev);
            throw new Error(`Circular mixins found: ${items.join("->")}->${styles.apply}`);
        }
        // Apply styles from this mixin
        prev.add(styles.apply);
        return {
            ...excludeInObject(styles, "apply"),
            ...buildMixin(getInObject(theme, styles.apply) || {}, theme, prev),
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
    if (typeof styles.apply === "string" && styles.apply) {
        return buildRule(parent, buildMixin(styles, config), config, vars);
    }
    const css = [""];
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
                    return css.push(wrapRule(mediaQuery, newContent.join("\n"), "\n"));
                });
            }
            // Check for theme rule
            else if (/^@theme (\w*)$/.test(key.trim())) {
                const scale = key.trim().match(/^@theme (\w*)$/)[1];
                return Object.keys(config[scale] || {}).forEach(name => {
                    const newContent = buildRule(parent, value, config, {
                        ...(vars || {}),
                        name: name,
                        value: config[scale][name],
                    });
                    return css.push(newContent.join("\n"));
                });
            }
            // Check for media rule --> wrap content inside the media rule
            else if (/^@/.test(key)) {
                const newContent = buildRule(parent, value, config, vars || {});
                if (newContent.length === 0) {
                    return; // Skip this rule
                }
                // Wrap the media rule
                return css.push(wrapRule(key, newContent.join("\n"), "\n"));
            }
            // Add nested styles
            return css.push(buildRule(parent.map(p => key.replace(/&/g, p)), value, config, vars));
        }
        // Other value --> append to the current css
        parseProperty(key).forEach(prop => {
            css[0] = css[0] + `${prop}:${buildValue(key, value, config, vars)};`;
        });
    });
    // Wrap the main rule
    if (css[0] !== "") {
        css[0] = wrapRule(format(parent.join(","), vars), css[0], "");
    }
    // Filter items to remove empty
    return css.flat(2).filter(value => {
        return typeof value === "string" && value !== "";
    });
};

// Build css styles
export const buildStyles = (styles, config) => {
    const css = Object.keys(styles || {}).map(key => {
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
    return css.flat().join("\n");
};
