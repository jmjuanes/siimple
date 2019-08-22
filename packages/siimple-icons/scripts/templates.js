let fs = require("fs");
let path = require("path");
let glob = require("glob");
let handlebars = require("handlebars");
let opt = require("get-args")().options;

//Import icons
let icons = require("../icons.json");

//Register an handlebar helper to parse unicode values
handlebars.registerHelper("unicodeParser", function(value){
    return value.toString(16).toLowerCase();
});

//Header object
let header = [];
header.push("//");
header.push("// WARNING: THIS FILE IS AUTO-GENERATED. DO NOT EDIT IT.");
header.push("// You can generate this file running the following command from the project root: ");
header.push("// $ make templates");
header.push("//");

//Exit with error
let exitWithError = function (error) {
    process.stderr.write(error.message);
    return process.exit(1);
};

//Function to compile the templates
process.nextTick(function () {
    return glob("./templates/" + opt.source + "/*.hbs", function (error, files) {
        if(error) {
            return exitWithError(error);
        }
        let data = {"icons": icons, "header": header.join("\n")};
        for (let i = 0; i < files.length; i++)  {
            let file = path.join(process.cwd(), files[i]);
            let fileObject = path.parse(file);
            process.stdout.write("Compiling file " + file + "\n");
            //Read the file content
            try {
                let content = fs.readFileSync(file, "utf8");
                let template = handlebars.compile(content);
                //Output file path
                let outputDir = path.join(process.cwd(), opt.source);
                let output = path.format({dir: outputDir, name: fileObject.name, ext: ""});
                fs.writeFileSync(output, template(data), "utf8");
            }
            catch (error) {
                return exitWithError(error);
            }
        }
        //Compile finished
        return process.exit(0);
    });
});

