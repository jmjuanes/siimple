import React from "react";
import * as helpers from "../../helpers.js";

//Spinner element
export const Spinner = function (props) {
    let newProps = helpers.filterProps(props, ["className", "color"]);
    //Initialize the spinner class-list
    let classList = ["siimple-spinner"];
    //Check the color attribute
    if(typeof props.color === "string") {
        classList.push("siimple-spinner--" + props.color);
    }
    newProps.className = helpers.classNames(classList, props.className);
    //Return the spinner element
    return React.createElement("div", newProps, null);
};

//Spinner default props
Spinner.defaultProps = { 
    "color": "primary"
};

