import React from "react";
import * as helpers from "../../helpers.js";
import {Icon} from "../../icon/index.js";
import "./style.scss";

//Export item style
export function Item (props) {
    return helpers.createMergedElement("div", props, {
        "className": "neutrine__item"
    });
}

//Export item icon wrapper
export function ItemIcon (props) {
    let newProps = helpers.filterProps(props, ["className", "appearance"]);
    //Assign icon props
    Object.assign(newProps, {
        "className": helpers.classNames(props.className, {
            "neutrine__item-icon": true,
            "neutrine__item-icon--square": props.appearance === "square",
            "neutrine__item-icon--circle": props.appearance === "circle"
        }),
        "iconTag": "div" //Display icon in a <div> instead of in a <span>
    });
    //Return the icon wrapper
    return React.createElement(Icon, newProps);
}

ItemIcon.defaultProps = {
    "appearance": "square"
};

//Export item content wrapper
export function ItemContent (props) {
    return helpers.createMergedElement("div", props, {
        "className": "neutrine__item-content"
    });
}

//Export item before wrapper
export function ItemBefore (props) {
    return helpers.createMergedElement("div", props, {
        "className": "neutrine__item-before"
    });
}

//Export item after wrapper
export function ItemAfter (props) {
    return helpers.createMergedElement("div", props, {
        "className": "neutrine__item-after"
    });
}

