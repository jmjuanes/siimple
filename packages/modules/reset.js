const applySameStyles = (items, styles) => Object.fromEntries(items.map(key => ([key, styles])));

export const reset = {
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
    ...applySameStyles(["ul", "ol", "dl"], {
        marginBottom: "1rem",
        marginTop: "0",
    }),
    // Reset margins on paragraphs
    p: {
        marginBottom: "1rem",
        marginTop: "0",
    },
    // Fix bold weight (in firefox)
    ...applySameStyles(["strong", "b"], {
        fontWeight: "bold",
    }),
    // Make images and videos responsive by default
    ...applySameStyles(["img", "video"], {
        display: "block",
        height: "auto",
        maxWidth: "100%",
    }),
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
    // Reset headings
    ...applySameStyles(["h1", "h2", "h3", "h4", "h5", "h6"], {
        // marginTop: "0px",
        marginBottom: "0.5rem",
    }),
};
