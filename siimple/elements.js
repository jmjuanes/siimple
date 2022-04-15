import {screens, fonts, fontSizes, sizes, opacities} from "./theme.js";

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

// Elements configuration
export default {
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
            "1": {
                fontSize: fontSizes["4xl"],
            },
            "2": {
                fontSize: fontSizes["3xl"],
            },
            "3": {
                fontSize: fontSizes["2xl"],
            },
            "4": {
                fontSize: fontSizes["xl"]
            },
            "5": {
                fontSize: fontSizes["lg"],
            },
            "6": {
                fontSize: fontSizes["base"]
            },
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
