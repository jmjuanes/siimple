import React from "react";
import * as helpers from "../../helpers.js";
import "style.scss";

//Export item style
export function Item (props) {
    return helpers.createMergedElement("div", props, {
        "className": "neutrune__item"
    });
}

//Export item icon wrapper
export function ItemIcon (props) {
    return helpers.createMergedElement("div", props, {
        "className": "neutrine__item-icon"
    });
}

//Export item content wrapper
export function ItemContent (props) {
    return helpers.createMergedElement("div", props, {
        "className": "neutrine__item-content"
    });
}

//Export item action wrapper
export function ItemAction (props) {
    return helpers.createMergedElement("div", props, {
        "classNames": "neutrine__item-action"
    });
}

