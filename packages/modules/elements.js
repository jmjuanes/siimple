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
        ".{{prefix}}alert": {
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
            "&.is-secondary": {
                backgroundColor: "secondary",
                color: "white",
            },
            apply: "alerts",
        },
    },
    badge: {
        ".{{prefix}}badge": {
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
            "&.is-secondary": {
                backgroundColor: "secondary",
                color: "white",
            },
            apply: "badges",
        },
    },
    button: {
        ".{{prefix}}button": {
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
            "&.is-secondary": {
                backgroundColor: "secondary",
                color: "white",
            },
            "&.is-full": {
                display: "block",
                width: "100%",
            },
            "&.is-disabled,&:disabled": {
                cursor: ["not-allowed", "!important"],
                opacity: ["0.6", "!important"],
            },
            apply: "buttons",
        },
    },
    card: {
        ".{{prefix}}card": {
            backgroundColor: "white",
            borderRadius: "0.5rem",
            color: "inherit",
            display: "block",
            padding: "2rem",
            textDecoration: ["none", "!important"],
            width: "100%",
            apply: "cards",
        },
    },
    checkbox: {
        ".{{prefix}}checkbox": {
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
            apply: "forms.checkbox",
        },
    },
    close: {
        ".{{prefix}}close": {
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
            apply: "buttons.close",
        },
    },
    column: {
        ".{{prefix}}column": {
            flex: "1",
            minHeight: "0",
            padding: "1rem",
            width: "100%",
            // Responsive column sizes
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
            apply: "columns",
        },
        ".{{prefix}}columns": {
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "-1rem",
            marginRight: "-1rem",
        },
    },
    container: {
        ".{{prefix}}container": {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "1264px",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            width: "100%",
            apply: "layout.container",
        },
    },
    crumb: {
        ".{{prefix}}crumb": {
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
            apply: "links.crumb",
        },
        ".{{prefix}}crumbs": {
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
    divider: {
        ".{{prefix}}divider": {
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
            apply: "styles.hr",
        },
    },
    dropdown: {
        ".with-dropdown": {
            position: "relative",
        },
        ".{{prefix}}dropdown": {
            display: "none",
            backgroundColor: "muted",
            borderRadius: "0.5rem",
            position: "absolute",
            top: "100%",
            left: "0px",
            padding: "1rem",
            ".with-dropdown:hover &": {
                display: "block",
            },
            apply: "links.dropdown"
        },
    },
    input: {
        ".{{prefix}}input": {
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
            apply: "forms.input",
        },
    },
    label: {
        ".{{prefix}}label": {
            alignItems: "center",
            color: "inherit",
            display: "flex",
            fontSize: "1rem",
            fontWeight: "bold",
            minWidth: "0px",
            paddingBottom: "0.25rem",
            paddingTop: "0.25rem",
            width: "100%",
            apply: "forms.label",
        },
    },
    menu: {
        ".{{prefix}}menu": {
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
            apply: "buttons.menu",
        },
    },
    modal: {
        ".{{prefix}}modal": {
            backgroundColor: "white",
            borderRadius: "0.5rem",
            display: "block",
            maxHeight: "90vh",
            maxWidth: "600px",
            overflowY: "auto",
            padding: "2rem",
            width: "100%",
            apply: "dialogs.modal",
        },
    },
    navlink: {
        ".{{prefix}}navlink": {
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
            apply: "links.nav",
        },
    },
    paragraph: {
        ".{{prefix}}paragraph": {
            display: "block",
            marginBottom: "1rem",
            marginTop: "0px",
            apply: "text.paragraph",
        },
    },
    progress: {
        ".{{prefix}}progress": {
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
            apply: "forms.progress",
        },
    },
    radio: {
        ".{{prefix}}radio": {
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
            apply: "forms.radio",
        },
    },
    scrim: {
        ".{{prefix}}scrim": {
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
            apply: "dialogs.scrim",
        },
    },
    select: {
        ".{{prefix}}select": {
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
            apply: "forms.select",
        },
    },
    slider: {
        ".{{prefix}}slider": {
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
            apply: "forms.slider",
        },
    },
    spinner: {
        ".{{prefix}}spinner": {
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
            "&.is-secondary": {
                color: "secondary"
            },
            apply: "spinners",
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
    switch: {
        ".{{prefix}}switch": {
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
            apply: "forms.switch",
        },
    },
    table: {
        ".{{prefix}}table": {
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
            apply: "styles.table",
        },
    },
    textarea: {
        ".{{prefix}}textarea": {
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
            apply: "forms.textarea",
        },
    },
    title: {
        ".{{prefix}}title": {
            display: "block",
            // fontSize: "2.5rem",
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
            apply: "text.heading",
        },
    },
};
