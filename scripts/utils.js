const fs = require("fs");
const path = require("path");
const args = require("get-args");

//Check if the provided value is an string
module.exports.isString = function (value) {
    return typeof value === "string";
};

//Check if the provided value is a valid object
module.exports.isObject = function (value) {
    return typeof value === "object" && value !== null;
};

//Get env variables
module.exports.getEnv = function (callback) {
    return callback(args().options || {});
};

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

//Read a JSON file
module.exports.readJSON = function (file) {
    return JSON.parse(fs.readFileSync(file, "utf8"));
};

//Write a JSON file
module.exports.writeJSON = function (file, content) {
    return fs.writeFileSync(file, JSON.stringify(content), "utf8");
};

//For displaying basic logs
module.exports.log = {
    "info": function (message) {
        return console.log(`[INFO] ${message}`);
    },
    "warn": function (message) {
        return console.warn(`[WARNING] ${message}`);
    },
    "error": function (message) {
        console.error(`[ERROR] ${message}`);
        return process.exit(1); //Stop process
    }
};

//Remove a folder recursive
module.exports.rmdir = function (folder) {
    if (fs.existsSync(folder) && fs.statSync(folder).isDirectory()) {
        return fs.rmdirSync(folder, {"recursive": true});
    }
};

//Create a folder recursive
module.exports.mkdir = function (folder) {
    if (fs.existsSync(folder) === false) {
        return fs.mkdirSync(folder, {"recursive": true});
    }
};

//Get file size
module.exports.fileSize = function (file) {
    return (fs.statSync(file).size / 1024).toFixed(2) + " KB";
    // Convert the file size to megabytes (optional)
    // let fileSizeInMegabytes = fileSizeInBytes / (1024*1024);
};

//Encode the provided file path using safe url base64 encoding
module.exports.encodePath = function (filePath) {
    let b64 = Buffer.from(filePath).toString("base64");
    return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

//Map special chars to html codes
let htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};

//Escape html >> converts '<', '>', '&', '"' and "'" chars to html codes
module.exports.escapeHtml = function (unsafe) {
    return unsafe.replace(/[&<>"']/g, function (match) {
        return htmlEscapes[match];
    });
};

//Non closed html tags
let nonClosedHtmlTags = ["meta", "link", "hr", "img", "br"];

//Build attributes
let buildAttributes = function (attr) {
    if (typeof attr !== "object" || attr === null) {
        return [];
    }
    //Return parsed attributes
    let parsedAttributes = [];
    Object.keys(attr).forEach(function (key) {
        if (typeof attr[key] !== "string") {
            return null; //No valid attribute
        }
        let keyname = (key === "className") ? "class" : key; //Parse attribute
        parsedAttributes.push(`${keyname}="${attr[key]}"`); //Save attribute
    });
    //Return joined attributes
    return parsedAttributes.join(" ");
};

//Create a new html string element
module.exports.createElement = function (tagname, attr, children) {
    let attributes = buildAttributes(attr); //.join(" ");
    let content = (typeof children === "string") ? children : ""; //Parse content
    //Check for tag without children
    if (nonClosedHtmlTags.indexOf(tagname) > -1) {
        return `<${tagname} ${attributes} />`; 
    }
    //Return a closed tag
    return `<${tagname} ${attributes}>${content}</${tagname}>`;
};

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
module.exports.walkdir = function (folder, extlist, callback) {
    return walkDir(folder, "./", extlist, callback);
};

