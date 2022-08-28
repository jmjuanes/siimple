import {jsx as ReactJsx, jsxs as ReactJsxs} from "react/jsx-runtime";
import {SiimpleElement, parseProps} from "./index.js";

export {Fragment} from "react/jsx-runtime";

export const jsx = (type, props, key) => {
    if (!props?.css || typeof props?.css !== "object") {
        return ReactJsx(type, props, key);
    }
    return ReactJsx(SiimpleElement, parseProps(type, props), key);
};

export const jsxs = (type, props, key) => {
    if (!props?.css || typeof props?.css !== "object") {
        return ReactJsxs(type, props, key);
    }
    return ReactJsxs(SiimpleElement, parseProps(type, props), key);
};
