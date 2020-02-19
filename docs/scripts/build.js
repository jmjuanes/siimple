let fs = require("fs");
let path = require("path");
let handlebars = require("handlebars");
let markdown = require("../../commons/markdown.js");
let virtualFile = require("../../commons/virtual-file.js");

let paths = require("./paths.js");
let tips = ["info", "error", "warning", "success"];

//Compile handlebars
let compile = function (content, options) {
    return handlebars.compile(content)(options);
};

//Read json file
let readJSON = function (file) {
    return JSON.parse(fs.readFileSync(file, "utf8"));
};

//Convert JSON to string
let jsonToString = function (content) {
    return JSON.stringify(content, null, "    "); //Normal
    //return JSON.stringify(content); //Minified
};

//Encode the provided file path using safe url base64 encoding
let encodePath = function (filePath) {
    let b64 = Buffer.from(filePath).toString("base64");
    return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

process.nextTick(function () {
    let config = readJSON(paths.config); //Import site config
    //Initialize markdown configuration
    tips.forEach(function (name) {
        return markdown.registerContainer("tip:" + name, {});
    });
    markdown.registerContainer("snippet", {
        "parseContent": false
    });
    let data = {}; //Store global data object
    //walkDir(paths.dataSrc, [".json"], function (file) {
    //    let name = path.basename(file, ".json"); //Get data name
    //    data[name] = readJSON(path.join(paths.dataSrc, file));
    //});
    //Build packages
    Object.keys(config.packages).forEach(function (name) {
        //Import package info
        let pkgPath = path.join(paths.packages, config.packages[name]);
        let package = readJSON(path.join(pkgPath, "package.json"));
        let pages = readJSON(path.join(pkgPath, "docs", "config.json")); //Import pages
        //Add package metadata
        config.packages[name] = Object.assign({}, {
            "name": package.name,
            "version": package.version,
            "description": package.description
        });
        //delete config.packages[name].folder; //Delete folder key
        //Parse sidebar items
        config.packages[name].sidebar = pages.map(function (item) {
            //Check for group item
            if (typeof item.group === "string") {
                return {
                    "type": "group",
                    "title": item.group
                };
            }
            let file = item.page;
            let vfile = virtualFile(path.join(pkgPath, "docs", file)); //Create the new virtual file
            virtualFile.read(vfile); //Read virtual file content
            //Build the output filename
            let outputFilePath = path.normalize(path.format({
                "root": "/",
                "dir": path.join("/", name, path.dirname(file)),
                "name": path.basename(file, path.extname(file)),
                "ext": ".html"
            }));
            //Parse the markdown
            let fileContent = {
                "title": vfile.data.title,
                "path": outputFilePath,
                "content": markdown.parse(compile(vfile.content, {
                    "data": data,
                    "package": package,
                    "page": vfile.data
                }))
            };
            //console.log(outputFileName);
            //Update the virtualfile with the new folder and paths
            Object.assign(vfile, {
                "dirname": paths.buildPages,
                "filename": encodePath(outputFilePath).toLowerCase(),
                "extname": ".json",
                "content": jsonToString(fileContent)
            });
            //Write the virtual file
            virtualFile.write(vfile);
            //Return the page data
            return {
                "type": "page",
                "title": vfile.data.title,
                "link": outputFilePath
            };
        });
    });
    //Write configuration file
    //json.write(paths.buildConfig, config);
    fs.writeFileSync(paths.buildConfig, jsonToString(config), "utf8");
});

