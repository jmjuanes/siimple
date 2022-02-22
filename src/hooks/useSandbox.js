import React from "react";
import kofi from "kofi";
import lzString from "lz-string";
import {getSandboxTemplate} from "../utils/getSandboxTemplate.js";
import {getHost} from "../utils/host.js";
// import {getCDNPath} from "../cdn.js";

//Create a new empty sandbox
const createSandbox = () => ({
    version: "latest",      // siimple version 
    html: getSandboxTemplate(),
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
        const host = getHost();
        const query = new URLSearchParams();
        // Check for custom version
        if (content.version !== "latest") {
            query.set("version", "latest");
        }
        query.set("html", compressStr(content.html));
        // Return processed URL
        return `${host}/try#${query.toString()}`;
    });
};

// Save sandbox in JSON format
const exportSandbox = sandbox => {
    const content = JSON.stringify({
        html: sandbox.html || "",
        version: sandbox.version || "latest",
    }); 
    const fileContent = URL.createObjectURL(new Blob([content], {
        type: "application/json",
    }));
    const fileName = `sandbox-${kofi.timestamp("YYYY-MM-DD")}.json`;
    return kofi.downloadFile(fileName, fileContent);
};

// Sandbox hooks
export const useSandbox = () => {
    const sandbox = React.useRef(null);
    React.useEffect(() => {
        // Initialize sandbox content
        sandbox.current = {
            content: createSandbox(),
            key: null,
        };
        // Register sandbox update method --> update sandbox content
        sandbox.current.update = newContent => {
            sandbox.content = Object.assign(sandbox.current.content, newContent);
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
