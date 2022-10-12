import React from "react";
import classNames from "classnames";

export const FileTab = props => {
    const tabClass = classNames({
        "navlink has-text-center has-w-auto has-mr-2 has-pl-4 has-pr-4": true,
        "is-flex has-items-center": true,
        "has-text-highlight-hover": !props.active && props.theme === "dark",
        "has-bg-primary has-text-white has-text-white-hover": props.active,
    });

    return (
        <div className={tabClass} onClick={props.onClick}>
            {/* <i className={`si-${props.icon} has-size-2`} /> */}
            <b className="">{props.text}</b>
        </div>
    );
};

