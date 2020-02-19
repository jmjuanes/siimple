import kofi from "kofi";

//Explor request wrapper
export function client (url) {
    return kofi.request({
        "url": url,
        "method": "get",
        "json": true
    });
}

