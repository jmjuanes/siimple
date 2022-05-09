import theme from "@siimple/preset-theme";
// import colors from "@siimple/colors";
import reboot from "@siimple/preset-reboot";
import markup from "@siimple/preset-markup";
import elements from "@siimple/preset-elements";
import helpers from "@siimple/preset-helpers";
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
        ...reboot.styles,
        ...markup.styles,
        ...elements.styles,
        ...helpers.styles,
        ...icons.styles,
    },
};
