import React from "react";
import {CodeCake} from "codecake/codecake.js";
import {highlight} from "codecake/highlight.js";
import {lineNumbers} from "codecake/linenumbers.js";

export const useEditor = (parent, lang) => {
    const editor = React.useRef(null);
    React.useEffect(() => {
        if (!editor.current && parent.current) {
            editor.current = CodeCake(parent.current, {});
            editor.current.addPlugin(highlight(lang || "html"));
            editor.current.addPlugin(lineNumbers());
        }
    }, []);
    return editor;
};
