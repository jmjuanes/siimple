import React from "react";
import * as helpers from "../helpers.js";

//Import icons
import "@siimple/icons/dist/siimple-icons.css";

//Export icon component
export const Icon = function (props) {
    //Filter props
    let filteredProps = helpers.filterProps(props, ["className", "icon", "iconTag"]);
    //Initialize the icon class name list
    let iconClassNames = ["si"];
    //Add the icon class name
    if (typeof props.icon === "string") {
        iconClassNames.push("si-" + props.icon);
    }
    //Add the class names
    filteredProps.className = helpers.classNames(iconClassNames, props.className);
    //Return the icon
    return React.createElement(props.iconTag, filteredProps, props.children);
};

//Icon default props
Icon.defaultProps = {
    "icon": null,
    "className": null,
    "iconTag": "span"
};

