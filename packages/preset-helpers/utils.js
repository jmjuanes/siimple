// Helpers generator
export const generateHelpers = helpers => {
    return Object.fromEntries([helpers].flat().map(item => {
        const styles = {};
        // Themeable helpers
        if (item.scale) {
            const themeStyles = {
                [`@theme ${item.scale}`]: {
                    "&": Object.fromEntries(item.properties.map(name => {
                        return [name, "value"];
                    })),
                },
            };
            // Generate states
            item.states.forEach(state => {
                if (state === "default") {
                    styles["&-{{name}}"] = themeStyles;
                }
                else if (state === "focus" || state === "hover") {
                    styles[`&-{{name}}-${state}:${state}`] = themeStyles;
                }
            });
            // Responsive
            if (!!item.responsive) {
                styles["&-{{name}}-{{breakpoint}}"] = {
                    "@breakpoints": themeStyles,
                };
            }
            // return [`.has-${item.shortcut}{{name}}`, helperStyles];
        }
        // Additional helpers
        if (item.values) {
            Object.keys(item.values).map(name => {
                const valueStyles = Object.fromEntries(item.properties.map(property => {
                    return [property, item.values[name]];
                }));
                // Generate states
                item.states.forEach(state => {
                    if (state === "default") {
                        styles[`&-${name}`] = valueStyles;
                    }
                    else if (state === "hover" || state === "focus") {
                        styles[`&-${name}-${state}:${state}`] = valueStyles;
                    }
                });
                // Responsive styles
                if (!!item.responsive) {
                    styles[`&-${name}-{{breakpoint}}`] = {
                        "@breakpoints": {
                            "&": valueStyles,
                        },
                    };
                }
            });
            // return [`.has-${item.shortcut}`, helperStyles];
        }
        // Generate helper block
        return [`.${[item.prefix, item.shortcut].filter(n => !!n).join("-")}`, styles];
    }));
};
