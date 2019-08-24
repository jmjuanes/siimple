import React from "react";
import * as helpers from "../../helpers.js";

//Import breadcrumb styles
import "@siimple/css/scss/components/breadcrumb.scss";

//Breadcrumb parent component
export const Breadcrumb = function (props) {
    return helpers.createMergedElement("div", props, "siimple-breadcrumb");
};

//Breadcrumb item component
export const BreadcrumbItem = function (props) {
    return helpers.createMergedElement("div", props, "siimple-breadcrumb-item");
};

