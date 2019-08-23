let path = require("path");
let log = require("./logger.js");
let util = require("./util.js");

//Default configuration
//let defaultConfig = require("../conf/default.js");

//Check if a value is not a valid object
let isNotObject = function (value) {
    return typeof value !== "object" || value === null;
};

//Parse a configuration object
module.exports.parseConfig = function (config) {
    //Verify for source and target values
    //if (typeof config.source !== "string" || typeof config.target !== "string") {
    //    log.warning("No build source or target paths provided. Using defaults");
    //}
    //Merge with the default configuration
    //config = Object.assign({}, defaultConfig, config);
    //Check for site configuration
    if (isNotObject(config.site) === true) {
        config.site = {};
    }
    //Check if the theme is not provided
    if (typeof config.theme !== "string") {
        config.theme = null;
    }
    //Check for no env variables provided
    if (isNotObject(config.env) === true) {
        config.env = {};
    }
    //Check for no plugins list provided
    if (util.isArray(config.plugins) === false || config.plugins === null) {
        config.plugins = [];
    }
    //Check the head object
    if (util.isArray(config.head) === false) {
        config.head = [];
    }
    //Check the pages parsing
    if (isNotObject(config.pages) === true) {
        config.pages = {};
    }
    //Return the site configuration
    return config;
};

