import {screens, fonts, fontSizes, lineHeights} from "./theme.js";
import colors from "./colors.js";

// Generate a default configuration for siimple
export default {
    // Global flags
    useRootStyles: true,
    useBorderBox: true,
    useElements: true,
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
            background: colors.white,
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
            small: fontSizes["sm"],
            body: "16px",
            large: fontSizes["lg"],
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
