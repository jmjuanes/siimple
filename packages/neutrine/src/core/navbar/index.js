import React from "react";
import * as helpers from "../../helpers.js";

//Import navbar styles
import "@siimple/css/scss/layout/navbar.scss";

//Navbar default class
export const Navbar = function (props) {
    //Clone the navbar props 
    let newProps = helpers.filterProps(props, ["className", "color", "size"]);
    //Initialize the class list
    let classList = ["siimple-navbar"];
    //Check the color
    if (typeof props.color === "string") {
        classList.push("siimple-navbar--" + props.color.toLowerCase());
    }
    //Check the size
    if (typeof props.size === "string") {
        classList.push("siimple-navbar--" + props.size.toLowerCase());
    }
    //Generate the navbar classname
    newProps.className = helpers.classNames(classList, props.className);
    //Render the navbar
    return React.createElement("div", newProps, props.children);
};

//Navbar default props
Navbar.defaultProps = {
    "color": null, 
    "size": null
};

//Navbar title element
export const NavbarTitle = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-navbar-title"
    });
};

//Navbar subtitle class
export const NavbarSubtitle = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-navbar-subtitle"
    });
};

//Navbar item element
export const NavbarItem = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-navbar-item"
    });
};

