import React from "react";

//Import fake checkbox styles
import "./style.scss";

//Export fake checkbox component
export const Check = function (props) {
    //Initialize the fake checkbox class list
    let classList = ["neutrine-check"];
    if (props.selected === true || props.checked === true) {
        classList.push("neutrine-check--checked");
    }
    //Return the fake checkbox component
    return React.createElement("div", {
        "className": classList.join(" "),
        "onClick": props.onClick
    });
};

//Fake check default props
Check.defaultProps = {
    "selected": false, //Deprecated: use checked instead
    "checked": false,
    "onClick": null
};

