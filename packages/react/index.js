import React from "react";
import {
    classNames,
    createCache,
    registerCss,
} from "@siimple/styled";

// Global variables
const TYPE_PROP = "__siimple_type_prop__";

// Cache Context
export const CacheContext = React.createContext({
    current: createCache({
        key: "siimple-react",
    }),
});

// Theme context
export const ThemeContext = React.createContext({});

// Use theme hook
// Returns: the current theme configuration object
export const useTheme = () => {
    return React.useContext(ThemeContext);
};

// Theme provider component
export const ThemeProvider = props => {
    let theme = useTheme();
    if (props.theme && typeof props.theme === "object" && props.theme !== theme) {
        theme = props.theme;
    }
    return React.createElement(ThemeContext.Provider, {value: theme}, props.children);
};

// HOC that wraps a component and adds the current theme as a prop
export const withTheme = Component => {
    const name = Component.displayName || Component.name || "Component";
    const ThemedComponent = React.forwardRef((props, ref) => {
        const theme = useTheme();

        return React.createElement(Component, {theme, ref, ...props}, props.children);
    });
    ThemedComponent.displayName = `withTheme(${name})`;
    return ThemedComponent;
};

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
