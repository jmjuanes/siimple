let fs = require("fs");
let path = require("path");
let pkg = require(path.join(process.cwd(), "package.json"));

//Packages folder
let pkgsPath = path.join(process.cwd(), "packages");
let outputPath = path.join(process.cwd(), "node_modules", "@siimple");
//Create the output folder
fs.mkdirSync(outputPath, {
    "recursive": true}
);
//Read packages directory
fs.readdirSync(pkgsPath, "utf8").forEach(function (folder) {
    let folderPath = path.join(pkgsPath, folder);
    let packagePath = path.join(folderPath, "package.json");
    //Check if folder is not a directory
    if (fs.statSync(folderPath).isDirectory() === false || fs.existsSync(packagePath) === false) {
        return null;
    }
    //Read the package.json file
    let localPkg = require(packagePath);
    let name = localPkg.name.replace("@siimple/", "");
    //Create the symlink in node_modules folder
    fs.symlinkSync(folderPath, path.join(outputPath, name));
});

