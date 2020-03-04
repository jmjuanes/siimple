import React from "react";
import * as helpers from "../../helpers.js";

//Export tabs component
export const Tabs = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-tabs"
    });
};

//Tabs item component 
export const TabsItem = function (props) {
    let newProps = helpers.filterProps(props, ["active", "className"]);
    Object.assign(newProps, {
        "className": helpers.classNames({
            "siimple-tabs-item": true,
            "siimple-tabs-item--active": props.active
        }, props.className)
    });
    //Return the tab item
    return React.createElement("div", newProps, props.children);
};

//Tabs item default props 
TabsItem.defaultProps = {
    "active": false
};

