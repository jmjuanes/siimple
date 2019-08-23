#!/usr/bin/env node

//Import dependencies
let getArgs = require("get-args");
let path = require("path");
let fs = require("fs");
let core = require("./index.js");

//Read package
let pkg = require("./package.json");

//Display the help menu
let displayHelp = function () {
    console.log("");
    console.log("Press v" + pkg.version);
    console.log("Usage: ");
    console.log("$ siimplepress [options]");
    console.log("  Available options: ");
    console.log("    --config <path>    Path to the configuration file");
    console.log("                       Default is ./config.json");
    //console.log("    --no-logs          Disable logs printing");
    console.log("    --help             Prints this help");
    console.log("");
};

process.nextTick(function () {
    let args = getArgs();
    //Check for help
    if (args.options.help === true) {
        return displayHelp();
    }
    //Set the default config path
    let configPath = null; //path.join(process.cwd(), "config.json");
    if (typeof args.options.config === "string") {
        configPath = path.join(process.cwd(), args.options.config);
        //Check if the configuration file does not exists
        if (fs.existsSync(configPath) === false) {
            //throw new Error("Configuration file not found");
            core.log.error("Configuration file not found");
            return process.exit(1);
        }
    }
    else {
        //Find the configuration file in the current working directory
        configPath = core.resolveConfig(process.cwd());
        if (configPath === null) {
            //throw new Error(`No configuration file found in '${process.cwd()}' `);
            core.log.error(`No configuration file found in '${process.cwd()}' `);
            return process.exit(1);
        }
    }
    //Read the configuration file
    let config = null;
    try {
        config = core.loadConfig(configPath);
    }
    catch (error) {
        core.log.error(`Error reading configuration file from '${configPath}'`);
        core.log.error(error.message);
        return process.exit(1);
    }
    //Add extra ENV variables
    //TODO
    //Run builder
    return core.build(config);
});

