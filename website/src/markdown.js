import React from "react";
import kofi from "kofi";
import {Link} from "gatsby";

import {ColorPalette} from "./components/ColorPalette.js";
import {IconsGallery} from "./components/IconsGallery.js";
import {IconsCheatsheet} from "./components/IconsCheatsheet.js";
import {Welcome} from "./components/Welcome.js";
import {Testimonials} from "./components/Testimonials.js";
import {LiveCode} from "./components/LiveCode.js";
import {Section} from "./components/Section.js";
import {ModalExample} from "./components/ModalExample.js";
import {NavbarExample} from "./components/NavbarExample.js";
// import {Features} from "./components/Features.js";

// Alias to create a HTML element
const html = (type, className, style) => {
    return props => {
        const newProps = {
            ...props,
            className: kofi.classNames(className, props.className),
            style: style || props.style,
        };
        return React.createElement(type, newProps, props.children);
    };
};

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
    "table": html("table", "table is-divided"),
    "th": html("th", "", {padding: "1rem !important"}),
    "td": html("td", "", {padding: "1rem !important"}),
    // Pages components
    ColorPalette,
    IconsGallery,
    IconsCheatsheet,
    Testimonials,
    Welcome,
    Section,
    // Features,
    ModalExample,
    NavbarExample,
};
