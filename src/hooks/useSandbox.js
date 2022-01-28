import React from "react";
import kofi from "kofi";
import lzString from "lz-string";
import {getPlaygroundTemplate} from "../utils/getPlaygroundTemplate.js";

//Create a new empty sandbox
const createSandbox = () => ({
    "version": "latest",      // siimple version 
    "html": getPlaygroundTemplate(),
});

// Compress and decompress  string
const compressStr = str => lzString.compressToBase64(str);
const decompressStr = str => lzString.decompressFromBase64(str);

// Encode the provided pad
const encodeSandbox = content => {
    return new Promise((resolve, reject) => {
        return resolve(compressStr(JSON.stringify(content)));
    });
};

// Decode the provided sandbox
const decodeSandbox = content => {
    return new Promise((resolve, reject) => {
        return resolve(JSON.parse(decompressStr(content)));
    });
};

// Fetch sandbox from source
const importSandbox = source => {
    const baseSandbox = createSandbox();
    // Check for version provided --> create an empty sandbox
    // if (typeof source.version === "string") {
    //     return Promise.resolve({"siimple": source.version});
    // }
    // Check for sandbox encoded in source
    if (typeof source.data === "string") {
        return decodeSandbox(source.data);
    }
    // Check for url to fetch 
    if (typeof source.url === "string") {
        return kofi.http.json(source.url);
    }
    // Fallback --> empty sandbox
    return Promise.resolve(baseSandbox);
};

// Share the sandbox via URL
const shareSandbox = (content, options) => {
    //let key = null; //Encryption key
    //return Promise.resolve(JSON.stringify(content)).then(function (strContent) {
    //    return encryptPad(strContent);
    //}).then(function (encrypted) {
    //    key = encrypted.key; //Save encrypted key
    //    return kofi.http.json(`/api/storage`, {
    //        "method": "post",
    //        "json": {"content": encrypted.content}
    //    });
    //}).then(function (response) {
    //    return {"id": response.id, "key": key};
    //});
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
        // sandbox.current.export = () => exportSandbox(sandbox.content);
        sandbox.current.importFrom = source => {
            return importSandbox(source).then(content => {
                return sandbox.current.update(content);
            });
        };
    }, []);
    // Return sandbox reference
    return sandbox;
};
