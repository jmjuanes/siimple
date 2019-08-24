import React from "react";
import * as helpers from "../../helpers.js";

//Import menu styles
import "@siimple/css/scss/components/menu.scss";

//Menu component
export const Menu = function (props) {
    return helpers.createMergedElement("div", props, "siimple-menu");
};

//Menu group component
export const MenuGroup = function (props) {
    return helpers.createMergedElement("div", props, "siimple-menu-group");
};

//Menu item
export const MenuItem = function (props) {
    //Clone the properties 
    let newProps = helpers.filterProps(props, ["selected", "className"]);
    //Initialize the menu item class list
    let classList = ["siimple-menu-item"];
    //Check the selected attribute
    if (props.selected === true) {
        classList.push("siimple-menu-item--selected");
    }
    //Generate the menu item classname
    newProps.className = helpers.classNames(classList, props.className);
    //Return the menu item element
    return React.createElement("div", newProps, props.children);
};

//Menu item default props
MenuItem.defaultProps = {
    "selected": false
};

