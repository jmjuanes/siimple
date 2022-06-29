import React from "react";
import kofi from "kofi";

export const FileTab = props => {
    const tabClass = kofi.classNames({
        "navlink has-text-center has-w-auto has-mr-2 has-px-4": true,
        "is-flex has-items-center": true,
        "has-text-blue-400-hover": !props.active && props.theme === "dark",
        "has-bg-blue-500 has-text-white has-text-white-hover": props.active,
    });

    return (
        <div className={tabClass} onClick={props.onClick}>
            <i className={`si-${props.icon} has-pr-2 has-size-2`} />
            <b>{props.text}</b>
        </div>
    );
};

