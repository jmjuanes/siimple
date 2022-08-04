import React from "react";
import kofi from "kofi";

export const LayoutSwitch = props => {
    const layoutIcons = {
        "code": "square-fill",
        "both": "square-half",
        "preview": "square",
    };
    const parentClass = kofi.classNames({
        "is-flex has-direction-column-tablet is-rounded": true,
        "has-bg-gray-100": props.theme === "light",
        "has-bg-gray-700": props.theme === "dark",
    });
    return (
        <div className={parentClass}>
            {Object.keys(layoutIcons).map(key => {
                const iconClass = kofi.classNames({
                    "has-m-1 has-size-5 is-rounded is-clickable": true,
                    "has-text-gray-400 has-text-gray-500-hover": props.theme === "light" && key !== props.layout,
                    "has-text-gray-500 has-text-gray-400-hover": props.theme === "dark" && key !== props.layout,
                    "has-text-blue-500": key === props.layout && props.theme === "light",
                    "has-text-blue-400": key === props.layout && props.theme === "dark",
                });
                return (
                    <i
                        key={key}
                        className={`si-${layoutIcons[key]} ${iconClass}`}
                        onClick={() => props.onChange(key)}
                    />
                );
            })}
        </div>
    );
};
