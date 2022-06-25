import theme from "@siimple/preset-theme";
// import colors from "@siimple/colors";
import icons from "@siimple/preset-icons";

export default {
    useRootStyles: true,
    useBorderBox: true,
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
        ...icons.styles,
    },
};
