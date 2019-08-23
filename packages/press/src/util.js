let fs = require("fs");
let path = require("path");
let mkdirp = require("mkdirp");

//Function to read the content of a specific folder
let listFiles = function (folder, extname) {
    //Check if this folder exists
    if (fs.existsSync(folder) === true) {
        return fs.readdirSync(folder, "utf8").filter(function (file) {
            return path.extname(file) === extname;
        });
    }
    //No files found
    return [];
};

//Function to get all folders inside an especific folder
let listFolders = function (folder) {
    if (fs.existsSync(folder) === true) {
        return fs.readdirSync(folder, "utf8").filter(function (item) {
            let fullPath = path.join(folder, item);
            return fs.statSync(fullPath).isDirectory();
        });
    }
    //Folder does not exists
    return [];
};

//Walk inside a directory
let walkDir = function (folder, extname, iterator) {
    let walkDirIterator = function (acumulator) {
        let folderPath = path.join(folder, acumulator.join("/"));
        fs.readdirSync(folderPath, "utf8").forEach(function (file) {
            let filePath = path.join(folderPath, file);
            //Check if the file has the provided extension
            if (path.extname(file) === extname) {
                return iterator(file, filePath, acumulator);
            }
            //Check for a directory
            else if (fs.statSync(filePath).isDirectory() === true) {
                let newAcumulator = acumulator.slice(0);
                newAcumulator.push(file);
                return walkDirIterator(newAcumulator);
            }
        });
    };
    return walkDirIterator([]);
};

//Copy a file
let copyFile = function (source, target) {
    return fs.copyFileSync(source, target);
};

//Copy a folder
let copyFolder = function (source, target) {
    //Read the content of the source path
    fs.readdirSync(source, "utf8").forEach(function (item) {
        let sourcePath = path.join(source, item);
        let targetPath = path.join(target, item);
        //Check for a folder
        if (fs.statSync(sourcePath).isDirectory() === true) {
            mkdirp.sync(targetPath);
            return copyFolder(sourcePath, targetPath);
        }
        //Check for a regular file
        else if (fs.statSync(sourcePath).isFile() === true) {
            return copyFile(sourcePath, targetPath);
        }
    });
};

//Check if value is an array
let isArray = function (value) {
    return typeof value === "object" && value !== null && Array.isArray(value);
};

//Exports all extra file-system modules
module.exports = {
    "copyFile": copyFile,
    "copyFolder": copyFolder,
    "walkDir": walkDir,
    "listFiles": listFiles,
    "listFolders": listFolders,
    //Common utils
    "isArray": isArray
};

