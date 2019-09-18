import React from "react";
import * as helpers from "../../helpers.js";

import "../styles/bar.scss";

//Base class
let baseClass = "neutrine-app-bar";

//Export app bar component
export const AppBar = function (props) {
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

//App bar default props
AppBar.defaultProps = {
    "theme": "light"
};

