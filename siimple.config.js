import theme from "@siimple/preset-theme";
// import colors from "@siimple/colors";

export default {
    useReboot: true,
    useRootStyles: true,
    useBorderBox: true,
    useElements: true,
    useHelpers: true,
    useMarkup: true,
    useIcons: true,
    prefix: "",
    ...theme,
    fontWeights: {
        ...theme.fontWeights,
        black: "900",
    },
    sizes: {
        ...theme.sizes,
        "192": "48rem",
    },
    styles: {
        ".is-scrollable": {
            overflow: "auto",
        },
    },
};
