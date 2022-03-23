import {screens, fonts} from "./globals.js";
import colors from "./colors.js";
import elements from "./elements.js";
import utilities from "./utilities.js";

// Generate a default configuration for siimple
export default {
    flags: {
        useRootStyles: true,
        useBorderBox: true,
    },
    prefix: "",
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
            heading: "1.125",
            body: "1.5",
        },
    },
    corePlugins: {
        reboot: true,
        markup: true,
        elements: true,
        utilities: true,
        icons: true,
        ...Object.fromEntries(Object.keys(elements).map(key => {
            return [key, true];
        })),
        ...Object.fromEntries(Object.keys(utilities).map(key => {
            return [key, true];
        })),
    },
};
