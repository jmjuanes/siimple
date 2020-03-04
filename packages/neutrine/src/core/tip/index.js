import React from "react";
import * as helpers from "../../helpers.js";

//Tip class
export const Tip = function (props) {
    let newProps = helpers.filterProps(props, ["className", "color", "icon"]);
    //Initialize tip class list
    let classList = ["siimple-tip"];
    //Add the tip color
    if (typeof props.color === "string") {
        classList.push("siimple-tip--" + props.color.toLowerCase().trim());
    }
    //Add the tip icon
    if (typeof props.icon === "string") {
        classList.push("siimple-tip--" + props.icon.toLowerCase().trim());
    }
    //Generate the class names
    newProps.className = helpers.classNames(classList, props.className);
    //Return the tip element
    return React.createElement("div", newProps, props.children);
};

//Initialize the tip element default props
Tip.defaultProps = { 
    "color": "primary", 
    "icon": null
};

