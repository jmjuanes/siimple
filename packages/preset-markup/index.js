import theme from "@siimple/theme";

const headings = [
    theme.fontSizes["4xl"],  // h1
    theme.fontSizes["3xl"],  // h2
    theme.fontSizes["2xl"],  // h3
    theme.fontSizes["xl"],   // h4
    theme.fontSizes["lg"],   // h5
    theme.fontSizes["body"], // h6
];

// Markup preset configuration
export default {
    styles: {
        p: {
            // fontWeight: "body",
            // lineHeight: "body",
            marginBottom: "1rem",
            marginTop: "0px",
            variant: "text.paragraph",
        },
        a: {
            color: "primary",
            variant: "text.link",
        },
        small: {
            fontSize: theme.fontSizes["sm"],
            variant: "text.small",
        },
        "strong,b": {
            fontWeight: "bold",
            variant: "text.strong",
        },
        pre: {
            fontFamily: "monospace",
            overflowX: "auto",
        },
        code: {
            color: "primary",
            fontFamily: "monospace",
            fontSize: theme.fontSizes["sm"],
            fontWeight: "bold",
            textDecoration: "none",
            variant: "text.code",
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
            variant: "layout.divider",
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
            variant: "text.quote",
        },
        table: {
            width: "100%",
        },
        ...Object.fromEntries(headings.map((size, index) => {
            const headingConfig = {
                color: "inherit",
                fontFamily: "inherit",
                fontSize: size,
                fontWeight: "bold",
                lineHeight: theme.lineHeights.tight,
                variant: "text.heading",
            };
            return [`h${(index + 1)}`, headingConfig];
        })),
    },
};
