import React from "react";
import kofi from "kofi";

export const NavbarExample = () => {
    const [active, setActive] = React.useState(false);
    const menuClassName = kofi.classNames({
        "is-flex-tablet": true,
        "has-direction-column-mobile has-mt-4-mobile has-w-full-mobile": true,
        "is-hidden-mobile": !active,
        "is-flex-mobile": active,
    });
    return (
        <div className="has-mb-4 has-radius-md has-bg-gray-100 has-p-6">
            <div className="container has-bg-white has-radius-md has-p-6 is-flex has-items-center has-flex-wrap">
                <a className="is-block has-size-2 is-clickable has-mr-auto has-text-current">
                    <strong>Navbar</strong>
                </a>
                <div
                    className="menu is-hidden-tablet"
                    onClick={() => setActive(!active)}
                />
                <div className={menuClassName}>
                    <a className="navlink has-mb-2-mobile">Link 1</a>
                    <a className="navlink">Link 2</a>
                </div>
            </div>
        </div>
    );
};
