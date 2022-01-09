import React from "react";
import {classNames} from "../utils/classnames.js";

// Export icon wrapper component
export const Icon = props => {
    const newProps = {
        "className": classNames(
            "siimple-icon",
            typeof props.icon === "string" ? `is-${props.icon}` : null,
            props.className,
        ),
        "style": props.style || null,
    };
    return React.createElement(props.as || "i", newProps);
};

// Icon default props
Icon.defaultProps = {
    "as": "i",
    "icon": "",
};
