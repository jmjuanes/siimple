import React from "react";
import classNames from "classnames";

const items = [
    !process.env.DOCS_ONLY && {
        text: "Getting Started",
        href: "/getting-started",
    },
    !process.env.DOCS_ONLY && {
        text: "Examples",
        href: "/examples",
    },
    !process.env.DOCS_ONLY && {
        text: "Icons",
        href: "/icons",
    },
    !process.env.DOCS_ONLY && {
        text: "Playground",
        href: "/playground",
    },
    process.env.DOCS_ONLY && {
        text: "Versions",
        href: "/",
    },
].filter(Boolean);

// Navigation link
const NavLink = props => (
    <a href={props.href} target={props.target} className="navlink is-flex has-items-center has-bg-light-hover">
        {!!props.icon && (
            <i className={`${props.icon} has-mr-2 has-size-2`} />
        )}
        <div className="has-weight-bold">{props.text}</div>
    </a>
);

export const Header = () => {
    const [active, setActive] = React.useState(false);
    const menuClassName = classNames({
        "is-hidden-tablet has-direction-column has-p-4 has-bg-muted has-w-full is-rounded": true,
        "is-flex": active,
        "is-hidden-mobile": !active,
    });
    return (
        <div className="container is-relative">
            <div className="is-flex has-pt-6 has-pb-6 has-items-center has-justify-between">
                <a href="/" className="is-flex has-text-dark has-items-center is-not-underlined has-w-64">
                    <i
                        className="si-siimple has-align-middle"
                        style={{
                            fontSize: "28px",
                        }}
                    />
                    <strong className="has-ml-2 has-size-3 siimple">siimple.</strong>
                    <span className="badge has-ml-2 has-bg-muted has-text-dark has-pl-2 has-pr-2">
                        <strong>{process.env.VERSION}</strong>
                    </span>
                </a>
                <div className="is-flex is-hidden-mobile">
                    {items.map(item => (<NavLink key={item.href} {...item} />))}
                </div>
                <div
                    className="menu is-hidden-tablet"
                    onClick={() => setActive(!active)}
                />
            </div>
            <div className={menuClassName}>
                {items.map(item => (<NavLink key={item.href} {...item} />))}
            </div>
        </div>
    );
};
