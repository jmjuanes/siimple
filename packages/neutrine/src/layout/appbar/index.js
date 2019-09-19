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
    //Check if appbar is fixed
    if (props.fixed === true) {
        classList.push(baseClass + "--fixed");
    }
    //Return the logo app component wrapper
    return helpers.createMergedElement("div", props, {
        "className": classList.join(" ")
    });
};

//Appbar default props
Appbar.defaultProps = {
    "theme": "light",
    "fixed": false
};

//Export appbar logo component
export const AppbarLogo = function (props) {
    //Build the logo props
    let logoProps = {
        "className": helpers.classNames(baseClass + "-logo", props.className),
        "style": Object.assign({}, props.style, {
            "backgroundImage": (props.image !== null) ? "url(" + props.image + ")" : null
        }),
        "onClick": props.onClick
    };
    //Return the toolbar logo component wrapper
    return React.createElement("div", logoProps, props.children);
};

//Appbar logo default props
AppbarLogo.defaultProps = {
    "image": null,
    "style": {}
};



