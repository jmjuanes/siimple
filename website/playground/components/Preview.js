import React from "react";
import kofi from "kofi";

export const Preview = React.forwardRef((props, ref) => {
    const previewClass = kofi.classNames({
        // "is-hidden": !props.visible,
        "has-bg-white": true,
    });
    return React.createElement("iframe", {
        ref: ref,
        className: previewClass,
        style: {
            width: "100%",
            height: "100%",
            border: "0",
            backgroundColor: "#ffffff",
        },
        sandbox: "allow-scripts allow-same-origin",
        scrolling: "yes",
        src: `${process.env.PUBLIC_PATH}playground.html`,
        onLoad: props.onLoad,
    });
});
