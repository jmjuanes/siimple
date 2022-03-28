import React from "react";
import kofi from "kofi";
import {CodeCake} from "codecake/codecake.js";
import {highlight} from "codecake/highlight.js";
import {lineNumbers} from "codecake/linenumbers.js";
import lzString from "lz-string";
import {defaultHtml, defaultConfig} from "./defaults.js";

// Editor hook
export const useEditor = (parent, lang) => {
    const cake = React.useRef(null);
    React.useEffect(() => {
        if (!cake.current && parent.current) {
            cake.current = CodeCake(parent.current, {});
            cake.current.addPlugin(highlight(lang || "html"));
            cake.current.addPlugin(lineNumbers());
        }
    }, []);
    return cake;
};

//Create a new empty sandbox
const createSandbox = () => ({
    version: "latest",      // siimple version 
    html: defaultHtml + "",
    config: defaultConfig + "",
});

// Compress and decompress  string
const compressStr = str => lzString.compressToBase64(str);
const decompressStr = str => lzString.decompressFromBase64(str);

// Fetch sandbox from source
const importSandbox = () => {
    return new Promise((resolve, reject) => {
        const content = {};
        const query = new URLSearchParams(window.location.hash.substr(1) || "");
        // Check for custom version provided
        // if (query.has("version")) {
        //     content.version = query.get("version");
        // }
        // Check for sandbox encoded in source
        if (query.has("html")) {
            content.html = decompressStr(query.get("html"));
        }
        // Continue
        return resolve(content);
    });
};

// Share the sandbox via URL
const shareSandbox = content => {
    return Promise.resolve().then(() => {
        const host = window.location.host;
        const query = new URLSearchParams();
        // Check for custom version
        if (content.version !== "latest") {
            query.set("version", "latest");
        }
        query.set("html", compressStr(content.html));
        // query.set("config", compressStr(content.config));
        // Return processed URL
        return `${host}/try#${query.toString()}`;
    });
};

// Save sandbox in JSON format
const exportSandbox = sandbox => {
    const content = JSON.stringify({
        html: sandbox.html || "",
        config: sandbox.config || "",
        version: sandbox.version || "latest",
    }); 
    const fileContent = URL.createObjectURL(new Blob([content], {
        type: "application/json",
    }));
    const fileName = `playground-${kofi.timestamp("YYYY-MM-DD")}.json`;
    return kofi.downloadFile(fileName, fileContent);
};

// Sandbox hooks
export const useSandbox = () => {
    const sandbox = React.useRef(null);
    React.useEffect(() => {
        sandbox.current = {
            content: createSandbox(),
            key: null,
        };
        // Register sandbox update method --> update sandbox content
        sandbox.current.update = newContent => {
            sandbox.content = {
                ...sandbox.current.content,
                ...newContent,
            };
            sandbox.key = Date.now();
        };
        // Register sandbox init method --> initialize sandbox
        sandbox.current.init = () => {
            return importSandbox().then(content => sandbox.current.update(content));
        };
        // Register sandbox share method
        sandbox.current.share = () => {
            return shareSandbox(sandbox.current.content);
        };
    }, []);
    // Return sandbox reference
    return sandbox;
};
