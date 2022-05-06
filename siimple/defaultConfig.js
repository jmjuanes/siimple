import defaultTheme from "@siimple/preset-theme";

// Generate a default configuration for siimple
export default {
    // Global flags
    useReboot: true,
    useRootStyles: true,
    useBorderBox: true,
    useMarkup: true,
    useElements: true,
    useHelpers: true,
    useIcons: true,
    // Initial values
    prefix: "",
    root: {},
    variants: {},
    styles: {},
    // Extend default theme
    ...defaultTheme,
};
