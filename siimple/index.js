import {buildStyles, mergeConfig, mergeStyles} from "@siimple/core";
import reboot from "@siimple/preset-reboot";
import markup from "@siimple/preset-markup";
import elements from "@siimple/preset-elements";
import helpers from "@siimple/preset-helpers";
import icons from "@siimple/preset-icons";

import defaultConfig from "./defaultConfig.js";

// Build siimple
export default userConfig => {
    const styles = {};
    const config = mergeConfig(defaultConfig, userConfig);
    return new Promise(resolve => {
        // Add borderbox styles
        if (config.useBorderBox) {
            mergeStyles(styles, {
                html: {
                    boxSizing: "border-box",
                },
                "*,*:before,*:after": {
                    boxSizing: "inherit",
                }
            });
        }
        // Add reboot styles
        if (config.useReboot) {
            mergeStyles(styles, reboot.styles);
        }
        // Add root styles
        if (config.useRootStyles) {
            mergeStyles(styles, {
                html: config.root || {},
            });
        }
        // Add presets
        Object.assign(styles, {
            ...(config.useMarkup ? markup.styles : {}),
            ...(config.useElements ? elements.styles : {}),
            ...(config.useHelpers ? helpers.styles : {}),
            ...(config.useIcons ? icons.styles : {}),
        });
        // Add custom styles
        if (config.styles) {
            mergeStyles(styles, config.styles);
        }
        // Build and return css
        return resolve(buildStyles(styles, config));
    });
};
