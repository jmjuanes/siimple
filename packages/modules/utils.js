// Helpers generator
export const generateHelpers = helpers => {
    return [helpers].flat().reduce((styles, item) => {
        const prefix = [item.prefix, item.shortcut].filter(n => !!n).join("-");
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
                    return [property, item.values[name]];
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
