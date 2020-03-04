import React from "react";
import * as helpers from "../../helpers.js";

//Content layout component
export const Content = function (props) {
    //Content props
    let newProps = helpers.filterProps(props, ["className", "size"]);
    //Initialize the content class list
    let classList = ["siimple-content"];
    //Check the content size
    if (typeof props.size === "string") {
        classList.push("siimple-content--" + props.size.toLowerCase());
    }
    //Generate the content className
    newProps.className = helpers.classNames(classList, props.className);
    //Render the content div
    return React.createElement("div", newProps, props.children);
};

//Default props
Content.defaultProps = {
    "size": null 
};

