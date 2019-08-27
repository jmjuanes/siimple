import React from "react";
//import {Icon} from "../../icon/index.js";
import * as helpers from "../../helpers.js";

//Import toolbar styles
import "../styles/toolbar.scss";

//Base class
let baseClass = "neutrine-layout-toolbar";

//Export toolbar wrapper component
export const ToolbarContainer = function (props) {
    //Toolbar class styles
    let classList = [baseClass + "-container"];
    //Check if toolbar is collapsed
    if (props.collapsed === true) {
        classList.push(baseClass + "-container--collapsed");
    }
    //Return the toolbar element
    return React.createElement("div", {"className": classList.join(" ")}, props.children);
};

//Toolbar container default props
ToolbarContainer.defaultProps = {
    "collapsed": true
};

//Export toolbar 
export const Toolbar = function (props) {
    //Initialize the toolbar props
    let toolbarProps = {
        "className": baseClass
    };
    //Return the sidebar element
    return React.createElement("div", toolbarProps, props.children);
};

//Toolbar default props
Toolbar.defaultProps = {};

//Toolbar toggle
export const ToolbarToggle = function (props) {
    return React.createElement("div", {
        "className": baseClass + "-toggle",
        "onClick": props.onClick
    });
};

//Toolbar toggle default props
ToolbarToggle.defaultProps = {
    "onClick": null
};

//Toolbar item
export const ToolbarItem = function (props) {
    //Initialize the item classlist
    let classList = [baseClass + "-item"];
    //Check if this item is active
    if (props.active === true) {
        classList.push(baseClass + "-item--active");
    }
    //Build the item props
    let itemProps = {
        "className": helpers.classNames(classList, props.className),
        "onClick": props.onClick
    };
    //Check for custom icon
    if (props.icon !== null && typeof props.icon === "string") {
        itemProps.style = {
            "backgroundImage": "url('" + props.icon + "')"
        };
    }
    //Return the item
    return React.createElement("div", itemProps, props.text); 
};

//Toolbar item defualt props
ToolbarItem.defaultProps = {
    "onClick": null,
    "active": false,
    "icon": null,
    "text": null
};

//Toolbar group
export const ToolbarGroup = function (props) {
    //Toolbar group default props
    let groupProps = {
        "className": baseClass + "-group"
    };
    //Return the toolbar group element
    return React.createElement("div", groupProps, props.text);
};

//Toolbar group default props
ToolbarGroup.defaultProps = {
    "text": null
};

