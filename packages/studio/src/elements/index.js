import {jumbotron} from "./jumbotron.js";
import {features} from "./features.js";

//Export element types
export const elements = {
    "jumbotron": jumbotron,
    "features": features
};

//Get available elements
export function getElements () {
    return Object.keys(elements);
}

//Get element props
export function getElementProps (name) {
    return elements[name].props;
}

//Get element render
export function getElementRender (name) {
    return elements[name].render;
}

