import React from "react";
import kofi from "kofi";

export const NavbarExample = () => {
    const [active, setActive] = React.useState(false);
    const menuClassName = kofi.classNames({
        "tablet:has-d-flex": true,
        "mobile:has-flex-column mobile:has-mt-4 mobile:has-w-full": true,
        "mobile:has-d-none": !active,
        "mobile:has-d-flex": active,
    });
    return (
        <div className="has-mb-4 has-radius has-bg-coolgray-100 has-p-6">
            <div className="content has-bg-white has-radius has-p-6 has-d-flex has-items-center has-flex-wrap">
                <a className="has-d-block has-text-lg has-cursor-pointer has-mr-auto has-text-current">
                    <strong>Navbar</strong>
                </a>
                <div
                    className="toggler tablet:has-d-none"
                    onClick={() => setActive(!active)}
                />
                <div className={menuClassName}>
                    <a className="navlink mobile:has-mb-2">Link 1</a>
                    <a className="navlink">Link 2</a>
                </div>
            </div>
        </div>
    );
};
