import {buildStyles, mergeConfig, mergeStyles} from "@siimple/core";
import reboot from "@siimple/preset-reboot";
import elements from "@siimple/preset-elements";
import helpers from "@siimple/preset-helpers";

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
        if (config.useRebootStyles) {
            mergeStyles(styles, reboot.styles);
        }
        // Add root styles
        if (config.useRootStyles) {
            mergeStyles(styles, {
                html: config.root || {},
            });
        }
        // Add elements
        if (config.useElements) {
            Object.assign(styles, elements.styles);
            config.variants = {
                ...elements.variants,
                ...(config.variants || {}),
            };
        }
        // Add helpers
        if (config.useHelpers) {
            Object.assign(styles, helpers.styles);
        }
        // Add custom styles
        if (config.styles) {
            mergeStyles(styles, config.styles);
        }
        // Build and return css
        return resolve(buildStyles(styles, config));
    });
};
