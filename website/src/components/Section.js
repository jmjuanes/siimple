import React from "react";
import kofi from "kofi";

const linkClass = kofi.classNames([
    "is-not-underlined is-inline-flex has-items-center", 
    "has-bg-blue-100 has-bg-blue-200-hover has-text-blue-600-hover",
    "has-radius-full has-pl-4 has-pr-2 has-py-2",
]);

export const Section = props => (
    <div align="center" className={props.className}>
        <div className="has-mb-3">
            <strong className="has-text-gray-500 has-size-2">{props.label}</strong>
        </div>
        <div className="has-mb-2">
            <div className="title has-size-8 has-weight-black">{props.title}</div>
        </div>
    </div>
);

// Default section props
Section.defaultProps = {
    className: "has-mb-12 has-mt-32",
    title: "",
    label: "Added in v4.0.0",
};
