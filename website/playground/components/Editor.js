import React from "react";
import kofi from "kofi";

export const Editor = React.forwardRef((props, ref) => {
    const editorClass = kofi.classNames({
        "CodeCake has-s-full has-p-0 is-clipped": true,
        "CodeCake-dark has-bg-gray-700": props.theme === "dark",
        "CodeCake-light has-bg-gray-100": props.theme === "light",
    });

    return (
        <div className={props.visible ? "has-h-full is-clipped" : "is-hidden"}>
            <div className={editorClass} ref={ref} />
        </div>
    );
});
