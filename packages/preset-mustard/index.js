import base from "@siimple/preset-base";

export const colors = {
    primary: "#041f32",
    secondary: "#f8ad15",
    highlight: "#fbe27c",
    muted: "#f8f8fa",
    gray: "#757789",
};

export default {
    ...base,
    // Preset meta information
    meta: {
        name: "mustard",
        fonts: [
            "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",
        ],
    },
    colors: {
        ...colors,
        text: colors.primary,
        heading: colors.primary,
        background: "#fff",
    },
    fonts: {
        ...base.fonts,
        body: "'Inter', sans-serif",
        heading: "inherit",
    },
    // Mixins
    bordered: {
        borderColor: "primary",
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
    alerts: {
        light: {
            backgroundColor: "highlight",
            color: "text",
        },
    },
    badges: {
        light: {
            backgroundColor: "highlight",
            color: "text",
        },
        outlined: {
            apply: "bordered",
            backgroundColor: "background",
            color: "text",
            padding: ["0.125rem", "0.375rem"],
        },
    },
    buttons: {
        light: {
            backgroundColor: "highlight",
            color: "text",
        },
        outlined: {
            apply: "bordered",
            backgroundColor: "background",
            color: "text",
            padding: ["0.625rem", "1.375rem"],
            "&:hover": {
                backgroundColor: "primary",
                color: "white",
            },
        },
    },
    layout: {
        card: {
            apply: "bordered",
        },
    },
    dialogs: {
        modal: {
            apply: "bordered",
        },
    },
    links: {
        nav: {
            "&:hover": {
                backgroundColor: "highlight",
            },
        },
    },
    styles: {
        ".has-font-inter": {
            fontFamily: "body",
        },
    },
};
