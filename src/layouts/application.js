import React from "react";
import {Header} from "../components/Header.js";
import {classNames} from "../utils/classnames.js";

//Layout base component
const ApplicationLayout = props => {
    const rootClass = classNames("has-flex has-flex-column has-w-full has-h-screen has-items-stretch", {
        "has-bg-coolgray-800": props.theme === "dark",
        "has-bg-coolgray-100": props.theme === "light"
    });
    //const headingClass = classNames("has-flex has-flex-column has-justify-between has-p-6", {
    //    "has-bg-white": props.theme === "light",
    //    "has-bg-dark": props.theme === "dark"
    //});
    //const brandClass = classNames({
    //    "has-text-dark hover:has-text-blue-600": props.theme === "light",
    //    "has-text-white has-text-opacity-80 hover:has-text-opacity-100": props.theme === "dark",
    //    "has-cursor-hand": true
    //});
    //const buttonClass = classNames("has-flex-inline has-h-full has-items-center", {
    //    "has-text-coolgray-500 hover:has-text-blue-600": props.theme === "light",
    //    "has-text-white has-text-opacity-60 hover:has-text-opacity-100": props.theme === "dark",
    //    "has-cursor-hand": true,
    //    "has-p-2 has-mt-2": true
    //});
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
