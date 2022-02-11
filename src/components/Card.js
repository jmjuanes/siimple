import React from "react";

import {Link} from "./Link.js";
import {If, Icon} from "../utils/components.js";

//Card wrapper
export const Card = props => {
    return (
        <div className="card has-shadow-none has-bg-coolgray-100">
            <div className="" style={{"minHeight": props.height}}>
                {/* Card icon (only if props.icon is provided */}
                <If condition={props.icon !== null} render={() => {
                    return (
                        <div className={`has-text-${props.color}-400 has-mb-3`}>
                            <Icon icon={props.icon} style={{"fontSize":"56px"}} />
                        </div>
                    );
                }} />
                {/* Card content */}
                <div className="title is-4 has-mt-0">{props.title}</div>
                <div className="paragraph has-mb-0 has-text-muted">
                    {props.content || props.children}
                </div>
            </div>
            {/* Card link */}
            <Link to={props.url} target="_blank">
                <strong>{props.link}</strong>
            </Link>
        </div>
    );
};

//Card default props
Card.defaultProps = {
    "height": null,
    "icon": null,
    "color": "blue",
    "content": null,
    "link": "Read more",
    "url": null
};
