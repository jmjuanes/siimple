// Generate values
const buildValue = (v, isImportant) => {
    let value = [v].flat(1);
    if (isImportant && value[value.length - 1] !== "!important") {
        value.push("!important");
    }
    return value;
};

// Helpers generator
export const createHelper = helpers => {
    return [helpers].flat().reduce((styles, item) => {
        const isImportant = !!item.important;
        const prefix = [item.prefix, item.shortcut].filter(n => !!n).join("-");
        // Themeable helpers
        if (item.scale) {
            let excludedFields = "";
            if (item.exclude && Array.isArray(item.exclude) && item.exclude.length > 0) {
                excludedFields = "!{" + item.exclude.join(",") + "}";
            }
            const themeStyles = {
                [`@theme ${item.scale}${excludedFields}`]: {
                    "&": Object.fromEntries(item.properties.map(name => {
                        return [name, buildValue("value", isImportant)];
                    })),
                },
            };
            // Generate states
            item.states.forEach(state => {
                if (state === "default") {
                    styles[`.${prefix}-{{name}}`] = themeStyles;
                }
                else if (state === "focus" || state === "hover") {
                    styles[`.${prefix}-{{name}}-${state}:${state}`] = themeStyles;
                }
            });
            // Responsive
            if (!!item.responsive) {
                styles[`.${prefix}-{{name}}-{{breakpoint}}`] = {
                    "@breakpoints": themeStyles,
                };
            }
            // return [`.has-${item.shortcut}{{name}}`, helperStyles];
        }
        // Additional helpers
        if (item.values) {
            Object.keys(item.values).map(name => {
                const valueStyles = Object.fromEntries(item.properties.map(property => {
                    return [property, buildValue(item.values[name], isImportant)];
                }));
                // Generate states
                item.states.forEach(state => {
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
            // return [`.has-${item.shortcut}`, helperStyles];
        }
        // Generate helper block
        // return [`.${[item.prefix, item.shortcut].filter(n => !!n).join("-")}`, styles];
        return styles;
    }, {});
};
