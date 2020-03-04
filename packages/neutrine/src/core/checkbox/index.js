import React from "react";
import * as helpers from "../../helpers.js";

//Generate a random id
let randomId = function () {
    return Math.random().toString(36).slice(2, 15);
};

//Checkbox component 
export const Checkbox = React.forwardRef(function (props, ref) {
    //Input default props
    let inputProps = helpers.filterProps(props, ["className", "style", "id", "ref"]);
    inputProps.type = "checkbox";
    inputProps.id = (typeof props.id === "string") ? props.id : randomId();
    //Save the checkbox reference
    inputProps.ref = ref; 
    //Checkbox children content
    let inputChild = React.createElement("input", inputProps, null);
    let labelChild = React.createElement("label", {"htmlFor": inputProps.id}, null);
    //Build the checkbox props
    let checkboxProps = {
        "className": helpers.classNames("siimple-checkbox", props.className),
        "style": props.style
    };
    //Return the checkbox element
    return React.createElement("div", checkboxProps, inputChild, labelChild);  
});

