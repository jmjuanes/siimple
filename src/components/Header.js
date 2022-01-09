import React from "react";
import {Link} from "./Link.js";
import {Icon} from "./Icon.js";
import {classNames} from "../utils/classnames.js";

//const HEADER_CLASS = "siimple-content is-xlarge has-py-6 has-flex";
//const HEADER_CLASS = "siimple-navbar is-xlarge has-bg-coolgray-100";
const HEADER_ITEMS = [
    // {"text": "Getting started", "icon": "rocket", "href": "/getting-started"},
    {"text": "Getting started", "icon": "rocket", "href": "/installation"},
    {"text": "Icons", "icon": "shapes", "href": "/icons"},
    {"text": "Colors", "icon": "palette", "href": "/colors"},
    {"text": "Try it", "icon": "edit", "href": "/playground"},
];

export const Header = props => {
    const size = props.size || "xlarge";
    const items = props.items || HEADER_ITEMS;
    const itemClass = classNames({
        "has-flex has-radius has-opacity-100": true,
        "has-py-2 has-px-3 tablet:has-ml-2": true,
        "has-text-coolgray-600 has-text-no-underline": true,
        "hover:has-bg-coolgray-100 hover:has-text-dark": true
    });
    return (
        <div className={`siimple-content is-${size} has-py-6 has-d-flex has-bg-white`}>
            <Link to="/" className="has-flex has-text-coolgray-700 has-text-no-underline">
                <Icon icon="siimple" className="has-align-middle" style={{"fontSize":"28px"}} />
                <strong className="has-ml-2 siimple" style={{"fontSize":"24px"}}>siimple.</strong>
            </Link>
            {/* <input type="checkbox" className="siimple-navbar-toggle" /> */}
            <div className="has-d-flex mobile:has-d-none has-ml-auto">
                {items.map((item, key) => (
                    <Link key={key} to={item.href} className={itemClass}>
                        <Icon icon={item.icon} style={{"fontSize":"22px"}} className="has-pr-2" />
                        <strong>{item.text}</strong>
                    </Link>
                ))}
            </div>
        </div>
    );
};

// Header default props
Header.defaultProps = {
    "items": null,
    "size": "xlarge",
};