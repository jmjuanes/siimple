import React from "react";
import * as helpers from "../../helpers.js";

import "../styles/main.scss";

//Base class
let baseClass = "neutrine-app-main";

//Export main app component
export const AppMain = function (props) {
    let classList = [baseClass];
    //Check if content is fluid
    if (props.fluid === true) {
        classList.push(baseClass + "--fluid");
    }
    //Build the main app props
    let mainProps = {
        "className": helpers.classNames(classList, props.className),
        "style": props.style
    };
    //Return the main app component wrapper
    return React.createElement("div", mainProps, props.children);
};

//Main app default props
AppMain.defaultProps = {
    "fluid": false
};

