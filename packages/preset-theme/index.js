import colors from "@siimple/colors";

export const extraColors = {
    inherit: "inherit",
    white: "#fff",
    black: "#000",
    current: "currentColor",
    transparent: "transparent",
};

export const fonts = {
    sans: [
        "-apple-system", 
        "BlinkMacSystemFont", 
        "'Segoe UI'", 
        "Roboto", 
        "'Helvetica Neue'", 
        "Arial", 
        "sans-serif",
    ].join(","),
    serif: [
        "Georgia", 
        "Cambria", 
        "'Times New Roman'", 
        "Times", 
        "serif",
    ].join(","),
    monospace: [
        "SFMono-Regular", 
        "Menlo", 
        "Monaco", 
        "Consolas", 
        "'Liberation Mono'", 
        "'Courier New'", 
        "monospace",
    ].join(","),
};

export const screens = {
    tablet: "640px",
    desktop: "1264px",
    widescreen: "1504px",
};

export const sizes = {
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
    "32": "8rem",
    "40": "10rem",
    "48": "12rem",
    "64": "16rem",
    "80": "20rem",
    "96": "24rem",
};

export default {
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
        widescreen: {
            min: screens.widescreen,
        },
    },
    colors: {
        primary: colors.blue["500"],
        secondary: colors.royal["500"],
        muted: colors.coolgray["200"],
        text: colors.coolgray["700"],
        heading: colors.gray["800"],
        background: "#fff",
        // All colors
        ...Object.keys(colors).reduce((prev, name) => ({
            ...prev,
            ...Object.fromEntries(Object.keys(colors[name]).map(shade => {
                return [`${name}-${shade}`, colors[name][shade]];
            })),
        }), {}),
        // ...extraColors,
    },
    fonts: {
        body: fonts.sans,
        heading: "inherit",
        sans: fonts.sans,
        monospace: fonts.monospace,
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
        bold: "700",
        heading: "700",
    },
    lineHeights: {
        heading: "1.25",
        body: "1.5",
    },
    opacities: {
        "0": 0,
        "25": 0.25,
        "50": 0.5,
        "75": 0.75,
        "100": 100,
    },
    radius: {
        sm: "0.25rem",
        default: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
    },
    shadows: {
        sm: "0 0.25rem 1rem -0.125rem rgba(54,63,79,0.15),0 0 0 1px rgba(54,63,79,0.02)",
        default: "0 0.5rem 1rem -0.25rem rgba(54,63,79,0.2), 0 0 0 1px rgba(54,63,79,0.02)",
        lg: "0rem 1rem 1rem -0.5rem rgba(54,63,79,0.25),0 0 0 1px rgba(54,63,79,0.02)",
    },
    sizes: sizes,
    space: sizes,
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
