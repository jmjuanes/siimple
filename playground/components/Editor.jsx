import React from "react";
import {classNames} from "@siimple/react";

export const Editor = React.forwardRef((props, ref) => {
    const editorClass = classNames({
        "CodeCake has-w-full has-h-full has-p-none is-clipped": true,
        "CodeCake-dark has-bg-dark": props.theme === "dark",
        "CodeCake-light has-bg-light": props.theme === "light",
    });
    return (
        <div className={props.visible ? "has-h-full is-clipped" : "is-hidden"}>
            <div className={editorClass} ref={ref} />
        </div>
    );
});
