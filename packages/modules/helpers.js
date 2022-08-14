import {createHelper} from "./utils.js";

// Common values
const colorsValues = {
    white: "#fff",
    black: "#000",
    current: "currentColor",
    transparent: "transparent",
};
const sizesValues = {
    none: "0px",
    one: "1px",
    half: "50%",
    full: "100%",
    auto: "auto",
};

// Build helpers
export const helpers = {
    // Colors
    backgroundColor: createHelper({
        prefix: "has",
        shortcut: "bg",
        properties: ["backgroundColor"],
        states: ["default", "hover"],
        responsive: false,
        scale: "colors",
        exclude: ["text", "background", "heading"],
        values: colorsValues,
    }),
    textColor: createHelper({
        prefix: "has",
        shortcut: "text",
        properties: ["color"],
        states: ["default", "hover"],
        responsive: false,
        scale: "colors",
        exclude: ["text", "background", "heading"],
        values: colorsValues,
    }),
    // Font
    // font: createHelper({
    //     prefix: "has",
    //     shortcut: "font",
    //     properties: ["fontFamily"],
    //     states: ["default"],
    //     responsive: false,
    //     scale: "fonts",
    // }),
    // Font sizes
    fontSize: createHelper({
        prefix: "has",
        shortcut: "size",
        properties: ["fontSize"],
        states: ["default"],
        scale: "fontSizes",
    }),
    // Font weights
    fontWeight: createHelper({
        prefix: "has",
        shortcut: "weight",
        properties: ["fontWeight"],
        states: ["default"],
        values: {
            light: "300",
            normal: "400",
            medium: "500",
            bold: "700",
            black: "900",
        },
    }),
    // Line heights
    lineHeight: createHelper({
        prefix: "has",
        shortcut: "lh",
        properties: ["lineHeight"],
        states: ["default"],
        values: {
            none: "1",
            tight: "1.25",
            normal: "1.5",
            loose: "2",
        },
    }),
    // Sizes
    width: createHelper({
        prefix: "has",
        shortcut: "w",
        properties: ["width"],
        states: ["default"],
        responsive: true,
        scale: "sizes",
        values: {
            ...sizesValues,
            screen: "100vw",
        },
    }),
    height: createHelper({
        prefix: "has",
        shortcut: "h",
        properties: ["height"],
        states: ["default"],
        responsive: true,
        scale: "sizes",
        values: {
            ...sizesValues,
            screen: "100vh",
        },
    }),
    // Position
    ...Object.fromEntries(["bottom","left","right","top"].map(position => {
        return [position, createHelper({
            prefix: "has",
            shortcut: position,
            properties: [position],
            states: ["default"],
            responsive: true,
            values: {
                none: "0px",
                half: "50%",
                full: "100%",
            },
        })];
    })),
    // spacing
    padding: createHelper({
        prefix: "has",
        shortcut: "p",
        properties: ["padding"],
        states: ["default"],
        responsive: true,
        important: true,
        scale: "space",
        values: sizesValues,
    }),
    paddingTop: createHelper({
        prefix: "has",
        shortcut: "pt",
        properties: ["padding-top"],
        states: ["default"],
        responsive: true,
        important: true,
        scale: "space",
        values: sizesValues,
    }),
    paddingBottom: createHelper({
        prefix: "has",
        shortcut: "pb",
        properties: ["padding-bottom"],
        states: ["default"],
        responsive: true,
        important: true,
        scale: "space",
        values: sizesValues,
    }),
    paddingLeft: createHelper({
        prefix: "has",
        shortcut: "pl",
        properties: ["padding-left"],
        states: ["default"],
        responsive: true,
        important: true,
        scale: "space",
        values: sizesValues,
    }),
    paddingRight: createHelper({
        prefix: "has",
        shortcut: "pr",
        properties: ["padding-right"],
        states: ["default"],
        responsive: true,
        important: true,
        scale: "space",
        values: sizesValues,
    }),
    margin: createHelper({
        prefix: "has",
        shortcut: "m",
        properties: ["margin"],
        states: ["default"],
        responsive: true,
        important: true,
        scale: "space",
        values: sizesValues,
    }),
    marginTop: createHelper({
        prefix: "has",
        shortcut: "mt",
        properties: ["margin-top"],
        states: ["default"],
        responsive: true,
        important: true,
        scale: "space",
        values: sizesValues,
    }),
    marginBottom: createHelper({
        prefix: "has",
        shortcut: "mb",
        properties: ["margin-bottom"],
        states: ["default"],
        responsive: true,
        important: true,
        scale: "space",
        values: sizesValues,
    }),
    marginLeft: createHelper({
        prefix: "has",
        shortcut: "ml",
        properties: ["margin-left"],
        states: ["default"],
        responsive: true,
        important: true,
        scale: "space",
        values: sizesValues,
    }),
    marginRight: createHelper({
        prefix: "has",
        shortcut: "mr",
        properties: ["margin-right"],
        states: ["default"],
        responsive: true,
        important: true,
        scale: "space",
        values: sizesValues,
    }),
    // Flexbox
    flexDirection: createHelper({
        prefix: "has",
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
    }),
    flexGrow: createHelper({
        prefix: "has",
        shortcut: "flex",
        states: ["default"],
        responsive: true,
        properties: ["flex-grow"],
        values: {
            "grow": "1",
            "no-grow": "0",
        },
    }),
    flexShrink: createHelper({
        prefix: "has",
        shortcut: "flex",
        states: ["default"],
        responsive: true,
        properties: ["flex-shrink"],
        values: {
            "shrink": "1",
            "no-shrink": "0",
        },
    }),
    flexWrap: createHelper({
        prefix: "has",
        shortcut: "flex",
        states: ["default"],
        responsive: true,
        properties: ["flex-wrap"],
        values: {
            "wrap": "wrap",
            "wrap-rev": "wrap-reverse",
            "no-wrap": "nowrap",
        },
    }),
    alignContent: createHelper({
        prefix: "has",
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
    }),
    alignItems: createHelper({
        prefix: "has",
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
    }),
    alignSelf: createHelper({
        prefix: "has",
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
    }),
    justifyContent: createHelper({
        prefix: "has",
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
    }),
    order: createHelper({
        prefix: "has",
        shortcut: "order",
        states: ["default"],
        responsive: true,
        properties: ["order"],
        values: {
            none: "0",
            first: "-999",
            last: "999",
        },
    }),
    // Text
    textAlign: createHelper({
        prefix: "has",
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
    }),
    // Vertical align
    verticalAlign: createHelper({
        prefix: "has",
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
    }),
    // Cursor
    cursor: createHelper({
        prefix: "is",
        states: ["default"],
        responsive: false,
        properties: ["cursor"],
        important: true,
        values: {
            "clickable": "pointer",
            "not-allowed": "not-allowed",
        },
    }),
    // Display
    display: createHelper({
        prefix: "is",
        states: ["default"],
        responsive: true,
        properties: ["display"],
        values: {
            "block": "block",
            "flex": "flex",
            "inline": "inline",
            "inline-block": "inline-block",
            "inline-flex": "inline-flex",
            "hidden": "none",
        },
    }),
    // Float
    float: createHelper({
        prefix: "is",
        states: ["default"],
        responsive: true,
        properties: ["float"],
        values: {
            "aligned-left": "left",
            "aligned-right": "right",
        },
    }),
    // Overflow
    overflow: createHelper({
        prefix: "is",
        states: ["default"],
        responsive: true,
        important: true,
        properties: ["overflow"],
        values: {
            "clipped": "hidden",
            "scrollable": "auto",
        },
    }),
    // Shadow helpers
    shadow: createHelper({
        prefix: "is",
        states: ["default"],
        responsive: false,
        // important: true,
        properties: ["boxShadow"],
        values: {
            "shadowed": "0 0.5rem 1rem -0.25rem rgba(54,63,79,0.2), 0 0 0 1px rgba(54,63,79,0.02)",
            "shadowless": ["none", "!important"],
        },
    }),
    // Border radius
    radius: createHelper({
        prefix: "is",
        states: ["default"],
        responsive: false,
        // important: true,
        properties: ["radius"],
        values: {
            "rounded": "0.5rem",
            "pill": "999px",
            "radiusless": ["0px", "!important"],
        },
    }),
    // Position
    position: createHelper({
        prefix: "is",
        states: ["default"],
        responsive: true,
        properties: ["position"],
        values: {
            "relative": "relative",
            "absolute": "absolute",
            "sticky": "sticky",
            "fixed": "fixed",
        },
    }),
    // Text transform
    textTransform: createHelper([
        {
            prefix: "is",
            states: ["default"],
            responsive: false,
            properties: ["fontStyle"],
            values: {
                italic: "italic"
            },
        },
        {
            prefix: "is",
            states: ["default"],
            responsive: false,
            properties: ["textDecoration"],
            values: {
                "underlined": "underline",
                "not-underlined": ["none", "!important"],
            },
        },
        {
            prefix: "is",
            states: ["default"],
            responsive: false,
            properties: ["textTransform"],
            values: {
                "capitalized": "capitalize",
                "lowercase": "lowercase",
                "uppercase": "uppercase",
            },
        },
    ]),
    // Opacity helpers
    opacity: createHelper({
        prefix: "is",
        states: ["default"],
        responsive: false,
        properties: ["opacity"],
        values: {
            "semitransparent": "0.5",
            "transparent": "0",
        },
    }),
    // Text selection
    textSelection: createHelper({
        prefix: "is",
        states: ["default"],
        responsive: false,
        important: true,
        properties: ["userSelect"],
        values: {
            "unselectable": "none",
        },
    }),
};
