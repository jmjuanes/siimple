import kofi from "kofi";
import {isLocalhost} from "./utils/host.js";

//CDN Urls
export const CDN_URL_OLD = "https://cdn.jsdelivr.net/npm/{{package}}@{{version}}/dist/{{file}}";
export const CDN_URL_LATEST = "/static/{{file}}";

//Get CDN path of the specified package
export function getCDNPath (pkg, version, file) {
    //let file = config.siimple["include"][pkg].file; //Get file name to import
    //Check for localhost and latest version --> import from custon CDN folder
    //if (isLocalhost() === true && version === "latest") {
    if (version === "latest") {
        return kofi.format(CDN_URL_LATEST, {"file": file});
    }
    //Not localhost or latest version ---> import from specified CDN
    return kofi.format(CDN_URL_OLD, {
        "package": pkg,
        "version": version,
        "file": file
    });
}

