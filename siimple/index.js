import {buildStyles, mergeConfig, mergeStyles} from "@siimple/core";

// Build siimple
export default config => {
    const styles = {};
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
        // Add root styles
        if (config.useRootStyles) {
            mergeStyles(styles, {
                html: config.root || {},
            });
        }
        // Add custom styles
        if (config.styles) {
            mergeStyles(styles, config.styles);
        }
        // Build and return css
        return resolve(buildStyles(styles, config));
    });
};
