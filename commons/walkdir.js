let fs = require("fs");
let path = require("path");

//Walkdir iterator
let walkDir = function (folder, base, extlist, callback) {
    let folderPath = path.resolve(folder, base);
    fs.readdirSync(folderPath, "utf8").forEach(function (file) {
        let fullPath = path.join(folderPath, file);
        //Check if the file has the provided extension
        if (extlist.indexOf(path.extname(file)) !== -1) {
            return callback(path.join(base, file));
        }
        //Check for a directory
        else if (fs.statSync(fullPath).isDirectory() === true) {
            return walkDir(folder, path.join(base, file), extlist, callback);
        }
    });
};

//Export walkdir utility
module.exports = function (folder, extlist, callback) {
    return walkDir(folder, "./", extlist, callback);
};

