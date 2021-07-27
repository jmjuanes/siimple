const fs = require("fs");
const path = require("path");
const glob = require("glob");
const getArgs = require("get-args");
const generateBanner = require("./banner.js");

//Global variables
const endl = "\n";
const useRegexp = /@use\s+\"([^"]*)\"(?:\s+as\s+([^;].*))?\s*;/; //For capturing includes

//Parse entry files
const getEntryFiles = function (entry, options) {
    if (typeof entry === "string") {
        entry = [entry];
    }
    //Build for each entry
    return entry.map(function (entryPath) {
        return entryPath.indexOf("*") > -1 ? glob.sync(entryPath, options) : entryPath;
        //return glob.sync(entryPath, options);
    }).flat(2);
};

//Get entry content
const getEntryContent = function (cwd, entry, virtualFiles) {
    if (typeof virtualFiles[entry] !== "undefined") {
        return virtualFiles[entry];
    }
    //Default --> read the file content
    return fs.readFileSync(path.resolve(cwd, entry), "utf8");
};

//Split lines
const splitLines = function (lines) {
    return lines.replace(/\r/g, "").split(endl);
};

//Parse a SCSS import line
//index and filePath are used for displaying errors and warnings
const parseSCSSImport = function (line, index) {
    let match = line.match(useRegexp);
    //Check for no match ---> throw error
    if (match === null) {
        return console.error(`Unknown @use pattern '${line}' on line '${index}'`); //of file '${filePath}'`);
    }
    //let isLocal = match[1].startsWith("sass:") === false;
    let isLocal = match[1].startsWith(".");
    let namespace = (typeof match[2] === "string") ? match[2] : null;
    //Check for no named import
    if (typeof match[2] !== "string" && isLocal === true) {
        console.error(`Module '${match[1]}' has no named import`); // on file '${filePath}'`);
    }
    //Return the library info
    return {
        "isLocal": isLocal,
        "name": match[1],
        "as": namespace
    };
};

//Parse a SCSS file string
const parseScss = function (content, options) {
    let allImports = []; //To store files includes
    content = splitLines(content).filter(function (line, index) {
        line = line.trim();
        if (line.length === 0 || line.startsWith("//")) {
            return false; //Ignore empty lines or comments
        }
        //Check for include library
        if (line.startsWith("@use")) {
            allImports.push(parseSCSSImport(line, index)); //Save include lib
            return false; //Ignore use lines
        }
        return true; //Other ---> include line
    });
    //Remove local imports namespaces
    if (options.removeNamespaces === true) {
        let localImports = allImports.filter(function (lib) {
            return lib.isLocal === true; //Get only local imports
        }).map(function (lib) {
            return lib.as; //Get lib name
        });
        //console.log(filePath);
        //console.log(localImports);
        if (localImports.length > 0) {
            //Find the import and replace in all lines
            content = content.map(function (line) {
                return line.replace(new RegExp(`(${localImports.join("|")})\\.`, "g"), "");
            });
        }
    }
    //Resolve modules
    if (typeof options.resolve === "object" && options.resolve !== null) {
        //Resolve scss imports
        allImports = allImports.map(function (m) {
            if (typeof options.resolve[m.name] === "undefined") {
                return m; //Not in the list
            }
            //Change the path of this module
            return Object.assign(m, {"name": options.resolve[m.name]});
        });
    }
    //Return file object
    return {
        //"path": filePath,
        "content": content.join(endl),
        "header": null,
        //"modules": Object.values(allImports).filter(function (lib) {
        //    return lib.isLocal === false; //Get only global modules
        //}),
        "modules": allImports,
        "metadata": "" //["//", `//@bundle ${path.basename(filePath)}`, "//"].join(endl)
    };
};

//Convert a SCSS file object to string
const stringifyScss = function (file) {
    let content = file.content; //Initialize the content
    //Add the modules at the start of the file
    file.modules.forEach(function (m) {
        let moduleImport = (m.as !== null) ? `@use "${m.name}" as ${m.as};` : `@use "${m.name}";`
        content = moduleImport + endl + content;
    });
    //Add the bundle header
    if (typeof file.header === "string") {
        content = file.header + endl + endl + content;
    }
    //Return the file content
    return content;
};

//Sass bundle generator
const bundleScss = function (config, cwd) {
    const virtualFiles = config.virtualFiles || {}; //Get virtual files
    return new Promise(function (resolve, reject) {
        const files = getEntryFiles(config.entry, {"cwd": cwd});
        const bundle = {"content": "", "modules": {}, "header": null}; //Output bundle
        //console.log(files);
        //Process all files in the list
        files.forEach(function (filePath) {
            const file = parseScss(getEntryContent(cwd, filePath, virtualFiles), {
                "removeNamespaces": true,
                "resolve": config.resolve || {}
            });
            const metadata = ["//", `//@bundle ${path.basename(filePath)}`, "//"].join(endl);
            bundle.content = bundle.content + endl + metadata + endl + file.content + endl; 
            //Parse modules
            file.modules.forEach(function (m) {
                if (m.isLocal === true) {
                    return null; //This is not a global module --> ignore
                }
                //Check if this module is in the current list
                if (typeof bundle.modules[m.name] !== "undefined") {
                    if (bundle.modules[m.name].as !== m.as) {
                        //Different as attributes ---> throw error and abort
                        console.error(`Different modules renamed for module '${m.name}': '${bundle.modules[m.name].as}' !== '${m.as}'`);
                        return process.exit(1); //TODO: reject promise
                    }
                    return; //This module is already in the list
                }
                //Add this module to the list
                bundle.modules[m.name] = m;
            });
        });
        //Fix bundle modules list
        Object.assign(bundle, {
            "modules": Object.values(bundle.modules)
        });
        //Resolve with the parsed scss
        return resolve(stringifyScss(bundle));
    });
};

// Parse output configuration
const parseOutput = (output) => ({
    "path": output.path || "./",
    "filename": output.filename || "index.scss",
});

//Start bundle cli
process.nextTick(function () {
    let options = getArgs().options;
    //TODO: check if no config or output option has been provided
    const configPath = path.resolve(
        process.cwd(), 
        path.join(options.config || ".", "bundle.config.js")
    );
    const config = require(configPath);
    const cwd = config.cwd || path.dirname(configPath);
    //Generate bundle
    return bundleScss(config, cwd).then(function (scss) {
        const output = parseOutput(config.output || {});
        const outputPath = path.resolve(
            process.cwd(), 
            path.join(output.path, output.filename)
        );
        return fs.writeFileSync(outputPath, scss, "utf8");
    });
});


