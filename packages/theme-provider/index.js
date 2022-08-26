import React from "react";

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
