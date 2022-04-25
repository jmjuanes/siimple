import {buildUtilities} from "@siimple/core";

const props = [
    {
        shortcut: "flex",
        states: ["default", "responsive"],
        properties: ["flex"],
        values: {
            "none": "none",
            "initial": "initial",
            "auto": "auto",
        },
    },
    {
        shortcut: "flex",
        states: ["default", "responsive"],
        properties: ["flex-direction"],
        values: {
            "row": "row", 
            "column": "column", 
            "row-rev": "row-reverse", 
            "column-rev": "column-reverse",
        },
    },
    {
        shortcut: "flex",
        states: ["default", "responsive"],
        properties: ["flex-grow"],
        values: {
            "grow": "1",
            "no-grow": "0",
        },
    },
    {
        shortcut: "flex",
        states: ["default", "responsive"],
        properties: ["flex-shrink"],
        values: {
            "shrink": "1",
            "no-shrink": "0",
        },
    },
    {
        shortcut: "flex",
        states: ["default", "responsive"],
        properties: ["flex-wrap"],
        values: {
            "wrap": "wrap",
            "wrap-rev": "wrap-reverse",
            "no-wrap": "nowrap",
        },
    },
    {
        shortcut: "content",
        states: ["default", "responsive"],
        properties: ["align-content"],
        values: {
            start: "flex-start",
            end: "flex-end",
            center: "center",
            between: "space-between",
            around: "space-around",
            evenly: "space-evenly",
        },
    },
    {
        shortcut: "items",
        states: ["default", "responsive"],
        properties: ["align-items"],
        values: {
            start: "flex-start",
            end: "flex-end",
            center: "center",
            stretch: "stretch",
            baseline: "baseline",
        },
    },
    {
        shortcut: "self",
        states: ["default", "responsive"],
        properties: ["align-self"],
        values: {
            auto: "auto",
            start: "flex-start",
            end: "flex-end",
            center: "center",
            stretch: "stretch",
            baseline: "baseline",
        },
    },
    {
        shortcut: "justify",
        states: ["default", "responsive"],
        properties: ["justify-content"],
        values: {
            start: "flex-start",
            end: "flex-end",
            center: "center",
            between: "space-between",
            around: "space-around",
            evenly: "space-evenly",
        },
    },
    {
        shortcut: "justify-items",
        states: ["default", "responsive"],
        properties: ["justify-items"],
        values: {
            start: "start",
            end: "end",
            center: "center",
            stretch: "stretch",
        },
    },
    {
        shortcut: "justify-self",
        states: ["default", "responsive"],
        properties: ["justify-self"],
        values: {
            auto: "auto",
            start: "start",
            end: "end",
            center: "center",
            stretch: "stretch",
        },
    },
    {
        shortcut: "order",
        states: ["default", "responsive"],
        properties: ["order"],
        values: {
            none: "0",
            first: "-999",
            last: "999",
        },
    },
];

// Export flexbox utilities
export default {
    styles: buildUtilities(props),
};
