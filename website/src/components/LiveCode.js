import React from "react";
import kofi from "kofi";
import {highlightStr} from "codecake/highlight.js";

// Render title element
const CodeTitle = props => {
    if (props.title) {
        return (
            <div className="has-mb-4 has-text-blue-300 has-opacity-50">
                <strong className="is-italic">{props.title}</strong>
            </div>
        );
    }
    // No title provided
    return null;
};

//Export live code component
export const LiveCode = props => {
    let codeChildren = props.children; //Code children
    const codeProps = {};
    const lang = (props.className || "").replace("language-", "").replace("javascript", "js");
    const codeClass = "livecode has-bg-coolgray-700 has-text-white CodeCake-dark";
    if (["html", "css", "scss", "js"].includes(lang)) {
        codeProps["dangerouslySetInnerHTML"] = {
            "__html": highlightStr(props.children, lang),
        };
        codeChildren = null; //Ignore children
    }
    //Check for no live preview --> render the code wrapped in a <pre> element
    if (props.live !== "true") {
        return (
            <div className={`${codeClass} has-mb-6`}>
                <CodeTitle title={props.title} />
                <pre className="has-my-none" {...codeProps}>{codeChildren}</pre>
            </div>
        );
    }
    //const {padding, bg, color} = props;
    const demoClass = kofi.classNames("has-mb-6 has-overflow-x-hidden is-clipped", [
        // "has-pt-4 has-pb-4",
        // `has-p-${props.padding}`,
        // `has-bg-${props.bg}`,
        "has-p-6 has-bg-coolgray-100 has-radius-md",
        `has-text-${props.color}`,
    ]);
    const contentClass = kofi.classNames("has-w-full has-overflow-y", {
        "is-flex has-items-center has-justify-center": props.centered === "true",
    });
    return (
        <div className="has-mb-12 has-mt-6">
            {/* Live code block */}
            <div align={props.align} className={demoClass}>
                <div
                    className={contentClass}
                    dangerouslySetInnerHTML={{"__html": props.children}}
                />
            </div>
            {/* Code */}
            <div className={`${codeClass} has-my-none`}>
                <CodeTitle title={props.title} />
                <pre className="has-my-none" {...codeProps}>{codeChildren}</pre>
            </div>
            {/* <pre className="codeblock has-mb-0">{props.children}</pre> */}
        </div>
    );
}

//Live code default props
LiveCode.defaultProps = {
    "align": "left",
    "bg": "coolgray-100",
    "bold": "false",
    "color": "dark",
    "live": "false",
    "padding": "6"
};
