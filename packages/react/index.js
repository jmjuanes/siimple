import React from "react";
import {create} from "@siimple/css";

// Tiny utility for conditionally joining classNames
const parseClassNames = items => {
    if (typeof items === "string") {
        return items.split(" ").filter(item => item.length);
    }
    else if (Array.isArray(items)) {
        return items.filter(item => typeof item === "string" && item.length); 
    }
    else if (typeof items === "object") {
        return Object.keys(items || {}).filter(key => !!items[key]);
    }
    //Over value --> return an empty array
    return [];
};

export const classNames = (...args) => {
    return (args || []).map(arg => parseClassNames(arg)).flat().join(" ");
};

// Context
const __defaultContextValue = create(null, {
    key: "siimple-react",
});
const Context = React.createContext(__defaultContextValue);

// Available hooks
export const useTheme = () => {
    return (React.useContext(Context)).theme;
};
export const useCss = css => {
    return (React.useContext(Context)).css(css);
};
export const useGlobalCss = css => {
    return (React.useContext(Context)).globalCss(css);
};

// Theme provider component
export const ThemeProvider = props => {
    const ctx = React.useContext(Context);
    if (props.theme && typeof props.theme === "object" && props.theme !== ctx.theme) {
        ctx.theme = props.theme;
    }
    return React.createElement(Context.Provider, {value: ctx}, props.children);
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

const __createStyled = (type, props, ref, initialCss) => {
    const {as, css, ...rest} = props;
    const className = useCss({
        boxSizing: "border-box",
        minWidth: "0",
        ...initialCss,
        ...css,
    });

    return React.createElement(as || type, {
        ...rest,
        ref: ref,
        className: classNames(props.className, className),
    });
};

// Create an styled element
export const styled = (type, css) => {
    return React.forwardRef((props, ref) => {
        return __createStyled(type || "div", props, ref, css || {});
    });
};

// Wrapper component for applying styles
export const Box = React.forwardRef((props, ref) => {
    return __createStyled("div", props, ref, {});
});
