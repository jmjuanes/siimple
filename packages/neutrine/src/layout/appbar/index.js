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

export const AppbarBrand = function (props) {
    return React.createElement("div", {
        "className": helpers.classNames(baseClass + "-brand", props.className),
        "style": Object.assign({}, props.style, {
            "backgroundImage": (props.image !== null) ? "url(" + props.image + ")" : null
        }),
        "onClick": props.onClick
    });
};

AppbarBrand.defaultProps = {
    "image": null,
    "style": {}
};

export const AppbarAvatar = function (props) {
    return React.createElement("div", {
        "className": helpers.classNames(baseClass + "-avatar", props.className),
        "style": Object.assign({}, props.style, {
            "backgroundImage": (props.image !== null) ? "url(" + props.image + ")" : null
        }),
        "onClick": props.onClick
    });
};

AppbarAvatar.defaultProps = {
    "image": null,
    "style": {}
};


