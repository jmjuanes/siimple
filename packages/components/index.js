import React from "react";
import icons from "@siimple/icons";
import {useTheme, Box, styled} from "@siimple/react";
import {elements} from "@siimple/modules/elements.js";
import {markup} from "@siimple/modules/markup.js";

// Base styles
export const BaseStyles = props => {
    const theme = useTheme();
    return React.createElement(Box, {
        ...props,
        as: "div",
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

// Generate elements
export const Elements = Object.fromEntries(
    Object.keys(elements).map(key => {
        const config = elements[key];
        const Component = React.forwardRef((props, ref) => {
            const {variant, ...rest} = props;
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
                    ...props.css,
                },
            });
        });
        return [key, Component];
    }),
);

// Markup styled elements
export const Markup = Object.fromEntries(
    Object.keys(markup).map(key => {
        const Component = styled(key, {
            ...markup[key],
            apply: `styles.${key}`,
        });

        return [key, Component];   
    }),
);

// Icon component
export const Icon = props => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
    >
        <path
            d={props.path || icons[props.icon]?.path}
            fill="none"
            stroke={props.stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={props.strokeWidth}
        />
    </svg>
);

Icon.defaultProps = {
    icon: "siimple",
    height: "1rem",
    path: null,
    stroke: "currentColor",
    strokeWidth: "2",
    width: "1rem",
};
