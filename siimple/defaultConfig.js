import {screens, fonts, lineHeights} from "./theme.js";
import colors from "./colors.js";

// Generate a default configuration for siimple
export default {
    // Global flags
    useRootStyles: true,
    useBorderBox: true,
    useRebootStyles: true,
    useMarkupStyles: true,
    useElements: true,
    useUtilities: true,
    useIcons: true,
    // Prefixes
    prefix: "",
    // Default theme breakpoints
    breakpoints: {
        mobile: {
            max: screens.tablet,
        },
        tablet: {
            min: screens.tablet,
        },
        desktop: {
            min: screens.desktop,
        },
        widescreen: {
            min: screens.widescreen,
        },
    },
    // Default theme scales
    scales: {
        colors: {
            primary: colors.blue["500"],
            secondary: colors.royal["500"],
            background: "#fff",
            text: colors.coolgray["700"],
            heading: colors.coolgray["800"],
            muted: colors.coolgray["500"],
            fill: colors.coolgray["200"],
        },
        fonts: {
            body: fonts.sans,
            heading: "inherit",
            monospace: fonts.mono,
        },
        fontSizes: {
            small: "0.875rem",
            body: "16px",
            large: "1.25rem",
        },
        fontWeights: {
            body: "400",
            heading: "700",
            bold: "700",
        },
        lineHeights: {
            heading: lineHeights.tight,
            body: lineHeights.normal,
        },
    },
    // Default styles
    styles: {},
};
