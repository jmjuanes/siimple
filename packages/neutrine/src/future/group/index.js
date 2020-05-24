import React from "react";
import {Icon} from "../../icon/index.js";
import * as helpers from "../../helpers.js";

import "./style.scss";

//Group container
export const Group = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "neutrine__group"
    });
};

//Main group container
export const GroupRow = function (props) {
    let newProps = helpers.filterProps(props, ["dashed", "border", "hover", "className"]);
    //Add the element class
    newProps.className = helpers.classNames(props.className, {
        "neutrine__group-row": true,
        "neutrine__group-row--border": props.border === true,
        "neutrine__group-row--hover": props.hover === true,
        "neutrine__group-row--dashed": props.dashed === true
    });
    //Return the row component
    return React.createElement("div", newProps, props.children);
};

//Row default props
GroupRow.defaultProps = {
    "hover": true,
    "dashed": false,
    "border": false
};

//Group item component
export const GroupColumn = function (props) {
    //Extract item component props
    let newProps = helpers.filterProps(props, ["visibleOnlyOnHover", "className", "primary", "secondary"]);
    //Build group classlist
    newProps.className = helpers.classNames(props.className, {
        "neutrine__group-column": true,
        "neutrine__group-column--visible-only-on-hover": props.visibleOnlyOnHover === true,
        "neutrine__group-column--primary": props.primary === true,
        "neutrine__group-column--secondary": props.secondary === true
    });
    //Return the new component
    return React.createElement("div", newProps, props.children);
};

//Column default props
GroupColumn.defaultProps = {
    "visibleOnlyOnHover": false,
    "primary": false,
    "secondary": false
};

//Group title
export const GroupTitle = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "neutrine__group-title"
    });
};

//Group description
export const GroupDescription = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "neutrine__group-description"
    });
};

//Group text
export const GroupText = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "neutrine__group-text"
    });
};

//Group icon
export const GroupIcon = function (props) {
    return helpers.createMergedElement(Icon, props, {
        "style": {
            "lineHeight": "40px"
        },
        "className": helpers.classNames({
            "neutrine__group-icon": true,
            ["siimple--bg-" + props.color]: props.color !== "",
            ["neutrine__group-icon--circle"]: props.appearance === "circle",
            ["neutrine__group-icon--square"]: props.appearance === "square"
        })
    });
};

//Group icon color
GroupIcon.defaultProps = {
    "appearance": "circle",
    "color": "primary"
};

//Group action
export const GroupAction = function (props) {
    return helpers.createMergedElement(Icon, props, {
        "className": "neutrine__group-action"
    });
};

//Group label
export const GroupLabel = function (props) {
    let labelProps = {
        "className": helpers.classNames(props.className, {
            "neutrine__group-label": true,
            ["neutrine__group-label--" + props.color]: true
        })
    };
    //Return the label element
    return React.createElement("span", labelProps, props.text);
};

//Label props
GroupLabel.defaultProps = {
    "color": "primary",
    "text": ""
};

//Group add icon
export const GroupAdd = function (props) {
    return helpers.createMergedElement(Icon, props, {
        "className": "neutrine__group-add",
        "icon": "plus"
    });
};

