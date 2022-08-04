import React from "react";
import {classNames} from "@siimple/styled";

export const Editor = React.forwardRef((props, ref) => {
    const editorClass = classNames({
        "CodeCake has-w-full has-h-full has-p-none is-clipped": true,
        "CodeCake-dark has-bg-gray-700": props.theme === "dark",
        "CodeCake-light has-bg-gray-100": props.theme === "light",
    });

    return (
        <div className={props.visible ? "has-h-full is-clipped" : "is-hidden"}>
            <div className={editorClass} ref={ref} />
        </div>
    );
});
