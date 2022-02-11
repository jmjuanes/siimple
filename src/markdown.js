import React from "react";
import kofi from "kofi";
import {Link} from "gatsby";

import {LiveCode} from "./components/LiveCode.js";
import {ModalExample} from "./components/ModalExample.js";
import {NavbarExample} from "./components/NavbarExample.js";

// Alias to create a HTML element
const html = (type, className) => {
    return props => {
        const newProps = {
            ...props,
            "className": kofi.classNames(className, props.className),
            // "style": props.style,
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
    // "inlineCode": html("code", "text is-code"),
    // "p": html("div", "paragraph"),
    // "blockquote": html("div", "quote"),
    // "a": html("a", "text is-link"),
    "li": html("li", "has-mb-1"),
    "table": html("table", "table is-bordered"),
    //"thead": html("thead", "table-head"),
    //"tbody": html("tbody", "table-body"),
    //"tr": html("tr", "table-row"),
    //"td": html("td", "table-cell"),
    //"th": html("th", "table-cell has-text-left"),
    // Examples
    ModalExample,
    NavbarExample,
};
