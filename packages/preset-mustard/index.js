import base from "@siimple/preset-base";

export const colors = {
    primary: "#f8ad15",
    secondary: "#041f32",
    highlight: "#fbe27c",
    muted: "#f1f6fa",
};

export default {
    ...base,
    colors: {
        ...colors,
        text: colors.secondary,
        heading: colors.secondary,
        background: "#fff",
    },
    fonts: {
        ...base.fonts,
        body: "'Inter', sans-serif",
        heading: "inherit",
    },
    bordered: {
        borderColor: "secondary",
        borderStyle: "solid",
        borderWidth: "0.125rem",
    },
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
                backgroundColor: "secondary",
                color: "white",
            },
        },
    },
    cards: {
        default: {
            apply: "bordered",
        },
    },
    // links: {
    //     nav: {
    //         "&:hover": {
    //             backgroundColor: "highlight",
    //         },
    //     },
    // },
};
