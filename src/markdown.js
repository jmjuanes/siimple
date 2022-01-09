import React from "react";
import kofi from "kofi";
import {Link} from "gatsby";

import {LiveCode} from "./components/LiveCode.js";
import {ModalExample} from "./components/ModalExample.js";

// Alias to create a HTML element
const html = (type, className) => {
    return props => {
        const newProps = {
            "className": kofi.classNames(className, props.className),
            "style": props.style,
        };
        return React.createElement(type, newProps, props.children);
    };
};

//Custom markdown components
export const shortcodes = {
    "Tip": () => null,
    "Link": Link,
    "h1": html("div", "siimple-title is-1"),
    "h2": html("div", "siimple-title is-2"),
    "h3": html("div", "siimple-title is-3"),
    "h4": html("div", "siimple-title is-4"),
    "h5": html("div", "siimple-title is-5"),
    "h6": html("div", "siimple-title is-6"),
    "pre": html("div", ""),
    "code": LiveCode,
    "inlineCode": html("code", "siimple-text is-code"),
    "p": html("div", "siimple-paragraph"),
    "blockquote": html("div", "siimple-quote"),
    "a": html("a", "siimple-text is-link"),
    "li": html("li", "has-mb-1"),
    "table": html("table", "siimple-table is-bordered"),
    //"thead": html("thead", "siimple-table-head"),
    //"tbody": html("tbody", "siimple-table-body"),
    //"tr": html("tr", "siimple-table-row"),
    //"td": html("td", "siimple-table-cell"),
    //"th": html("th", "siimple-table-cell has-text-left"),
    // Examples
    ModalExample,
};

