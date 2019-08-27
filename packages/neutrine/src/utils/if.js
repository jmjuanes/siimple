import React from "react";

//If component
export function If (props) {
    //Check if the condition is true
    if (typeof props.condition === "boolean" && props.condition === true) {
        //Check for render function provided
        if (typeof props.render === "function") {
            return props.render();
        }
        return React.createElement(React.Fragment, {}, props.children);
    }
    //Condition is not true
    return null;
}

//Default props
If.defaultProps = {
    "condition": true,
    "render": null
};

