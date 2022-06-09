import iconsList from "./icons.js";
import {generateIconCssFromPath, getIconsBaseStyles} from "./utils.js";

export default {
    styles: {
        ...getIconsBaseStyles(),
        ...Object.fromEntries(iconsList.map(icon => ([
            `.icon-${icon.name}:before`,
            generateIconCssFromPath(icon.path),
        ]))),
    },
};
