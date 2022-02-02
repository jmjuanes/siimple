import React from "react";

export const NavbarExample = () => {
    const [active, setActive] = React.useState(false);
    return (
        <div className="has-mb-4 has-radius has-bg-coolgray-100 has-p-6">
            <div className="siimple-navbar has-radius">
                <a className="siimple-navbrand">Navbar</a>
                <div
                    className="siimple-toggler tablet:has-d-none"
                    onClick={() => setVisible(true)}
                />
                <div className={`siimple-navmenu ${active ? "is-active" : ""}`}>
                    <a className="siimple-navlink">Link 1</a>
                    <a className="siimple-navlink">Link 2</a>
                </div>
            </div>
        </div>
    );
};
