import React from "react"
import {classNames} from "@siimple/react";

import {Link} from "./Link.jsx";

// Action button component wrapper
const Button = props => {
    const buttonClass = classNames({
        "button has-size-3": true,
        "is-inline-flex has-justify-center": true,
        "has-pl-6 has-pr-6 has-pt-3 has-pb-3": true,
        "has-w-full-mobile has-mb-2-mobile": true,
    });
    return (
        <div className={`${props.className} ${buttonClass}`}>
            <i className={`${props.icon} has-pr-3`} />
            <strong>{props.text}</strong>
        </div>
    );
};

// Export Welcome component
export const Welcome = () => (
    <div className="has-pt-24-tablet has-pt-12-mobile has-pb-24" align="center">
        <div className="headline has-text-dark has-mb-12">
            A minimal and <span className="has-text-primary">themeable</span> css toolkit.
        </div>
        <div className="has-text-dark is-semitransparent has-size-3" style={{maxWidth: "48rem"}}>
            <strong>Siimple</strong> is an open source css toolkit that provides a 
            <strong> responsive</strong> and <strong>minimalistic</strong> starting 
            point for your next amazing website or application.
        </div>
        <div className="has-mt-12 has-mt-8-mobile">
            <Link to="/getting-started">
                <Button
                    text="Getting started"
                    icon="si-rocket"
                    className="is-primary"
                />
            </Link>
            <Link
                to={process.env.REPO_URL}
                target="_blank"
                className="is-not-underlined has-ml-3-tablet"
            >
                <Button
                    text="View on GitHub"
                    icon="si-external-link"
                    className="has-bg-dark"
                />
            </Link>
        </div>
    </div>
);
