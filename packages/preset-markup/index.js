export default {
    styles: {
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
        "strong,b": {
            fontWeight: "bold",
            apply: "text.strong",
        },
        pre: {
            fontFamily: "monospace",
            overflowX: "auto",
        },
        code: {
            color: "primary",
            fontFamily: "monospace",
            fontSize: "0",
            fontWeight: "bold",
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
            width: "100%",
        },
        ...Object.fromEntries([6,5,4,3,2,1].map(index => {
            const headingNumber = 7 - index;
            const headingConfig = {
                color: "inherit",
                fontFamily: "heading",
                fontSize: `${index}`,
                fontWeight: "heading",
                lineHeight: "heading",
                apply: "text.heading",
            };
            return [`h${(headingNumber)}`, headingConfig];
        })),
    },
};
