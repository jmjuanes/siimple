import React from "react";
import kofi from "kofi";
import {Header} from "../components/Header.js";

// Layout base component
const ApplicationLayout = props => {
    const rootClass = kofi.classNames({
        "has-flex has-flex-column has-items-stretch": true,
        "has-w-full has-h-screen": true,
        "has-bg-coolgray-800": props.theme === "dark",
        "has-bg-coolgray-100": props.theme === "light"
    });
    return (
        <div className={rootClass}>
            {/* Heading section */}
            <Header size="fluid" />
            {/* Application content */}
            <div className="has-flex-grow has-p-4 has-w-full has-d-flex has-items-stretch">
                {props.children}
            </div>
        </div>
    );
}

//Layout default props
ApplicationLayout.defaultProps = {
    "title": "",
    "icon": "siimple",
    "buttons": [],
    "theme": "light"
};

export default ApplicationLayout;
