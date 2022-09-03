import React from "react";

export const Preview = React.forwardRef((props, ref) => {
    return React.createElement("iframe", {
        ref: ref,
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
