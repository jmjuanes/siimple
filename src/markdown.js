import React from "react";
import {Link} from "gatsby";
import {LiveCode} from "./components/LiveCode.js";
//import {Tip} from "siimple-react";
import {createHtmlElement} from "siimple-react";

// Custom examples
import {ModalExample} from "./components/ModalExample.js";

// Alias to create a HTML element
const html = (type, className) => {
    return (props) => {
        return React.createElement(type, {}, props.children);
    };
};

//Custom markdown components
export const shortcodes = {
    "Tip": () => null,
    "Link": Link,
    "h1": createHtmlElement("div", "siimple-title is-1"),
    "h2": createHtmlElement("div", "siimple-title is-2"),
    "h3": createHtmlElement("div", "siimple-title is-3"),
    "h4": createHtmlElement("div", "siimple-title is-4"),
    "h5": createHtmlElement("div", "siimple-title is-5"),
    "h6": createHtmlElement("div", "siimple-title is-6"),
    "pre": createHtmlElement("div", ""),
    //"code": createHtmlElement("code", "siimple-code"),
    "code": LiveCode,
    "inlineCode": createHtmlElement("code", "siimple-text is-code"),
    "p": createHtmlElement("div", "siimple-paragraph"),
    "blockquote": createHtmlElement("div", "siimple-quote"),
    "a": createHtmlElement("a", "siimple-text is-link"),
    "li": createHtmlElement("li", "has-mb-1"),
    "table": createHtmlElement("table", "siimple-table is-bordered"),
    //"thead": createHtmlElement("thead", "siimple-table-head"),
    //"tbody": createHtmlElement("tbody", "siimple-table-body"),
    //"tr": createHtmlElement("tr", "siimple-table-row"),
    //"td": createHtmlElement("td", "siimple-table-cell"),
    //"th": createHtmlElement("th", "siimple-table-cell has-text-left"),
    // Examples
    ModalExample,
};

