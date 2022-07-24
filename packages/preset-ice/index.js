import base from "@siimple/preset-base";

// Color palette based on https://github.com/arcticicestudio/nord 
// LICENSE: https://github.com/arcticicestudio/nord/blob/develop/LICENSE.md (MIT LICENSE)
export const baseColors = {
    polar: [
        "#2e3440", // Polar night (nord0)
        "#3b4252", // Ponar night (nord1)
        "#434c5e", // Polar night (nord2)
        "#4c566a", // Polar night (nord3)
    ],
    snow: [
        "#d8dee9", // Snow storm (nord4)
        "#e5e9f0", // Snow storm (nord5)
        "#eceff4", // Snow storm (nord6)
    ],
    frost: [
        "#8fbcbb", // Frost (nord7)
        "#88c0d0", // Frost (nord8)
        "#81a1c1", // Frost (nord9)
        "#5e81ac", // Frost (nord10)
    ],
    aurora: [
        "#bf616a", // Aurora (nord11)
        "#d08770", // Aurora (nord12)
        "#ebcb8b", // Aurora (nord13)
        "#a3be8c", // Aurora (nord14)
        "#b48ead", // Aurora (nord15)
    ],
};

export default {
    ...base,
    colors: {
        primary: baseColors.frost[3],
        secondary: baseColors.aurora[4],
        background: "#fff",
        text: baseColors.polar[1],
        muted: baseColors.snow[2],
        danger: baseColors.aurora[0],
        warning: baseColors.aurora[2],
        success: baseColors.aurora[3],
        ...baseColors,
    },
    fonts: {
        body: "Poppins, sans-serif",
        heading: "Poppins, sans-serif",
        monospace: "Menlo, monospace",
    },
    // Mixins
    ...Object.fromEntries(["alerts","badges","buttons"].map(name => {
        return [name, {
            "&.is-danger": {
                backgroundColor: "danger",
                color: "white",
            },
            "&.is-warning": {
                backgroundColor: "warning",
                color: "white",
            },
            "&.is-success": {
                backgroundColor: "success",
                colors: "white",
            },
        }];
    })),
    forms: {
        checkbox: {
            backgroundColor: "muted",
            "&:checked,&:indeterminate": {
                backgroundColor: "primary",
            },
        },
        ...Object.fromEntries(["input","select", "textarea"].map(el => {
            return [el, {
                backgroundColor: "muted",
                "&:focus": {
                    borderColor: "primary",
                },
            }];
        })),
        radio: {
            color: "primary",
            "&:before": {
                borderColor: "muted",
            },
            "&:hover:after": {
                backgroundColor: "muted",
            },
        },
    },
};
