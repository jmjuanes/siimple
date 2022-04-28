const themeHelpers = [
    // Colors
    {
        scale: "colors",
        shortcut: "bg",
        properties: ["backgroundColor"],
        states: ["default", "hover", "focus"],
    },
    {
        scale: "colors",
        shortcut: "text",
        properties: ["color"],
        states: ["default", "hover", "focus"],
    },
    // Fonts
    {
        scale: "fonts",
        shortcut: "font",
        properties: ["fontFamily"],
        states: ["default"],
    },
    // Font sizes
    {
        scale: "fontSizes",
        shortcut: "size",
        properties: ["fontSize"],
        states: ["default"],
    },
    // Font weights
    {
        scale: "fontWeights",
        shortcut: "weight",
        properties: ["fontWeight"],
        states: ["default"],
    },
    // Line heights
    {
        scale: "lineHeights",
        shortcut: "lh",
        properties: ["lineHeight"],
        states: ["default"],
    },
    // Opacities
    {
        scale: "opacities",
        shortcut: "opacity",
        properties: ["opacity"],
        states: ["default"],
    },
    // Radius
    {
        scale: "radius",
        shortcut: "radius",
        properties: ["borderRadius"],
        states: ["default"],
    },
    // Shadows
    {
        scale: "shadows",
        shortcut: "shadow",
        properties: ["boxShadow"],
        states: ["default"],
    },
    // Sizes
    {
        scale: "sizes",
        shortcut: "w",
        properties: ["width"],
        states: ["default", "responsive"],
    },
    {
        scale: "sizes",
        shortcut: "minw",
        properties: ["min-width"],
        states: ["default", "responsive"],
    },
    {
        scale: "sizes",
        shortcut: "maxw",
        properties: ["max-width"],
        states: ["default", "responsive"],
    },
    {
        scale: "sizes",
        shortcut: "h",
        properties: ["height"],
        states: ["default", "responsive"],
    },
    {
        scale: "sizes",
        shortcut: "minh",
        properties: ["min-height"],
        states: ["default", "responsive"],
    },
    {
        scale: "sizes",
        shortcut: "maxh",
        properties: ["max-height"],
        states: ["default", "responsive"],
    },
    ...["bottom","left","right","top"].map(position => ({
        scale: "sizes",
        shortcut: position,
        properties: [position],
        states: ["default", "responsive"],
    })),
    // spacing
    {
        scale: "spacing",
        shortcut: "p",
        properties: ["padding"],
        states: ["default", "responsive"],
    },
    {
        scale: "spacing",
        shortcut: "px",
        properties: ["padding-left", "padding-right"],
        states: ["default", "responsive"],
    },
    {
        scale: "spacing",
        shortcut: "py",
        properties: ["padding-top", "padding-bottom"],
        states: ["default", "responsive"],
    },
    {
        scale: "spacing",
        shortcut: "pt",
        properties: ["padding-top"],
        states: ["default", "responsive"],
    },
    {
        scale: "spacing",
        shortcut: "pb",
        properties: ["padding-bottom"],
        states: ["default", "responsive"],
    },
    {
        scale: "spacing",
        shortcut: "pl",
        properties: ["padding-left"],
        states: ["default", "responsive"],
    },
    {
        scale: "spacing",
        shortcut: "pr",
        properties: ["padding-right"],
        states: ["default", "responsive"],
    },
    {
        scale: "spacing",
        shortcut: "m",
        properties: ["margin"],
        states: ["default", "responsive"],
    },
    {
        scale: "spacing",
        shortcut: "mx",
        properties: ["margin-left", "margin-right"],
        states: ["default", "responsive"],
    },
    {
        scale: "spacing",
        shortcut: "my",
        properties: ["margin-top", "margin-bottom"],
        states: ["default", "responsive"],
    },
    {
        scale: "spacing",
        shortcut: "mt",
        properties: ["margin-top"],
        states: ["default", "responsive"],
    },
    {
        scale: "spacing",
        shortcut: "mb",
        properties: ["margin-bottom"],
        states: ["default", "responsive"],
    },
    {
        scale: "spacing",
        shortcut: "ml",
        properties: ["margin-left"],
        states: ["default", "responsive"],
    },
    {
        scale: "spacing",
        shortcut: "mr",
        properties: ["margin-right"],
        states: ["default", "responsive"],
    },
];

// Additional helpers
const extraHelpers = [
    // Flexbox
    {
        shortcut: "flex",
        states: ["default"],
        responsive: true,
        properties: ["flex"],
        values: {
            "none": "none",
            "initial": "initial",
            "auto": "auto",
        },
    },
    {
        shortcut: "direction",
        states: ["default"],
        responsive: true,
        properties: ["flex-direction"],
        values: {
            "row": "row", 
            "column": "column", 
            "row-rev": "row-reverse", 
            "column-rev": "column-reverse",
        },
    },
    {
        shortcut: "flex",
        states: ["default"],
        responsive: true,
        properties: ["flex-grow"],
        values: {
            "grow": "1",
            "no-grow": "0",
        },
    },
    {
        shortcut: "flex",
        states: ["default"],
        responsive: true,
        properties: ["flex-shrink"],
        values: {
            "shrink": "1",
            "no-shrink": "0",
        },
    },
    {
        shortcut: "flex",
        states: ["default"],
        responsive: true,
        properties: ["flex-wrap"],
        values: {
            "wrap": "wrap",
            "wrap-rev": "wrap-reverse",
            "no-wrap": "nowrap",
        },
    },
    {
        shortcut: "content",
        states: ["default"],
        responsive: true,
        properties: ["align-content"],
        values: {
            start: "flex-start",
            end: "flex-end",
            center: "center",
            between: "space-between",
            around: "space-around",
            evenly: "space-evenly",
        },
    },
    {
        shortcut: "items",
        states: ["default"],
        responsive: true,
        properties: ["align-items"],
        values: {
            start: "flex-start",
            end: "flex-end",
            center: "center",
            stretch: "stretch",
            baseline: "baseline",
        },
    },
    {
        shortcut: "self",
        states: ["default"],
        responsive: true,
        properties: ["align-self"],
        values: {
            auto: "auto",
            start: "flex-start",
            end: "flex-end",
            center: "center",
            stretch: "stretch",
            baseline: "baseline",
        },
    },
    {
        shortcut: "justify",
        states: ["default"],
        responsive: true,
        properties: ["justify-content"],
        values: {
            start: "flex-start",
            end: "flex-end",
            center: "center",
            between: "space-between",
            around: "space-around",
            evenly: "space-evenly",
        },
    },
    {
        shortcut: "justify-items",
        states: ["default"],
        responsive: true,
        properties: ["justify-items"],
        values: {
            start: "start",
            end: "end",
            center: "center",
            stretch: "stretch",
        },
    },
    {
        shortcut: "justify-self",
        states: ["default"],
        responsive: true,
        properties: ["justify-self"],
        values: {
            auto: "auto",
            start: "start",
            end: "end",
            center: "center",
            stretch: "stretch",
        },
    },
    {
        shortcut: "order",
        states: ["default"],
        responsive: true,
        properties: ["order"],
        values: {
            none: "0",
            first: "-999",
            last: "999",
        },
    },
    // Text
    {
        shortcut: "text",
        states: ["default"],
        responsive: false,
        properties: ["text-align"],
        values: {
            justified: "justify", 
            left: "left", 
            center: "center", 
            right: "right",
        },
    },
    // Vertical align
    {
        shortcut: "align",
        states: ["default"],
        responsive: false,
        properties: ["vertical-align"],
        values: {
            "baseline": "baseline",
            "top": "top",
            "middle": "middle",
            "bottom": "bottom",
            "text-top": "text-top",
            "text-bottom": "text-bottom",
        },
    },
];

// Other helpers
const otherHelpers = {
    // Cursor
    "clickable": {
        cursor: ["pointer", "!important"],
    },
    "not-allowed": {
        cursor: ["not-allowed", "!important"],
    },
    // Display
    "block": {
        display: "block",
    },
    "flex": {
        display: "flex",
    },
    "inline": {
        display: "inline",
    },
    "inline-block": {
        display: "inline-block",
    },
    "inline-flex": {
        display: "inline-flex",
    },
    "hidden": {
        display: "none",
    },
    // Float
    "aligned-left": {
        float: "left",
    },
    "aligned-right": {
        float: "right",
    },
    // Overflow
    "clipped": {
        overflow: ["hidden", "!important"],
    },
    // Position
    "relative": {
        position: "relative",
    },
    "absolute": {
        position: "absolute",
    },
    "sticky": {
        position: "sticky",
    },
    "fixed": {
        position: "fixed",
    },
    // Text
    "italic": {
        fontStyle: "italic",
    },
    "underlined": {
        textDecoration: "underline",
    },
    "not-underlined": {
        textDecoration: ["none", "!important"],
    },
    "capitalized": {
        textTransform: "capitalize",
    },
    "lowercase": {
        textTransform: "lowercase",
    },
    "uppercase": {
        textTransform: "uppercase",
    },
    // Negative selectors
    "radiusless": {
        borderRadius: ["0px", "!important"],
    },
    "shadowless": {
        boxShadow: ["none", "!important"],
    },
    "unselectable": {
        userSelect: ["none", "!important"],
    },
};

export default {
    styles: {
        // Themeable helpers
        ...Object.fromEntries(themeHelpers.map(item => {
            const helperStyles = {};
            const styles = {
                [`@theme ${item.scale}`]: {
                    "&": Object.fromEntries(item.properties.map(name => {
                        return [name, "value"];
                    })),
                },
            };
            // Generate utilities for this configuration
            item.states.forEach(state => {
                if (state === "default") {
                    Object.assign(helperStyles, styles);
                }
                else if (state === "focus" || state === "hover") {
                    helperStyles[`&-${state}:${state}`] = styles;
                }
                else if (state === "responsive") {
                    helperStyles["&-{{breakpoint}}"] = {
                        "@breakpoints": styles,
                    };
                }
            });
            return [`.has-${item.shortcut}{{name}}`, helperStyles];
        })),
        // Additional helpers
        ...Object.fromEntries(extraHelpers.map(item => {
            const helperStyles = Object.fromEntries(Object.keys(item.values).map(name => {
                const styles = Object.fromEntries(item.properties.map(property => {
                    return [property, item.values[name]];
                }));
                const stateStyles = item.states.reduce((prevStateStyles, state) => {
                    if (state === "default") {
                        return {...prevStateStyles, ...styles};
                    }
                    else if (state === "hover" || state === "focus") {
                        prevStateStyles[`&-${state}:${state}`] = styles;
                    }
                    // Return styles
                    return prevStateStyles;
                }, {});
                // Responsive styles
                if (item.responsive) {
                    stateStyles["@breakpoints"] = {
                        "&-{{breakpoint}}": styles,
                    };
                }
                return [`&-${name}`, stateStyles];
            }));
            return [`.has-${item.shortcut}`, helperStyles];
        })),
        // Other helpers
        ...Object.fromEntries(Object.keys(otherHelpers).map(name => {
            const styles = {
                ...otherHelpers[name],
                "@breakpoints": {
                    "&-{{breakpoint}}": otherHelpers[name],
                },
            };
            return [`.is-${name}`, styles];
        })),
    },
};
