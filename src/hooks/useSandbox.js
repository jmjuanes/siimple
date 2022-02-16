import React from "react";
import kofi from "kofi";
import lzString from "lz-string";
import {getSandboxTemplate} from "../utils/getSandboxTemplate.js";
import {getHost} from "../utils/host.js";

//Create a new empty sandbox
const createSandbox = () => ({
    "version": "latest",      // siimple version 
    "html": getSandboxTemplate(),
});

// Compress and decompress  string
const compressStr = str => lzString.compressToBase64(str);
const decompressStr = str => lzString.decompressFromBase64(str);

// Fetch sandbox from source
const importSandbox = () => {
    return new Promise((resolve, reject) => {
        const content = createSandbox();
        const query = new URLSearchParams(window.location.hash.substr(1) || "");
        // Check for version provided --> create an empty sandbox
        if (query.has("version")) {
            content.version = query.get("version");
        }
        // Check for sandbox encoded in source
        if (query.has("data")) {
            content.html = decompressStr(query.get("data"));
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
        query.set("data", compressStr(content.html));
        // Return processed URL
        return `${host}/#${query.toString()}`;
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
export const useSandbox = parent => {
    const sandbox = React.useRef();
    // First rendering --> initialize sandbox
    React.useEffect(() => {
        if (sandbox.current) { return; } // Sandbox already initialized
        sandbox.current = {
            content: {},
        };
        // Register sandbox merhods
        sandbox.current.update = newContent => {
            sandbox.current.content = Object.assign(sandbox.current.content, newContent);
        };
        sandbox.current.share = () => shareSandbox(sandbox.current.content);
        // sandbox.current.export = () => exportSandbox(sandbox.content);
        sandbox.current.init = () => {
            return importSandbox().then(content => {
                return sandbox.current.update(content);
            });
        };
    }, []);
    // Return sandbox reference
    return sandbox;
};
