import {fontSizes} from "siimple/theme.js";

const headings = [
    fontSizes["4xl"],  // h1
    fontSizes["3xl"],  // h2
    fontSizes["2xl"],  // h3
    fontSizes["xl"],   // h4
    fontSizes["lg"],   // h5
    fontSizes["base"], // h6
];

// Markup preset configuration
export default {
    styles: {
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
        ...Object.fromEntries(headings.map((size, index) => {
            const headingConfig = {
                color: "heading",
                fontFamily: "heading",
                fontSize: size,
                fontWeight: "heading",
                lineHeight: "heading",
            };
            return [`h${(index + 1)}`, headingConfig];
        })),
    },
};
