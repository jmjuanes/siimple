import React from "react";
import * as helpers from "../../helpers.js";

//Import side component styles
import "./style.scss";

//Side base class
let baseClass = "neutrine-side";

//Available positions
let sidePositions = ["left", "right", "top", "bottom"];

//Export side component
export const Side = function (props) {
    //Side styles
    let classList = [baseClass];
    //Check if side is visible
    if (props.visible === true) {
        classList.push(baseClass + "--visible");
    }
    //Return the side wrapper
    return React.createElement("div", {"className": classList.join(" ")}, props.children);
};

//Side default props
Side.defaultProps = {
    "visible": true
};

//Side background
export const SideBackground = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-background"
    });
};

//Side content
export const SideContent = function (props) {
    //Side content class list
    let classList = [baseClass + "-content"];
    //Check the side content position
    if (sidePositions.indexOf(props.position) !== -1) {
        classList.push(baseClass + "-content--" + props.position);
    }
    //Build the content props
    let contentProps = {
        "className": classList.join(" "),
        "style": {
            "width": "100%",
            "height": "100%"
        }
    };
    //Check the content position
    if (props.position === "right" || props.position === "left") {
        contentProps.style.width = props.size;
    }
    else {
        contentProps.style.height = props.size;
    }
    //Return the side container
    return React.createElement("div", contentProps, props.children);
};

//Side content default props
SideContent.defaultProps = {
    "position": "right",
    "size": "400px"
};

//Side close icon
export const SideClose = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-close"
    });
};

//Side header
export const SideHeader = function (props) {
    //let close = React.createElement("div", {
    //    "className": baseClass + "-close",
    //    "onClick": props.onClose
    //});
    ////Return the side header
    //return React.createElement("div", {"className": baseClass + "-header"}, props.title, close);
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-header"
    });
};

//Side header default props
SideHeader.defaultProps = {
    //"title": null,
    //"onClose": null
};

//Side body
export const SideBody = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-body"
    });
};

