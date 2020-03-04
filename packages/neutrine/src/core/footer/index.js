import React from "react";
import * as helpers from "../../helpers.js";

//Footer layout component
export const Footer = function (props) {
    //Clone the footer props 
    let newProps = helpers.filterProps(props, ["className", "color", "size"]);
    //Initialize the footer class list
    let classList = ["siimple-footer"];
    //Check the color
    if (typeof props.color === "string") {
        classList.push("siimple-footer--" + props.color.toLowerCase());
    }
    //Check the content size
    if (typeof props.size === "string") {
        classList.push("siimple-footer--" + props.size.toLowerCase());
    }
    //Generate the footer classname
    newProps.className = helpers.classNames(classList, props.className);
    //Render the footer div
    return React.createElement("div", newProps, props.children);
};

//Default props
Footer.defaultProps = {
    "color": null, 
    "size": null 
};

//Footer title
export const FooterTitle = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-footer-title"
    });
};

//Footer subtitle
export const FooterSubtitle = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-footer-subtitle"
    });
};

//Footer group
export const FooterGroup = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-footer-group"
    });
};

//Footer link
export const FooterLink = function (props) {
    return helpers.createMergedElement("a", props, {
        "className": "siimple-footer-link"
    });
};

//Footer rule
export const FooterRule = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-footer-rule"
    });
};

