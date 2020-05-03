import React from "react";
import * as helpers from "../../helpers.js";

//Card base component
export const Card = function (props) {
    let newProps = helpers.filterProps(props, ["className", "theme"]);
    Object.assign(newProps, {
        "className": helpers.classNames({
            "siimple-card": true,
            ["siimple-card--" + props.theme]: props.theme === "light" || props.theme === "dark"
        }, props.className)
    });
    return React.createElement("div", newProps, props.children);
};

Card.defaultProps = {
    "theme": ""
};

//Card content component 
export const CardContent = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-card-content"
    });
};

//Card image component 
export const CardImage = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-card-image"
    });
};

//Card link component
export const CardLink = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-card-link"
    });
};

