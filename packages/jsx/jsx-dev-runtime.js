import {jsxDEV as ReactJsxDEV} from "react/jsx-dev-runtime";
import {SiimpleElement, parseProps} from "./index.js";

export {Fragment} from "react/jsx-dev-runtime";

// https://github.com/facebook/react/blob/9ff738f53f228ea4343886a1e719ec2f1533d300/packages/react/src/jsx/ReactJSXElementValidator.js#L297-L304
export const jsxDEV = (type, props, key, isStaticChildren, source, self) => {
    if (!props?.css || typeof props?.css !== "object") {
        return ReactJsxDEV(type, props, key, isStaticChildren, source, self);
    }
    return ReactJsxDEV(SiimpleElement, parseProps(type, props), key, isStaticChildren, source, self);
};
