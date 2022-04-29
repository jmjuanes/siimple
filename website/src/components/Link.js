import React from "react";
import {Link as GatsbyLink} from "gatsby";

//To check if the provided link is an external link
const isExternalLink = url => /^https?:\/\//.test(url);

//Export link wrapper
export const Link = props => {
    //Check for external link
    if (isExternalLink(props.to) === true) {
        return (
            <a href={props.to} target={props.target} className={props.className} style={props.style}>
                {props.text || props.children}
            </a>
        );
    }
    //Generate as internal link
    return (
        <GatsbyLink to={props.to} className={props.className} style={props.style}>
            {props.text || props.children}
        </GatsbyLink>
    );
};

//Link default props
Link.defaultProps = {
    "className": "is-not-underlined",
    "style": {
        "textDecoration": "none"
    },
    "to": "/",
    "target": "",
    "text": null,
};

