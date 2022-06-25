import React from "react";
import kofi from "kofi";
import {Link} from "gatsby";

import {ColorPalette} from "./components/ColorPalette.js";
import {IconsGallery} from "./components/IconsGallery.js";
import {Welcome} from "./components/Welcome.js";
import {Testimonials} from "./components/Testimonials.js";
import {LiveCode} from "./components/LiveCode.js";
import {Section} from "./components/Section.js";
import {ModalExample} from "./components/ModalExample.js";
import {NavbarExample} from "./components/NavbarExample.js";

// Alias to create a HTML element
const html = (type, className) => {
    return props => {
        const newProps = {
            ...props,
            className: kofi.classNames(className, props.className),
            // style: style || props.style,
        };
        return React.createElement(type, newProps, props.children);
    };
};

// Table container wrapper
const TableContainer = props => (
    <div className="has-w-full has-mb-8">
        <table className="table is-divided has-header-fixed has-mb-none">
            {props.children}
        </table>
    </div>
);

//Custom markdown components
export const shortcodes = {
    "Tip": () => null,
    "Link": Link,
    "h1": html("div", "title is-1"),
    "h2": html("div", "title is-2"),
    "h3": html("div", "title is-3"),
    "h4": html("div", "title is-4"),
    "h5": html("div", "title is-5"),
    "h6": html("div", "title is-6"),
    "pre": html("div", ""),
    "code": LiveCode,
    "li": html("li", "has-mb-1"),
    "table": TableContainer,
    "th": html("th", "has-bg-white is-sticky has-top-none"),
    // "td": html("td", "", {padding: "1rem !important"}),
    // Pages components
    ColorPalette,
    IconsGallery,
    Testimonials,
    Welcome,
    Section,
    // Features,
    ModalExample,
    NavbarExample,
};
