import React from "react";
import * as helpers from "../../helpers.js";
import "@siimple/css/scss/components/list.scss";

//List component 
export const List = function (props) {
    let newProps = helpers.filterProps(props, ["className", "hover"]);
    Object.assign(newProps, {
        "className": helpers.classNames({
            "siimple-list": true,
            "siimple-list--hover": props.hover
        }, props.className)
    });
    //Return the list element
    return React.createElement("div", newProps, props.children);
};

//List default props 
List.defaultProps = {
    "hover": false
};

//List item component 
export const ListItem = function (props) {
    let newProps = helpers.filterProps(props, ["className", "active"]);
    Object.assign(newProps, {
        "className": helpers.classNames({
            "siimple-list-item": true,
            "siimple-list-item--active": props.active
        }, props.className)
    });
    //Return the list item element
    return React.createElement("div", newProps, props.children);
};

ListItem.defaultProps = {
    "active": false
};

