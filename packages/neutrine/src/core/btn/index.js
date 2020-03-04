import React from "react";
import * as helpers from "../../helpers.js";

//Button component
export const Btn = function (props) {
    //Initialize the button props 
    let newProps = helpers.filterProps(props, ["className", "color", "disabled", "fluid", "small"]);
    //Initialize the class names list 
    let classList = ["siimple-btn"];
    //Add the button color
    if (typeof props.color === "string") {
        classList.push("siimple-btn--" + props.color.toLowerCase().trim());
    }
    //Add the button disabled option
    if (props.disabled === true) {
        classList.push("siimple-btn--disabled");
    }
    //Check the fluid property
    if (props.fluid === true) {
        //btn_props.style = { width: '100%', paddingLeft: '0px', paddingRight: '0px' };
        classList.push("siimple-btn--fluid");
    }
    //Check the small property
    if (props.small === true) {
        classList.push("siimple-btn--small");
    }
    //Append the provided class names
    newProps.className = helpers.classNames(classList, props.className);
    //Return the button element
    return React.createElement("div", newProps, (props.content !== null) ? props.content : props.children);
};

//Default properties values
Btn.defaultProps = { 
    "color": null, 
    "disabled": false, 
    "fluid": false,
    "small": false,
    "content": null
};

//Button groups
export const BtnGroup = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-btn-group"
    });
};

