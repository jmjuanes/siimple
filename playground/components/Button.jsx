import React from "react";
import {classNames} from "@siimple/react";

export const Button = props => {
    const buttonClass = classNames({
        "is-flex has-items-center is-clickable is-rounded has-p-2 has-ml-2": true,
        "has-text-light has-text-primary-hover": !props.active && props.theme === "dark",
        "has-text-dark has-text-primary-hover": !props.active && props.theme === "light",
        "has-bg-primary has-text-white": !!props.active,
    });
    return (
        <div className={buttonClass} onClick={props.onClick}>
            <i className={`si-${props.icon} has-size-4`} />
        </div>
    );
};
