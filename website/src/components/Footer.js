import React from "react";
import {Link} from "./Link.js";

// Licenses
const LICENSES = {
    mit: "https://github.com/jmjuanes/siimple/blob/main/LICENSE",
    cc: "https://creativecommons.org/licenses/by/4.0/",
};

// Footer links
const FOOTER_LINKS = [
    {"to": process.env.TWITTER_URL, "target": "_blank", "text": "Follow us"},
    {"to": process.env.REPO_URL, "target": "_blank", "text": "Repository"},
    {"to": process.env.ISSUES_URL, "target": "_blank", "text": "Issues"},
    // {"to": "/privacy", "text": "Privacy"},
];

// External link wrapper
const ExternalLink = props => (
    <Link to={props.to} target="_blank" className="has-text-gray-700 has-text-blue-500-hover">
        <strong>{props.text}</strong>
    </Link>
);

export const Footer = props => {
    const items = props.links || FOOTER_LINKS;
    const itemClass ="has-text-gray-700 has-text-blue-500-hover is-not-underlined";
    return (
        <div className="container has-pt-24 has-pb-24">
            <div className="has-mb-2">
                <i className="si-siimple has-mr-2 has-size-6" />
            </div>
            <div className="paragraph has-mb-0 has-text-gray-500">
                Designed, built and maintained with by <ExternalLink to="https://github.com/jmjuanes" text="@jmjuanes" />.
            </div>
            <div className="paragraph has-mb-0 has-text-gray-500">
                Code is licensed under <ExternalLink to={LICENSES.mit} text="MIT" />,
                documentation under <ExternalLink to={LICENSES.cc} text="Creative Commons Attribution 4.0" />.
            </div>
            {/* Available links */}
            <div className="has-pt-4 has-size-0">
                <div className="is-inline-block has-mr-4 has-text-gray-500">
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
