import kofi from "kofi";
import lzString from "lz-string";

import {build, mergeConfig} from "siimple";
import defaultConfig from "siimple-config";
import colors from "siimple-colors";

const AsyncFunction = Object.getPrototypeOf(async () => {}).constructor;
const modules = {
    "siimple-colors": colors,
};

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
        const host = window.location.host;
        const query = new URLSearchParams();
        // Check for custom version
        // if (content.version !== "latest") {
        //     query.set("version", "latest");
        // }
        query.set("html", compressStr(content.html));
        query.set("config", compressStr(content.config));
        // Return processed URL
        return `${host}#${query.toString()}`;
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

// Evaluate configuration
const evaluateConfig = configStr => {
    return kofi.delay(2000).then(() => {
        const configCode = configStr
            .replace(/import\s*(.*?)\s*from\s*(['"])siimple\/colors(\.js)?\2/g, `const $1 = __require("siimple-colors");`)
            .replace(/export default /, "return ");
        
        // Custom require function
        const __require = name => modules[name];
        const fn = new AsyncFunction("__require", configCode);
        return fn(__require);
    });
};

// Build CSS styles
export const buildStyle = configStr => {
    return evaluateConfig(configStr).then(config => {
        return build(mergeConfig({...defaultConfig}, config));
    });
};

// Update preview hanlder
export const updatePreview = (preview, html, css) => {
    const data = {
        source: "siimple-playground",
        html: html,
        css: css,
    };
    return preview.contentWindow.postMessage(data, "*");
};
