import icons from "@siimple/preset-icons";
import markup from "@siimple/preset-markup";
import utilities from "@siimple/preset-utilities";
import reboot from "@siimple/preset-reboot";

export default {
    useRootStyles: true,
    useBorderBox: true,
    useElements: true,
    styles: {
        ...reboot.styles,
        ...markup.styles,
        ...utilities.styles,
        ...icons.styles,
    },
};
