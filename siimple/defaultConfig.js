import defaultTheme from "@siimple/theme";

// Generate a default configuration for siimple
export default {
    // Global flags
    useRebootStyles: true,
    useRootStyles: true,
    useBorderBox: true,
    useElements: true,
    useHelpers: true,
    // Initial values
    prefix: "",
    root: {},
    variants: {},
    styles: {},
    // Extend default theme
    ...defaultTheme,
};
