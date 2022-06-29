import React from "react";
import kofi from "kofi";

// Brand component wrapper
export const Brand = props => {
    const parentClass = kofi.classNames({
        "is-not-underlined": true,
        "has-text-gray-800": props.theme === "light",
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
