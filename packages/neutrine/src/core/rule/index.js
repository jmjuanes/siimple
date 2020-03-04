import React from "react";
import * as helpers from "../../helpers.js";

//Rule component
export const Rule = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-rule"
    });
};

