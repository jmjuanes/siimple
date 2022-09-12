export const markup = {
    p: {
        fontWeight: "body",
        lineHeight: "body",
        marginBottom: "1rem",
        marginTop: "0px",
        apply: "text.paragraph",
    },
    a: {
        color: "primary",
        apply: "text.link",
    },
    small: {
        fontSize: "0",
        apply: "text.small",
    },
    strong: {
        fontWeight: "700",
        apply: "text.strong",
    },
    b: {
        fontWeight: "700",
        apply: "text.strong",
    },
    pre: {
        fontFamily: "code",
        overflowX: "auto",
    },
    code: {
        color: "primary",
        fontFamily: "code",
        fontSize: "0",
        fontWeight: "700",
        textDecoration: "none",
        apply: "text.code",
    },
    hr: {
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
            padding: "1rem",
        },
        "& thead": {
            boxSizing: "border-box",
            display: "table-header-group",
        },
        "& thead th": {
            borderBottomColor: "muted",
            borderBottomStyle: "solid",
            borderBottomWidth: "0.125rem",
            fontWeight: "bold",
            textAlign: "left",
            verticalAlign: "bottom",
        },
        "& tbody": {
            display: "table-row-group",
            verticalAlign: "middle",
        },
        "& tbody td": {
            borderTopColor: "muted",
            borderTopStyle: "solid",
            borderTopWidth: "0.125rem",
            verticalAlign: "top",
        },
    },
    ...Object.fromEntries([6,5,4,3,2,1].map(index => {
        const headingNumber = 7 - index;
        const headingConfig = {
            color: "heading",
            display: "block",
            fontFamily: "heading",
            fontSize: `${index}`,
            fontWeight: "heading",
            lineHeight: "heading",
            marginBottom: "0.5rem",
            padding: "0px",
            apply: "text.heading",
        };
        return [`h${(headingNumber)}`, headingConfig];
    })),
};
