import {redirectHashbang} from "rouct";

//Export redirect wrapper
export function redirect (href) {
    if (href.indexOf("http") === 0) {
        return Object.assign(document.createElement("a"), {
            "target": "_blank",
            "href": href
        }).click();
    }
    //Default --> redirect to an internal url
    return redirectHashbang(href);
}

//Secure base64 encoding
export function base64Encode (str) {
    return new Buffer(str).toString("base64");
}

//Secure base64 decode
export function base64Decode (str) {
    return new Buffer(str).toString("utf8");
}

//Encode an url using URL Safe Base64 spec
//https://tools.ietf.org/html/rfc4648#section-5
//https://gist.github.com/jhurliman/1250118
export function urlEncode (str) {
    return base64Encode(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

//Decode a URL Safe Base64
//https://gist.github.com/jhurliman/1250118
export function urlDecode (str) {
    str = str.replace(/-/g, "+").replace(/_/g, "/");
    while (str.length % 4) {
        str = str + "="; //Add ending =
    }
    //Return base64 decoded url
    return base64Decode(str);
}



