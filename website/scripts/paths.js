let path = require("path");

//Resolve to docs folder
let resolveTo = function (to) {
    return path.resolve(__dirname, to);
};

module.exports = {
    "root": resolveTo("../"),
    "packages": resolveTo("../../packages"),
    "config": resolveTo("../config.json"),
    "partials": resolveTo("../partials"),
    "layouts": resolveTo("../layouts"),
    "pages": resolveTo("../pages"),
    "data": resolveTo("../data"),
    "build": resolveTo("../www/")
};


