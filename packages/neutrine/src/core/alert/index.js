import React from "react";
import * as helpers from "../../helpers.js";

//Alert component
export const Alert = function (props) {
    //Clone the alert props 
    let newProps = helpers.filterProps(props, ["className", "color"]);
    //Initialize the class list
    let classList = ["siimple-alert"];
    //Check the alert color property
    if (typeof props.color === "string") {
        classList.push("siimple-alert--" + props.color.toLowerCase().trim());
    }
    //Append the provided class list 
    newProps.className = helpers.classNames(classList, props.className);
    return React.createElement("div", newProps, props.children);
};
//Alert default props
Alert.defaultProps = { 
    "color": "primary" 
};

//Alert title component 
export const AlertTitle = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-alert-title"
    });
};

//Alert close component
export const AlertClose = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-alert-close"
    });
};

