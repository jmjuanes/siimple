import React from "react";
import {useTheme} from "@siimple/theme-provider";
import {
    classNames,
    createCache,
    registerCss,
} from "@siimple/styled";

// Global variables
const TYPE_PROP = "__siimple_type_prop__";

// Cache Context
const CacheContext = React.createContext({
    current: createCache({
      key: "siimple-react",
    }),
});

export const parseProps = (props, type) => ({
    ...props,
    [TYPE_PROP]: type || "div",
});

// Element wrapper for jsx
export const SiimpleElement = React.forwardRef((props, ref) => {
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
    const props = args[1];
    
    // No props or props.css provided --> just call React.createElement
    if (!props?.css) {
        return React.createElement(...args);
    }

    // Generate new props for our wrapper element
    return React.createElement(
        SiimpleElement,
        parseProps(props, args[0]),
        ...args.slice(2),
    );
};

// Create an styled element
export const styled = (type, css) => {
    if (typeof css !== "object") {
        throw new Error(`[siimple:styled] Invalid 'css': expected 'Object' but got '${typeof css}'`);
    }

    // Generate a React element
    return React.forwardRef((props, ref) => {
        const theme = useTheme();
        const cache = React.useContext(CacheContext);
        const className = registerCss(css, theme, cache.current, false, false);

        // Assign ref and classname to props
        props.ref = ref;
        props.className = classNames(props.className, className);

        return React.createElement(type || "div", props, props.children);
    });
};
