let fs = require("fs");
let path = require("path");
let sass = require("node-sass");
let autoprefixer = require("autoprefixer");
let postcss = require("postcss");
let cleanCSS = require("clean-css");

let config = require("./config.js");

//Files paths
let paths = {
    input: "./scss/siimple.scss",
    output: "./dist/siimple.css",
    minified: "./dist/siimple.min.css"
};

//Read the main scss file 
let content = fs.readFileSync(paths.input, "utf8");
//Compile the scss file to generate the css
let sassOptions = {data: content, includePaths: ["./scss/", "./node_modules/"]}; 
sass.render(sassOptions, function (error, result) {
    if (error) {
        process.stdout.write(error.message);
        return process.exit(1);
    }
    //Prefix the generated css
    let prefixer = postcss(autoprefixer({ browsers: ["last 3 versions", "IE 9"], cascade: false })); 
    let prefixPromise = prefixer.process(result.css);
    prefixPromise.then(function (output) {
        //Write the colpiled css file 
        let outputCss = config.getHeader() + output.css;
        process.stdout.write("Saving compiled CSS file as '" + paths.output + "'\n");
        fs.writeFileSync(paths.output, outputCss, "utf8"); 
        //Clean the css file
        new cleanCSS({compatibility: "*", level: 2}).minify(output.css, function (error, minified) {
            if (error) {
                process.stdout.write(error.message);
                return process.exit(1);
            }
            //Write the minified file
            let minifiedCss = config.getHeader() + minified.styles;
            process.stdout.write("Saving minified CSS file as '" + paths.minified + "'\n");
            fs.writeFileSync(paths.minified, minifiedCss, "utf8");
            //Process completed
            process.exit(0);
        });
    });
    prefixPromise.catch(function (error) {
        process.stdout.write(error.message);
        return process.exit(1);
    });
});

