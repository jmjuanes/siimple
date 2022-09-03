import React from "react";
import {Link} from "./Link.jsx";

// Licenses
const LICENSES = {
    mit: "https://github.com/jmjuanes/siimple/blob/main/LICENSE",
    cc: "https://creativecommons.org/licenses/by/4.0/",
};

// Footer links
const FOOTER_LINKS = [
    // {to: process.env.TWITTER_URL, target: "_blank", text: "Follow us"},
    {to: process.env.REPO_URL, target: "_blank", text: "Repository"},
    {to: `${process.env.REPO_URL}/issues`, target: "_blank", text: "Issues"},
    {to: `${process.env.REPO_URL}/releases`, target: "_blank", text: "Releases"},
];

const ExternalLink = props => (
    <Link to={props.to} target="_blank" className="has-text-dark has-text-primary-hover">
        <strong>{props.text}</strong>
    </Link>
);

export const Footer = props => {
    const items = props.links || FOOTER_LINKS;
    const itemClass ="has-text-dark has-text-primary-hover is-not-underlined";
    return (
        <div className="container has-pt-24 has-pb-24">
            <div className="has-mb-2">
                <i className="si-siimple has-mr-2 has-size-6" />
            </div>
            <div className="paragraph has-mb-none">
                Designed and maintained with <i className="si-heart"></i> by <ExternalLink to="https://github.com/jmjuanes" text="@jmjuanes" />.
            </div>
            <div className="paragraph has-mb-none">
                Code is licensed under <ExternalLink to={LICENSES.mit} text="MIT" />,
                documentation under <ExternalLink to={LICENSES.cc} text="Creative Commons Attribution 4.0" />.
            </div>
            {/* Available links */}
            <div className="has-pt-4 has-size-0">
                <div className="is-inline-block has-mr-4">
                    Currently <b>v{process.env.VERSION}</b>
                </div>
                {items.map((item, key) => (
                    <div key={key} className="is-inline-block has-mr-4 has-weight-bold">
                        <Link className={itemClass} {...item} />
                    </div>
                ))}
            </div>
        </div>
    )
};
