import react from "react";
import kofi from "kofi";
import lzString from "lz-string";
import {getCDNPath} from "../cdn.js";
import template from "../templates/playground.js";

const defaultMeta = [];
const defaultIncludes = [
    {"pkg": "siimple", "type": "style", "file": "siimple.min.css"}
];

// Generate script content
const generateScript = js => {
    const scriptContent = js; //TODO: add try-catch wrapper to the js script
    const tagContent = `
    //console.clear();
    document.addEventListener("DOMContentLoaded", function () {
        let script = document.createElement("script");
        script.innerHTML = ${JSON.stringify(scriptContent)};
        document.body.appendChild(script);
    });`;
    //Return the js script tag
    return kofi.element("script", {"type": "text/javascript"}, tagContent);
};

//Generate style content
const generateStyle = css => {
    return kofi.element("style", {}, css);
};

//Generate external script tag
const generateExternalScriptTag = src => {
    return kofi.element("script", {
        "type": "text/javascript", 
        "src": src,
    });
};

//Generate external style tag
const generateExternalStyleTag = src => {
    return kofi.element("link", {
        "rel": "stylesheet",
        "type": "text/css",
        "href": src,
    });
};

// Generate document
const generateDocument = content => {
    const bodyContent = content || ""; // Body content
    const headContent = []; // Initialize head content
    // Check for meta content
    // (content.meta || []).forEach(meta => {
    //     return headContent.push(kofi.element("meta", meta, null));
    // });
    //Add siimple files
    //TODO: check the package file to import
    defaultIncludes.forEach(item => {
        const url = getCDNPath(item.pkg, "latest", item.file);
        return headContent.push(generateExternalStyleTag(url));
    });
    //Add external sources
    //if (isArray(content.external)) {
    //    headContent = headContent.concat(content.external.map(function (src) {
    //        return generateExternalStyleTag(src);
    //    }));
    //}
    // Return the document content
    return kofi.stringify(
        kofi.element("html", {}, 
            kofi.element("head", {}, headContent),
            kofi.element("body", {html: bodyContent}),
        )
    );
};

//Render the pad
export const renderSandbox = (parent, content, options) => {
    options = options || {};
    const permissions = options?.permissions || ["allow-scripts"];
    // Add iframe permissions
    parent.setAttribute("sandbox", permissions.join(" "));
    parent.setAttribute("scrolling", "yes"); // Enable iframe scrolling
    parent.style.width = options?.width || "100%"; // Iframe width
    parent.style.height = options?.height || "100%"; // Iframe height
    parent.style.backgroundColor = options.background || "#ffffff";
    parent.style.border = "0"; // Remove iframe borders 
    //Bind iframe console
    //consoleMethods.forEach(function (method) {
    //    self.iframe.contentWindow.console[method] = function () {
    //        let args = arguments; //Get console arguments
    //        //window.console[method].apply(window.console, args); //Call parent console
    //        return self.fireEventListener(`console:${method}`, args);
    //    };
    //});
    // Load iframe content
    parent.contentWindow.document.open();
    parent.contentWindow.document.write(generateDocument(content));
    parent.contentWindow.document.close();
    // Return the iframe instance
    return parent;
};

//Create a new empty sandbox
export const createSandbox = () => ({
    "version": "1",      //Sandbox version 
    "external": [],      //External scripts or styles
    "data": "",
});

//Migrate a sandbox from older to new versions
export const migrateSandbox = content => {
    return Promise.resolve(content);
};

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
export const importSandbox = source => {
    //Check for version provided --> create an empty sandbox
    if (typeof source.version === "string") {
        return Promise.resolve({"siimple": source.version});
    }
    //Check for sandbox encoded in source
    if (typeof source.data === "string") {
        return decodeSandbox(source.data);
    }
    //Check for url to fetch 
    if (typeof source.url === "string") {
        return kofi.http.json(source.url);
    }
    //Check for local sandbox
    //if (typeof source.file !== "undefined" && source.file instanceof File) {
    //    return kofi.file.readAsJSON(source.file);
    //}
    //Fallback --> empty sandbox
    return Promise.resolve({});
};

// Share pad and get the url to the new sandbox
export const shareSandbox = (content, options) => {
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
export const exportSandbox = sandbox => {
    const content = JSON.stringify({
        data: sandbox.data || "",
        version: sandbox.version || "1",
    }); 
    const fileContent = URL.createObjectURL(new Blob([content], {
        type: "application/json",
    }));
    const fileName = `sandbox-${kofi.timestamp("YYYY-MM-DD")}.json`;
    return kofi.downloadFile(fileName, fileContent);
};

// Sandbox hooks
export const useSandbox = () => {
    const [sandbox, setSandbox] = React.useState({
        data: "",
        key: "",
    });
    // First rendering --> initialize sandbox
    const sandboxInit = () => {
        if (sandbox.key) { return; } // Sandobx already initialized
        // Register sandbox merhods
        sandbox.render = parent => {
            return renderSandbox(parent.current, sandbox.data);
        };
        sandbox.export = () => exportSandbox(sandbox);
        sandbox.from = source => {
            return importSandbox(source); // TODO: finish
        };

    };
    React.useEffect(sandobxInit, []);
    // Return sandbox reference
    return sandbox;
};
