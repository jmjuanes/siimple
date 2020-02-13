let path = require("path");

//Resolve to docs folder
let resolveTo = function (to) {
    return path.resolve(__dirname, to);
};

let buildPath = resolveTo("../www");

module.exports = {
    "dataSrc": resolveTo("../data/"),
    "pagesSrc": resolveTo("../pages/"),
    "packages": resolveTo("../../packages"),
    "config": resolveTo("../config.json"),
    "build": buildPath,
    "buildConfig": path.join(buildPath, "config.json"),
    "buildPages": path.join(buildPath, "pages")
};


