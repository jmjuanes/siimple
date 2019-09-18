import React from "react";
import * as helpers from "../../helpers.js";

import "../styles/logo.scss";

//Base class
let baseClass = "neutrine-app-logo";

//Export app logo component
export const AppLogo = function (props) {
    let classList = [baseClass];
    //Check the theme
    //if (props.theme === "light" || props.theme === "dark") {
    //    classList.push(baseClass + "--" + props.theme);
    //}
    //Build the logo props
    let logoProps = {
        "className": helpers.classNames(classList, props.className),
        "style": Object.assign({}, props.style, {
            "backgroundImage": props.image
        }),
        "onClick": props.onClick
    };
    //Return the logo app component wrapper
    return React.createElement("div", logoProps, props.children);
};

//Logo app default props
AppLogo.defaultProps = {
    "image": null,
    //"theme": "light",
    "style": {}
};

