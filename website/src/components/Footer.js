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

export const Footer = props => {
    const items = props.links || FOOTER_LINKS;
    const itemClass ="has-text-gray-700 has-text-blue-500-hover is-not-underlined";
    return (
        <div className="container has-pt-12 has-pb-24">
            <hr />
            <div className="has-w-full has-mt-6">
                <div className="title is-4 has-mb-2">
                    <i className="icon-siimple has-mr-2" />
                    <strong className="siimple">siimple.</strong>
                </div>
                <div className="paragraph has-mb-0 has-text-gray-500">
                    Designed, built and maintained with a lot of <i className="icon-heart" /> by 
                    <Link to="https://github.com/jmjuanes" target="_blank" className="has-weight-bold"> @jmjuanes</Link>. 
                </div>
                <div className="paragraph has-mb-0 has-text-gray-500">
                    Code is licensed under <Link to={LICENSES.mit} target="_blank" className="has-weight-bold">MIT</Link>, 
                    documentation under <Link to={LICENSES.cc} target="_blank" className="has-weight-bold">Creative Commons Attribution 4.0</Link>.
                </div>
                {/* Available links */}
                <div className="has-pt-4 has-size-0 has-weight-bold">
                    <div className="is-inline-block has-mr-4">v{process.env.VERSION}</div>
                    {items.map((item, key) => (
                        <div key={key} className="is-inline-block has-mr-4">
                            <Link className={itemClass} {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};
