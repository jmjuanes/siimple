import React from "react";
import {CodeCake} from "codecake/codecake.js";
import {highlight} from "codecake/highlight.js";
import {lineNumbers} from "codecake/linenumbers.js";

// Editor hook
export const useEditor = (parent, options) => {
    const cake = React.useRef(null);
    React.useEffect(() => {
        if (!cake.current && parent.current) {
            cake.current = CodeCake(parent.current, {});
            cake.current.addPlugin(highlight(options.lang || "html"));
            cake.current.addPlugin(lineNumbers());
        }
    }, []);
    return cake;
};
