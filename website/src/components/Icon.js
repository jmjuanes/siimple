import React from "react";
import kofi from "kofi";

// Export icon wrapper component
export const Icon = props => {
    const newProps = {
        className: kofi.classNames(
            props.icon ? `icon-${props.icon}` : null,
            props.className,
        ),
        style: props.style || null,
    };
    return React.createElement(props.as || "i", newProps);
};
