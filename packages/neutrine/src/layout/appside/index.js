import React from "react";
import {Icon} from "../../icon/index.js";
import * as helpers from "../../helpers.js";

//Import appside styles
import "./style.scss";

//Base class
let baseClass = "neutrine-appside";

//Export appside wrapper component
export const AppsideWrapper = function (props) {
    //Appside class styles
    let classList = [baseClass + "-wrapper"];
    //Check if appside is collapsed
    if (props.collapsed === true) {
        classList.push(baseClass + "-wrapper--collapsed");
    }
    //Return the appside element
    return React.createElement("div", {"className": classList.join(" ")}, props.children);
};

//Appside wrapper default props
AppsideWrapper.defaultProps = {
    "collapsed": true
};

//Export appside component
export const Appside = function (props) {
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

//Appside default props
Appside.defaultProps = {
    "color": "light"
};

//Appside toggle
export const AppsideToggle = function (props) {
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

//Appside item
export const AppsideItem = function (props) {
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

//Appside item default props
AppsideItem.defaultProps = {
    "text": "",
    "icon": null,
    "active": false,
    "onClick": null,
};

//Appside separator
export const AppsideSeparator = function (props) {
    return React.createElement("div", {
        "className": baseClass + "-separator"
    });
};

//Appside group
export const AppsideGroup = function (props) {
    //Appside group default props
    let groupProps = {
        "className": baseClass + "-group"
    };
    //Return the appside group element
    return React.createElement("div", groupProps, props.text);
};

//Appside group default props
AppsideGroup.defaultProps = {
    "text": null
};

