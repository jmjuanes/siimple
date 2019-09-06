//Import dependencies
let fs = require("fs");
let express = require("express");
let path = require("path");
let handlebars = require("handlebars");

//Server render
process.nextTick(function () {
    let app = express();
    //Enable cors
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type");
        return next();
    });
    //Register static folders routes
    app.use("/dist", express.static(path.join(process.cwd(), "dist")));
    app.use("/node_modules", express.static(path.join(process.cwd(), "node_modules")));
    app.use("/bower_components", express.static(path.join(process.cwd(), "bower_components")));
    app.use("/raw", express.static(path.join(process.cwd(), "test")));
    //Render the template
    app.use(function (req, res, next) {
        //Render template file function
        res.renderTemplateFile = function (file, options) {
            let filePath = path.join(process.cwd(), "test", "templates", file);
            return fs.readFile(filePath, "utf8", function (error, content) {
                return res.type("html").send(handlebars.compile(content)(options));
            });
        };
        //Continue
        return next();
    });
    //Home page
    app.get("/", function (req, res) {
        return res.renderTemplateFile("index.html", {
            "title": "Neutrine testing home"
        });
    });
    //Module to test
    app.get("/test/:package", function (req, res) {
        return res.renderTemplateFile("default.html", {
            "title": "",
            "package": req.params.package
        });
    });
    //Not found middleware
    app.use("*", function (req, res) {
        return res.sendStatus(404);
    });
    //Listen to test port
    app.listen(3000, function () {
        return console.log("Neutrine Testing service listening on port 3000");
    });
});


