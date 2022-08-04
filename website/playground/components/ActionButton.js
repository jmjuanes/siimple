import React from "react";
import kofi from "kofi";

export const ActionButton = props => {
    const buttonClass = kofi.classNames({
        "is-clickable has-text-center has-p-2 has-ml-2 is-rounded": true,
        "has-bg-gray-600 has-bg-gray-800-hover has-text-gray-300 has-text-blue-500-hover": props.theme === "dark",
        "has-bg-gray-200 has-bg-gray-300-hover has-text-gray-500 has-text-blue-500-hover": props.theme === "light",
    });

    return (
        <div className={buttonClass} onClick={props.onClick}>
            <i className={`si-${props.icon} has-size-4`} />
        </div>
    );
};
