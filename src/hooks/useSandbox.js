import React from "react";
import kofi from "kofi";
import lzString from "lz-string";
import {getSandboxTemplate} from "../utils/getSandboxTemplate.js";
import {getHost} from "../utils/host.js";
import {getCDNPath} from "../cdn.js";

//Create a new empty sandbox
const createSandbox = () => ({
    content: {
        version: "latest",      // siimple version 
        html: getSandboxTemplate(),
    },
    key: null,
});

// Compress and decompress  string
const compressStr = str => lzString.compressToBase64(str);
const decompressStr = str => lzString.decompressFromBase64(str);

// Fetch sandbox from source
const importSandbox = () => {
    return new Promise((resolve, reject) => {
        const content = createSandbox().content;
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

// Render sandbox
const renderSandbox = (parent, content) => {
    const cdnPath = getCDNPath(content.version, "siimple.min.css");
    const documentTemplate = `
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link href="${cdnPath}" rel="stylesheet" type="text/css">
                <script>
                    // window.addEventListener("message", event => {});
                </script>
            </head>
            <body>${content.html}</body>
        </html>
    `;
    parent.setAttribute("sandbox", "allow-scripts allow-same-origin");
    // parent.setAttribute("scrolling", "yes"); // Enable iframe scrolling
    // parent.style.width = "100%"; // Iframe width
    // parent.style.height = "100%"; // Iframe height
    // parent.style.backgroundColor = "#ffffff";
    // parent.style.border = "0"; // Remove iframe borders 
    // Load iframe content
    parent.contentWindow.document.open();
    parent.contentWindow.document.write(documentTemplate);
    parent.contentWindow.document.close(); 
};

// Sandbox hooks
export const useSandbox = () => {
    const [sandbox, setSandbox] = React.useState(() => {
        return createSandbox();
    });
    // First rendering --> initialize sandbox
    React.useEffect(() => {
        if (!sandbox.key) { 
            sandbox.key = Date.now();
            // Register sandbox merhods
            sandbox.update = newContent => {
                sandbox.content = Object.assign(sandbox.content, newContent);
                sandbox.key = Date.now();
                setSandbox({...sandbox}); // Update sandbox
            };
            sandbox.share = () => shareSandbox(sandbox.content);
            sandbox.render = parent => renderSandbox(parent, sandbox.content);
            sandbox.init = () => {
                return importSandbox().then(content => sandbox.update(content));
            };
        }
    }, []);
    // Return sandbox reference
    return sandbox;
};
