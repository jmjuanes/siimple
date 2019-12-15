import kofi from "kofi";

//Local sites content
let localSites = {};

//Initialize the sites storage
export const initLocalSites = function () {
    let sites = JSON.parse(window.localStorage.getItem("sites"));
    //Check for null sites storage
    if (sites !== null) {
        localSites = sites;
    }
};

//Create a site page
export const createPage = function (name, path) {
    return {
        "id": kofi.helpers.tempid(),
        "name": name,
        "path": path,
        "content": []
    };
};

//Create a new site
export const createSite = function (options) {
    return {
        "id": kofi.helpers.tempid(),
        "name": options.name,
        "source": options.source,
        "pages": [
            createPage("Home", "/")
        ],
        "layout": {},
        "published": false,
        "author": options.author,
        "createdAt": Date.now(),
        "updatedAt": Date.now(),
        "publishedAt": null
    };
};

//Load a site
export const loadSite = function (id, callback) {
    //Check if the sites is in the localSites storage
    if (typeof localSites[id] !== "undefined") {
        return callback(null, localSites[id]);
    }
    //Site not found
    return callback(new Error("Site not found"), null);
};

//Update a site content
export const saveSite = function (id, content, callback) {
    //Save the site in the local sites storage
    localSites[id] = content;
    //Write the localStorage
    window.localStorage.setItem("sites", JSON.stringify(localSites));
    //Continue
    return callback(null);
};

