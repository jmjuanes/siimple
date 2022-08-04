import React from "react";
import {classNames} from "@siimple/styled";
import {Link} from "./Link";

const linkClass = classNames({
    "is-not-underlined is-inline-flex has-items-center": true, 
    "has-bg-blue-100 has-bg-blue-200-hover has-text-blue-600-hover": true,
    "is-pill has-pl-4 has-pr-2 has-pt-2 has-pb-2": true,
});

export const Section = props => (
    <div className={props.className}>
        <div className="has-mb-2">
            <div className="title has-size-6 has-weight-black">{props.title}</div>
        </div>
        <div className="has-text-gray-600 has-size-2" style={{maxWidth:"48rem"}}>
            {props.children}
        </div>
        {!!props.link && (
            <div className="has-mt-4">
                <Link to={props.link} className={linkClass}>
                    <b>{props.linkText}</b> <i className="si-chevron-right has-ml-2 has-size-0" />
                </Link>
            </div>
        )}
    </div>
);

Section.defaultProps = {
    className: "has-mb-12 has-mt-24",
    title: "",
    link: "",
    linkText: "Learn more",
};
