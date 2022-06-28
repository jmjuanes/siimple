import theme from "@siimple/preset-theme";
// import colors from "@siimple/colors";

export default {
    useRootStyles: true,
    useBorderBox: true,
    prefix: "",
    ...theme,
    sizes: {
        ...theme.sizes,
        "192": "48rem",
    },
    styles: {},
};
