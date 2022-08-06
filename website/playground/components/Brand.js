import React from "react";
import {classNames} from "@siimple/styled";

export const Brand = props => {
    const parentClass = classNames({
        "is-not-underlined": true,
        "has-text-dark": props.theme === "light",
        "has-text-white": props.theme === "dark",
    });
    return (
        <a className={parentClass} href={props.url} target={props.target}>
            <i className="si-siimple has-size-6" />
        </a>
    );
};

Brand.defaultProps = {
    url: "/",
    target: "_self",
    theme: "light",
};
