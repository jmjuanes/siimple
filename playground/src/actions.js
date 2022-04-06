import kofi from "kofi";
import lzString from "lz-string";

// Compress and decompress  string
const compressStr = str => lzString.compressToBase64(str);
const decompressStr = str => lzString.decompressFromBase64(str);

// Load playground content from source
export const loadPlayground = content => {
    return new Promise((resolve, reject) => {
        const query = new URLSearchParams(window.location.hash.substr(1) || "");
        // Check for custom version provided
        // if (query.has("version")) {
        //     content.version = query.get("version");
        // }
        // Check for HTML code encoded in source
        if (query.has("html")) {
            content.html = decompressStr(query.get("html"));
        }
        // Check for custom configuration
        if (query.has("config")) {
            content.config = decompressStr(query.get("config"));
        }
        // Continue
        return resolve(content);
    });
};

// Share the playground code via URL
export const sharePlayground = content => {
    return Promise.resolve().then(() => {
        const query = new URLSearchParams();
        // Check for custom version
        // if (content.version !== "latest") {
        //     query.set("version", "latest");
        // }
        query.set("html", compressStr(content.html));
        query.set("config", compressStr(content.config));
        return `${window.location.origin}#${query.toString()}`;
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

// Update preview hanlder
export const inject = (preview, html, css) => {
    const data = {
        source: "siimple-playground",
        html: html,
        css: css,
    };
    return preview.contentWindow.postMessage(data, "*");
};

// Compile siimple
export const compile = (worker, config) => {
    return new Promise(resolve => {
        const id = kofi.tempid();
        const onMessage = event => {
            if (event.data?.id === id) {
                worker.removeEventListener("message", onMessage);
                return resolve(event.data);
            }
        };
        worker.addEventListener("message", onMessage);
        worker.postMessage({
            id: id,
            config: config,
        })
    });
};
