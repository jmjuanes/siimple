let path = require("path");
let fs = require("fs");
let mkdirp = require("mkdirp");

//Convert to array
let toArray = function (items) {
    if (Array.isArray(items) === true) {
        return items;
    }
    //Default: return an array with only one item
    return [items];
};

//Copy files
module.exports = function (context, args) {
    //Get the target directory path
    let target = path.join(context.targetPath, args.target);
    //Ensure that the target folder exists
    if (fs.existsSync(target) === false) {
        mkdirp.sync(target);
    }
    //Copy provided files
    toArray(args.files).forEach(function (file) {
        if (typeof file === "string") {
            fs.copyFileSync(file, path.join(target, path.basename(file)));
        }
    });
};

