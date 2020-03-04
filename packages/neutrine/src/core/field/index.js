import React from "react";
import * as helpers from "../../helpers.js";

//Form field component
export const Field = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-field"
    });
};

//Field label component 
export const FieldLabel = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-field-label"
    });
};

//Field helper component
export const FieldHelper = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-field-helper"
    });
};

