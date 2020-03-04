import React from "react";
import * as helpers from "../../helpers.js";

//Textarea component 
export const Textarea = React.forwardRef(function (props, ref) {
    //Extend the props 
    let textareaProps = helpers.filterProps(props, ["fluid", "className"]);
    //Initialize the textarea class list 
    let classList = ["siimple-textarea"];
    //Check the fluid attribute
    if (typeof props.fluid === "boolean" && props.fluid === true) {
        classList.push("siimple-textarea--fluid");
    }
    //Generate the textare className
    textareaProps.className = helpers.classNames(classList, props.className);
    //Save the textarea reference
    textareaProps.ref = ref;
    //Return the textarea element
    return React.createElement("textarea", textareaProps, props.children);
});

