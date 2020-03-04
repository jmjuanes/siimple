import React from "react";
import * as helpers from "../../helpers.js";

//Breadcrumb parent component
export const Breadcrumb = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-breadcrumb"
    });
};

//Breadcrumb item component
export const BreadcrumbItem = function (props) {
    let newProps = helpers.filterProps(props, ["active", "className"]);
    Object.assign(newProps, {
        "className": helpers.classNames({
            "siimple-breadcrumb-item": true,
            "siimple-breadcrumb-item--active": props.active === true
        }, props.className)
    });
    //Return the breadcrumb item
    return React.createElement("div", newProps, props.children);
};

BreadcrumbItem.defaultProps = {
    "active": false
};

