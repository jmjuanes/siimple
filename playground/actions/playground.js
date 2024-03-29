import lzString from "lz-string";

// Compress and decompress  string
const compressStr = str => lzString.compressToBase64(str);
const decompressStr = str => lzString.decompressFromBase64(str);

// Load playground content from source
export const loadPlayground = content => {
    return new Promise((resolve, reject) => {
        const query = new URLSearchParams(window.location.hash.substr(1) || "");
        // Check for playground data encoded in URL
        if (query.has("html") || query.has("config")) {
            if (query.has("html")) {
                content.html = decompressStr(query.get("html"));
            }
            if (query.has("config")) {
                content.config = decompressStr(query.get("config"));
            }
        }
        // Check for data in localStorage
        // else {
        //     content.html = localStorage.getItem(htmlSymbol) || content.html;
        //     content.config = localStorage.getItem(configSymbol) || content.config;
        // }
        return resolve(content);
    });
};

// Save playground content in local storage
export const savePlayground = content => {
    // localStorage.setItem(htmlSymbol, content.html || "");
    // localStorage.setItem(configSymbol, content.config || "");
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
        // return `${window.location.origin}#${query.toString()}`;
        return `${window.location.href}#${query.toString()}`;
    });
};

// Save playground in JSON format
export const exportPlayground = content => {
    // const data = JSON.stringify({
    //     html: content.html || "",
    //     config: content.config || "",
    //     version: sandbox.version || "latest",
    // }); 
    // const fileContent = URL.createObjectURL(new Blob([data], {
    //     type: "application/json",
    // }));
    // const fileName = `playground-${kofi.timestamp("YYYY-MM-DD")}.json`;
    // return kofi.downloadFile(fileName, fileContent);
};
