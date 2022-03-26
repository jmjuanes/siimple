import React from "react";
import kofi from "kofi";
import {Link} from "./Link.js";
import {Icon} from "./Icon.js";

const items = [
    {
        text: "Getting started",
        icon: "rocket",
        href: "/installation",
    },
    {
        text: "Playground",
        icon: "code",
        href: process.env.PLAYGROUND_URL,
        target: "_blank",
    },
];

// Navigation link
const NavLink = props => (
    <Link to={props.href} target={props.target} className="navlink has-d-flex has-items-center">
        <Icon icon={props.icon} className="has-mr-2 has-text-lg" />
        <div className="has-weight-bold">{props.text}</div>
    </Link>
);

export const Header = props => {
    const [active, setActive] = React.useState(false);
    const size = props.size || "desktop";
    const menuClassName = kofi.classNames({
        "has-d-flex": true,
        "mobile:has-flex-column mobile:has-mt-4 mobile:has-w-full": true,
        "mobile:has-d-none": !active,
    });
    return (
        <div className={`content is-${size} has-position-relative`}>
            <div className="has-d-flex has-py-6 has-flex-wrap has-items-center">
                <Link to="/" className="has-d-flex has-text-coolgray-700 has-items-center has-mr-auto">
                    <Icon
                        icon="siimple"
                        className="has-align-middle"
                        style={{"fontSize":"28px"}}
                    />
                    <strong className="has-ml-2 has-text-xl siimple">siimple.</strong>
                </Link>
                <div
                    className="toggler tablet:has-d-none"
                    onClick={() => setActive(!active)}
                />
                <div className={menuClassName}>
                    {items.map(item => (<NavLink key={item.href} {...item} />))}
                </div>
            </div>
        </div>
    );
};

// Header default props
Header.defaultProps = {
    size: "desktop",
};
