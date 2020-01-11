let fs = require("fs");
let path = require("path");
let pkg = require(path.join(process.cwd(), "package.json"));

//Update dependencies
let updateDependencies = function (list) {
    let changes = 0;
    if (typeof list === "object") {
        Object.keys(list).forEach(function (key) {
            if (key.indexOf("@siimple") !== -1) {
                if ("^" + pkg.packages[key] !== list[key]) {
                    list[key] = "^" + pkg.packages[key];
                    changes = changes + 1;
                }
            }
            else if (list[key] !== pkg.dependencies[key]) {
                list[key] = pkg.dependencies[key];
                changes = changes + 1;
            }
            //list[key] = (key.indexOf("@siimple") !== -1) ? "^" + pkg.packages[key] : pkg.dependencies[key];
        });
    }
    //Return the number of changes made
    return changes;
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
    let localPath = path.join(folderPath, "package.json");
    //Check for no package.json on this folder
    if (fs.existsSync(localPath) === false) {
        return null;
    }
    let localPkg = JSON.parse(fs.readFileSync(localPath, "utf8"));
    let changes = 0; //To store if this local package.json has been updated
    //Update version
    if (localPkg.version !== pkg.packages[localPkg.name]) {
        localPkg.version = pkg.packages[localPkg.name];
        changes = changes + 1;
    }
    //Update dependencies version
    changes = changes + updateDependencies(localPkg.dependencies);
    changes = changes + updateDependencies(localPkg.devDependencies);
    //Save the package.json file only if the number of changes is > 0
    if (changes > 0) {
        fs.writeFileSync(localPath, JSON.stringify(localPkg, null, "    "), "utf8");
    }
});

