import React from "react";

//Import available elements
import {getElementRender} from "../../elements/index.js";

//Export element renderer
export function Element (props) {
    return getElementRender(props.type)(props.attributes);
};

