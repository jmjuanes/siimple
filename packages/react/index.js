import React from "react";
import {classNames, createCache, registerCss} from "@siimple/styled";

// Contexts
export const ThemeContext = React.createContext({});
export const CacheContext = React.createContext(
    createCache({key: "siimple-react"}),
);

// Internal css compiler
const __useCss = (css, isGlobal) => {
    const theme = React.useContext(ThemeContext);
    const cache = React.useContext(CacheContext);

    return registerCss(css, theme, cache, isGlobal, false);
};

// Available hooks
export const useTheme = () => React.useContext(ThemeContext);
export const useCss = css => __useCss(css, false);
export const useGlobalCss = css => __useCss(css, true);

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

        return React.createElement(Component, {
            ...props,
            theme: theme,
            ref: ref,
        });
    });
    ThemedComponent.displayName = `withTheme(${name})`;
    return ThemedComponent;
};

// Create an styled element
export const styled = (type = "div", css) => {
    return React.forwardRef((props, ref) => {
        const {css: cssProp, ...rest} = props;
        const className = useCss({
            ...css,
            ...(cssProp || {}),
        });

        return React.createElement(type, {
            ...rest,
            ref: ref,
            className: classNames(props.className, className),
        });
    });
};
