import {generateHelpers} from "./utils.js";

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
    backgroundColor: generateHelpers({
        prefix: "has",
        shortcut: "bg",
        properties: ["backgroundColor"],
        states: ["default", "hover"],
        responsive: false,
        scale: "colors",
        exclude: ["text", "background", "heading"],
        values: colorsValues,
    }),
    textColor: generateHelpers({
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
    // font: generateHelpers({
    //     prefix: "has",
    //     shortcut: "font",
    //     properties: ["fontFamily"],
    //     states: ["default"],
    //     responsive: false,
    //     scale: "fonts",
    // }),
    // Font sizes
    fontSize: generateHelpers({
        prefix: "has",
        shortcut: "size",
        properties: ["fontSize"],
        states: ["default"],
        responsive: false,
        scale: "fontSizes",
    }),
    // Font weights
    fontWeight: generateHelpers({
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
    lineHeight: generateHelpers({
        prefix: "has",
        shortcut: "lh",
        properties: ["lineHeight"],
        states: ["default"],
        responsive: false,
        values: {
            none: "1",
            tight: "1.25",
            normal: "1.5",
            loose: "2",
        },
    }),
    // Opacities
    // opacity: generateHelpers({
    //     prefix: "has",
    //     shortcut: "opacity",
    //     properties: ["opacity"],
    //     states: ["default", "hover"],
    //     responsive: false,
    //     scale: "opacities",
    // }),
    // Radius
    // This helper has been deprecated
    // oldRadius: generateHelpers({
    //     prefix: "has",
    //     shortcut: "radius",
    //     properties: ["borderRadius"],
    //     states: ["default"],
    //     responsive: false,
    //     scale: "radius",
    // }),
    // Shadows
    // shadow: generateHelpers({
    //     prefix: "has",
    //     shortcut: "shadow",
    //     properties: ["boxShadow"],
    //     states: ["default"],
    //     responsive: false,
    //     scale: "shadows",
    // }),
    // Sizes
    width: generateHelpers({
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
    // minWidth: generateHelpers({
    //     prefix: "has",
    //     shortcut: "minw",
    //     properties: ["min-width"],
    //     states: ["default"],
    //     responsive: true,
    //     scale: "sizes",
    //     values: {
    //         ...sizesValues,
    //         auto: "auto",
    //         screen: "100vw",
    //     },
    // }),
    // maxWidth: generateHelpers({
    //     prefix: "has",
    //     shortcut: "maxw",
    //     properties: ["max-width"],
    //     states: ["default"],
    //     responsive: true,
    //     scale: "sizes",
    //     values: {
    //         ...sizesValues,
    //         auto: "auto",
    //         screen: "100vw",
    //     },
    // }),
    height: generateHelpers({
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
    // minHeight: generateHelpers({
    //     prefix: "has",
    //     shortcut: "minh",
    //     properties: ["min-height"],
    //     states: ["default"],
    //     responsive: true,
    //     scale: "sizes",
    //     values: {
    //         ...sizesValues,
    //         auto: "auto",
    //         screen: "100vh",
    //     },
    // }),
    // maxHeight: generateHelpers({
    //     prefix: "has",
    //     shortcut: "maxh",
    //     properties: ["max-height"],
    //     states: ["default"],
    //     responsive: true,
    //     scale: "sizes",
    //     values: {
    //         ...sizesValues,
    //         auto: "auto",
    //         screen: "100vh",
    //     },
    // }),
    // size: generateHelpers({
    //     prefix: "has",
    //     shortcut: "s",
    //     properties: ["height", "width"],
    //     states: ["default"],
    //     responsive: true,
    //     scale: "sizes",
    //     values: sizesValues,
    // }),
    // Position
    ...Object.fromEntries(["bottom","left","right","top"].map(position => {
        return [position, generateHelpers({
            prefix: "has",
            shortcut: position,
            properties: [position],
            states: ["default"],
            responsive: true,
            values: sizesValues,
        })];
    })),
    // spacing
    padding: generateHelpers({
        prefix: "has",
        shortcut: "p",
        properties: ["padding"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: sizesValues,
    }),
    // paddingX: generateHelpers({
    //     prefix: "has",
    //     shortcut: "px",
    //     properties: ["padding-left", "padding-right"],
    //     states: ["default"],
    //     responsive: true,
    //     scale: "space",
    //     values: {
    //         ...sizesValues,
    //         auto: "auto",
    //     },
    // }),
    // paddingY: generateHelpers({
    //     prefix: "has",
    //     shortcut: "py",
    //     properties: ["padding-top", "padding-bottom"],
    //     states: ["default"],
    //     responsive: true,
    //     scale: "space",
    //     values: {
    //         ...sizesValues,
    //         auto: "auto",
    //     },
    // }),
    paddingTop: generateHelpers({
        prefix: "has",
        shortcut: "pt",
        properties: ["padding-top"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: sizesValues,
    }),
    paddingBottom: generateHelpers({
        prefix: "has",
        shortcut: "pb",
        properties: ["padding-bottom"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: sizesValues,
    }),
    paddingLeft: generateHelpers({
        prefix: "has",
        shortcut: "pl",
        properties: ["padding-left"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: sizesValues,
    }),
    paddingRight: generateHelpers({
        prefix: "has",
        shortcut: "pr",
        properties: ["padding-right"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: sizesValues,
    }),
    margin: generateHelpers({
        prefix: "has",
        shortcut: "m",
        properties: ["margin"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: sizesValues,
    }),
    marginX: generateHelpers({
        prefix: "has",
        shortcut: "mx",
        properties: ["margin-left", "margin-right"],
        states: ["default"],
        responsive: true,
        values: {
            auto: "auto",
        },
    }),
    // marginY: generateHelpers({
    //     prefix: "has",
    //     shortcut: "my",
    //     properties: ["margin-top", "margin-bottom"],
    //     states: ["default"],
    //     responsive: true,
    //     scale: "space",
    //     values: {
    //         ...sizesValues,
    //         auto: "auto",
    //     },
    // }),
    marginTop: generateHelpers({
        prefix: "has",
        shortcut: "mt",
        properties: ["margin-top"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: sizesValues,
    }),
    marginBottom: generateHelpers({
        prefix: "has",
        shortcut: "mb",
        properties: ["margin-bottom"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: sizesValues,
    }),
    marginLeft: generateHelpers({
        prefix: "has",
        shortcut: "ml",
        properties: ["margin-left"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: sizesValues,
    }),
    marginRight: generateHelpers({
        prefix: "has",
        shortcut: "mr",
        properties: ["margin-right"],
        states: ["default"],
        responsive: true,
        scale: "space",
        values: sizesValues,
    }),
    // Flexbox
    flex: generateHelpers({
        prefix: "has",
        shortcut: "flex",
        states: ["default"],
        responsive: true,
        properties: ["flex"],
        values: {
            "none": "none",
            "initial": "initial",
            "auto": "auto",
        },
    }),
    flexDirection: generateHelpers({
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
    flexGrow: generateHelpers({
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
    flexShrink: generateHelpers({
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
    flexWrap: generateHelpers({
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
    alignContent: generateHelpers({
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
    alignItems: generateHelpers({
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
    alignSelf: generateHelpers({
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
    justifyContent: generateHelpers({
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
    // justifyItems: generateHelpers({
    //     prefix: "has",
    //     shortcut: "justify-items",
    //     states: ["default"],
    //     responsive: true,
    //     properties: ["justify-items"],
    //     values: {
    //         start: "start",
    //         end: "end",
    //         center: "center",
    //         stretch: "stretch",
    //     },
    // }),
    // justifySelf: generateHelpers({
    //     prefix: "has",
    //     shortcut: "justify-self",
    //     states: ["default"],
    //     responsive: true,
    //     properties: ["justify-self"],
    //     values: {
    //         auto: "auto",
    //         start: "start",
    //         end: "end",
    //         center: "center",
    //         stretch: "stretch",
    //     },
    // }),
    order: generateHelpers({
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
    textAlign: generateHelpers({
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
    verticalAlign: generateHelpers({
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
    cursor: generateHelpers({
        prefix: "is",
        states: ["default"],
        responsive: false,
        properties: ["cursor"],
        important: true,
        values: {
            "clickable": ["pointer", "!important"],
            "not-allowed": ["not-allowed", "!important"],
        },
    }),
    // Display
    display: generateHelpers({
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
    float: generateHelpers({
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
    overflow: generateHelpers({
        prefix: "is",
        states: ["default"],
        responsive: true,
        properties: ["overflow"],
        values: {
            "clipped": ["hidden", "!important"],
            "scrollable": ["auto", "!important"],
        },
    }),
    // Shadow helpers
    shadow: generateHelpers({
        prefix: "is",
        states: ["default"],
        responsive: false,
        properties: ["boxShadow"],
        values: {
            "shadowed": "0 0.5rem 1rem -0.25rem rgba(54,63,79,0.2), 0 0 0 1px rgba(54,63,79,0.02)",
            "shadowless": ["none", "!important"],
        },
    }),
    // Border radius
    radius: generateHelpers({
        prefix: "is",
        states: ["default"],
        responsive: false,
        properties: ["radius"],
        values: {
            "rounded": "0.5rem",
            "pill": "999px",
            "radiusless": ["0px", "!important"],
        },
    }),
    // Position
    position: generateHelpers({
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
    textTransform: generateHelpers([
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
    opacity: generateHelpers({
        prefix: "is",
        states: ["default"],
        responsive: false,
        properties: ["opacity"],
        values: {
            "semitransparent": ["0.5", "!important"],
            "transparent": ["0", "!important"],
        },
    }),
    // Text selection
    textSelection: generateHelpers({
        prefix: "is",
        states: ["default"],
        responsive: false,
        properties: ["userSelect"],
        values: {
            "unselectable": ["none", "!important"],
        },
    }),
};
