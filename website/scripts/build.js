let fs = require("fs");
let path = require("path");
let template = require("../../commons/template.js");
let virtualFile = require("../../commons/virtual-file.js");
let util = require("../../commons/util.js");
let walkdir = require("../../commons/walkdir.js");

let paths = require("./paths.js");
let buildWebsite = require("./website.js");
let buildDocumentation = require("./documentation.js");

//Register handlebars partials
let registerPartials = function () {
    return walkdir(paths.partials, [".html"], function (file) {
        let content = fs.readFileSync(path.join(paths.partials, file), "utf8");
        return template.registerPartial(file, content);
    });
};

//Build website pages
process.nextTick(function () {
    let config = util.readJSON(paths.config); //Import site config
    registerPartials(); //Register handlebars partials
    //Build data
    let data = {}; //Store global data object
    walkdir(paths.data, [".json"], function (file) {
        let name = path.basename(file, ".json"); //Get data name
        data[name] = util.readJSON(path.join(paths.data, file));
    });
    //Build website content
    buildDocumentation(config, data);
    buildWebsite(config, data);
});

