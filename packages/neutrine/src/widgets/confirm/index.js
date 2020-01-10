import React from "react";
import ReactDOM from "react-dom";
import {Btn} from "../../core/btn/index.js";
import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../experiments/modal/index.js";

//Build confirmation header
let ConfirmHeader = function (props) {
    return React.createElement(ModalHeader, {
        "title": props.title,
        "onClose": props.onCancel
    });
};

//Build confirmation body
let ConfirmBody = function (props) {
    return React.createElement(ModalBody, {}, (props.content !== null) ? props.content : props.children);
};

//Build the conform footer
let ConfirmFooter = function (props) {
    let cancelButton = React.createElement(Btn, {
        "content": props.cancelText,
        "className": "siimple--text-bold",
        "onClick": props.onCancel
    });
    let confirmButton = React.createElement(Btn, {
        "content": props.confirmText,
        "color": "success",
        "className": "siimple--ml-1 siimple--text-bold",
        "onClick": props.onConfirm
    });
    //Build the footer props
    let footerProps = {
        "align": "right",
        "className": "siimple--pt-0 siimple--bg-white"
    };
    return React.createElement(ModalFooter, footerProps, cancelButton, confirmButton);
};

//Export confirm component
export function Confirm (props) {
    if (props.visible === false) {
        return null; //Nothing to render
    }
    //Return the confirm wrapper
    return React.createElement(Modal, {"size": props.size}, 
        ConfirmHeader(props), 
        ConfirmBody(props), 
        ConfirmFooter(props)
    );
}

Confirm.defaultProps = {
    "size": "small",
    "visible": true,
    "onCancel": null,
    "onConfirm": null,
    "cancelText": "Cancel",
    "confirmText": "Ok",
    "title": "Are you sure?",
    "content": null
};

