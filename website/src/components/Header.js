import React from "react";
import kofi from "kofi";
import {Link} from "./Link.js";
import {Icon} from "./Icon.js";

const items = [
    {
        text: "Getting started",
        icon: "rocket",
        href: "/getting-started",
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
    <Link to={props.href} target={props.target} className="navlink is-flex has-items-center has-bg-gray-100-hover">
        <Icon icon={props.icon} className="has-mr-2 has-size-2" />
        <div className="has-weight-bold">{props.text}</div>
    </Link>
);

export const Header = () => {
    const [active, setActive] = React.useState(false);
    const menuClassName = kofi.classNames({
        "is-flex": true,
        "has-direction-column-mobile has-mt-4-mobile has-w-full-mobile": true,
        "is-hidden-mobile": !active,
    });
    return (
        <div className="container is-relative">
            <div className="is-flex has-py-6 has-flex-wrap has-items-center">
                <Link to="/" className="is-flex has-text-gray-700 has-items-center has-mr-auto">
                    <Icon
                        icon="siimple"
                        className="has-align-middle"
                        style={{"fontSize":"28px"}}
                    />
                    <strong className="has-ml-2 has-size-3 siimple">siimple.</strong>
                    <span className="badge has-ml-2 has-bg-gray-200 has-text-gray-700 has-px-2">
                        <strong>{process.env.VERSION}</strong>
                    </span>
                </Link>
                <div
                    className="menu is-hidden-tablet"
                    onClick={() => setActive(!active)}
                />
                <div className={menuClassName}>
                    {items.map(item => (<NavLink key={item.href} {...item} />))}
                </div>
            </div>
        </div>
    );
};
