const path = require("path");

// Resolve alias
const resolveTo = to => path.join(__dirname, to);

// Export build paths
module.exports = {
    "root": resolveTo("./"),
    "package": resolveTo("./package.json"),
    "modules": resolveTo("./node_modules"),
    "distributions": resolveTo("./distributions"),
    "release": resolveTo("./release"),
    "public": resolveTo("./public"),
    "packages": resolveTo("./packages"),
    "icons": resolveTo("./icons"),
    //"configs": {
    //    "colors": "./packages/siimple-colors/colors.json",
    //    "icons": "./packages/siimple-icons/icons.json",
    //},
    //Packages folders
    //"packages": {
    //    "folder": packages,
    //    "colors": path.join(packages, "siimple-colors"),
    //    "icons": path.join(packages, "siimple-icons"),
    //    "lib": path.join(packages, "siimple-lib"),
    //    "modules": path.join(packages, "siimple-modules"),
    //    "applications": path.join(packages, "applications")
    //},
    ////Colors sources
    //"colors": {
    //    //"lib": path.join(root, "scss", "plugins", "colors", "index.scss"),
    //    "source": path.join(packages, "siimple-colors", "colors.json"),
    //},
    //Legacy paths
    "dist": resolveTo("./distributions")
};

