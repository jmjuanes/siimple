import React from "react";
import * as helpers from "../../helpers.js";

//Import spinner styles
import "@siimple/css/scss/elements/spinner.scss";

//Spinner element
export const Spinner = function (props) {
    let newProps = helpers.filterProps(props, ["className", "color", "size"]);
    //Initialize the spinner class-list
    let classList = ["siimple-spinner"];
    //Check the color attribute
    if(typeof props.color === "string") {
        classList.push("siimple-spinner--" + props.color);
    }
    //Check the size attribute
    if (typeof props.size === "string") {
        classList.push("siimple-spinner--" + props.size);
    }
    newProps.className = helpers.classNames(classList, props.className);
    //Return the spinner element
    return React.createElement("div", newProps, null);
};

//Spinner default props
Spinner.defaultProps = { 
    "color": "primary", 
    "size": null
};

