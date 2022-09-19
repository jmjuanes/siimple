import React from "react";
import {classNames} from "@siimple/react";
import {Link} from "./Link";

const linkClass = classNames({
    "is-not-underlined is-inline-flex has-items-center": true, 
    "has-bg-highlight has-text-primary is-clickable has-bg-primary-hover has-text-white-hover": true,
    "is-pill has-pl-4 has-pr-2 has-pt-2 has-pb-2": true,
});

export const Section = props => (
    <div className={props.className}>
        <div className="has-mb-2">
            <h1 className="has-size-6 has-weight-black">{props.title}</h1>
        </div>
        <div className="has-size-2" style={{maxWidth:"48rem"}}>
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
