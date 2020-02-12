let fs = require("fs");
let path = require("path");
let yaml = require("js-yaml");

//Front matter regex
let frontMatter = /^-{3}(?:[^\r\n]*?)(?:\r?\n)([\s\S]*?)^-{3}(?:[\s\S]*?)(?:\r?\n)/m;

//Generate vfile path
let getVFilePath = function (vfile) {
    return path.format({
        "root": "/",
        "dir": vfile.dirname,
        "name": vfile.filename,
        "ext": vfile.extname
    });
};

//Read the content of the viftual-file
let readVFile = function (vfile) {
    vfile.content = fs.readFileSync(getVFilePath(vfile), "utf8");
    //Check if file starts with three '-'
    if (vfile.content.indexOf("---") === 0) {
        //Overwrite the file content and parse the front matter
        vfile.content = vfile.content.replace(frontMatter, function (match, block) {
            vfile.data = Object.assign({}, yaml.safeLoad(block));
            return ""; //Remove the front-matter section
        });
    }
    return vfile;
};

//Write a vfile
let writeVFile = function (vfile) {
    return fs.writeFileSync(getVFilePath(vfile), vfile.content, "utf8");
};

//Create a new virtual file object
module.exports = function (filePath) {
    //Initialize the virtual file object
    return Object.assign({}, {
        "dirname": path.dirname(filePath),
        "filename": path.basename(filePath, path.extname(filePath)),
        "extname": path.extname(filePath),
        "data": {},
        "content": null
    });
};

//Export utility methods
module.exports.path = getVFilePath;
module.exports.read = readVFile;
module.exports.write = writeVFile;


