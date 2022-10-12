import colors from "@siimple/colors";

export const fonts = {
    sans: [
        "-apple-system", 
        "BlinkMacSystemFont", 
        "'Segoe UI'", 
        "Roboto", 
        "'Helvetica Neue'", 
        "Arial", 
        "sans-serif",
    ].join(", "),
    serif: [
        "Georgia", 
        "Cambria", 
        "'Times New Roman'", 
        "Times", 
        "serif",
    ].join(", "),
    monospace: [
        "SFMono-Regular", 
        "Menlo", 
        "Monaco", 
        "Consolas", 
        "'Liberation Mono'", 
        "'Courier New'", 
        "monospace",
    ].join(", "),
};

export const screens = {
    tablet: "640px",
    desktop: "1264px",
    widescreen: "1504px",
};

export const sizes = {
    "0": "0px",
    "4": "1rem",
    "8": "2rem",
    "12": "3rem",
    "16": "4rem",
    "24": "6rem",
    "32": "8rem",
    "48": "12rem",
    "64": "16rem",
    "96": "24rem",
    "192": "48rem",
};

export const space = {
    "0": "0px",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "6": "1.5rem",
    "8": "2rem",
    "12": "3rem",
    "16": "4rem",
    "24": "6rem",
};

export default {
    meta: {
        name: "base",
        fonts: [],
    },
    breakpoints: {
        mobile: {
            max: screens.tablet,
        },
        tablet: {
            min: screens.tablet,
        },
        desktop: {
            min: screens.desktop,
        },
    },
    colors: {
        primary: colors.blue["500"],
        secondary: colors.royal["500"],
        highlight: colors.blue["200"],
        muted: colors.gray["200"],
        text: colors.gray["700"],
        heading: colors.gray["800"],
        background: "#fff",
        dark: colors.gray["800"],
        light: colors.gray["100"],
        white: "#fff",
    },
    fonts: {
        body: fonts.sans,
        heading: "inherit",
        code: fonts.monospace,
    },
    fontSizes: [
        "0.875rem", // 0
        "16px",     // 1
        "1.25rem",  // 2
        "1.5rem",   // 3
        "1.75rem",  // 4
        "2rem",     // 5
        "2.5rem",   // 6
        "3rem",
        "3.5rem",
        "4rem",
        "4.5rem",
    ],
    fontWeights: {
        body: "400",
        heading: "700",
    },
    lineHeights: {
        heading: "1.25",
        body: "1.5",
    },
    sizes: sizes,
    space: space,
    // Default root styles
    root: {
        backgroundColor: "background",
        color: "text",
        fontFamily: "body",
        fontSize: "1",
        fontWeight: "body",
        lineHeight: "body",
    },
};
