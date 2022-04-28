import theme from "@siimple/theme";
import colors from "@siimple/colors";
import markup from "@siimple/preset-markup";
import icons from "@siimple/preset-icons";

export default {
    useRebootStyles: true,
    useRootStyles: true,
    useBorderBox: true,
    useElements: true,
    useHelpers: true,
    prefix: "",
    // Custom color palette for internal use
    colors: {
        ...theme.colors,
        ...Object.keys(colors).reduce((list, name) => {
            if (typeof colors[name] === "string") {
                list[name] = colors[name];
            }
            else {
                Object.keys(colors[name]).forEach(shade => {
                    list[`${name}-${shade}`] = colors[name][shade];
                });
            }
            return list;
        }, {}),
    },
    styles: {
        ...markup.styles,
        ...icons.styles,
    },
};
