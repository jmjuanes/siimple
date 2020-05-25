let fs = require("fs");
let path = require("path");
let template = require("../../commons/template.js");
let virtualFile = require("../../commons/virtual-file.js");
let util = require("../../commons/util.js");
let walkdir = require("../../commons/walkdir.js");

let paths = require("./paths.js");

//Build website pages
module.exports = function (config, data) {
    //Initialize page template
    let pageTemplate = template.page({
        "header": config.header,
        "body": fs.readFileSync(path.join(paths.layouts, "default.html"), "utf8")
    });
    let compilePageTemplate = function (content) {
        return pageTemplate.replace(/\{\{(?:\s*)(content)(?:\s*)\}\}/g, content);
    };
    //Build pages
    walkdir(paths.pages, [".html"], function (file) {
        let page = virtualFile(path.join(paths.pages, file)); //Create the new virtual file
        virtualFile.read(page); //Read virtual file content
        //Build the output filename
        let outputPagePath = path.normalize(path.format({
            "root": "/",
            "dir": path.dirname(file),
            "name": path.basename(file, path.extname(file)),
            "ext": ".html"
        }));
        //Generate page content
        let pageContent = template.compile(compilePageTemplate(page.content), {
            "site": {},
            "page": {
                "url": outputPagePath,
                "title": page.data.title,
                "data": page.data
            },
            "data": data,
            "title": "Hello world"
        });
        //Update the virtualfile with the new folder and paths
        Object.assign(page, {
            "dirname": path.join(paths.build, path.dirname(outputPagePath)),
            "content": pageContent,
            "extname": ".html"
        });
        //Write the virtual file
        return virtualFile.write(page);
    });
};

