//Import dependencies
import React from "react";

//Filter props list
export function filterProps (props, ignoreProps) {
    //Check for no props object
    if (typeof props !== "object" || props === null) {
        return {};
    }
    //Check the ignore props array
    if (typeof ignoreProps !== "object" || Array.isArray(ignoreProps) === false) {
        ignoreProps = [];
    }
    let newProps = {};
    //Initialize the ignored keys of the props with the children prop
    let keys = {
        "children": true
    };
    ignoreProps.forEach(function (key) {
        keys[key] = true;
    });
    //Filter the props object
    Object.keys(props).forEach(function (key) {
        if (!keys[key]) {
            newProps[key] = props[key];
        }
    });
    //Return the new props object
    return newProps;
}

//Merge props and replace 
export function mergeProps (props, extraProps) {
    Object.keys(props).forEach(function (key) {
        //Check for className prop key
        if (key === "className") {
            extraProps.className = classNames(extraProps.className, props.className);
        }
        //Check if this prop does not exists in the original props object
        else if (key !== "children" && typeof extraProps[key] === "undefined") {
            extraProps[key] = props[key];
        }
    });
    //Return the extra props
    return extraProps;
}

//Call a prop to get a value
export function callProp (prop, args) {
    if (typeof prop === "function") {
        return prop.apply(null, args);
    }
    //Return the prop value
    return prop;
}

//Join class names
export function classNames () {
    //Initialize the list of class names
    let list = [];
    //Parse all arguments 
    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        //Check for undefined or null argument 
        if (typeof arg !== "undefined" && arg !== null) {
            //Check for string class name 
            if (typeof arg === "string") {
                list.push(arg); 
            }
            //Check for array argument
            if (Array.isArray(arg) === true && arg.length) {
                list.push(classNames.apply(null, arg));
            }
            //Check for object
            else if (typeof arg === "object") {
                //Add only classnames with a truly value
                Object.keys(arg).forEach(function (key) {
                    if (arg[key] === true) {
                        list.push(key);
                    }
                });
            }
        }
    }
    //Return the joined class names
    return list.join(" ");
}

//Create a new element mergin two props object
export function createMergedElement (tag, originalProps, newProps) {
    return React.createElement(tag, mergeProps(originalProps, newProps), originalProps.children);
}

//Join styles
export function styles () {
    let output = {};
    //Join all styles
    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        if (typeof arg === "object" && arg !== null) {
            Object.assign(output, arg);
        }
    }
    //Return merged styles
    return output;
}

