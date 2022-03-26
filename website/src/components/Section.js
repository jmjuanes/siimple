import React from "react";
import kofi from "kofi";
import {Link} from "./Link.js";

const linkClass = kofi.classNames([
    "has-text-no-underline has-d-inline-flex has-items-center", 
    "has-bg-blue-100 hover:has-bg-blue-200 hover:has-text-blue-600",
    "has-radius-full has-pl-4 has-pr-2 has-py-2",
]);

export const Section = props => (
    <div className={props.className}>
        <div className="has-mb-2">
            <span className="badge">{props.label}</span>
        </div>
        <div className="title has-text-4xl has-weight-black has-mt-4 has-mb-2">{props.title}</div>
        <div className="has-text-coolgray-500 has-text-lg tablet:has-maxw-half">
            {props.children}
        </div>
        <div className="has-mt-4">
            <Link to={props.link} className={linkClass}>
                <b>Learn more</b> <i className="icon-chevron-right has-ml-2 has-text-sm"></i>
            </Link>
        </div>
    </div>
);

// Default section props
Section.defaultProps = {
    className: "has-mb-12 has-mt-12",
    title: "",
    label: "Added in v4.0.0",
};
