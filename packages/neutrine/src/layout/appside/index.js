import React from "react";
import {Icon} from "../../icon/index.js";
import * as helpers from "../../helpers.js";

//Import appside styles
import "./style.scss";

//Base class
let baseClass = "neutrine-appside";

//Export appside wrapper component
export const AppSideWrapper = function (props) {
    //AppSide class styles
    let classList = [baseClass + "-wrapper"];
    //Check if appside is collapsed
    if (props.collapsed === true) {
        classList.push(baseClass + "-wrapper--collapsed");
    }
    //Return the appside element
    return React.createElement("div", {"className": classList.join(" ")}, props.children);
};

//AppSide wrapper default props
AppSideWrapper.defaultProps = {
    "collapsed": true
};

//Export appside component
export const AppSide = function (props) {
    //Sidebar base class styles
    let classList = [baseClass];
    //Check the appside color
    if (props.color === "light" || props.color === "dark") {
        classList.push(baseClass + "--" + props.color);
    }
    //Build appside props
    let appsideProps = {
        "className": helpers.classNames(classList, props.className),
        "style": props.style
    };
    //Return the appside component
    return React.createElement("div", appsideProps, props.children);
};

//AppSide default props
AppSide.defaultProps = {
    "color": "light"
};

//AppSide toggle
export const AppSideToggle = function (props) {
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

//AppSide item
export const AppSideItem = function (props) {
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
    //Return the appside item element
    return React.createElement("div", itemProps, icon, props.text);
};

//AppSide item default props
AppSideItem.defaultProps = {
    "text": "",
    "icon": null,
    "active": false,
    "onClick": null,
};

//AppSide separator
export const AppSideSeparator = function (props) {
    return React.createElement("div", {
        "className": baseClass + "-separator"
    });
};

//AppSide group
export const AppSideGroup = function (props) {
    //AppSide group default props
    let groupProps = {
        "className": baseClass + "-group"
    };
    //Return the appside group element
    return React.createElement("div", groupProps, props.text);
};

//AppSide group default props
AppSideGroup.defaultProps = {
    "text": null
};

