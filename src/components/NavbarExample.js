import React from "react";

export const NavbarExample = () => {
    const [active, setActive] = React.useState(false);
    return (
        <div className="has-mb-4 has-radius has-bg-coolgray-100 has-p-6">
            <div className="navbar has-radius">
                <a className="navbrand">Navbar</a>
                <div
                    className="toggler tablet:has-d-none"
                    onClick={() => setActive(!active)}
                />
                <div className={`navmenu ${active ? "is-active" : ""}`}>
                    <a className="navlink">Link 1</a>
                    <a className="navlink">Link 2</a>
                </div>
            </div>
        </div>
    );
};
