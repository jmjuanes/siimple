import React from "react";
import kofi from "kofi";

const items = [
    {
        text: "Getting started",
        href: "/docs",
    },
    {
        text: "Playground",
        // icon: "si-external-link",
        href: "/playground",
    },
];

// Navigation link
const NavLink = props => (
    <a href={props.href} target={props.target} className="navlink is-flex has-items-center has-bg-gray-100-hover">
        {kofi.when(!!props.icon, () => (
            <i className={`${props.icon} has-mr-2 has-size-2`} />
        ))}
        <div className="has-weight-bold">{props.text}</div>
    </a>
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
                <a href="/" className="is-flex has-text-gray-700 has-items-center has-mr-auto is-not-underlined">
                    <i
                        className="si-siimple has-align-middle"
                        style={{
                            fontSize: "28px",
                        }}
                    />
                    <strong className="has-ml-2 has-size-3 siimple">siimple.</strong>
                    <span className="badge has-ml-2 has-bg-gray-200 has-text-gray-700 has-px-2">
                        <strong>{process.env.VERSION}</strong>
                    </span>
                </a>
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
