import React from "react";
import {Icon} from "../../icon/index.js";
import * as helpers from "../../helpers.js";

//Import app-toolbar styles
import "../styles/toolbar.scss";

//Base class
let baseClass = "neutrine-app-toolbar";

//Export app-toolbar wrapper component
export const AppToolbarWrapper = function (props) {
    //AppToolbar class styles
    let classList = [baseClass + "-wrapper"];
    //Check if app-toolbar is collapsed
    if (props.collapsed === true) {
        classList.push(baseClass + "-wrapper--collapsed");
    }
    //Return the app-toolbar element
    return React.createElement("div", {"className": classList.join(" ")}, props.children);
};

//AppToolbar wrapper default props
AppToolbarWrapper.defaultProps = {
    "collapsed": true
};

//Export app-toolbar component
export const AppToolbar = function (props) {
    //Sidebar base class styles
    let classList = [baseClass];
    //Check the app-toolbar theme color
    if (props.theme === "light" || props.theme === "dark") {
        classList.push(baseClass + "--" + props.theme);
    }
    //Build app-toolbar props
    let app-toolbarProps = {
        "className": helpers.classNames(classList, props.className),
        "style": props.style
    };
    //Return the app-toolbar component
    return React.createElement("div", app-toolbarProps, props.children);
};

//AppToolbar default props
AppToolbar.defaultProps = {
    "theme": "light"
};

//AppToolbar toggle
export const AppToolbarToggle = function (props) {
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

//AppToolbar item
export const AppToolbarItem = function (props) {
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
    //Return the app-toolbar item element
    return React.createElement("div", itemProps, icon, props.text);
};

//AppToolbar item default props
AppToolbarItem.defaultProps = {
    "text": "",
    "icon": null,
    "active": false,
    "onClick": null,
};

//AppToolbar separator
export const AppToolbarSeparator = function (props) {
    return React.createElement("div", {
        "className": baseClass + "-separator"
    });
};

//AppToolbar group
export const AppToolbarGroup = function (props) {
    //AppToolbar group default props
    let groupProps = {
        "className": baseClass + "-group"
    };
    //Return the app-toolbar group element
    return React.createElement("div", groupProps, props.text);
};

//AppToolbar group default props
AppToolbarGroup.defaultProps = {
    "text": null
};

