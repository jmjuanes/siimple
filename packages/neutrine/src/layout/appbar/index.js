import React from "react";
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
    //Return the logo app component wrapper
    return helpers.createMergedElement("div", props, {
        "className": classList.join(" ")
    });
};

//Appbar default props
Appbar.defaultProps = {
    "theme": "light"
};

