import colors from "@siimple/colors";

const screens = {
    tablet: "640px",
    desktop: "1264px",
    widescreen: "1504px",
};

const sizes = {
    // "0": "0px",
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
    "96": "24rem",
    "128": "32rem",
    "256": "64rem",
    "half": "50%",
    "full": "100%",
    "none": "0px",
    "one": "1px",
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
        ...Object.keys(colors).reduce((list, name) => {
            if (typeof colors[name] === "string") {
                list[name] = colors[name];
            }
            else {
                Object.keys(colors[name]).forEach(shade => {
                    list[`${name}-${shade}`] = colors[name][shade];
                });
            }
            return list;
        }, {}),
    },
    fonts: {
        sans: [
            "-apple-system", 
            "BlinkMacSystemFont", 
            "'Segoe UI'", 
            "Roboto", 
            "'Helvetica Neue'", 
            "Arial", 
            "sans-serif",
        ],
        serif: [
            "Georgia", 
            "Cambria", 
            "'Times New Roman'", 
            "Times", 
            "serif",
        ],
        monospace: [
            "SFMono-Regular", 
            "Menlo", 
            "Monaco", 
            "Consolas", 
            "'Liberation Mono'", 
            "'Courier New'", 
            "monospace",
        ],
    },
    fontSizes: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "16px",
        "lg": "1.25rem",
        "xl": "1.5rem",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
        "6xl": "3.5rem",
        "7xl": "4rem",
        "8xl": "4.5rem",
        "9xl": "5rem",
    },
    fontWeights: {
        thin: "100",
        light: "300",
        normal: "400",
        medium: "500",
        bold: "700",
        black: "900",
    },
    lineHeights: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
    },
    opacities: {
        "0": 0,
        "5": 0.05,
        "10": 0.1,
        "15": 0.15,
        "20": 0.2,
        "25": 0.25,
        "30": 0.3,
        "35": 0.35,
        "40": 0.4,
        "45": 0.45,
        "50": 0.5,
        "55": 0.55,
        "60": 0.6,
        "65": 0.65,
        "70": 0.7,
        "75": 0.75,
        "80": 0.8,
        "85": 0.85,
        "90": 0.9,
        "95": 0.95,
        "100": 100,
    },
    radius: {
        sm: "0.25rem",
        default: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px",
        none: "0px",
    },
    shadows: {
        small: "0 0.25rem 1rem -0.125rem rgba(54,63,79,0.15),0 0 0 1px rgba(54,63,79,0.02)",
        default: "0 0.5rem 1rem -0.25rem rgba(54,63,79,0.2), 0 0 0 1px rgba(54,63,79,0.02)",
        large: "0rem 1rem 1rem -0.5rem rgba(54,63,79,0.25),0 0 0 1px rgba(54,63,79,0.02)",
        none: "none",
    },
    sizes: {
        ...sizes,
        auto: "auto",
        screen: "100vh",
    },
    spaces: {
        ...sizes,
        auto: "auto",
    },
};
