import React from "react";
import {classNames, useCss, useTheme} from "@siimple/react";
import {elements} from "@siimple/modules/elements.js";

// Wrapper component for applying styles
export const Box = React.forwardRef((props, ref) => {
    const {as, css, ...rest} = props;
    const className = useCss({
        boxSizing: "border-box",
        minWidth: "0",
        ...css,
    });

    return React.createElement(as || "div", {
        ...rest,
        ref: ref,
        className: classNames(className, props.className),
    });
});

// Root styles
export const RootStyles = props => {
    const theme = useTheme();
    const className = useCss({
        boxSizing: "border-box",
        background: "background",
        color: "text",
        fontFamily: "body",
        fontWeight: "body",
        lineHeight: "body",
        ...(theme.root || {}),
        // ...(props.css || {}),
    });
    return React.createElement("div", {
        ...props,
        className: classNames(props.className, className),
    });
};

// Generate a component from elements
const createComponent = name => {
    const config = elements[name];
    return React.forwardRef((props, ref) => {
        const {variant, css, ...rest} = props;
        const theme = useTheme();
        const variantCss = {};
    
        // Assign variants
        if (config?.variants && variant) {
            Object.assign(variantCss, {
                ...(config?.defaultVariants?.[variant] || {}),
                ...(theme[config.variants]?.[variant] || {}),
            });
        }

        return React.createElement(Box, {
            ...(config?.defaultProps || {}),
            ...rest,
            as: props.as || config.type || "div",
            ref: ref,
            css: {
                ...config?.styles,
                ...variantCss,
                ...css,
            },
        });
    });
};

export const Alert = createComponent("alert");
export const Badge = createComponent("badge");
export const Button = createComponent("button");
export const Card = createComponent("card");
export const Checkbox = createComponent("checkbox");
export const Close = createComponent("close");
export const Column = createComponent("column");
export const Columns = createComponent("columns");
export const Container = createComponent("container");
export const Crumb = createComponent("crumb");
export const Crumbs = createComponent("crumbs");
export const Divider = createComponent("divider");
export const Dropdown = createComponent("dropdown");
export const Input = createComponent("input");
export const Label = createComponent("label");
export const Menu = createComponent("menu");
export const Modal = createComponent("modal");
export const Navlink = createComponent("navlink");
export const Paragraph = createComponent("paragraph");
export const Progress = createComponent("progress");
export const Radio = createComponent("radio");
export const Scrim = createComponent("scrim");
export const Select = createComponent("select");
export const Slider = createComponent("slider");
export const Spinner = createComponent("spinner");
export const Switch = createComponent("switch");
export const Table = createComponent("table");
export const Textarea = createComponent("textarea");
export const Title = createComponent("title");
