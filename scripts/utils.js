let fs = require("fs");
let path = require("path");

//Get a list with all packages available
module.exports.getPackages = function (parent) {
    let pkgs = {};
    fs.readdirSync(parent, "utf8").forEach(function (folderName) {
        let folderPath = path.join(parent, folderName);
        let pkgPath = path.join(folderPath, "package.json");
        //Check if path is not a directory
        if (fs.lstatSync(folderPath).isDirectory() === false) {
            return null;
        }
        //Check for no package.json 
        if (fs.existsSync(pkgPath) === false) {
            return null;
        }
        //Read the package content
        let content = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
        //Save the package metadata
        pkgs[content.name] = content;
    });
    //Return the list of available packages
    return pkgs;
};



