let fs = require("fs");
let path = require("path");
let yaml = require("js-yaml");
let mkdirp = require("mkdirp");

//Import utils
let log = require("./logger.js");
let util = require("./util.js");

//Front matter regex
let frontMatter = /^-{3}(?:[^\r\n]*?)(?:\r?\n)([\s\S]*?)^-{3}(?:[\s\S]*?)(?:\r?\n)/m;
    
//Read a file
let readFile = function (file, defaultProps) {
    let content = fs.readFileSync(file, "utf8").trim();
    //Initialize the file object
    let output = {
        "url": null,
        "date": null,
        "categories": [],
        "name": path.basename(file, path.extname(file)),
        "extension": path.extname(file),
        "path": null,
        "data": {},
        "content": content
    };
    //Check if file starts with three '-'
    if (content.indexOf("---") === 0) {
        //Overwrite the file content and parse the front matter
        output.content = content.replace(frontMatter, function (match, block) {
            //Parse the string variables on this section
            output.data = Object.assign({}, yaml.safeLoad(block));
            //Remvoe the front-matter section
            return "";
        });
    }
    //Return the parsed object merged with the default provided props
    return Object.assign(output, defaultProps);
};

//Export file reader method
module.exports.readFile = function (file, defaultData) {
    return readFile(file, defaultData);
};

//Export file save method
module.exports.writeFile = function (target, content) {
    //Create the folders where this page will be saved
    mkdirp.sync(path.dirname(target));
    //Write the file
    fs.writeFileSync(target, content, "utf8"); 
};

//Load a configuration file
module.exports.readConfig = function (configPath) {
    //Get the configuration file extension name
    let extName = path.extname(configPath);
    //Check for JSON file
    if (extName === ".json") {
        return JSON.parse(fs.readFileSync(configPath, "utf8"));
    }
    //Check for JS file
    else if (extName === ".js") {
        return require(configPath);
    }
    //Other extension: throw error
    throw new Error("Unknown configuration extension '" + extName + "'");
};

//Read data folder
module.exports.readData = function (context, folder) {
    //Check if data folder does not exists
    if (fs.existsSync(folder) === false) {
        return {};
    }
    //Read all JSON files inside the data folder
    let data = {};
    util.listFiles(folder, ".json").forEach(function (file) {
        let fileName = path.basename(file, ".json");
        let filePath = path.join(folder, file);
        //Store the data file content
        log.info("Reading data: " + filePath);
        data[fileName] = JSON.parse(fs.readFileSync(filePath, "utf8"));
    });
    //Return read data
    return data;
};

//Read pages folder
module.exports.readPages = function (context, folder) {
    //Check if the posts folder does not exists
    if (fs.existsSync(folder) === false) {
        return [];
    }
    //Output pages list
    let pages = [];
    //Get all files inside the pages folder
    util.walkDir(folder, ".html", function (file, filePath, categories) {
        log.info("Reading page: " + filePath);
        //Read and save the page data
        pages.push(readFile(filePath, {
            "categories": categories
        }));
    });
    //Return the list of pages of this folder
    return pages;
};

//Read partials folder
module.exports.readPartials = function (context, folder) {
    if (fs.existsSync(folder) === false) {
        return {};
    }
    //List with all partials
    let partials = {};
    util.walkDir(folder, ".html", function (file, filePath, acumulator) {
        partials[path.join(acumulator.join("/"), file)] = readFile(filePath, {});
    });
    //Return the partials list
    return partials;
};

//Header tags builder
module.exports.buildHead = function (items) {
    //Build attributes
    let buildAttributes = function (attr) {
        if (typeof attr !== "object" || attr === null) {
            return [];
        }
        //Return parsed attributes
        return Object.keys(attr).map(function (key) {
            return `${key}="${attr[key]}"`;
        });
    };
    //Build each extra tags
    return items.map(function (item) {
        //Build the tag attributes
        let attributes = buildAttributes(item[1]).join(" ");
        //Check for script or style tag
        if (item[0] === "script" || item[0] === "style") {
            return `<${item[0]} ${attributes}></${item[0]}>`;
        }
        //Return the default tag
        return `<${item[0]} ${attributes} />`; 
    });
};


