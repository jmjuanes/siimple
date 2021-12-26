import kofi from "kofi";
import lzString from "lz-string";
import {getCDNPath} from "common/src/cdn.js";
//import {config} from "../config.js";
import * as template from "./templates/default.js";
import {languages} from "./languages.js";

//Global variables
//const crypto = window.crypto.subtle; //Crypto alias
const defaultIncludes = [
    {"package": "siimple", "type": "style", "file": "siimple.min.css"}
];
const defaultMeta = [];

//Alias to check if the value is an array
const isArray = (value) => {
    return typeof value === "object" && value !== null && Array.isArray(value);
};

//Generate script content
const generateScript = (js) => {
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
const generateStyle = (css) => {
    return kofi.element("style", {}, css);
};

//Generate external script tag
const generateExternalScriptTag = (src) => {
    return kofi.element("script", {"type": "text/javascript", "src": src});
};

//Generate external style tag
const generateExternalStyleTag = (src) => {
    return kofi.element("link", {"rel": "stylesheet", "type": "text/css", "href": src});
};

//Generate document
const generateDocument = (content) => {
    const bodyContent = content["html"] || ""; //Body content
    const headContent = []; //Initialize head content
    //Check for meta content
    (content.meta || []).forEach(meta => {
        return headContent.push(kofi.element("meta", meta, null));
    });
    //Add siimple files
    //TODO: check the package file to import
    defaultIncludes.forEach(item => {
        //let file = padConfig.include[name].file; //Get file to import
        headContent.push(generateExternalStyleTag(getCDNPath(item.package, "latest", item.file)));
    });
    //Add external sources
    //if (isArray(content.external)) {
    //    headContent = headContent.concat(content.external.map(function (src) {
    //        return generateExternalStyleTag(src);
    //    }));
    //}
    //Check for style content
    if (typeof content["css"] === "string" && content["css"].trim().length > 0) {
        headContent.push(generateStyle(content["css"]));
    }
    //TODO: add runtime
    //Append script content (TODO: add this to body instead of to head?)
    if (typeof content["js"] === "string" && content["js"].trim().length > 0) {
        headContent.push(generateScript(content["js"]));
    }
    //Return the document content
    return kofi.stringify(
        kofi.element("html", {}, 
            kofi.element("head", {}, headContent),
            kofi.element("body", {}, bodyContent),
        )
    );
};

//Create a new iframe
const createIframe = (options) => {
    let newIframe = document.createElement("iframe");
    newIframe.style.border = "0"; //Remove iframe border
    //Add iframe permissions
    if (isArray(options.permissions)) {
        newIframe.setAttribute("sandbox", options.permissions.join(" "));
    }
    newIframe.setAttribute("scrolling", "yes"); //Enable iframe scrolling
    newIframe.style.width = options.width; //Iframe width
    newIframe.style.height = options.height; //Iframe height
    //newIframe.style.border = "0"; //Remove iframe borders 
    //Return the iframe element
    return newIframe;
};

//Render the pad
export const renderSandbox = (parent, content, options) => {
    options = options || {};
    const permissions = options?.permissions || ["allow-scripts"];
    //Add iframe permissions
    parent.setAttribute("sandbox", permissions.join(" "));
    parent.setAttribute("scrolling", "yes"); //Enable iframe scrolling
    parent.style.width = options?.width || "100%"; //Iframe width
    parent.style.height = options?.height || "100%"; //Iframe height
    parent.style.border = "0"; //Remove iframe borders 
    //Bind iframe console
    //consoleMethods.forEach(function (method) {
    //    self.iframe.contentWindow.console[method] = function () {
    //        let args = arguments; //Get console arguments
    //        //window.console[method].apply(window.console, args); //Call parent console
    //        return self.fireEventListener(`console:${method}`, args);
    //    };
    //});
    //Load iframe content
    parent.contentWindow.document.open();
    parent.contentWindow.document.write(generateDocument(content));
    parent.contentWindow.document.close();
    //Return the iframe instance
    return parent;
};

//Create a new empty sandbox
export const createSandbox = () => {
    const newSandbox = {
        "version": "1",      //Sandbox version 
        "siimple": "latest", //Siimple version
        "external": []       //External scripts or styles
    };
    //Assign languages content
    Object.keys(languages).forEach(key => {
        newSandbox[key] = template[key] || ""; //Assign language content
    });
    //Return the new sandbox content
    return newSandbox;
};

//Migrate a sandbox from older to new versions
export const migrateSandbox = (content) => {
    return Promise.resolve(content);
};

//Validate a sandbox
const isValidSandbox = (content) => {
    //Check for invalid pad content
    if (typeof content !== "object" || content === null) {
        return false;
    }
    ////Check for no pad type provided
    //if (typeof content.type !== "string" || content.type !== padType) {
    //    return false;
    //}
    //Check for no content on this pad
    if (typeof content["html"] !== "string") {
        return false;
    }
    //Valid pad --> continue
    return true;
};

//Compress the provided string
const compressStr = function (str) {
    //return lzString.compressToBase64(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    return lzString.compressToBase64(str);
};

//Decompress the provided string
const decompressStr = function (str) {
    //return lzString.decompressFromBase64(str.replace(/-/g, "+").replace(/_/g, "/"));
    return lzString.decompressFromBase64(str);
};

//Encode the provided pad
const encodeSandbox = function (content) {
    return new Promise(function (resolve, reject) {
        return resolve(compressStr(JSON.stringify(content)));
    });
};

//Decode the provided sandbox
const decodeSandbox = function (content) {
    return new Promise(function (resolve, reject) {
        return resolve(JSON.parse(decompressStr(content)));
    });
};

//Encrypt the provided object
const encryptObject = function (content) {
    let iv = new Uint8Array(12);
    return Promise.resolve(null).then(function () {
        //Generate a random key that will be used to encrypt the pad
        let keyAlgorithm = {"name": "AES-GCM", "length": 128};
        return crypto.generateKey(keyAlgorithm, true, ["encrypt", "decrypt"]);
    }).then(function (key) {
        let encryptContent = new TextEncoder().encode(content);
        //Encrypt the pad content and export the key
        return Promise.all([
            crypto.encrypt({"name": "AES-GCM", "iv": iv}, key, encryptContent),
            crypto.exportKey("jwk", key)
        ]);
    }).then(function (encrypted) {
        //Export the encrypted content to string
        let encryptedArray = Array.from(new Uint8Array(encrypted[0]));
        let encryptedStr = btoa(encryptedArray.map(function (byte) {
            return String.fromCharCode(byte);
        }).join(""));
        //Resolve with the content string and the key
        return Promise.resolve({
            "content": encrypted, 
            "key": encrypted[1].k //Return base64 version of the key
        });
    });
};

//Decrypt the provided object
const decryptObject = function (encryptedContent, keyStr) {
    let iv = new Uint8Array(12);
    //Import the provided key
    return Promise.resolve(null).then(function () {
        let keyObject = {
            "k": keyStr,
            "alg": "A128GCM",
            "ext": true,
            "key_ops": ["encrypt", "decrypt"],
            "kty": "oct"
        };
        let keyAlgorithm = {"name": "AES-GCM", "length": 128};
        return crypto.importKey("jwk", keyObject, keyAlgorithm, false, ["decrypt"]);
    }).then(function (key) {
        let encryptedStr = atob(encryptedContent); //Convert to binary
        let encryptedUint8 = new Uint8Array(encryptedStr.match(/[\s\S]/g).map(function (ch) {
            return ch.charCodeAt(0);
        }));
        //Decrypt the content
        return crypto.decrypt({"name": "AES-GCM", "iv": iv}, key, encryptedUint8);
    }).then(function (encryptedBuffer) {
        return new TextDecoder().decode(encryptedBuffer);
    });
};

//Fetch sandbox from source
export function fetchSandbox (source) {
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
}

//Share pad and get the url to the new sandbox
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

//Save sandbox in JSON format
export const exportSandbox = (content, name) => {
    const fileName = name || `sandbox-${kofi.timestamp("YYYY-MM-DD")}.json`;
    const fileContent = JSON.stringify(content, null, "    "); 
    return kofi.file.download(fileName, "application/json", fileContent);
};
