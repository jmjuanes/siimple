import React from "react";
import {If} from "@siimple/neutrine";
import {Heading, Paragraph, Blockquote} from "@siimple/neutrine";
import {Code, Pre} from "@siimple/neutrine";
import {Link, Rule} from "@siimple/neutrine";

import {renderers} from "./renderers.js";
import {redirect} from "../../utils.js";

let renderChildren = function (children) {
    if (typeof children === "undefined" || children === null) {
        return null; //Nothing to render
    }
    //Render children elements
    return children.map(function (props, index) {
        if (typeof props === "string") {
            return props; //Nothing to render, just string
        }
        let render = renderers[props.type];
        if (typeof render === "undefined") {
            return null; //Unknown renderer
        }
        //Render this element
        return render(Object.assign({}, props, {
            "key": index,
            "children": renderChildren(props.children)
        }));
    });
};

//Export markdown renderer
export function Markdown (props) {
    return renderChildren(props.content);
}


