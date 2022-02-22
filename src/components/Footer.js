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
    const size = props.size || "xlarge";
    const items = props.links || FOOTER_LINKS;
    const itemClass ="has-text-coolgray-700 hover:has-text-blue-700 has-text-no-underline";
    return (
        <div className={`content has-bg-white is-${size} has-pt-12 has-pb-24`}>
            <div className="has-w-full" style={{"maxWidth":"500px"}}>
                <div className="title is-4 has-text-dark has-mb-2">
                    <strong className="siimple">siimple.</strong>
                </div>
                <div className="paragraph has-mb-0" style={{"opacity":"0.5"}}>
                    This website was build using <strong>the siimple toolkit</strong> and 
                    following the <strong>siimple design specification</strong>.
                </div>
                {/* Available links */}
                <div className="has-pt-4 has-size-small has-weight-bold">
                    {items.map((item, key) => (
                        <div key={key} className="has-d-inline has-mr-4">
                            <Link className={itemClass} {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};
