import React from "react";
import * as helpers from "../../helpers.js";

//Grid class
//DEPRECATED --> not used anymore
export const Grid = function (props) {
    console.log("@siimple/neutrine: Grid component has been removed");
    return React.createElement(React.Fragment, {}, props.children);
};

//Grid row
export const Row = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-row"
    });
};

//Grid column class
export const Column = function (props) {
    //Extract props
    let newProps = helpers.filterProps(props, ["className", "size", "extraLarge", "large", "medium", "small", "extraSmall"]);
    let classList = ["siimple-column"];
    //Check the column size
    if (typeof props.size === "number" || typeof props.size === "string") {
        classList.push("siimple-column--" + props.size);
    }
    if (typeof props.extraLarge === "number" || typeof props.extraLarge === "string") {
        classList.push("siimple-column--xl-" + props.extraLarge);
    }
    if (typeof props.large === "number" || typeof props.large === "string") {
        classList.push("siimple-column--lg-" + props.large);
    }
    if (typeof props.medium === "number" || typeof props.medium === "string") {
        classList.push("siimple-column--md-" + props.medium);
    }
    if (typeof props.small === "number" || typeof props.small === "string") {
        classList.push("siimple-column--sm-" + props.medium);
    }
    if (typeof props.extraSmall === "number" || typeof props.extraSmall === "string") {
        classList.push("siimple-column--xs-" + props.extraSmall);
    }
    //Join all class names
    newProps.className = helpers.classNames(classList, props.className);
    //Return the grid element
    return React.createElement("div", newProps, props.children);
};

//Column default props
Column.defaultProps = {
    "size": null, 
    "extraLarge": null,
    "large": null, 
    "medium": null, 
    "small": null,
    "extraSmall": null
};

