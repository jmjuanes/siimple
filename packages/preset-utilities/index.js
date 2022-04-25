// All properties
const props = {
    // Color utilities
    backgroundColor: {
        scale: "colors",
        shortcut: "bg",
        properties: ["backgroundColor"],
        states: ["default", "hover", "focus"],
    },
    textColor: {
        scale: "colors",
        shortcut: "text",
        properties: ["color"],
        states: ["default", "hover", "focus"],
    },
    // Fonts
    fontFamily: {
        scale: "fonts",
        shortcut: "font",
        properties: ["fontFamily"],
        states: ["default"],
    },
    // Font sizes
    fontSize: {
        scale: "fontSizes",
        shortcut: "text",
        properties: ["fontSize"],
        states: ["default"],
    },
    // Font weights
    fontWeight: {
        scale: "fontWeights",
        shortcut: "weight",
        properties: ["fontWeight"],
        states: ["default"],
    },
    // Line heights
    lineHeight: {
        scale: "lineHeights",
        shortcut: "lh",
        properties: ["lineHeight"],
        states: ["default"],
    },
    // Opacities
    opacities: {
        scale: "opacities",
        shortcut: "o",
        properties: ["opacity"],
        states: ["default"],
    },
    // Radius
    radius: {
        scale: "radius",
        shortcut: "radius",
        properties: ["borderRadius"],
        states: ["default"],
    },
    // Shadows
    shadows: {
        scale: "shadows",
        shortcut: "shadow",
        properties: ["boxShadow"],
        states: ["default"],
    },
    // Sizes
    width: {
        scale: "sizes",
        shortcut: "w",
        properties: ["width"],
        states: ["default", "responsive"],
    },
    minWidth: {
        scale: "sizes",
        shortcut: "minw",
        properties: ["min-width"],
        states: ["default", "responsive"],
    },
    maxWidth: {
        scale: "sizes",
        shortcut: "maxw",
        properties: ["max-width"],
        states: ["default", "responsive"],
    },
    height: {
        scale: "sizes",
        shortcut: "h",
        properties: ["height"],
        states: ["default", "responsive"],
    },
    minHeight: {
        scale: "sizes",
        shortcut: "minh",
        properties: ["min-height"],
        states: ["default", "responsive"],
    },
    maxHeight: {
        scale: "sizes",
        shortcut: "maxh",
        properties: ["max-height"],
        states: ["default", "responsive"],
    },
    size: {
        scale: "sizes",
        shortcut: "s",
        properties: ["width", "height"],
        states: ["default", "responsive"],
    },
    ...["bottom","left","right","top"].reduce((prev, position) => ({
        ...prev,
        [position]: {
            scale: "sizes",
            shortcut: position,
            properties: [position],
            states: ["default", "responsive"],
        },
    }), {}),
    // Spaces
    padding: {
        scale: "spaces",
        shortcut: "p",
        properties: ["padding"],
        states: ["default", "responsive"],
    },
    paddingX: {
        scale: "spaces",
        shortcut: "px",
        properties: ["padding-left", "padding-right"],
        states: ["default", "responsive"],
    },
    paddingY: {
        scale: "spaces",
        shortcut: "py",
        properties: ["padding-top", "padding-bottom"],
        states: ["default", "responsive"],
    },
    paddingTop: {
        scale: "spaces",
        shortcut: "pt",
        properties: ["padding-top"],
        states: ["default", "responsive"],
    },
    paddingBottom: {
        scale: "spaces",
        shortcut: "pb",
        properties: ["padding-bottom"],
        states: ["default", "responsive"],
    },
    paddingLeft: {
        scale: "spaces",
        shortcut: "pl",
        properties: ["padding-left"],
        states: ["default", "responsive"],
    },
    paddingRight: {
        scale: "spaces",
        shortcut: "pr",
        properties: ["padding-right"],
        states: ["default", "responsive"],
    },
    margin: {
        scale: "spaces",
        shortcut: "m",
        properties: ["margin"],
        states: ["default", "responsive"],
    },
    marginX: {
        scale: "spaces",
        shortcut: "mx",
        properties: ["margin-left", "margin-right"],
        states: ["default", "responsive"],
    },
    marginY: {
        scale: "spaces",
        shortcut: "my",
        properties: ["margin-top", "margin-bottom"],
        states: ["default", "responsive"],
    },
    marginTop: {
        scale: "spaces",
        shortcut: "mt",
        properties: ["margin-top"],
        states: ["default", "responsive"],
    },
    marginBottom: {
        scale: "spaces",
        shortcut: "mb",
        properties: ["margin-bottom"],
        states: ["default", "responsive"],
    },
    marginLeft: {
        scale: "spaces",
        shortcut: "ml",
        properties: ["margin-left"],
        states: ["default", "responsive"],
    },
    marginRight: {
        scale: "spaces",
        shortcut: "mr",
        properties: ["margin-right"],
        states: ["default", "responsive"],
    },
};

// Utilities generator
const utilities = (prev, config) => {
    const styles = {
        [`@theme ${config.scale}`]: {
            "&": Object.fromEntries(config.properties.map(name => {
                return [name, "value"];
            })),
        },
    };
    // Generate utilities for this configuration
    config.states.forEach(state => {
        if (state === "default") {
            prev[`.has-${config.shortcut}{{name}}`] = styles;
        }
        else if (state === "focus") {
            prev[`.has-${config.shortcut}{{name}}-focus:focus`] = styles;
        }
        else if (state === "hover") {
            prev[`.has-${config.shortcut}{{name}}-hover:hover`] = styles;
        }
        else if (state === "responsive") {
            prev[`.has-${config.shortcut}{{name}}-{{breakpoint}}`] = {
                "@breakpoints": styles,
            };
        }
    });
    // Return styles
    return prev;
};

export default {
    styles: Object.values(props).reduce(utilities, {}),
};
