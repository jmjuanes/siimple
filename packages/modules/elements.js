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

export const elements = {
    alert: {
        type: "div",
        displayName: "Alert",
        styles: {
            apply: "alerts.default",
            alignItems: "center",
            backgroundColor: "primary",
            borderRadius: "0.5rem",
            color: "white",
            display: "flex",
            fontWeight: "bold",
            marginBottom: "1rem",
            marginTop: "0px",
            minWidth: "0px",
            padding: "1.25rem",
            position: "relative",
        },
        variants: "alerts",
        defaultVariants: {
            secondary: {
                backgroundColor: "secondary",
                color: "white",
            },
        },
    },
    badge: {
        type: "span",
        displayName: "Badge",
        styles: {
            apply: "badges.default",
            backgroundColor: "primary",
            borderRadius: "0.25rem",
            color: "white",
            display: "inline-block",
            fontSize: "0.75rem",
            fontWeight: "bold",
            lineHeight: "1.25rem",
            padding: ["0.25rem", "0.5rem"],
            textDecoration: "none",
            verticalAlign: "text-top",
        },
        variants: "badges",
        defaultVariants: {
            secondary: {
                backgroundColor: "secondary",
                color: "white",
            },
        },
    },
    button: {
        type: "button",
        displayName: "Button",
        styles: {
            apply: "buttons.default",
            appearance: "none",
            backgroundColor: "primary",
            border: "0px",
            borderRadius: "0.5rem",
            color: "white",
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
        variants: "buttons",
        excludeVariants: ["close", "menu"],
        defaultVariants: {
            secondary: {
                backgroundColor: "secondary",
                color: "white",
            },
            full: {
                display: "block",
                width: "100%",
            },
            disabled: {
                cursor: ["not-allowed", "!important"],
                opacity: ["0.6", "!important"],
            },
        },
    },
    card: {
        type: "div",
        displayName: "Card",
        styles: {
            // backgroundColor: "white",
            borderRadius: "0.5rem",
            color: "inherit",
            display: "block",
            padding: "2rem",
            textDecoration: ["none", "!important"],
            width: "100%",
            apply: "cards.default",
        },
        variants: "cards",
        defaultVariants: {},
    },
    checkbox: {
        type: "input",
        displayName: "Checkbox",
        defaultProps: {
            type: "checkbox",
        },
        styles: {
            apply: "forms.checkbox",
            appearance: "none",
            backgroundColor: "muted",
            borderRadius: "0.25rem",
            boxSizing: "border-box",
            color: "white",
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
                backgroundColor: "primary",
                transitionDuration: "0.3s",
                transitionProperty: "background-color",
            },
            "&:indeterminate:after": {
                borderBottomColor: "white",
                borderBottomStyle: "solid",
                borderBottomWidth: "0.125rem",
                left: "0.3125rem",
                top: "0.25rem",
                width: "0.5rem",
            },
            "&:checked:after": {
                borderBottomColor: "white",
                borderBottomStyle: "solid",
                borderBottomWidth: "0.125rem",
                borderLeftColor: "white",
                borderLeftStyle: "solid",
                borderLeftWidth: "0.125rem",
                left: "0.25rem",
                top: "0.3125rem",
                transform: "rotate(-45deg)",
                width: "0.625rem",
            },
        },
    },
    close: {
        type: "div",
        displayName: "Close",
        styles: {
            apply: "buttons.close",
            appearance: "none",
            backgroundColor: "transparent",
            border: "none",
            color: "currentColor",
            cursor: "pointer",
            display: "inline-flex",
            height: "1rem",
            opacity: "0.6",
            position: "relative",
            transition: ["opacity", "0.3s"],
            width: "1rem",
            "&:hover": {
                opacity: "1.0",
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
    },
    column: {
        type: "div",
        displayName: "Column",
        styles: {
            apply: "columns.default",
            flex: "1",
            minHeight: "0",
            padding: "1rem",
            width: "100%",
            ...Object.fromEntries(Object.keys(columns).map(column => {
                const styles = {
                    flex: "none",
                    width: columns[column],
                    "@breakpoints": {
                        "&-{{breakpoint}}": {
                            flex: "none",
                            width: columns[column],
                        },
                    },
                };
                return [`&.is-${column}`, styles];
            })),
        },
        variants: "columns",
        defaultVariants: {},
    },
    columns: {
        type: "div",
        displayName: "Columns",
        styles: {
            // apply: "layout.columns",
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "-1rem",
            marginRight: "-1rem",
        },
    },
    container: {
        type: "div",
        displayName: "Container",
        styles: {
            apply: "layout.container",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "1264px",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            width: "100%",
        },
    },
    crumb: {
        type: "a",
        displayName: "Crumb",
        styles: {
            apply: "links.crumb",
            color: "currentColor",
            cursor: "pointer",
            fontWeight: "bold",
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
            "&.is-active": {
                cursor: "default",
                opacity: "1.0",
                pointerEvents: "none",
            },
        },
    },
    crumbs: {
        type: "div",
        displayName: "Crumbs",
        styles: {
            // apply: "links.crumbs",
            borderRadius: "default",
            display: "flex",
            flexWrap: "nowrap",
            marginBottom: "1rem",
            overflow: "hidden",
            overflowX: "auto",
            padding: "0.5rem",
            whiteSpace: ["nowrap", "!important"],
        },
    },
    dropdown: {
        type: "div",
        displayName: "Dropdown",
        styles: {
            apply: "links.dropdown",
            display: "none",
            backgroundColor: "muted",
            borderRadius: "0.5rem",
            position: "absolute",
            top: "100%",
            left: "0px",
            padding: "1rem",
            zIndex: "100",
            ".with-dropdown": {
                position: "relative",
            },
            ".with-dropdown:hover &": {
                display: "block",
            },
        },
    },
    input: {
        type: "input",
        displayName: "Input",
        styles: {
            apply: "forms.input",
            backgroundColor: "muted",
            borderColor: "transparent",
            borderStyle: "solid",
            borderWidth: "0.125rem",
            borderRadius: "0.5rem",
            boxSizing: "border-box",
            color: "inherit",
            display: "block",
            fontFamily: "inherit",
            fontSize: "inherit",
            fontWeight: "normal",
            lineHeight: "inherit",
            margin: "0px",
            minWidth: "0px",
            outline: "0px",
            padding: ["0.625rem", "1rem"],
            // verticalAlign: "top",
            width: "100%",
            "&:focus": {
                borderColor: "primary",
            },
        },
    },
    label: {
        type: "label",
        displayName: "Label",
        styles: {
            apply: "forms.label",
            alignItems: "center",
            color: "inherit",
            display: "flex",
            fontSize: "1rem",
            fontWeight: "bold",
            minWidth: "0px",
            paddingBottom: "0.25rem",
            paddingTop: "0.25rem",
            width: "100%",
        },
    },
    menu: {
        type: "div",
        displayName: "Menu",
        styles: {
            apply: "buttons.menu",
            appearance: "none",
            backgroundColor: "muted",
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
    },
    modal: {
        type: "div",
        displayName: "Modal",
        styles: {
            apply: "dialogs.modal",
            backgroundColor: "background",
            borderRadius: "0.5rem",
            display: "block",
            maxHeight: "90vh",
            maxWidth: "600px",
            overflowY: "auto",
            padding: "2rem",
            width: "100%",
        },
    },
    navlink: {
        type: "a",
        displayName: "Navlink",
        styles: {
            apply: "links.nav",
            borderRadius: "0.5rem",
            color: "inherit",
            cursor: "pointer",
            display: "block",
            fontWeight: "bold",
            margin: "0px",
            padding: "0.75rem",
            textDecoration: ["none", "!important"],
            userSelect: "none",
            whiteSpace: "nowrap",
            width: "100%",
            "&:hover": {
                color: "primary",
            },
            "&.is-active": {
                color: "primary",
            },
            "&.is-disabled": {
                opacity: "0.5",
                pointerEvents: "none",
            },
        },
    },
    progress: {
        type: "progress",
        displayName: "Progress",
        styles: {
            apply: "forms.progress",
            appearance: "none",
            backgroundColor: "muted",
            border: "none",
            borderRadius: "999px",
            color: "primary",
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
    },
    radio: {
        type: "input",
        displayName: "Radio",
        defaultProps: {
            type: "radio",
        },
        styles: {
            apply: "forms.radio",
            appearance: "none",
            boxSizing: "border-box",
            color: "primary",
            cursor: "pointer",
            display: "inline-block",
            height: "1.25rem",
            margin: "0.125rem",
            position: "relative",
            width: "1.25rem",
            "&:before": {
                borderColor: "muted",
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
            "&:hover:after": {
                backgroundColor: "muted",
            },
            "&:checked:after": {
                backgroundColor: ["currentColor", "!important"],
            },
            "&:checked:before": {
                borderColor: ["currentColor", "!important"],
            },
        },
    },
    scrim: {
        type: "div",
        displayName: "Scrim",
        styles: {
            apply: "dialogs.scrim",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
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
    },
    select: {
        type: "select",
        displayName: "Select",
        styles: {
            apply: "forms.select",
            // appearance: "none",
            backgroundColor: "muted",
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
            "&:focus": {
                borderColor: "primary",
            },
        },
    },
    slider: {
        type: "input",
        displayName: "Slider",
        defaultProps: {
            type: "range",
        },
        styles: {
            apply: "forms.slider",
            appearance: "none",
            backgroundColor: "muted",
            borderRadius: "1rem",
            color: "primary",
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
    },
    spinner: {
        type: "div",
        displayName: "Spinner",
        styles: {
            apply: "spinners.default",
            color: "primary",
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
            "@keyframes spinnerAnimation": {
                from: {
                    transform: "rotate(0deg)",
                },
                to: {
                    transform: "rotate(359deg)",
                },
            },
        },
        variants: "spinners",
        defaultVariants: {
            secondary: {
                color: "primary",
            },
        },
    },
    switch: {
        type: "input",
        displayName: "Switch",
        defaultProps: {
            type: "checkbox",
        },
        styles: {
            apply: "forms.switch",
            appearance: "none",
            boxSizing: "border-box",
            color: "primary",
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
                backgroundColor: "muted",
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
    },
    textarea: {
        type: "textarea",
        displayName: "Textarea",
        styles: {
            apply: "forms.textarea",
            backgroundColor: "muted",
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
            "&:focus": {
                borderColor: "primary",
            },
        },
    },
    // 
    // DEPRECATED ELEMENTS: TO BE REMOVED IN THE NEXT MAJOR RELEASE
    // USE MARKUP ELEMENTS INSTEAD
    //
    divider: {
        type: "div",
        displayName: "Divider",
        styles: {
            apply: "styles.hr",
            backgroundColor: "muted",
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
    },
    paragraph: {
        type: "p",
        displayName: "Paragraph",
        styles: {
            apply: "text.paragraph",
            display: "block",
            marginBottom: "1rem",
            marginTop: "0px",
            "&.is-lead": {
                fontSize: "2",
                fontWeight: "bold",
            },
        },
    },
    table: {
        type: "table",
        displayName: "Table",
        styles: {
            apply: "styles.table",
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
                // backgroundColor: "white",
                boxSizing: "border-box",
                display: "table-cell",
                lineHeight: "inherit",
                padding: "1rem", // "1.5rem",
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
            "&.is-divided": {
                "& thead th": {
                    borderBottomColor: "muted",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.125rem",
                },
                "& tbody td": {
                    borderTopColor: "muted",
                    borderTopStyle: "solid",
                    borderTopWidth: "0.125rem",
                },
            },
            "&.is-bordered": {
                "& th,& td": {
                    borderColor: "muted",
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
            "&.is-fixed": {
                tableLayout: "fixed",
            },
        },
    },
    title: {
        type: "div",
        displayName: "Title",
        styles: {
            apply: "text.heading",
            color: "heading",
            display: "block",
            fontFamily: "heading",
            fontWeight: "heading",
            lineHeight: "heading",
            marginBottom: "0.5em",
            padding: "0px",
            "&:not(:first-child)": {
                marginTop: "2rem",
            },
            ...Object.fromEntries([6,5,4,3,2,1].map(index => {
                const headingConfig = {
                    fontSize: `${index}`,
                };
                return [`&.is-${(7 - index)}`, headingConfig];
            })),
        },
    },
};
