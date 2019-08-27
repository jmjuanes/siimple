let fs = require("fs");
let path = require("path");

//Get testing modules
module.exports.getTestingModules = function () {
    let testFolder = path.join(process.cwd(), "test");
    let modules = {};
    fs.readdirSync(testFolder, "utf8").forEach(function (item) {
        let itemPath = path.join(testFolder, item);
        //Check if the item is a folder
        if (fs.lstatSync(itemPath).isDirectory() === true) {
            //Check if a file test.json exists
            let configPath = path.join(itemPath, "test.json");
            if (fs.existsSync(configPath) === true) {
                let content = fs.readFileSync(configPath, "utf8");
                modules[item] = JSON.parse(content);
            }
        }
    });
    //Return testing modules
    return modules;
};

