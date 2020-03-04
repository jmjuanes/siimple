import React from "react";
import * as helpers from "../../helpers.js";

//Select component
export const Select = React.forwardRef(function (props, ref) {
    //Clone the select props
    let selectProps = helpers.filterProps(props, ["fluid", "className"])
    //Initialize the select class list
    let classList = ["siimple-select"];
    //Check the fluid property
    if (typeof props.fluid === "boolean" && props.fluid === true) {
        classList.push("siimple-select--fluid");
    }
    //Save the className
    selectProps.className = helpers.classNames(classList, props.className);
    //Save the select reference
    selectProps.ref = ref;
    //Return the select element
    return React.createElement("select", selectProps, props.children);
});

