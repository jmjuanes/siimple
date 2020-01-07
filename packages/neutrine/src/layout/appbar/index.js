import React from "react";
import {Icon} from "../../icon/index.js";
import * as helpers from "../../helpers.js";

import "./style.scss";
let baseClass = "neutrine__appbar";

//Export appbar wrapper component
export const AppbarWrapper = function (props) {
    return React.createElement("div", {
        "className": helpers.classNames(baseClass + "-wrapper", props.className),
        "style": props.style
    }, props.children);
};

//Export appbar component
export const Appbar = function (props) {
    return React.createElement("div", {
        "className": helpers.classNames(baseClass, props.className),
        "style": props.style
    }, props.children);
};

//Appbar item
export const AppbarItem = function (props) {
    return React.createElement(Icon, {
        "className": helpers.classNames({
            [baseClass + "-item"]: true,
            [baseClass + "-item--active"]: props.active === true,
            [props.className]: props.className !== ""
        }),
        "tag": "div",
        "onClick": props.onClick,
        "icon": props.icon,
        "style": props.style
    });
};

//Appbar item default props
AppbarItem.defaultProps = {
    "className": "",
    "icon": null,
    "active": false,
    "onClick": null,
};

//Export appbar brand component
export const AppbarBrand = function (props) {
    //Build the brand props
    let brandProps = {
        "className": helpers.classNames(baseClass + "-brand", props.className),
        "style": Object.assign({}, props.style, {
            "backgroundImage": (props.image !== null) ? "url(" + props.image + ")" : null
        }),
        "onClick": props.onClick
    };
    //Return the appbar brand component wrapper
    return React.createElement("div", brandProps, props.children);
};

//Appbar brand default props
AppbarBrand.defaultProps = {
    "image": null,
    "style": {}
};


