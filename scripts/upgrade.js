let fs = require("fs");
let path = require("path");
let pkg = require(path.join(process.cwd(), "package.json"));

//Update dependencies
let updateDependencies = function (list) {
    if (typeof list === "object") {
        Object.keys(list).forEach(function (key) {
            list[key] = (key.indexOf("@siimple") !== -1) ? "^" + pkg.packages[key] : pkg.dependencies[key];
        });
    }
};

//Packages folder
let pkgsPath = path.join(process.cwd(), "packages");
//Read packages directory
fs.readdirSync(pkgsPath, "utf8").forEach(function (folder) {
    let folderPath = path.join(pkgsPath, folder);
    //Check if folder is not a directory
    if (fs.statSync(folderPath).isDirectory() === false) {
        return null;
    }
    //Read the package.json file
    let localPath = path.join(folderPath, "package.json");
    let localPkg = JSON.parse(fs.readFileSync(localPath, "utf8"));
    //Update version
    localPkg.version = pkg.packages[localPkg.name];
    //Update dependencies version
    updateDependencies(localPkg.dependencies);
    updateDependencies(localPkg.devDependencies);
    //Save the package.json file
    fs.writeFileSync(localPath, JSON.stringify(localPkg, null, "    "), "utf8");
});

