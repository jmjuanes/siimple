import React from "react";
//import {Icon} from "../../icon/index.js";
import * as helpers from "../../helpers.js";

//Import toolbar styles
import "./style.scss";

//Base class
let baseClass = "neutrine-toolbar";

//Export toolbar wrapper component
export const ToolbarWrapper = function (props) {
    //Toolbar class styles
    let classList = [baseClass + "-wrapper"];
    //Check if toolbar is collapsed
    if (props.collapsed === true) {
        classList.push(baseClass + "-wrapper--collapsed");
    }
    //Return the toolbar element
    return React.createElement("div", {"className": classList.join(" ")}, props.children);
};

//Toolbar wrapper default props
ToolbarWrapper.defaultProps = {
    "collapsed": true
};

//Export toolbar component
export const Toolbar = function (props) {
    //Sidebar base class styles
    let classList = [baseClass];
    //Check the toolbar color
    if (props.color === "light" || props.color === "dark") {
        classList.push(baseClass + "--" + props.color);
    }
    //Build toolbar props
    let toolbarProps = {
        "className": helpers.classNames(classList, props.className),
        "style": props.style
    };
    //Return the toolbar component
    return React.createElement("div", toolbarProps, props.children);
};

//Toolbar default props
Toolbar.defaultProps = {
    "color": "light"
};

//Toolbar toggle
export const ToolbarToggle = function (props) {
    //Build the sidebar toggle props
    let toggleProps = {
        "align": "center",
        "onClick": props.onClick,
        "className": baseClass + "-toggle"
    };
    //Build the toggle icon
    let toggleIcon = React.createElement(Icon, {
        "icon": "chevron-left",
        "className": baseClass + "-toggle-icon"
    });
    //Build the toggle element
    return React.createElement("div", toggleProps, toggleIcon);
};

//Toolbar item
export const ToolbarItem = function (props) {
    //Initialize the button props
    let itemProps = {
        "className": [baseClass + "-item"],
        "onClick": props.onClick
    };
    //Add the button icon
    let icon = null;
    if (props.icon !== null) {
        icon = React.createElement(Icon, {
            "icon": props["icon"],
            "className": baseClass + "-item-icon"
        });
    }
    //itemProps.className.push(baseClass + "-link-" + key);
    //Check if this link is active
    if (typeof props.active === "boolean" && props.active === true) {
        itemProps.className.push(baseClass + "-item--active");
    }
    //Merge the classnames
    itemProps.className = itemProps.className.join(" ");
    //Return the toolbar item element
    return React.createElement("div", itemProps, icon, props.text);
};

//Toolbar item default props
ToolbarItem.defaultProps = {
    "text": "",
    "icon": null,
    "active": false,
    "onClick": null,
};

//Toolbar separator
export const ToolbarSeparator = function (props) {
    return React.createElement("div", {
        "className": baseClass + "-separator"
    });
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

