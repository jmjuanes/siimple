let flow = require("tinyflow");
let fs = require("fs");
let path = require("path");
let sass = require("node-sass");
let autoprefixer = require("autoprefixer");
let postcss = require("postcss");
let cleanCSS = require("clean-css");
let mkdirp = require("mkdirp");

let config = require("./config.js");

//Files paths
let paths = {
    input: "./scss/siimple.scss",
    output: "./dist/siimple.css",
    outputMin: "./dist/siimple.min.css"
};

//Create the output directory 
flow.task("dist:create", function (done) {
    return mkdirp("./dist", function (error) {
        return done(error);
    });
});

//Compile the css files
flow.task("css:compile", ["dist:create"], function (done) {
    //Read the main scss file 
    return fs.readFile(paths.input, "utf8", function (error, content) {
        if (error) {
            return done(error); 
        }
        //Compile the scss file to generate the css
        let sassOptions = {data: content, includePaths: ["./scss/"]}; 
        return sass.render(sassOptions, function (error, result) {
            if (error) {
                return done(error); 
            }
            //Prefix the generated css
            let prefixer = postcss(autoprefixer({ browsers: ["last 3 versions", "IE 9"], cascade: false })); 
            return prefixer.process(result.css).then(function (output) {
                //Append the header
                output.css = config.getHeader() + output.css;
                //Write the colpiled css file 
                return fs.writeFile(paths.output, output.css, "utf8", function (error) {
                    return done(error);
                });
            }).catch(function (error) {
                return done(error);
            });
        });
    });
});

//Minify output css file 
flow.task("css:minify", ["dist:create"], function (done) {
    return fs.readFile(paths.output, "utf8", function (error, content) {
        if (error) {
            return done(error); 
        }
        //Clean the css file
        new cleanCSS({compatibility: "*"}).minify(content, function (error, output) {
            if (error) {
                return done(error);
            }
            //Append the header 
            output.styles = config.getHeader() + output.styles;
            //Write the minified css file
            return fs.writeFile(paths.outputMin, output.styles, "utf8", function (error) {
                return done(error);
            });
        });
    });
});

//Set default tasks 
flow.defaultTask(["css:compile", "css:minify"]);

