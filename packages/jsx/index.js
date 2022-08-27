import React from "react";
import {
    classNames,
    createCache,
    registerCss,
} from "@siimple/styled";
import {useTheme} from "@siimple/theme-provider";

// Global variables
const TYPE_PROP = "__siimple_type_prop__";

// Cache Context
const CacheContext = React.createContext({
    current: createCache({
      key: "siimple-react",
    }),
});

// Element wrapper for jsx
const SiimpleElement = React.forwardRef((props, ref) => {
    const theme = useTheme();
    const cache = React.useContext(CacheContext);

    if (typeof props.css !== "object") {
        throw new Error(`[siimple:jsx] Invalid 'css' prop: expected 'Object' but got '${typeof props.css}'`);
    }

    // Generate styles (the css prop always exists)
    const className = registerCss(props.css, theme, cache.current, false, false);

    // Generate element props
    const newProps = {};
    Object.keys(props).forEach(key => {
        if (key !== TYPE_PROP && key !== "css" && key !== "children") {
            newProps[key] = props[key];
        }
    });

    // Assign new reference and classname
    newProps.ref = ref;
    newProps.className = classNames(className, props.className);

    // Return createElement
    return React.createElement(props[TYPE_PROP], newProps, props.children);
});

// jsx wrapper
export const jsx = (...args) => {
    const type = args[0];
    const props = args[1];
    
    // No props or props.css provided --> just call React.createElement
    if (!props?.css) {
        return React.createElement(...args);
    }

    // Generate new props for our wrapper element
    const newProps = {
        ...(props || {}),
        [TYPE_PROP]: type || "div",
    };
    return React.createElement(SiimpleElement, newProps, ...args.slice(2));
};
