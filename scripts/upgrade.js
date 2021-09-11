const fs = require("fs");
const path = require("path");
const getArgs = require("get-args");

const {packages} = require("../package.json");
const utils = require("./utils.js");
const paths = require("../config/paths.js");

//Upgrade the version in all package.json files
process.nextTick(() => {
    return Object.keys(packages).forEach((packageName) => {
        const packagePath = path.join(paths.packages.folder, packageName, "package.json");
        const content = utils.readJSON(packagePath);

        if (content.version === packages[packageName]) {
            return null; //Nothing to update
        }

        //Update package.json fields
        content.version = packages[packageName];
        Object.keys(content.dependencies || {}).forEach((name) => {
            if (typeof packages[name] === "undefined") {
                return null;
            }
            //Update the version
            content.dependencies[name] = `^${packages[name]}`;
        });

        //Save package.json file
        return utils.writeJSON(packagePath, content);
    });
});

