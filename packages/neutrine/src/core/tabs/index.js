import React from "react";
import * as helpers from "../../helpers.js";

//Import tab styles
import "@siimple/css/scss/components/tabs.scss";

//Export tabs component
export const Tabs = function (props) {
    return helpers.createMergedElement("div", props, "siimple-tabs");
};

//Tabs item component 
export const TabsItem = function (props) {
    //Extend the tabs item properties
    let newProps = reactUtils.filterProps(props, ["selected", "className"]);
    //Initialize the tabs item class list
    let classList = ["siimple-tabs-item"];
    //Check the selected attribute 
    if (props.selected === true) {
        classList.push("siimple-tabs-item--selected");
    }
    //Generate the tabs item classname
    newProps.className = reactUtils.classNames(classList, props.className);
    //Return the tab item
    return React.createElement("div", newProps, props.children);
};

//Tabs item default props 
TabsItem.defaultProps = {
    "selected": false
};

