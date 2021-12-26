import React from "react";
import {classNames} from "siimple-react";
import {colorize} from "../colorize.js";

//Export live code component
export const LiveCode = (props) => {
    //console.log(props);
    let codeChildren = props.children; //Code children
    const codeProps = {};
    const lang = (props.className || "").replace("language-", "");
    const codeClass = "siimple-code has-bg-coolgray-700 has-text-white";
    if (["html", "css", "scss"].includes(lang)) {
        codeProps["dangerouslySetInnerHTML"] = {
            "__html": colorize(props.children, lang, "dark"),
        };
        codeChildren = null; //Ignore children
    }
    //Check for no live preview --> render the code wrapped in a <pre> element
    if (props.live !== "true") {
        return <pre className={`${codeClass} has-mb-6`} {...codeProps}>{codeChildren}</pre>;
    }
    //const {padding, bg, color} = props;
    const demoClass = classNames("has-mb-6 has-radius has-overflow-x-hidden", [
        `has-p-${props.padding}`,
        // `has-bg-${props.bg}`,
        "has-bg-coolgray-100",
        `has-text-${props.color}`,
    ]);
    const contentClass = classNames("has-w-full has-overflow-y", {
        "has-d-flex has-items-center has-justify-center": props.centered === "true",
    });
    return (
        <div className="has-mb-12 has-mt-6">
            {/* Live code block */}
            <div align={props.align} className={demoClass}>
                <div className={contentClass} dangerouslySetInnerHTML={{"__html": props.children}} />
            </div>
            {/* Code */}
            <pre className={`${codeClass} has-my-0`} {...codeProps}>{codeChildren}</pre>
            {/* <pre className="siimple-codeblock has-mb-0">{props.children}</pre> */}
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
