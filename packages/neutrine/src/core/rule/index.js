import React from "react";
import * as helpers from "../../helpers.js";

//Import rule styles
import "@siimple/css/scss/elements/rule.scss";

//Rule component
export const Rule = function (props) {
    return helpers.createMergedElement("div", props, "siimple-rule");
};

