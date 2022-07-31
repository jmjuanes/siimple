import React from "react";
import {highlightStr} from "codecake/highlight.js";
import {classNames} from "@siimple/styled";

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

// Export live code component
export const LiveCode = props => {
    let codeChildren = props.children; //Code children
    const codeProps = {};
    const lang = (props.className || "").replace("language-", "").replace("javascript", "js");
    const codeClass = "livecode has-bg-gray-800 has-text-white CodeCake-dark";
    if (["html", "css", "js"].includes(lang)) {
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
    const demoClass = classNames({
        "has-mb-6 has-p-6 has-bg-gray-100 has-radius-md": true,
        [`has-text-${props.color}`]: true,
    });
    const contentClass = classNames({
        "has-w-full has-overflow-y": true,
        "is-flex has-items-center has-justify-center": props.centered === "true",
    });
    return (
        <div className="has-mb-12">
            <div align={props.align} className={demoClass}>
                <div
                    className={contentClass}
                    dangerouslySetInnerHTML={{"__html": props.children}}
                />
            </div>
            <div className={`${codeClass} has-my-none`}>
                <CodeTitle title={props.title} />
                <pre className="has-my-none" {...codeProps}>{codeChildren}</pre>
            </div>
        </div>
    );
}

LiveCode.defaultProps = {
    align: "left",
    bg: "gray-100",
    bold: "false",
    color: "dark",
    live: "false",
    padding: "6",
};
