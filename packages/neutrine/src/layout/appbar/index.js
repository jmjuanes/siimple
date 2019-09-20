import React from "react";
import {Icon} from "../../icon/index.js";
import * as helpers from "../../helpers.js";

import "./style.scss";

//Base class
let baseClass = "neutrine-appbar";

//Export appbar component
export const Appbar = function (props) {
    let classList = [baseClass];
    //Check the theme
    if (props.theme === "light" || props.theme === "dark") {
        classList.push(baseClass + "--" + props.theme);
    }
    //Check if appbar is fixed
    if (props.fixed === true) {
        classList.push(baseClass + "--fixed");
    }
    //Build the appbar props
    let barProps = {
        "className": helpers.classNames(classList, props.className),
        "style": props.style
    };
    //Return the logo app component wrapper
    return React.createElement("div", barProps, props.children);
};

//Appbar default props
Appbar.defaultProps = {
    "theme": "light",
    "fixed": false
};

//Export appbar logo component
export const AppbarLogo = function (props) {
    //Build the logo props
    let logoProps = {
        "className": helpers.classNames(baseClass + "-logo", props.className),
        "style": Object.assign({}, props.style, {
            "backgroundImage": (props.image !== null) ? "url(" + props.image + ")" : null
        }),
        "onClick": props.onClick
    };
    //Return the toolbar logo component wrapper
    return React.createElement("div", logoProps, props.children);
};

//Appbar logo default props
AppbarLogo.defaultProps = {
    "image": null,
    "style": {}
};

//Export appbar item component
export const AppbarItem = function (props) {
    //Build the button icon
    let iconElement = null;
    if (props.icon !== null) {
        iconElement = React.createElement(Icon, {
            "icon": props["icon"],
            "className": baseClass + "-item-icon"
        });
    }
    //Build the text element
    let textElement = React.createElement("span", {"className": baseClass + "-item-text"}, props.children);
    //Initialize the class list
    let classList = [baseClass + "-item"];
    //Check if this item is active
    if (typeof props.active === "boolean" && props.active === true) {
        classList.push(baseClass + "-item--active");
    }
    //Build the item props
    let itemProps = {
        "className": helpers.classNames(classList, props.className),
        "onClick": props.onClick,
        "style": props.style
    };
    //Return the toolbar item element
    return React.createElement("div", itemProps, iconElement, textElement);
};

//Appbar item default props
AppbarItem.defaultProps = {
    "icon": null,
    "color": "primary",
    "active": false,
    "onClick": null
};

