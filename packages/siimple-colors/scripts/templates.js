let fs = require("fs");
let path = require("path");
let glob = require("glob");
let handlebars = require("handlebars");
let opt = require("get-args")().options;

//Import colors list
let colors = require("../colors.json");

//Header object
let header = [];
header.push("//");
header.push("// WARNING: THIS FILE IS AUTO-GENERATED. DO NOT EDIT IT.");
header.push("// You can generate this file running the following command from the project root: ");
header.push("// $ make templates");
header.push("//");

//Get all templates from the specified source
glob("./templates/" + opt.source + "/*.hbs", function(error, files){
    if(error) {
        process.stderr.write("ERROR: " + error.message);
        return process.exit(1);
    }
    //Initialize the data object to be passed to all templates
    let data = {
        "colors": colors.palette, 
        "header": header.join("\n")
    };
    //Output directory
    let outputDir = path.join(process.cwd(), opt.source);
    //Compile each template
    for (let i = 0; i < files.length; i++) {
        let file = path.join(process.cwd(), files[i]);
        let fileObject = path.parse(file);
        process.stdout.write("Compiling " + file);
        try {
            let content = fs.readFileSync(file, "utf8");
            let template = handlebars.compile(content);
            let output = path.format({dir: outputDir, name: fileObject.name, ext: ""});
            fs.writeFileSync(output, template(data), "utf8");
        } catch (error) {
            process.stderr.write("ERROR: " + error.message);
            return process.exit(1);
        }
    }
    //Compile finished
    return process.exit(0);
});

