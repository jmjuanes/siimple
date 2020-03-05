import React from "react";
import * as helpers from "../helpers.js";

//Export icon component
export const Icon = function (props) {
    //Filter props
    let newProps = helpers.filterProps(props, ["className", "icon", "iconTag", "size"]);
    //Update icon props
    Object.assign(newProps, {
        "className": helpers.classNames(props.className, {
            "si": true,
            ["si-" + props.icon]: props.icon !== ""
        }),
        "style": helpers.styles({
            "fontSize": props.size,
            "lineHeight": "normal"
        }, props.style)
    });
    //Return the icon
    return React.createElement(props.iconTag, newProps, props.children);
};

//Icon default props
Icon.defaultProps = {
    "icon": "",
    "className": null,
    "iconTag": "span",
    "size": null
};

