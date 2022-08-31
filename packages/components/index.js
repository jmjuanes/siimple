import React from "react";
import {jsx, useTheme} from "@siimple/react";
import elements from "@siimple/modules/elements.js";

const createComponent = name => {
    const config = elements[name];
    return React.forwardRef((props, ref) => {
        const {as, variant, css: customCss, ...rest} = props;
        const theme = useTheme();
        const css = {
            boxSizing: "border-box",
            minWidth: "0",
            ...config.styles,
            ...customCss,
        };

        // Assign variants
        if (config.variants && variant) {
            if (config.defaultVariants?.[variant]) {
                Object.assign(css, config.defaultVariants[variant]);
            }

            const variantStyles = theme[config.variants]?.[variant];
            if (variantStyles) {
                Object.assign(css, variantStyles);
            }
        }

        return jsx(props.as || config.type, {
            ref: ref,
            css: css,
            ...(config.defaultProps || {}),
            ...rest,
        });
    });
};

// Root styles
export const RootStyles = props => {
    const theme = useTheme();
    return jsx("div", {
        ...props,
        css: {
            boxSizing: "border-box",
            background: "background",
            color: "text",
            fontFamily: "body",
            fontWeight: "body",
            lineHeight: "body",
            ...(theme.root || {}),
            ...(props.css || {}),
        },
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
