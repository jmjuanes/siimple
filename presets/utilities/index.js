import colors from "siimple/colors.js";
import {fonts, fontSizes, sizes, opacities} from "siimple/theme.js";

// Generate colors values
const getColorsValues = () => {
    const flatColorsList = {};
    Object.keys(colors).forEach(name => {
        if (typeof colors[name] === "string") {
            flatColorsList[name] = colors[name];
            return;
        }
        Object.keys(colors[name]).forEach(shade => {
            flatColorsList[`${name}-${shade}`] = colors[name][shade];
        });
    });
    return flatColorsList;
};

// Overflow properties
const overflowProps = {
    overflow: "overflow",
    overflowX: "overflow-x",
    overflowY: "overflow-y",
};

// Sizing properties
const sizingProps = {
    width: {
        shortcut: "w",
        properties: ["width"],
        extraValues: {
            screen: "100vw",
        },
    },
    minWidth: {
        shortcut: "minw",
        properties: ["min-width"],
        extraValues: {
            screen: "100vw",
        },
    },
    maxWidth: {
        shortcut: "maxw",
        properties: ["max-width"],
        extraValues: {
            screen: "100vw",
        },
    },
    height: {
        shortcut: "h",
        properties: ["height"],
        extraValues: {
            screen: "100vh",
        },
    },
    minHeight: {
        shortcut: "minh",
        properties: ["min-height"],
        extraValues: {
            screen: "100vh",
        },
    },
    maxHeight: {
        shortcut: "maxh",
        properties: ["max-height"],
        extraValues: {
            screen: "100vh",
        },
    },
    size: {
        shortcut: "s",
        properties: ["width", "height"],
        extraValues: {},
    },
};

// Spacing props
const spacingProps = {
    padding: {
        shortcut: "p",
        properties: ["padding"],
    },
    paddingX: {
        shortcut: "px",
        properties: ["padding-left", "padding-right"],
    },
    paddingY: {
        shortcut: "py",
        properties: ["padding-top", "padding-bottom"],
    },
    paddingTop: {
        shortcut: "pt",
        properties: ["padding-top"],
    },
    paddingBottom: {
        shortcut: "pb",
        properties: ["padding-bottom"],
    },
    paddingLeft: {
        shortcut: "pl",
        properties: ["padding-left"],
    },
    paddingRight: {
        shortcut: "pr",
        properties: ["padding-right"],
    },
    margin: {
        shortcut: "m",
        properties: ["margin"],
    },
    marginX: {
        shortcut: "mx",
        properties: ["margin-left", "margin-right"],
    },
    marginY: {
        shortcut: "my",
        properties: ["margin-top", "margin-bottom"],
    },
    marginTop: {
        shortcut: "mt",
        properties: ["margin-top"],
    },
    marginBottom: {
        shortcut: "mb",
        properties: ["margin-bottom"],
    },
    marginLeft: {
        shortcut: "ml",
        properties: ["margin-left"],
    },
    marginRight: {
        shortcut: "mr",
        properties: ["margin-right"],
    },
};

// Utilities configuration
const utilities = [
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
        shortcut: "bg",
        states: ["default", "hover", "focus"],
        responsive: false,
        properties: ["background-color"],
        values: getColorsValues(),
    },
    {
        shortcut: "radius",
        states: ["default"],
        responsive: false,
        properties: ["border-radius"],
        values: {
            // xs: "0.125rem",
            sm: "0.25rem",
            default: "0.5rem",
            lg: "0.75rem",
            xl: "1rem",
            full: "9999px",
            none: "0px",
        },
    },
    {
        shortcut: "text",
        states: ["default", "hover", "focus"],
        responsive: false,
        properties: ["color"],
        values: getColorsValues(),
    },
    {
        shortcut: "cursor",
        states: ["default"],
        responsive: false,
        properties: ["cursor"],
        values: {
            hand: "pointer",
            pointer: "pointer",
            move: "move",
            none: "none",
            "zoom-in": "zoom-in",
            "zoom-out": "zoom-out",
            "not-allowed": "not-allowed",
        },
    },
    {
        shortcut: "d",
        states: ["default"],
        responsive: true,
        properties: ["display"],
        values: {
            "none": "none",
            "inline": "inline",
            "block": "block",
            "inline-block": "inline-block",
            "flex": "flex",
            "inline-flex": "inline-flex",
        },
    },
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
        shortcut: "flex",
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
            "no-wrap": "nowrap",
        },
    },
    {
        shortcut: "float",
        states: ["default"],
        responsive: true,
        properties: ["float"],
        values: {
            left: "left",
            right: "right",
            none: "none",
        },
    },
    {
        shortcut: "font",
        states: ["default"],
        responsive: false,
        properties: ["font-family"],
        values: fonts,
    },
    {
        shortcut: "text",
        states: ["default"],
        responsive: false,
        properties: ["font-size"],
        values: fontSizes,
    },
    {
        shortcut: "text",
        states: ["default", "hover"],
        responsive: false,
        properties: ["font-style"],
        values: {
            "italic": "italic",
            "no-italic": "normal",
        },
    },
    {
        shortcut: "weight",
        states: ["default"],
        responsive: false,
        properties: ["font-weight"],
        values: {
            light: "300",
            normal: "400",
            medium: "500",
            bold: "700",
            black: "900",
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
        shortcut: "lh",
        states: ["default"],
        responsive: false,
        properties: ["line-height"],
        values: {
            none: "1",
            normal: "normal",
            sm: "1.25",
            base: "1.5",
            lg: "2",
        },
    },
    {
        shortcut: "opacity",
        states: ["default", "hover"],
        responsive: false,
        properties: ["opacity"],
        values: opacities,
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
    {
        shortcut: "position",
        states: ["default"],
        responsive: true,
        properties: ["position"],
        values: {
            relative: "relative",
            absolute: "absolute",
            sticky: "sticky",
            fixed: "fixed",
            initial: "initial",
        },
    },
    {
        shortcut: "shadow",
        states: ["default"],
        responsive: false,
        properties: ["box-shadow"],
        values: {
            sm: "0 0.25rem 1rem -0.125rem rgba(#000, 0.15),0 0 0 1px rgba(#000, 0.02)",
            default: "0 0.5rem 1rem -0.25rem rgba(#000, 0.2), 0 0 0 1px rgba(#000, 0.02)",
            lg: "0rem 1rem 1rem -0.5rem rgba(#000, 0.25),0 0 0 1px rgba(#000, 0.02)",
            none: "none",
        },
    },
    {
        shortcut: "text",
        states: ["default"],
        responsive: false,
        properties: ["text-align"],
        values: {
            justify: "justify", 
            left: "left", 
            center: "center", 
            right: "right",
        },
    },
    {
        shortcut: "text",
        states: ["default", "hover"],
        responsive: false,
        properties: ["text-decoration"],
        values: {
            "underline": "underline",
            "no-underline": "none",
        },
    },
    {
        shortcut: "text",
        states: ["default", "hover"],
        responsive: false,
        properties: ["text-transform"],
        values: {
            capitalize: "capitalize",
            uppercase: "uppercase",
            lowercase: "lowercase",
        },
    },
    {
        shortcut: "valign",
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
    ...Object.keys(overflowProps).map(name => ({
        shortcut: name,
        states: ["default"],
        properties: [overflowProps[name]],
        values: {
            auto: "auto",
            scroll: "scroll",
            hidden: "hidden",
        },
    })),
    ...Object.keys(sizingProps).map(key => ({
        shortcut: sizingProps[key].shortcut,
        states: ["default"],
        responsive: true,
        properties: sizingProps[key].properties,
        values: {
            ...sizes,
            ...sizingProps[key].extraValues,
            auto: "auto",
            full: "100%",
            half: "50%",
            one: "1px",
            none: "0px",
        },
    })),
    ...Object.keys(spacingProps).map(key => ({
        shortcut: spacingProps[key].shortcut,
        states: ["default"],
        responsive: true,
        properties: spacingProps[key].properties,
        values: {
            ...sizes,
            auto: "auto",
            full: "100%",
            half: "50%",
            none: "0px",
        },
    })),
    ...["bottom","left","right","top"].map(name => ({
        shortcut: name,
        states: ["default"],
        responsive: true,
        properties: [name],
        values: {
            none: "0px",
            half: "50%",
            full: "100%",
            auto: "auto",
        },
    })),
];

// Generate a selector for the specified utility, state and breakpoint
const getSelector = (name, key, state, isBreakpoint) => {
    const selector = `has-${name}${key !== "default" ? `-${key}` : ""}`;
    // Check if breakpoint value has been provided
    if (isBreakpoint) {
        return `.{{breakpoint}}\\:${selector}`
    }
    // Check for state
    else if (state && (state === "hover" || state === "focus")) {
        return `.${state}\\:${selector}:${state}`;
    }
    // Default --> return the default utility class
    return `.${selector}`;
};

// Generate utility styles
const utilityReducer = (prevStyles, options) => {
    const properties = options.properties || [];
    // Generate utilities for each state
    (options.states || ["default"]).forEach(state => {
        Object.keys(options.values).forEach(key => {
            const selector = getSelector(options.shortcut, key, state, false);
            prevStyles[selector] = Object.fromEntries(properties.map(prop => {
                return [prop, options.values[key]];
            }));
        });
    });
    // Generate utilities for each breakpoint
    if (options.responsive) {
        Object.keys(options.values).forEach(key => {
            const selector = getSelector(options.shortcut, key, null, true);
            prevStyles[selector] = {
                "@breakpoints": Object.fromEntries(properties.map(prop => {
                    return [prop, options.values[key]];
                })),
            };
        });
    }
    return prevStyles;
};

// Export utilities preset
export default {
    styles: utilities.reduce(utilityReducer, {}),
};
