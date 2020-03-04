import React from "react";
import * as helpers from "../../helpers.js";

//Step component
export const Steps = function (props) {
    let newProps = helpers.filterProps(props, ["className", "color"]);
    //Initialize the class list
    let classList = ["siimple-steps"];
    //Check the color property
    if (typeof props.color === "string") {
        classList.push("siimple-steps--" + props.color);
    }
    //Add the className prop
    newProps.className = helpers.classNames(classList, props.className);
    //Return the steps wrapper
    return React.createElement("div", newProps, props.children);
};

//Steps default props
Steps.defaultProps = {
    "color": "primary"
};

//Steps item
export const StepsItem = function (props) {
    let newProps = helpers.filterProps(props, ["className", "current", "checked"]);
    //Initialize the class list
    let classList = ["siimple-steps-item"];
    //Check the current property
    if (props.current === true) {
        classList.push("siimple-steps-item--current");
    }
    //Check the checked option
    if (props.checked === true) {
        classList.push("siimple-steps-item--checked");
    }
    //Add the className prop
    newProps.className = helpers.classNames(classList, props.className);
    //Return the steps wrapper
    return React.createElement("div", newProps, props.children);
};

//Steps item default props
StepsItem.defaultProps = {
    "current": false,
    "icon": null
};

//Steps title
export const StepsTitle = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-steps-title"
    });
};

//Steps description
export const StepsDescription = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-steps-description"
    });
};

