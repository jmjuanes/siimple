import theme from "@siimple/preset-base";
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
