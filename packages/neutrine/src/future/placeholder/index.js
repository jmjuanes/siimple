import React from "react";
import * as helpers from "../../helpers.js";
import "./style.scss";

export function Placeholder (props) {
    let newProps = helpers.filterProps(props, ["className", "hover", "border", "fill", "active"]);
    //Assign classname props
    Object.assign(newProps, {
        "className": helpers.classNames(props.className, {
            "neutrine__placeholder": true,
            "neutrine__placeholder--active": props.active === true,
            "neutrine__placeholder--hover": props.hover === true,
            "neutrine__placeholder--border-dashed": props.border === "dashed",
            "neutrine__placeholder--border-solid": props.border === "solid",
            "neutrine__placeholder--fill": props.fill === true
        }),
        "align": "center"
    });
    //Return the placeholder component
    return React.createElement("div", newProps, props.children);
}

Placeholder.defaultProps = {
    "active": false,
    "hover": false,
    "fill": false,
    "border": "dashed"
};

//Placeholder group
export function PlaceholderGroup (props) {
    return helpers.createMergedElement("div", props, {
        "className": "neutrine__placeholder-group"
    });
}

