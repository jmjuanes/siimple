import React from "react";
import kofi from "kofi";

export const DarkThemeButton = props => {
    const buttonClass = kofi.classNames({
        "is-clickable has-radius-md has-py-2 has-px-2": true,
        "has-bg-gray-100-hover has-text-blue-500-hover": props.theme === "light",
        "has-bg-blue-500 has-text-white": props.theme === "dark",
    });

    return (
        <div className={buttonClass} onClick={props.onClick}>
            <i className="si-moon has-size-4" />
        </div>
    );
};
