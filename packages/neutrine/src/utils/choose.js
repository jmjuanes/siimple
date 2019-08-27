import React from "react";

//Export Switch component
export function Choose (props) {
    let match = null;
    //Check all children elements
    React.Children.forEach(props.children, function (child) {
        if (match === null) {
            //Check the case condition
            if (child.props.condition === true) {
                match = child;
            }
        }
    });
    //Return the matched case
    return match;
}

//Switch case component
export function ChooseIf (props) {
    //Check for render method
    if (typeof props.render === "function") {
        return props.render();
    }
    //Default: return children
    return props.children;
}

//Switch case default props
ChooseIf.defaultProps = {
    "condition": false,
    "render": null
};

