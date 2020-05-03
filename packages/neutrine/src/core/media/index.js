import React from "react";
import * as helpers from "../../helpers.js";

//Export media wrapper component
export const Media = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-media"
    });
};

//Export media start
export const MediaStart = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-media-start"
    });
};

//Export media content
export const MediaContent = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-media-content"
    });
};

//Export media end
export const MediaEnd = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-media-end"
    });
};

