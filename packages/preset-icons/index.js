import iconsList from "./icons.js";
import {generateIconCssFromPath} from "./utils.js";

export default {
    styles: {
        '[class^="icon-"],[class*=" icon-"]': {
            alignSelf: "center",
            display: "inline-flex",
            lineHeight: "1",
            textRendering: "auto",
            verticalAlign: "-0.125em",
        },
        '[class^="icon-"]:before,[class*=" icon-"]:before': {
            content: "''",
            display: "inline-block",
            width: "1em",
            height: "1em",
            backgroundColor: "currentColor",
        },
        ...Object.fromEntries(iconsList.map(icon => ([
            `.icon-${icon.name}:before`,
            generateIconCssFromPath(icon.path),
        ]))),
    },
};
