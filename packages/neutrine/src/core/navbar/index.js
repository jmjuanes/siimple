import React from "react";
import * as helpers from "../../helpers.js";

//Navbar default class
export const Navbar = function (props) {
    //Clone the navbar props 
    let newProps = helpers.filterProps(props, ["className", "theme", "size", "fixedTop", "fixedBottom"]);
    Object.assign(newProps, {
        "className": helpers.classNames({
            "siimple-navbar": true,
            "siimple-navbar--light": props.theme === "light",
            "siimple-navbar--dark": props.theme === "dark",
            ["siimple-navbar--" + props.size]: props.size !== "",
            "siimple-navbar--fixed-top": props.fixedTop === true,
            "siimple-navbar--fixed-bottom": props.fixedBottom === true
        }, props.className)
    });
    //Render the navbar
    return React.createElement("div", newProps, props.children);
};

Navbar.defaultProps = {
    "theme": null, 
    "size": "fluid",
    "fixedTop": false,
    "fixedBottom": false
};

//Navbar brand element
export const NavbarBrand = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-navbar-brand"
    });
};

//Navbar item element
export const NavbarItem = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-navbar-item"
    });
};

//Navbar link element
export const NavbarLink = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-navbar-link"
    });
};

//Navbar menu element
export const NavbarMenu = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-navbar-menu"
    });
};


//Navbar toggle element
export const NavbarToggle = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-navbar-toggle",
        "tabIndex": "0"
    });
};

