import elements from "./elements.js";

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
const parseCssProperty = prop => {
    return (aliases[prop] || [prop]).map(item => {
        return item.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
    })
};

// Generate a selector for the specified element and variant
const getElementSelector = (name, variant, config) => {
    const variantSelector = variant && variant !== "default" ? `.is-${variant}` : "";
    return `.${config.prefix || ""}${name}${variantSelector}`;
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

// Wrap CSS Rule
const wrapCssRule = (ruleName, ruleContent, separator) => {
    return `${ruleName} {${separator || ""}${ruleContent}${separator || ""}}`;
};

// Build css value
export const buildCssValue = (property, value, config) => {
    const values = [value].flat(1);
    if (scales[property] && typeof values[0] === "string") {
        const key = scales[property];
        values[0] = config[key]?.[values[0]] || values[0];
    }
    return values.join(" ");
};

// Build css rule
export const buildCssRule = (parent, styles, config, vars) => {
    if (styles && Array.isArray(styles)) {
        return styles.map(item => buildCssRule(parent, item, config, vars)).flat();
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
                    const newContent = buildCssRule(parent, value, config, {
                        breakpoint: breakpointName,
                    });
                    if (newContent.length === 0) {
                        return; // Skip this rule
                    }
                    // Wrap the media rule
                    return css.push(wrapCssRule(mediaQuery, newContent.join("\n"), "\n"));
                });
            }
            // Check for media rule --> wrap content inside the media rule
            else if (/^@/.test(key)) {
                const newContent = buildCssRule(parent, value, config, vars);
                if (newContent.length === 0) {
                    return; // Skip this rule
                }
                // Wrap the media rule
                return css.push(wrapCssRule(key, newContent.join("\n"), "\n"));
            }
            // Add nested styles
            const newParent = parent.map(p => {
                return key.replace(/&/g, p).replace(/\{\{\s*([^{}\s]+)\s*\}\}/g, (match, key) => {
                    return vars[key] ? vars[key].toString() : match;
                });
            });
            return css.push(buildCssRule(newParent, value, config, vars));
        }
        // Other value --> append to the current css
        parseCssProperty(key).forEach(prop => {
            css[0] = css[0] + `${prop}:${buildCssValue(key, value, config)};`;
        });
    });
    // Wrap the main rule
    if (css[0] !== "") {
        css[0] = wrapCssRule(parent.join(","), css[0], "");
    }
    // Filter items to remove empty
    return css.flat(2).filter(value => {
        return typeof value === "string" && value !== "";
    });
};

// Build css styles
export const buildCss = (styles, config) => {
    const css = Object.keys(styles).map(key => {
        const value = styles[key];
        // Check for at rule (media or keyframes)
        if (/^@(media|keyframes)/.test(key.trim())) {
            return wrapCssRule(key, buildCss(value, config), "\n");
        }
        // Other value --> parse as regular classname
        return buildCssRule([key], value, config, {});
    });
    return css.flat().join("\n");
};

// Build siimple
export const build = config => {
    return new Promise(resolve => {
        const styles = {};
        // const actions = {
        //     getConfig: () => config,
        //     addStyles: newStyles => mergeStyles(styles, newStyles || {}),
        // };
        // Add borderbox styles
        if (config.useBorderBox) {
            mergeStyles(styles, {
                html: {
                    boxSizing: "border-box",
                },
                "*,*:before,*:after": {
                    boxSizing: "inherit",
                }
            });
        }
        // Add root styles
        if (config.useRootStyles) {
            mergeStyles(styles, {
                html: {
                    backgroundColor: "background",
                    color: "text",
                    fontFamily: "body",
                    fontSize: "body",
                    fontWeight: "body",
                    lineHeight: "body",
                    ...(config.root || {}),
                },
            });
        }
        // Add elements
        if (config.useElements) {
            Object.keys(elements).forEach(name => {
                const options = elements[name];
                const elementSelector = getElementSelector(name, null, config);
                styles[elementSelector] = styles[elementSelector] || {};
                mergeStyles(styles[elementSelector], options.styles);
                // Process variants
                const variants = config.variants?.[options.variants] || options.defaultVariants;
                Object.keys(variants || {}).forEach(variant => {
                    const variantSelector = getElementSelector(name, variant, config);
                    styles[variantSelector] = styles[variantSelector] || {};
                    mergeStyles(styles[variantSelector], variants[variant]);
                });
                // Process keyframes
                if (options.keyframes) {
                    Object.keys(options.keyframes).forEach(key => {
                        styles[`@keyframes ${key}`] = options.keyframes[key];
                    });
                }
            });
        }
        // Process plugins
        // (config.plugins || []).forEach(plugin => {
        //     typeof plugin === "function" && plugin(pluginActions);
        // });
        // Merge additional custom styles
        if (config.styles) {
            mergeStyles(styles, config.styles);
        }
        // Build and return css
        return resolve(buildCss(styles, config));
    });
};
