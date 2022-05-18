import React from "react";
import kofi from "kofi";
import {Link} from "./Link";

const linkClass = kofi.classNames([
    "is-not-underlined is-inline-flex has-items-center", 
    "has-bg-blue-100 has-bg-blue-200-hover has-text-blue-600-hover",
    "has-radius-full has-pl-4 has-pr-2 has-py-2",
]);

export const Section = props => (
    <div className={props.className}>
        {/* kofi.when(!!props.icon, () => (
            <div className="has-mb-4">
                <div className="is-inline-block has-bg-blue-200 has-text-blue-500 has-radius-md has-p-3 has-lh-none">
                    <i className={`icon-${props.icon} has-size-5`} />
                </div>
            </div>
        )) */}
        <div className="has-mb-2">
            <div className="title has-size-6 has-weight-black">{props.title}</div>
        </div>
        <div className="has-text-gray-600 has-size-2 has-maxw-192">
            {props.children}
        </div>
        {kofi.when(!!props.link, () => (
            <div className="has-mt-4">
                <Link to={props.link} className={linkClass}>
                    <b>{props.linkText}</b> <i className="icon-chevron-right has-ml-2 has-size-0" />
                </Link>
            </div>
        ))}
    </div>
);

// Default section props
Section.defaultProps = {
    className: "has-mb-12 has-mt-32",
    title: "",
    link: "",
    linkText: "Learn more",
};
