import icons from "./icons.js";
import colors from "./colors.js";
import {screens, fonts, sizes, opacities} from "./theme.js";

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

// Column sizes
const columns = {
    "one-fifth": "20%",
    "one-quarter": "25%",
    "one-third": "33.33%",
    "two-fifths": "40%",
    "half": "50%",
    "three-fifths": "60%",
    "two-thirds": "66.66%",
    "three-quarters": "75%",
    "four-fifths": "80%",
    "full": "100%",
};

// Heading sizes
const headings = {
    "1": "2.5rem",
    "2": "2rem",
    "3": "1.75rem",
    "4": "1.5rem",
    "5": "1.25rem",
    "6": "1rem",
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

// Markup plugin configuration
const markupStyles = {
    p: {
        fontWeight: "body",
        lineHeight: "body",
        marginBottom: "1rem",
        marginTop: "0px",
    },
    a: {
        color: "primary",
    },
    small: {
        fontSize: "small",
    },
    "b,strong": {
        fontWeight: "bold",
    },
    pre: {
        fontFamily: "monospace",
        overflowX: "auto",
    },
    code: {
        color: "primary",
        fontFamily: "monospace",
        fontSize: "small",
        fontWeight: "bold",
        textDecoration: "none",
    },
    hr: {
        backgroundColor: "fill",
        border: "0px",
        display: "block",
        height: "0.125rem",
        padding: "0px",
        "&:not(:first-child)": {
            marginTop: "1rem",
        },
        "&:not(:last-child)": {
            marginBottom: "1rem",
        },
    },
    blockquote: {
        borderLeft: ["0.25rem", "solid", "currentColor"],
        color: "currentColor",
        display: "block",
        marginBottom: "1rem",
        marginLeft: "0px",
        marginRight: "0px",
        opacity: "0.6",
        paddingBottom: "0.75rem",
        paddingLeft: "1.25rem",
        paddingRight: "0.75rem",
        paddingTop: "0.75rem",
    },
    table: {
        width: "100%",
    },
    ...Object.fromEntries(Object.keys(headings).map(heading => {
        const headingConfig = {
            color: "heading",
            fontFamily: "heading",
            fontSize: headings[heading],
            fontWeight: "heading",
            lineHeight: "heading",
        };
        return [`h${heading}`, headingConfig];
    })),
};

// Reboot styles
const rebootStyles = {
    // Reset box sizing of all elements
    // *,
    // *:before,
    // *:after {
    //     box-sizing: border-box;
    // }
    // Set default html style
    html: {
        // boxSizing: "border-box",
        scrollBehavior: "smooth",
    },
    // Set default body style
    body: {
        margin: "0",
        padding: "0",
        minHeight: "100vh",
        textRendering: "optimizeLegibility",
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
    },
    // Reset margins on lists
    "ul,ol,dl": {
        marginBottom: "1rem",
        marginTop: "0",
    },
    // Reset margins on paragraphs
    p: {
        marginBottom: "1rem",
        marginTop: "0",
    },
    // Fix bold weight (in firefox)
    "strong,b": {
        fontWeight: "bold",
    },
    // Make images and videos responsive by default
    "img,video": {
        display: "block",
        height: "auto",
        maxWidth: "100%",
    },
    // Remove border from iframe
    iframe: {
        border: "0",
    },
    // Reset table border
    table: {
        borderCollapse: "collapse",
        borderSpacing: "0",
    },
    // td,
    // th {
    //     padding: 0;
    // }
};

// Base icons styles
const iconsStyles = {
    // Icons font face
    "@font-face": {
        fontFamily: "'siimple-icons'",
        fontStyle: "normal",
        fontWeight: "normal",
        src: [
            "url(./siimple-icons.ttf) format('truetype'),",
            "url(./siimple-icons.woff) format('woff')",
        ],
    },
    // Icons base class
    '[class^="icon-"],[class*=" icon-"]': {
        alignSelf: "center",
        // display: "inline-flex",
        fontFamily: "'siimple-icons'",
        fontStyle: "normal",
        fontWeight: ["normal", "!important"],
        lineHeight: "1",
        textRendering: "auto",
        verticalAlign: "-0.125em",
        "-moz-osx-font-smoothing": "grayscale",
        "-webkit-font-smoothing": "antialiased",
        "&:before": {
            boxSizing: "border-box",
        },
    },
};

// Elements configuration
const elements = {
    alert: {
        styles: {
            alignItems: "center",
            borderRadius: "0.5rem",
            display: "flex",
            fontWeight: "bold",
            marginBottom: "1rem",
            marginTop: "0px",
            minWidth: "0px",
            padding: "1.25rem",
            position: "relative",
        },
        variants: "alert",
        defaultVariants: {
            default: {
                backgroundColor: "primary",
                color: "white",
            },
            secondary: {
                backgroundColor: "secondary",
                color: "white",
            },
        },
    },
    badge: {
        styles: {
            borderRadius: "0.25rem",
            display: "inline-block",
            fontSize: "0.75rem",
            fontWeight: "bold",
            lineHeight: "1.25rem",
            padding: ["0.25rem", "0.5rem"],
            textDecoration: "none",
            verticalAlign: "text-top",
        },
        variants: "badge",
        defaultVariants: {
            default: {
                backgroundColor: "primary",
                color: "white",
            },
            secondary: {
                backgroundColor: "secondary",
                color: "white",
            },
        },
    },
    button: {
        styles: {
            appearance: "none",
            border: "0px",
            borderRadius: "0.5rem",
            cursor: "pointer",
            display: "inline-block",
            fontFamily: "inherit",
            fontSize: "inherit",
            fontWeight: "bold",
            lineHeight: "inherit",
            minWidth: "0px",
            padding: ["0.75rem", "1.5rem"],
            textAlign: "center",
            textDecoration: "none",
            userSelect: "none",
            verticalAlign: "middle",
            "&:hover": {
                textDecoration: "none",
                transitionDuration: "0.3s",
                transitionProperty: "background-color",
            },
        },
        variants: "button",
        defaultVariants: {
            default: {
                backgroundColor: "primary",
                color: "white",
            },
            secondary: {
                backgroundColor: "secondary",
                color: "white",
            },
            disabled: {
                cursor: ["not-allowed", "!important"],
                opacity: ["0.6", "!important"],
            },
            full: {
                display: "block",
                width: "100%",
            },
        },
    },
    card: {
        styles: {
            borderRadius: "0.5rem",
            display: "block",
            padding: "2rem",
            textDecoration: ["none", "!important"],
            width: "100%",
        },
        variants: "card",
        defaultVariants: {
            default: {
                backgroundColor: "white",
                color: "inherit",
            },
        },
    },
    checkbox: {
        styles: {
            appearance: "none",
            borderRadius: "0.25rem",
            boxSizing: "border-box",
            cursor: "pointer",
            display: "inline-block",
            height: "1.125rem",
            margin: "0.1875rem",
            position: "relative",
            width: "1.125rem",
            verticalAlign: "top",
            "&:after": {
                backgroundColor: "transparent",
                content: "''",
                height: "0.375rem",
                position: "absolute",
            },
            "&:checked,&:indeterminate": {
                transitionDuration: "0.3s",
                transitionProperty: "background-color",
            },
            "&:indeterminate:after": {
                borderBottomStyle: "solid",
                borderBottomWidth: "0.125rem",
                left: "0.3125rem",
                top: "0.25rem",
                width: "0.5rem",
            },
            "&:checked:after": {
                borderBottomStyle: "solid",
                borderBottomWidth: "0.125rem",
                borderLeftStyle: "solid",
                borderLeftWidth: "0.125rem",
                left: "0.25rem",
                top: "0.3125rem",
                transform: "rotate(-45deg)",
                width: "0.625rem",
            },
        },
        variants: "form.checkbox",
        defaultVariants: {
            default: {
                backgroundColor: "fill",
                color: "white",
                "&:checked,&:indeterminate": {
                    backgroundColor: "primary",
                },
                "&:indeterminate:after": {
                    borderBottomColor: "white",
                },
                "&:checked:after": {
                    borderBottomColor: "white",
                    borderLeftColor: "white",
                },
            },
        },
    },
    close: {
        styles: {
            appearance: "none",
            backgroundColor: "transparent",
            border: "none",
            color: "currentColor",
            cursor: "pointer",
            display: "inline-flex",
            height: "1rem",
            opacity: 0.6,
            position: "relative",
            transition: ["opacity", "0.3s"],
            width: "1rem",
            "&:hover": {
                opacity: 1.0,
            },
            "&:before,&:after": {
                backgroundColor: "currentColor",
                borderRadius: "1px",
                content: "''",
                height: "3px",
                left: "0px",
                position: "absolute",
                top: "6px",
                width: "1rem",
            },
            "&:before": {
                transform: "rotate(45deg)",
            },
            "&:after": {
                transform: "rotate(-45deg)",
            },
        },
        variants: "button.close",
        defaultVariants: {},
    },
    column: {
        styles: {
            flex: "1",
            minHeight: "0",
            padding: "1rem",
            width: "100%"
        },
        variants: "column",
        defaultVariants: {
            ...Object.fromEntries(Object.keys(columns).map(column => {
                const columnStyles = {
                    flex: "none",
                    width: columns[column],
                    "@breakpoints": {
                        "&-{{breakpoint}}": {
                            flex: "none",
                            width: columns[column],
                        },
                    },
                };
                return [column, columnStyles];
            })),
            hidden: {
                "display": "none",
                "@breakpoints": {
                    "&-{{breakpoint}}": {
                        "display": "none",
                    }
                },
            },
        },
    },
    columns: {
        styles: {
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "-1rem",
            marginRight: "-1rem",
        },
        variants: "columns",
        defaultVariants: {},
    },
    content: {
        styles: {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            width: "100%",
        },
        variants: "content",
        defaultVariants: Object.fromEntries(Object.keys(screens).map(screen => {
            const contentQuery = `@media screen and (min-width: ${screens[screen]})`;
            const contentStyles = {
                [contentQuery]: {
                    maxWidth: screens[screen],
                },
            };
            return [screen, contentStyles];
        })),
    },
    crumb: {
        styles: {
            color: "currentColor",
            cursor: "pointer",
            opacity: "0.6",
            paddingBottom: "0.5rem",
            paddingLeft: "0.75rem",
            paddingRight: "1.5rem",
            paddingTop: "0.5rem",
            position: "relative",
            textDecoration: "none",
            "&:hover": {
                opacity: "1.0",
                transition: ["opacity", "0.3s"],
            },
            "&:not(:last-child)::after": {
                borderRightColor: "currentColor",
                borderRightWidth: "2px",
                borderRightStyle: "solid",
                borderTopWidth: "2px",
                borderTopStyle: "solid",
                borderTopColor: "currentColor",
                content: "''",
                display: "block",
                height: "0.5rem",
                position: "absolute",
                right: "0.25rem",
                top: "1rem",
                transform: "rotate(45deg)",
                width: "0.5rem",
            },
        },
        variants: "navigation.crumb",
        defaultVariants: {
            default: {
                fontWeight: "bold",
            },
            active: {
                cursor: "default",
                opacity: "1.0",
                pointerEvents: "none",
            },
        },
    },
    crumbs: {
        styles: {
            borderRadius: "0.5rem",
            display: "flex",
            flexWrap: "nowrap",
            marginBottom: "1rem",
            overflow: "hidden",
            overflowX: "auto",
            padding: "0.5rem",
            whiteSpace: ["nowrap", "!important"],
        },
        variants: "navigation.crumbs",
        defaultVariants: {},
    },
    divider: {
        styles: {
            border: "0px",
            display: "block",
            height: "0.125rem",
            padding: "0px",
            "&:not(:first-child)": {
                marginTop: "1rem",
            },
            "&:not(:last-child)": {
                marginBottom: "1rem",
            },
        },
        variants: "divider",
        defaultVariants: {
            default: {
                backgroundColor: "fill",
            },
        },
    },
    input: {
        styles: {
            borderColor: "transparent",
            borderStyle: "solid",
            borderWidth: "0.125rem",
            borderRadius: "0.5rem",
            boxSizing: "border-box",
            color: "inherit",
            display: "block",
            fontFamily: "inherit",
            fontSize: "inherit",
            lineHeight: "inherit",
            margin: "0px",
            minWidth: "0px",
            outline: "0px",
            padding: ["0.625rem", "1rem"],
            // verticalAlign: "top",
            width: "100%",
        },
        variants: "form.input",
        defaultVariants: {
            default: {
                backgroundColor: "fill",
                fontWeight: "normal",
                "&:focus": {
                    borderColor: "primary",
                },
            },
        },
    },
    label: {
        styles: {
        alignItems: "center",
        display: "flex",
        fontSize: "1rem",
        minWidth: "0px",
        paddingBottom: "0.25rem",
        paddingTop: "0.25rem",
        width: "100%",
        },
        variants: "form.label",
        defaultVariants: {
            default: {
                color: "inherit",
                fontWeight: "bold",
            },
        },
    },
    modal: {
        styles: {
            backgroundColor: "white",
            borderRadius: "0.5rem",
            display: "block",
            maxHeight: "90vh",
            overflowY: "auto",
            padding: "2rem",
            width: "100%",
        },
        variants: "dialog.modal",
        defaultVariants: {
            default: {
                maxWidth: "500px",
            },
            small: {
                maxWidth: "300px",
            },
            large: {
                maxWidth: "900px",
            },
        },
    },
    navlink: {
        styles: {
            borderRadius: "0.5rem",
            color: "inherit",
            cursor: "pointer",
            display: "block",
            margin: "0px",
            padding: "0.75rem",
            textDecoration: ["none", "!important"],
            userSelect: "none",
            whiteSpace: "nowrap",
            width: "100%",
        },
        variants: "navigation.link",
        defaultVariants: {
            default: {
                fontWeight: "bold",
                "&:hover": {
                    color: "primary",
                },
            },
            active: {
                color: "primary",
            },
            disabled: {
                opacity: "0.5",
                pointerEvents: "none",
            },
        },
    },
    paragraph: {
        styles: {
            display: "block",
            marginBottom: "1rem",
            marginTop: "0px",
        },
        variants: "text.paragraph",
        defaultVariants: {
            default: {
                fontWeight: "body",
                lineHeight: "body",
            },
            lead: {
                color: "muted",
                fontSize: "large",
                fontWeight: "bold",
            },
        },
    },
    progress: {
        styles: {
            appearance: "none",
            border: "none",
            borderRadius: "999px",
            display: "block",
            height: "0.5rem",
            margin: ["0px", "!important"],
            overflow: "hidden",
            padding: ["0px", "!important"],
            width: "100%",
            "&::-webkit-progress-bar": {
                backgroundColor: "transparent",
            },
            "&::-webkit-progress-value": {
                backgroundColor: "currentColor",
            },
            "&::-moz-progress-bar": {
                backgroundColor: "currentColor",
            },
        },
        variants: "form.progress",
        defaultVariants: {
            default: {
                backgroundColor: "fill",
                color: "primary",
            },
        },
    },
    radio: {
        styles: {
            appearance: "none",
            boxSizing: "border-box",
            cursor: "pointer",
            display: "inline-block",
            height: "1.25rem",
            margin: "0.125rem",
            position: "relative",
            width: "1.25rem",
            "&:before": {
                borderStyle: "solid",
                borderRadius: "100%",
                borderWidth: "0.1875rem",
                content: "''",
                display: "block",
                height: "1.25rem",
                left: "0px",
                position: "absolute",
                top: "0px",
                width: "1.25rem",
            },
            "&:after": {
                backgroundColor: "transparent",
                borderRadius: "999px",
                content: "''",
                display: "block",
                height: "0.5rem",
                left: "0.375rem",
                position: "absolute",
                top: "0.375rem",
                width: "0.5rem",
            },
            "&:checked:after": {
                backgroundColor: ["currentColor", "!important"],
            },
            "&:checked:before": {
                borderColor: ["currentColor", "!important"],
            },
        },
        variants: "form.radio",
        defaultVariants: {
            default: {
                color: "primary",
                "&:before": {
                    borderColor: "fill",
                },
                "&:hover:after": {
                    backgroundColor: "fill",
                },
            },
        },
    },
    scrim: {
        styles: {
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            height: "100%",
            justifyContent: "center",
            left: "0px",
            overflowY: "hidden",
            overflowX: "hidden",
            position: "fixed",
            top: "0px",
            width: "100%",
            zIndex: "400",
        },
        variants: "dialog.scrim",
        defaultVariants: {},
    },
    select: {
        styles: {
            // appearance: "none",
            borderColor: "transparent",
            borderStyle: "solid",
            borderWidth: "0.125rem",
            borderRadius: "0.5rem",
            boxSizing: "border-box",
            color: "inherit",
            display: "block",
            fontSize: "inherit",
            lineHeight: "inherit",
            margin: "0px",
            minHeight: "3rem",
            minWidth: "0px",
            outline: "0px",
            padding: ["0.625rem", "1rem"],
            // verticalAlign: "top",
            width: "100%",
        },
        variants: "form.select",
        defaultVariants: {
            default: {
                backgroundColor: "fill",
                "&:focus": {
                    borderColor: "primary",
                },
            },
        },
    },
    slider: {
        styles: {
            appearance: "none",
            borderRadius: "1rem",
            cursor: "pointer",
            display: "block",
            height: "0.25rem",
            marginBottom: "0.5rem",
            marginTop: "0.5rem",
            minWidth: "0px",
            outline: "none",
            transition: ["opacity", "0.2s"],
            width: "100%",
            "&:-webkit-slider-thumb,&:-moz-range-thumb,&:-ms-thumb": {
                backgroundColor: "currentColor",
                border: "none",
                borderRadius: "999px",
                boxSizing: "border-box",
                height: "1rem",
                width: "1rem",
            },
            "&:-webkit-slider-thumb": {
                appearance: "none",
            },
            "&:-ms-thumb": {
                marginTop: "0px",
            },
        },
        variants: "form.slider",
        defaultVariants: {
            default: {
                backgroundColor: "fill",
                color: "primary",
            },
            disabled: {
                color: "muted",
                cursor: "not-allowed",
                opacity: "0.7",
            },
        },
    },
    spinner: {
        styles: {
            display: "inline-block",
            height: "2rem",
            position: "relative",
            width: "2rem",
            "&:before,&:after": {
                border: ["0.25rem", "solid", "transparent"],
                borderRadius: "100%",
                content: "''",
                display: "block",
                height: "2rem",
                left: "0px",
                position: "absolute",
                top: "0px",
                width: "2rem",
            },
            "&:before": {
                borderColor: "currentColor",
                opacity: "0.2",
            },
            "&:after": {
                animationDuration: "1s",
                animationIterationCount: "infinite",
                animationName: "spinnerAnimation",
                animationTimingFunction: "linear",
                borderTopColor: "currentColor",
            },
        },
        variants: "spinner",
        defaultVariants: {
            default: {
                color: "primary",
            },
        },
        keyframes: {
            spinnerAnimation: {
                from: {
                    transform: "rotate(0deg)",
                },
                to: {
                    transform: "rotate(359deg)",
                },
            },
        },
    },
    switch: {
        styles: {
            appearance: "none",
            boxSizing: "border-box",
            cursor: "pointer",
            display: "inline-block",
            height: "1.25rem",
            position: "relative",
            width: "2rem",
            "&:after": {
                backgroundColor: "white",
                borderRadius: "100%",
                content: "''",
                display: "block",
                height: "0.875rem",
                left: "0.1875rem",
                position: "absolute",
                top: "0.1875rem",
                transition: ["left", "0.3s", "ease"],
                width: "0.875rem",
                zIndex: "2",
            },
            "&:before": {
                borderRadius: "2rem",
                content: "''",
                display: "block",
                height: "100%",
                left: "0px",
                position: "absolute",
                top: "0px",
                transition: ["background-color", "0.3s", "ease"],
                width: "100%",
                zIndex: "1",
            },
            "&:checked:after": {
                left: "1rem",
            },
            "&:checked:before": {
                backgroundColor: "currentColor",
            },
        },
        variants: "form.switch",
        defaultVariants: {
            default: {
                color: "primary",
                "&:before": {
                    backgroundColor: "fill",
                },
            },
        },
    },
    table: {
        styles: {
            backgroundColor: "transparent",
            borderCollapse: "separate",
            borderSpacing: "0",
            borderWidth: "0px",
            boxSizing: "border-box",
            display: "table",
            marginBottom: "2rem",
            width: "100%",
            "& tr": {
               boxSizing: "border-box",
               display: "table-row",
            },
            "& th,& td": {
                boxSizing: "border-box",
                display: "table-cell",
                lineHeight: "inherit",
            },
            "& thead": {
                boxSizing: "border-box",
                display: "table-header-group",
            },
            "& thead th": {
                fontWeight: "600",
                textAlign: "left",
                verticalAlign: "bottom",
            },
            "& tbody": {
                display: "table-row-group",
                verticalAlign: "middle",
            },
            "& tbody td": {
                verticalAlign: "top",
            },
            "& thead tr:first-child th:first-child": {
                borderTopLeftRadius: "0.5rem",
            },
            "& thead tr:first-child th:last-child": {
                borderTopRightRadius: "0.5rem",
            },
            "& tbody tr:last-child td:first-child": {
               borderBottomLeftRadius: "0.5rem",
            },
            "& tbody tr:last-child td:last-child": {
               borderBottomRightRadius: "0.5rem",
            },
        },
        variants: "table",
        defaultVariants: {
            default: {
                "& th,& td": {
                    backgroundColor: "white",
                    padding: "1.5rem",
                },
            },
            divided: {
                "& thead th": {
                    borderBottomColor: "fill",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.125rem",
                },
                "& tbody td": {
                    borderTopColor: "fill",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.125rem",
                },
            },
            bordered: {
                "& th,& td": {
                    borderColor: "fill",
                    borderStyle: "solid",
                    borderWidth: "0.125rem",
                },
                "& th:not(:last-child),& td:not(:last-child)": {
                    borderRightWidth: ["0px", "!important"],
                },
                "& tbody tr:not(:last-child) td": {
                    borderBottomWidth: ["0px", "!important"],
                },
            },
            fixed: {
                tableLayout: "fixed",
            },
        },
    },
    textarea: {
        styles: {
            borderColor: "transparent",
            borderStyle: "solid",
            borderWidth: "0.125rem",
            borderRadius: "0.5rem",
            boxSizing: "border-box",
            color: "inherit",
            display: "block",
            fontFamily: "inherit",
            fontSize: "inherit",
            lineHeight: "inherit",
            margin: "0px",
            minWidth: "0px",
            outline: "0px",
            padding: ["0.625rem", "1rem"],
            resize: "vertical",
            // verticalAlign: "top",
            width: "100%",
        },
        variants: "form.textarea",
        defaultVariants: {
            default: {
                backgroundColor: "fill",
                "&:focus": {
                    borderColor: "primary",
                },
            },
        },
    },
    title: {
        styles: {
            display: "block",
            marginBottom: "0.5em",
            padding: "0px",
            "&:not(:first-child)": {
                marginTop: "2rem",
            },
        },
        variants: "text.heading",
        defaultVariants: {
            default: {
                color: "heading",
                fontFamily: "heading",
                fontWeight: "heading",
                lineHeight: "heading",
            },
            ...Object.fromEntries(Object.keys(headings).map(name => {
                const headingStyles = {
                    fontSize: headings[name],
                };
                return [name, headingStyles];
            })),
        },
    },
    toggler: {
        styles: {
            appearance: "none",
            borderColor: "transparent",
            borderRadius: "0.5rem",
            borderStyle: "solid",
            borderWidth: "0.125rem",
            color: "currentColor",
            cursor: "pointer",
            display: "block",
            height: "3rem",
            opacity: "0.8",
            paddingLeft: "0.75rem",
            paddingRight: "0.75rem",
            position: "relative",
            width: "3rem",
            zIndex: "400",
            "&:hover": {
                opacity: "1.0",
            },
            "&:before": {
                borderTop: ["0.25rem", "solid", "currentColor"],
                borderBottom: ["0.25rem", "solid", "currentColor"],
                content: "''",
                height: "1.25rem",
                left: "0.5rem",
                position: "absolute",
                width: "1.75rem",
                top: "0.75rem",
            },
            "&:after": {
                backgroundColor: "currentColor",
                content: "''",
                height: "0.25rem",
                left: "0.5rem",
                position: "absolute",
                width: "1.75rem",
                top: "1.25rem",
            },
        },
        variants: "button.toggler",
        defaultVariants: {
            default: {
                backgroundColor: "fill",
            },
        },
    },
};

// Utilities configuration
const utilities = {
    alignContent: {
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
    alignItems: {
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
    alignSelf: {
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
    backgroundColor: {
        shortcut: "bg",
        states: ["default", "hover", "focus"],
        responsive: false,
        properties: ["background-color"],
        values: getColorsValues(),
    },
    borderRadius: {
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
    color: {
        shortcut: "text",
        states: ["default", "hover", "focus"],
        responsive: false,
        properties: ["color"],
        values: getColorsValues(),
    },
    cursor: {
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
    display: {
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
    flex: {
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
    flexDirection: {
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
    flexGrow: {
        shortcut: "flex",
        states: ["default"],
        responsive: true,
        properties: ["flex-grow"],
        values: {
            "grow": "1",
            "no-grow": "0",
        },
    },
    flexShrink: {
        shortcut: "flex",
        states: ["default"],
        responsive: true,
        properties: ["flex-shrink"],
        values: {
            "shrink": "1",
            "no-shrink": "0",
        },
    },
    flexWrap: {
        shortcut: "flex",
        states: ["default"],
        responsive: true,
        properties: ["flex-wrap"],
        values: {
            "wrap": "wrap",
            "no-wrap": "nowrap",
        },
    },
    float: {
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
    font: {
        shortcut: "font",
        states: ["default"],
        responsive: false,
        properties: ["font-family"],
        values: fonts,
    },
    fontSize: {
        shortcut: "text",
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
        shortcut: "text",
        states: ["default", "hover"],
        responsive: false,
        properties: ["font-style"],
        values: {
            "italic": "italic",
            "no-italic": "normal",
        },
    },
    fontWeight: {
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
    justifyContent: {
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
    lineHeight: {
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
    opacity: {
        shortcut: "opacity",
        states: ["default", "hover"],
        responsive: false,
        properties: ["opacity"],
        values: opacities,
    },
    order: {
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
    position: {
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
    shadow: {
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
    textAlign: {
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
    textDecoration: {
        shortcut: "text",
        states: ["default", "hover"],
        responsive: false,
        properties: ["text-decoration"],
        values: {
            "underline": "underline",
            "no-underline": "none",
        },
    },
    textTransform: {
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
    verticalAlign: {
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
    ...Object.fromEntries(Object.keys(overflowProps).map(name => {
        const overflowConfig = {
            shortcut: name,
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
        };
        return [key, sizingConfig];
    })),
    ...Object.fromEntries(Object.keys(spacingProps).map(key => {
        const spacingConfig = {
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
        };
        return [key, spacingConfig];
    })),
    ...Object.fromEntries(["bottom","left","right","top"].map(name => {
        const placementConfig = {
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
        };
        return [name, placementConfig];
    })),
};

// Export core modules
export default {
    reboot: actions => actions.addStyles(rebootStyles),
    markup: actions => actions.addStyles(markupStyles),
    elements: actions => {
        return Object.keys(elements).forEach(name => {
            return actions.addElement(name, elements[name]);
        });
    },
    utilities: actions => {
        return Object.keys(utilities).forEach(name => {
            return actions.addUtility(utilities[name]);
        });
    },
    icons: actions => {
        return actions.addStyles({
            ...iconsStyles,
            ...Object.fromEntries(icons.map(icon => {
                const iconSelector = `.icon-${icon.id}:before`;
                const iconStyles = {
                    content: `"\\${icon.unicode.toString(16).toLowerCase()}"`,
                };
                return [iconSelector, iconStyles];
            })),
        });
    },
};
