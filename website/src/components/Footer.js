import React from "react";
import {Link} from "./Link.js";

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
            <div className="has-w-full" style={{"maxWidth":"500px"}}>
                <div className="title is-4 has-mb-2">
                    <strong className="siimple">siimple.</strong>
                </div>
                <div className="paragraph has-mb-0 has-opacity-50">
                    This website was build using <strong>the siimple toolkit</strong> and 
                    following the <strong>siimple design specification</strong>.
                </div>
                {/* Available links */}
                <div className="has-pt-4 has-size-0 has-weight-bold">
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
