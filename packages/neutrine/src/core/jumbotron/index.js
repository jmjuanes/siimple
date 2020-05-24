import React from "react";
import * as helpers from "../../helpers.js";

//Jumbotron base component
export const Jumbotron = function (props) {
    //Clone the jumbotron props 
    let newProps = helpers.filterProps(props, ["className", "color", "size"]);
    //Initialize the jumbotron class names list
    let classList = ["siimple-jumbotron"];
    //Check the jumbotron color
    if (typeof props.color === "string") {
        classList.push("siimple-jumbotron--" + props.color.toLowerCase());
    }
    //Check the jumbotron size property
    if (typeof props.size === "string") {
        classList.push("siimple-jumbotron--" + props.size.toLowerCase());
    }
    //Generate the jumbotron classname
    newProps.className = helpers.classNames(classList, props.className);
    //Return the parent div
    return React.createElement("div", newProps, props.children);
};

//Jumbotron default props
Jumbotron.defaultProps = {
    "color": null, 
    "size": null
};

//Jumbotron title
export const JumbotronTitle = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-jumbotron-title"
    });
};

//Jumbotron subtitle 
export const JumbotronSubtitle = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-jumbotron-subtitle"
    });
};

