import React from "react";
import * as helpers from "../../helpers.js";

//Export blockquote component 
export const Blockquote = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-blockquote"
    });
};

//Export code component 
export const Code = function (props) {
    return helpers.createMergedElement("code", props, {
        "className": "siimple-code"
    });
};

//HEading wrapper
export const Heading = function (props) {
    //Initialize the header props
    let newProps = helpers.filterProps(props, ["type", "className"]);
    //Initialize the header class list
    let classList = [];
    //Check the header type
    if (typeof props.type === "string" && props.type.charAt(0).toLowerCase() === "h" && props.type.length === 2) {
        classList.push("siimple-" + props.type.toLowerCase().trim());
    }
    //Generate the header classname
    newProps.className = helpers.classNames(classList, props.className);
    //Return the heading element
    return React.createElement("div", newProps, props.children);
};

//Default heading props
Heading.defaultProps = {
    "type": "h1"
};

//Export single heading components
export const Heading1 = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-h1"
    });
};
export const Heading2 = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-h2"
    });
};
export const Heading3 = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-h3"
    });
};
export const Heading4 = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-h4"
    });
};
export const Heading5 = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-h5"
    });
};
export const Heading6 = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-h6"
    });
};

//Export link component 
export const Link = function (props) {
    return helpers.createMergedElement("a", props, {
        "className": "siimple-link"
    });
};

//Paragraph component
export const Paragraph = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-paragraph"
    });
};

//Lead paragraph component
export const Lead = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-lead"
    });
};

//Export pre component 
export const Pre = function (props) {
    return helpers.createMergedElement("pre", props, {
        "className": "siimple-pre"
    });
};

//Export small text component 
export const Small = function (props) {
    return helpers.createMergedElement("span", props, {
        "className": "siimple-small"
    });
};

