import React from "react";
import * as helpers from "../../helpers.js";

//Input component
export const Input = React.forwardRef(function (props, ref) {
    //Clone the input props
    let inputProps = helpers.filterProps(props, ["fluid", "className"]);
    //Initialize the input class list
    let classList = ["siimple-input"];
    //Check the fluid property
    if (typeof props.fluid === "boolean" && props.fluid === true) {
        classList.push("siimple-input--fluid");
    }
    //Generate the input class name
    inputProps.className = helpers.classNames(classList, props.className);
    //Save the input reference
    inputProps.ref = ref;
    //Return the input element
    return React.createElement("input", inputProps);
});

