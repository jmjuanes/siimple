import React from "react"
import kofi from "kofi";

import {Link} from "./Link.js";
import {Icon} from "./Icon.js";

// Action button component wrapper
const Button = props => {
    const buttonClass = kofi.classNames(props.className, [
        "button has-size-3",
        "is-inline-flex has-justify-center",
        "has-px-6 has-py-3",
        "has-w-full-mobile has-mb-2-mobile",
    ]);
    return (
        <div className={buttonClass}>
            <Icon className="has-pr-3" icon={props.icon} />
            <strong>{props.text}</strong>
        </div>
    );
};

// Export Welcome component
export const Welcome = () => (
    <div className="has-pt-24-tablet has-pt-12-mobile has-pb-24" align="center">
        <div className="headline has-text-gray-700 has-mb-12">
            A minimal and <span className="has-text-blue-500">themeable</span> css toolkit.
        </div>
        <div className="has-text-gray-500 has-size-3 has-maxw-192">
            <strong>Siimple</strong> is an open source css toolkit that provides a 
            <strong> responsive</strong> and <strong>minimalistic</strong> starting 
            point for your next amazing website or application.
        </div>
        <div className="has-mt-12 has-mt-8-mobile">
            <Link to="/getting-started">
                <Button
                    text="Getting started"
                    icon="rocket"
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
                    icon="external-link"
                    className="has-bg-gray-700"
                />
            </Link>
        </div>
    </div>
);
