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
        body: "Rubik, apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
        heading: "'EB Garamond', serif",
    },
    fontWeights: {
        body: "400",
        bold: "700",
        heading: "800",
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
    buttons: {
        outlined: {
            apply: "bordered",
            backgroundColor: colors.white,
            color: "primary",
            "&:hover": {
                backgroundColor: "primary",
                color: colors.white,
            },
        },
    },
    cards: {
        default: {
            apply: "bordered",
            backgroundColor: colors.white,
            boxShadow: ["none", "!important"],
        },
    },
    dialogs: {
        modal: {
            apply: "bordered",
            backgroundColor: colors.white,
        },
        scrim: {
            backdropFilter: "blur(2px)",
        },
    },
    forms: {
        input: {
            apply: "bordered",
            backgroundColor: colors.white,
        },
        select: {
            apply: "bordered",
            backgroundColor: colors.white,
        },
        textarea: {
            apply: "bordered",
            backgroundColor: colors.white,
        },
    },
};
