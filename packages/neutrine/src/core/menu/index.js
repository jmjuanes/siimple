import React from "react";
import * as helpers from "../../helpers.js";

//Menu component
export const Menu = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-menu"
    });
};

//Menu group component
export const MenuGroup = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-menu-group"
    });
};

//Menu item
export const MenuItem = function (props) {
    let newProps = helpers.filterProps(props, ["active", "className"]);
    Object.assign(newProps, {
        "className": helpers.classNames({
            "siimple-menu-item": true,
            "siimple-menu-item--active": props.active
        }, props.className)
    });
    //Return the menu item element
    return React.createElement("div", newProps, props.children);
};

//Menu item default props
MenuItem.defaultProps = {
    "active": false
};

//Menu divider
export const MenuDivider = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-menu-divider"
    });
};

