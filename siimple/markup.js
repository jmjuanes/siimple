import {headings} from "./globals.js";

// Export markup plugin configuration
export default {
    paragraph: {
        selector: "p",
        styles: {
            marginBottom: "1rem",
            marginTop: "0px",
        },
        variants: "text.paragraph",
        defaultVariants: {
            default: {
                fontWeight: "body",
                lineHeight: "body",
            },
        },
    },
    link: {
        selector: "a",
        styles: {},
        variants: "text.link",
        defaultVariants: {
            default: {
                color: "primary",
            },
        },
    },
    small: {
        selector: "small",
        styles: {},
        variants: "text.small",
        defaultVariants: {
            default: {
                fontSize: "small",
            },
        },
    },
    bold: {
        selector: "b,strong",
        styles: {},
        variants: "text.bold",
        defaultVariants: {
            default: {
                fontWeight: "bold",
            },
        },
    },
    codeBlock: {
        selector: "pre",
        styles: {
            overflowX: "auto",
        },
        variants: "code.block",
        defaultVariants: {
            default: {
                fontFamily: "monospace",
            },
        },
    },
    codeInline: {
        selector: "code",
        styles: {
            textDecoration: "none",
        },
        variants: "code.inline",
        defaultVariants: {
            default: {
                color: "primary",
                fontFamily: "monospace",
                fontSize: "small",
                fontWeight: "bold",
            },
        },
    },
    divider: {
        selector: "hr",
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
    blockquote: {
        selector: "blockquote",
        styles: {
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
        variants: "text.blockquote",
    },
    table: {
        selector: "table",
        styles: {
            width: "100%",
        },
        variants: "table",
    },
    ...Object.fromEntries(["1", "2", "3", "4", "5", "6"].map(heading => {
        const headingConfig = {
            selector: `h${heading}`,
            styles: {
                fontSize: headings[heading],
            },
            variants: "text.heading",
            defaultVariants: {
                default: {
                    color: "heading",
                    fontFamily: "heading",
                    fontWeight: "heading",
                    lineHeight: "heading",
                },
            },
        };
        return [`heading${heading}`, headingConfig];
    })),
};
