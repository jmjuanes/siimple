import React from "react";
import * as helpers from "../../helpers.js";

//Import card styles
import "@siimple/css/scss/components/card.scss";

//Card base component
export const Card = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-card"
    });
};

//Card header component 
export const CardHeader = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-card-header"
    });
};

//Card body component 
export const CardBody = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-card-body"
    });
};

//Card footer component 
export const CardFooter = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-card-footer"
    });
};

//Card link component
export const CardLink = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-card-link"
    });
};

//Card title component 
export const CardTitle = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-card-title"
    });
};

//Card subtitle component
export const CardSubtitle = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-card-subtitle"
    });
};

