import theme from "@siimple/theme";
import colors from "@siimple/colors";

export default {
    useReboot: true,
    useRootStyles: true,
    useBorderBox: true,
    useElements: true,
    useHelpers: true,
    useMarkup: true,
    useIcons: true,
    prefix: "",
    // Custom color palette for internal use
    colors: {
        ...theme.colors,
        ...Object.keys(colors).reduce((list, name) => {
            Object.keys(colors[name]).forEach(shade => {
                list[`${name}-${shade}`] = colors[name][shade];
            });
            return list;
        }, {}),
    },
    fontWeights: {
        ...theme.fontWeights,
        black: "900",
    },
    sizes: {
        ...theme.sizes,
        "192": "48rem",
    },
};
