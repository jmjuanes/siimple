import base from "@siimple/preset-base";

// theme colors
export const colors = {
    primary: "#161b29",
    secondary: "#757789",
    muted: "#d8d9de",
    highlight: "#9394a3",
    white: "#fff",
};

export default {
    ...base,
    meta: {
        name: "noir",
        fonts: [
            "https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700",
        ],
    },
    // Scales
    colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        muted: colors.muted,
        text: colors.primary,
        heading: colors.primary,
        highlight: colors.highlight,
        background: colors.white,
    },
    fonts: {
        ...base.fonts,
        body: "'Noto Serif', serif",
        heading: "inherit",
    },
    fontWeights: {
        body: "400",
        bold: "700",
        heading: "700",
    },
    // Mixins
    bordered: {
        borderColor: "primary",
        borderRadius: "0.5rem",
        borderStyle: "solid",
        borderWidth: "0.125rem",
    },
    shadowed: {
        boxShadow: [
            "0rem 1rem 1rem -0.5rem rgba(54,63,79,0.25)",
            "0 0 0 1px rgba(54,63,79,0.02)",
        ].join(","),
    },
    // Variants
    badges: {
        outlined: {
            apply: "bordered",
            backgroundColor: "background",
            color: "primary",
            padding: ["0.125rem", "0.375rem"],
        },
    },
    buttons: {
        outlined: {
            apply: "bordered",
            backgroundColor: "background",
            color: "primary",
            padding: ["0.625rem", "1.375rem"],
            "&:hover": {
                backgroundColor: "primary",
                color: colors.white,
            },
        },
    },
    layout: {
        card: {
            apply: "bordered",
            // backgroundColor: colors.white,
            boxShadow: ["none", "!important"],
        },
    },
    dialogs: {
        modal: {
            apply: "bordered",
            // backgroundColor: colors.white,
        },
        scrim: {
            backdropFilter: "blur(2px)",
        },
    },
    forms: {
        input: {
            apply: "bordered",
            backgroundColor: "background",
            "&:focus": {
                borderColor: "primary",
            },
        },
        select: {
            apply: "bordered",
            backgroundColor: "background",
            "&:focus": {
                borderColor: "primary",
            },
        },
        textarea: {
            apply: "bordered",
            backgroundColor: "background",
            "&:focus": {
                borderColor: "primary",
            },
        },
    },
    links: {
        dropdown: {
            apply: "bordered",
            backgroundColor: "background",
        },
        nav: {
            color: "primary",
            "&:hover": {
                backgroundColor: "muted",
            },
            // "&.is-active": {
            //     backgroundColor: "highlight",
            //     color: colors.white,
            // },
        },
    },
    styles: {
        hr: {
            backgroundColor: "primary",
        },
        // Additional helpers
        ".is-bordered": {
            apply: "bordered",
        },
    },
};
