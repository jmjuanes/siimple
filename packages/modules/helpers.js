const colorsValues = {
    white: "#fff",
    black: "#000",
    current: "currentColor",
    transparent: "transparent",
};
const sizesValues = {
    none: "0px",
    // one: "1px",
    half: "50%",
    full: "100%",
    auto: "auto",
};

// Build helpers
export const helpers = {
    backgroundColor: {
        prefix: "has",
        shortcut: "bg",
        properties: ["backgroundColor"],
        states: ["default", "hover"],
        scale: "colors",
        excludeFromScale: ["text", "background", "heading"],
        values: colorsValues,
    },
    textColor: {
        prefix: "has",
        shortcut: "text",
        properties: ["color"],
        states: ["default", "hover"],
        scale: "colors",
        excludeFromScale: ["text", "background", "heading"],
        values: colorsValues,
    },
    fontSize: {
        prefix: "has",
        shortcut: "size",
        properties: ["fontSize"],
        scale: "fontSizes",
    },
    fontWeight: {
        prefix: "has",
        shortcut: "weight",
        properties: ["fontWeight"],
        values: {
            light: "300",
            normal: "400",
            medium: "500",
            bold: "700",
            black: "900",
        },
    },
    lineHeight: {
        prefix: "has",
        shortcut: "lh",
        properties: ["lineHeight"],
        values: {
            none: "1",
            tight: "1.25",
            normal: "1.5",
            loose: "2",
        },
    },
    width: {
        prefix: "has",
        shortcut: "w",
        properties: ["width"],
        responsive: true,
        scale: "sizes",
        values: {
            ...sizesValues,
            screen: "100vw",
        },
    },
    height: {
        prefix: "has",
        shortcut: "h",
        properties: ["height"],
        responsive: true,
        scale: "sizes",
        values: {
            ...sizesValues,
            screen: "100vh",
        },
    },
    padding: {
        prefix: "has",
        shortcut: "p",
        properties: ["padding"],
        responsive: true,
        important: true,
        scale: "space",
        values: sizesValues,
    },
    paddingTop: {
        prefix: "has",
        shortcut: "pt",
        properties: ["padding-top"],
        responsive: true,
        important: true,
        scale: "space",
        values: sizesValues,
    },
    paddingBottom: {
        prefix: "has",
        shortcut: "pb",
        properties: ["padding-bottom"],
        responsive: true,
        important: true,
        scale: "space",
        values: sizesValues,
    },
    paddingLeft: {
        prefix: "has",
        shortcut: "pl",
        properties: ["padding-left"],
        responsive: true,
        important: true,
        scale: "space",
        values: sizesValues,
    },
    paddingRight: {
        prefix: "has",
        shortcut: "pr",
        properties: ["padding-right"],
        responsive: true,
        important: true,
        scale: "space",
        values: sizesValues,
    },
    margin: {
        prefix: "has",
        shortcut: "m",
        properties: ["margin"],
        responsive: true,
        important: true,
        scale: "space",
        values: sizesValues,
    },
    marginTop: {
        prefix: "has",
        shortcut: "mt",
        properties: ["margin-top"],
        responsive: true,
        important: true,
        scale: "space",
        values: sizesValues,
    },
    marginBottom: {
        prefix: "has",
        shortcut: "mb",
        properties: ["margin-bottom"],
        responsive: true,
        important: true,
        scale: "space",
        values: sizesValues,
    },
    marginLeft: {
        prefix: "has",
        shortcut: "ml",
        properties: ["margin-left"],
        responsive: true,
        important: true,
        scale: "space",
        values: sizesValues,
    },
    marginRight: {
        prefix: "has",
        shortcut: "mr",
        properties: ["margin-right"],
        responsive: true,
        important: true,
        scale: "space",
        values: sizesValues,
    },
    // Flexbox
    flexDirection: {
        prefix: "has",
        shortcut: "direction",
        responsive: true,
        properties: ["flex-direction"],
        values: {
            "row": "row", 
            "column": "column", 
            "row-rev": "row-reverse", 
            "column-rev": "column-reverse",
        },
    },
    flexGrow: {
        prefix: "has",
        shortcut: "flex",
        responsive: true,
        properties: ["flex-grow"],
        values: {
            "grow": "1",
            "no-grow": "0",
        },
    },
    flexShrink: {
        prefix: "has",
        shortcut: "flex",
        responsive: true,
        properties: ["flex-shrink"],
        values: {
            "shrink": "1",
            "no-shrink": "0",
        },
    },
    flexWrap: {
        prefix: "has",
        shortcut: "flex",
        responsive: true,
        properties: ["flex-wrap"],
        values: {
            "wrap": "wrap",
            "wrap-rev": "wrap-reverse",
            "no-wrap": "nowrap",
        },
    },
    alignContent: {
        prefix: "has",
        shortcut: "content",
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
    alignItems: {
        prefix: "has",
        shortcut: "items",
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
    alignSelf: {
        prefix: "has",
        shortcut: "self",
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
    justifyContent: {
        prefix: "has",
        shortcut: "justify",
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
    order: {
        prefix: "has",
        shortcut: "order",
        responsive: true,
        properties: ["order"],
        values: {
            none: "0",
            first: "-999",
            last: "999",
        },
    },
    textAlign: {
        styles: {
            ".has-text-justified": {
                textAlign: "justify",
            },
            ".has-text-left": {
                textAlign: "left",
            },
            ".has-text-center": {
                textAlign: "center",
            },
            ".has-text-right": {
                textAlign: "right",
            },
        },
    },
    verticalAlign: {
        styles: {
            ".has-align-top": {
                verticalAlign: "top",
            },
            ".has-align-middle": {
                verticalAlign: "middle",
            },
            ".has-align-bottom": {
                verticalAlign: "bottom",
            },
        },
    },
    cursor: {
        styles: {
            ".is-clickable": {
                cursor: ["pointer", "!important"],
            },
            ".is-not-allowed": {
                cursor: ["not-allowed", "!important"],
            },
        },
    },
    display: {
        prefix: "is",
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
    },
    float: {
        styles: {
            ".is-aligned-left": {
                float: "left",
            },
            ".is-aligned-right": {
                float: "right",
            },
        },
    },
    overflow: {
        styles: {
            ".is-clipped": {
                overflow: ["hidden", "!important"],
            },
            ".is-scrollable": {
                overflow: ["auto", "!important"],
            },
        },
    },
    shadow: {
        styles: {
            ".is-shadowed": {
                boxShadow: [
                    "0 0.5rem 1rem -0.25rem rgba(54,63,79,0.2),",
                    "0 0 0 1px rgba(54,63,79,0.02)",
                ],
            },
            ".is-shadowless": {
                boxShadow: ["none", "!important"],
            },
        },
    },
    radius: {
        styles: {
            ".is-rounded": {
                borderRadius: "0.5rem",
            },
            ".is-pill": {
                borderRadius: "9999px",
            },
            ".is-radiusless": {
                borderRadius: ["0px", "!important"],
            },
        },
    },
    position: {
        styles: {
            ".is-relative": {
                position: "relative",
            },
            ".is-absolute": {
                position: "absolute",
            },
            ".is-sticky": {
                position: "sticky",
            },
            ".is-fixed": {
                position: "fixed",
            },
            ".is-top": {
                top: "0px",
            },
            ".is-bottom": {
                bottom: "0px",
            },
        },
    },
    textTransform: {
        styles: {
            ".is-italic": {
                fontStyle: "italic",
            },
            ".is-underlined": {
                textDecoration: "underline",
            },
            ".is-not-underlined": {
                textDecoration: ["none", "!important"],
            },
            ".is-capitalized": {
                textTransform: "capitalize",
            },
            ".is-lowercase": {
                textTransform: "lowercase",
            },
            ".is-uppercase": {
                textTransform: "uppercase",
            },
        },
    },
    opacity: {
        styles: {
            ".is-semitransparent": {
                opacity: "0.5",
            },
            ".is-transparent": {
                opacity: "0",
            },
        },
    },
    textSelection: {
        styles: {
            ".is-unselectable": {
                userSelect: ["none", "!important"],
            },
        },
    },
};
