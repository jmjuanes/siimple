// const fs = require("fs");
const path = require("path");
const through = require("through2");
const Vinyl = require("vinyl");

//Global variables
const endl = "\n";
const useRegexp = /@use\s+\"([^"]*)\"(?:\s+as\s+([^;].*))?\s*;/; //For capturing includes

// Split lines
const splitLines = lines => {
    return lines.replace(/\r/g, "").split(endl);
};

// Parse a SCSS import line
// index and filePath are used for displaying errors and warnings
const parseSCSSImport = (line, index) => {
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

// Parse a SCSS file string
const parseScss = (content, options) => {
    let allImports = []; //To store files includes
    content = splitLines(content).filter((line, index) => {
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
        let localImports = allImports.filter(lib => {
            return lib.isLocal === true; //Get only local imports
        }).map(lib => {
            return lib.as; //Get lib name
        });
        //console.log(filePath);
        //console.log(localImports);
        if (localImports.length > 0) {
            //Find the import and replace in all lines
            content = content.map(line => {
                return line.replace(new RegExp(`(${localImports.join("|")})\\.`, "g"), "");
            });
        }
    }
    //Resolve modules
    if (typeof options.resolve === "object" && options.resolve !== null) {
        //Resolve scss imports
        allImports = allImports.map(m => {
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
const stringifyScss = file => {
    let content = file.content; //Initialize the content
    //Add the modules at the start of the file
    file.modules.forEach(m => {
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
const bundleScss = (files, config) => {
    const bundle = {
        content: "", 
        modules: {},
        header: null,
    };
    return new Promise((resolve, reject) => {
        // const files = getEntryFiles(config.entry, {"cwd": cwd});
        // Initialize plugins
        (config.plugins || []).forEach(plugin => {
            return plugin({
                addFile: (filePath, fileContent) => {
                    files.push({path: filePath, content: fileContent});
                },
            });
        });
        //Process all files in the list
        files.forEach(f => {
            // const file = parseScss(getEntryContent(cwd, filePath, virtualFiles), {
            const file = parseScss(f.content.toString(), {
                "removeNamespaces": true,
                "resolve": config.resolve || {}
            });
            const metadata = ["//", `// @bundle ${path.basename(f.path)}`, "//"].join(endl);
            bundle.content = bundle.content + endl + metadata + endl + file.content + endl; 
            //Parse modules
            file.modules.forEach(m => {
                if (m.isLocal === true) {
                    return null; //This is not a global module --> ignore
                }
                //Check if this module is in the current list
                if (typeof bundle.modules[m.name] !== "undefined") {
                    if (bundle.modules[m.name].as !== m.as) {
                        //Different as attributes ---> throw error and abort
                        console.error(`ERROR processing file '${f.path}':`);
                        console.error(`  Different modules renamed for module '${m.name}': '${bundle.modules[m.name].as}' !== '${m.as}'`);
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
        return resolve({
            "name": config.output || "index.scss",
            "content": stringifyScss(bundle),
        });
    });
};

// Export bundle generator
module.exports = config => {
    config = config || {};
    const files = [];
    // Process provided files
    const bufferContents = function (file, enc, callback) {
        files.push({
            base: file.base,
            path: file.path,
            content: file.contents,
        });
        return callback();
    };
    // End stream parsing
    const endStream = function (callback) {
        const self = this;
        bundleScss(files, config).then(output => {
            self.push(new Vinyl({
                "base": files[0].base,
                "path": path.join(files[0].base, output.name),
                "contents": new Buffer.from(output.content),
            }));
            return callback();
        });
    };
    return through.obj(bufferContents, endStream);
};

// Virtual files plugin
module.exports.virtualFilePlugin = virtualFiles => {
    return actions => {
        Object.keys(virtualFiles).forEach(name => {
            return actions.addFile(name, virtualFiles[name]);
        });
    };
};
