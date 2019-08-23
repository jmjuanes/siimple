let path = require("path");
let fs = require("fs");

//Resolve a configuration file path
module.exports.resolveConfig = function (parent) {
    //Build paths for configuraiton file in js and json formats
    let jsConfigPath = path.join(parent, "config.js");
    let jsonConfigPath = path.join(parent, "config.json");
    //Check if the js file path exists
    if (fs.existsSync(jsConfigPath) === true) {
        return jsConfigPath;
    }
    //Check if the json file path exists
    else if (fs.existsSync(jsonConfigPath) === true) {
        return jsonConfigPath;
    }
    //Default: configuration path not found
    //throw new Error(`No configuration file found in '${parent}'`);
    return null;
};

//Resolve a package
module.exports.resolvePackage = function (name) {
    return path.dirname(require.resolve(name));
};

