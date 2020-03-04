import React from "react";
import * as helpers from "../../helpers.js";

//Render modal content
let modalContent = function (props) {
    let contentProps = {
        "className": "siimple-modal-content",
        "style": null
    };
    //Check for modal custon width
    if (typeof props.width === "string") {
        contentProps.style = {
            "maxWidth": props.width
        };
    }
    //Return the modal content
    return React.createElement("div", contentProps, props.children);
};

//Export main modal component
export const Modal = function (props) {
    //Get the modal wrapper props
    let newProps = helpers.filterProps(props, ["className", "width", "size"]);
    //Initialize the modal class
    let classList = ["siimple-modal"];
    //Check for modal predefined size
    if (typeof props.size === "string") {
        classList.push("siimple-modal--" + props.size.toLowerCase());
    }
    //Merge the modal class names
    newProps.className = helpers.classNames(classList, props.className);
    //Return the modal wrapper element
    return React.createElement("div", newProps, modalContent(props));
};

//Modal default props
Modal.defaultProps = {
    "width": null,
    "size": null
};

//Render the header title element
let modalHeaderTitle = function (props) {
    if (typeof props.title === "string") {
        let titleProps = {
            "className": "siimple-modal-header-title"
        };
        //Return the title element
        return React.createElement("div", titleProps, props.title);
    }
    //No title to display
    return null;
};

//Render the modal close element
let modalHeaderClose = function (props) {
    if (typeof props.onClose === "function") {
        //Render the close icon
        return React.createElement("div", {
            "className": "siimple-modal-header-close",
            "onClick": props.onClose
        });
    }
    //No close icon to display
    return null;
};


//Modal header component
export const ModalHeader = function (props) {
    //Get the modal header props
    let newProps = helpers.filterProps(props, ["className", "onClose", "title"]);
    //Build the header class-names prop
    newProps.className = helpers.classNames(["siimple-modal-header"], props.className);
    //Return the modal header wrapper
    return React.createElement("div", newProps, modalHeaderTitle(props), modalHeaderClose(props));
};

//Modal header props
ModalHeader.defaultProps = {
    "title": null,
    "onClose": null
};

//Modal body component
export const ModalBody = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-modal-body"
    }); 
};

//Modal footer component
export const ModalFooter = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-modal-footer"
    }); 
};

