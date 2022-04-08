import colors from "./colors.js";
import {fonts, sizes} from "./globals.js";

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
        name: "w",
        properties: ["width"],
        extraValues: {
            screen: "100vw",
        },
    },
    minWidth: {
        name: "minw",
        properties: ["min-width"],
        extraValues: {
            screen: "100vw",
        },
    },
    maxWidth: {
        name: "maxw",
        properties: ["max-width"],
        extraValues: {
            screen: "100vw",
        },
    },
    height: {
        name: "h",
        properties: ["height"],
        extraValues: {
            screen: "100vh",
        },
    },
    minHeight: {
        name: "minh",
        properties: ["min-height"],
        extraValues: {
            screen: "100vh",
        },
    },
    maxHeight: {
        name: "maxh",
        properties: ["max-height"],
        extraValues: {
            screen: "100vh",
        },
    },
    size: {
        name: "s",
        properties: ["width", "height"],
        extraValues: {},
    },
};

// Spacing props
const spacingProps = {
    padding: {
        name: "p",
        properties: ["padding"],
    },
    paddingX: {
        name: "px",
        properties: ["padding-left", "padding-right"],
    },
    paddingY: {
        name: "py",
        properties: ["padding-top", "padding-bottom"],
    },
    paddingTop: {
        name: "pt",
        properties: ["padding-top"],
    },
    paddingBottom: {
        name: "pb",
        properties: ["padding-bottom"],
    },
    paddingLeft: {
        name: "pl",
        properties: ["padding-left"],
    },
    paddingRight: {
        name: "pr",
        properties: ["padding-right"],
    },
    margin: {
        name: "m",
        properties: ["margin"],
    },
    marginX: {
        name: "mx",
        properties: ["margin-left", "margin-right"],
    },
    marginY: {
        name: "my",
        properties: ["margin-top", "margin-bottom"],
    },
    marginTop: {
        name: "mt",
        properties: ["margin-top"],
    },
    marginBottom: {
        name: "mb",
        properties: ["margin-bottom"],
    },
    marginLeft: {
        name: "ml",
        properties: ["margin-left"],
    },
    marginRight: {
        name: "mr",
        properties: ["margin-right"],
    },
};

// Utilities configuration
export default {
    alignContent: {
        name: "content",
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
    alignItems: {
        name: "items",
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
    alignSelf: {
        name: "self",
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
    backgroundColor: {
        name: "bg",
        states: ["default", "hover", "focus"],
        responsive: false,
        properties: ["background-color"],
        values: getColorsValues(),
    },
    borderRadius: {
        name: "radius",
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
    color: {
        name: "text",
        states: ["default", "hover", "focus"],
        responsive: false,
        properties: ["color"],
        values: getColorsValues(),
    },
    cursor: {
        name: "cursor",
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
    display: {
        name: "d",
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
    flex: {
        name: "flex",
        states: ["default"],
        responsive: true,
        properties: ["flex"],
        values: {
            "none": "none",
            "initial": "initial",
            "auto": "auto",
        },
    },
    flexDirection: {
        name: "flex",
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
    flexGrow: {
        name: "flex",
        states: ["default"],
        responsive: true,
        properties: ["flex-grow"],
        values: {
            "grow": "1",
            "no-grow": "0",
        },
    },
    flexShrink: {
        name: "flex",
        states: ["default"],
        responsive: true,
        properties: ["flex-shrink"],
        values: {
            "shrink": "1",
            "no-shrink": "0",
        },
    },
    flexWrap: {
        name: "flex",
        states: ["default"],
        responsive: true,
        properties: ["flex-wrap"],
        values: {
            "wrap": "wrap",
            "no-wrap": "nowrap",
        },
    },
    float: {
        name: "float",
        states: ["default"],
        responsive: true,
        properties: ["float"],
        values: {
            left: "left",
            right: "right",
            none: "none",
        },
    },
    font: {
        name: "font",
        states: ["default"],
        responsive: false,
        properties: ["font-family"],
        values: {
            sans: fonts["sans"],
            serif: fonts["serif"],
            mono: fonts["mono"],
        },
    },
    fontSize: {
        name: "text",
        states: ["default"],
        responsive: false,
        properties: ["font-size"],
        values: {
            "xs": "0.75rem",
            "sm": "0.875rem",
            "base": "1rem",
            "lg": "1.25rem",
            "xl": "1.5rem",
            "2xl": "2rem",
            "3xl": "2.5rem",
            "4xl": "3rem",
            "5xl": "3.5rem",
        },
    },
    fontStyle: {
        name: "text",
        states: ["default", "hover"],
        responsive: false,
        properties: ["font-style"],
        values: {
            "italic": "italic",
            "no-italic": "normal",
        },
    },
    fontWeight: {
        name: "weight",
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
    justifyContent: {
        name: "justify",
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
    lineHeight: {
        name: "lh",
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
    opacity: {
        name: "opacity",
        states: ["default", "hover"],
        responsive: false,
        properties: ["opacity"],
        values: {
            "0": 0,
            "5": 0.05,
            "10": 0.1,
            "15": 0.15,
            "20": 0.2,
            "25": 0.25,
            "30": 0.3,
            "35": 0.35,
            "40": 0.4,
            "45": 0.45,
            "50": 0.5,
            "55": 0.55,
            "60": 0.6,
            "65": 0.65,
            "70": 0.7,
            "75": 0.75,
            "80": 0.8,
            "85": 0.85,
            "90": 0.9,
            "95": 0.95,
            "100": 100,
        },
    },
    order: {
        name: "order",
        states: ["default"],
        responsive: true,
        properties: ["order"],
        values: {
            none: "0",
            first: "-999",
            last: "999",
        },
    },
    position: {
        name: "position",
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
    shadow: {
        name: "shadow",
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
    textAlign: {
        name: "text",
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
    textDecoration: {
        name: "text",
        states: ["default", "hover"],
        responsive: false,
        properties: ["text-decoration"],
        values: {
            "underline": "underline",
            "no-underline": "none",
        },
    },
    textTransform: {
        name: "text",
        states: ["default", "hover"],
        responsive: false,
        properties: ["text-transform"],
        values: {
            capitalize: "capitalize",
            uppercase: "uppercase",
            lowercase: "lowercase",
        },
    },
    verticalAlign: {
        name: "valign",
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
    ...Object.fromEntries(Object.keys(overflowProps).map(name => {
        const overflowConfig = {
            name: name,
            states: ["default"],
            properties: [overflowProps[name]],
            values: {
                auto: "auto",
                scroll: "scroll",
                hidden: "hidden",
            },
        };
        return [name, overflowConfig];
    })),
    ...Object.fromEntries(Object.keys(sizingProps).map(key => {
        const sizingConfig = {
            name: sizingProps[key].name,
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
        };
        return [key, sizingConfig];
    })),
    ...Object.fromEntries(Object.keys(spacingProps).map(key => {
        const spacingConfig = {
            name: spacingProps[key].name,
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
        };
        return [key, spacingConfig];
    })),
    ...Object.fromEntries(["bottom","left","right","top"].map(name => {
        const placementConfig = {
            name: name,
            states: ["default"],
            responsive: true,
            properties: [name],
            values: {
                none: "0px",
                half: "50%",
                full: "100%",
                auto: "auto",
            },
        };
        return [name, placementConfig];
    })),
};
