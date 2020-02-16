import React from "react";
import {If} from "@siimple/neutrine";
import {Heading, Paragraph, Blockquote} from "@siimple/neutrine";
import {Code, Pre} from "@siimple/neutrine";
import {Tip, Link, Rule} from "@siimple/neutrine";
import {Table, TableHeader, TableBody, TableRow, TableCell} from "@siimple/neutrine";

import {Snippet} from "../Snippet/index.js";
import {redirect} from "../../utils.js";

//Generate a simple renderer
let simpleRenderer = function (tag) {
    return function (props) {
        return React.createElement(tag, {"key": props.key}, props.children);
    };
};

//Tip renderer
let tipRenderer = function (props) {
    return (
        <Tip color={props.color} icon={props.icon} key={props.key}>
            <If condition={typeof props.title === "string"}>
                <Heading type="h6">{props.title}</Heading>
            </If>
            <div>{props.children}</div>
        </Tip>
    );
};

//Export renderers
export const renderers = {
    //Tip renderers
    "tip:info": function (props) {
        return tipRenderer(Object.assign(props, {
            "color": "primary",
            "icon": "info",
        }));
    },
    "tip:error": function (props) {
        return tipRenderer(Object.assign(props, {
            "color": "error",
            "icon": "cross",
        }));
    },
    "tip:warning": function (props) {
        return tipRenderer(Object.assign(props, {
            "color": "warning",
            "icon": "exclamation",
        }));
    },
    "tip:success": function (props) {
        return tipRenderer(Object.assign(props, {
            "color": "success",
            "icon": "check",
        }));
    },
    "heading": function (props) {
        return React.createElement(Heading, {
            "type": "h" + props.level,
            "key": props.key
        }, props.children);
    },
    "blockquote": function (props) {
        return React.createElement(Blockquote, {
            "key": props.key
        }, props.children);
    },
    "paragraph": function (props) {
        return React.createElement(Paragraph, {
            "key": props.key
        }, props.children);
    },
    "link": function (props) {
        return React.createElement(Link, {
            "onClick": function () {
                return redirect(props.href);
            },
            "key": props.key
        }, props.children);
    },
    "image": function (props) {
        return React.createElement("img", {
            "alt": props.alt,
            "src": props.src,
            "key": props.key
        });
    },
    "code": function (props) {
        return React.createElement(Pre, {
            "key": props.key
        }, props.value.join("\n"));
    },
    "snippet": function (props) {
        return React.createElement(Snippet, props);
    },
    "inlineCode": function (props) {
        return React.createElement(Code, {
            "key": props.key
        }, props.value);
    },
    "html": function (props) {
        return React.createElement("div", {
            "dangerouslySetInnerHTML": {
                "__html": props.value.join("\n")
            },
            "key": props.key
        });
    },
    "text": function (props) {
        return props.value; //Return the text content
    },
    "strong": simpleRenderer("strong"),
    "emphasis": simpleRenderer("em"),
    "list": simpleRenderer("ul"),
    "listItem": simpleRenderer("li"),
    "divider": simpleRenderer(Rule),
    "table": simpleRenderer(Table),
    "tableHeader": simpleRenderer(TableHeader),
    "tableBody": simpleRenderer(TableBody),
    "tableRow": simpleRenderer(TableRow),
    "tableCell": simpleRenderer(TableCell)
};

