const fs = require("fs");
const path = require("path");
const glob = require("glob");
const through = require("through2");
const Vinyl = require("vinyl");

// const config = require("../config/bundle.json");
const colors = require("../config/colors.json");
const icons = require("../config/icons.json");

//Global variables
const endl = "\n";
const useRegexp = /@use\s+\"([^"]*)\"(?:\s+as\s+([^;].*))?\s*;/; //For capturing includes

//Generate colors file
const generateColorsVirtualFile = () => {
    const content = [];
    const colorsList = []; //Colors list
    Object.keys(colors).forEach(colorName => {
        return Object.keys(colors[colorName]).forEach((colorIndex) => {
            return colorsList.push({
                "index": `${colorName}-${colorIndex}`,
                "value": colors[colorName][colorIndex]
            });
        });
    });
    content.push("$colors: (");
    colorsList.forEach(color => {
        //const sep = (index === colorsList.length - 1) ? "" : ","; //Separator
        return content.push(`    "${color.index}": ${color.value},`);
    });
    //content.push(") !default;");
    content.push(");");
    return content.join("\n");
};

//Unicode parser
const parseUnicode = value => value.toString(16).toLowerCase();

//Generate icons file
const generateIconsVirtualFile = () => {
    const content = [];
    content.push("$icons: (");
    icons.forEach(item => {
        return content.push(`    "${item.id}": "${parseUnicode(item.unicode)}",`);
    });
    //content.push(") !default;");
    content.push(");");
    //Return the file content
    return content.join("\n");
};

//Parse entry files
const getEntryFiles = (entry, options) => {
    if (typeof entry === "string") {
        entry = [entry];
    }
    //Build for each entry
    return entry.map(entryPath => {
        return entryPath.indexOf("*") > -1 ? glob.sync(entryPath, options) : entryPath;
        //return glob.sync(entryPath, options);
    }).flat(2);
};

//Get entry content
const getEntryContent = (cwd, entry, virtualFiles) => {
    if (typeof virtualFiles[entry] !== "undefined") {
        const type = virtualFiles[entry];
        if (type === "virtual::icons") {
            return generateIconsVirtualFile();
        }
        if (type === "virtual::colors") {
            return generateColorsVirtualFile();
        }
        // Other type --> throw error
        console.log(`Unknown virtual file type "${type}"`);
        process.exit(1);
    }
    //Default --> read the file content
    return fs.readFileSync(path.resolve(cwd, entry), "utf8");
};

//Split lines
const splitLines = lines => {
    return lines.replace(/\r/g, "").split(endl);
};

//Parse a SCSS import line
//index and filePath are used for displaying errors and warnings
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

//Parse a SCSS file string
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
const bundleScss = (config, cwd) => {
    const virtualFiles = config.virtualFiles || {}; //Get virtual files
    return new Promise((resolve, reject) => {
        const files = getEntryFiles(config.entry, {"cwd": cwd});
        const bundle = {"content": "", "modules": {}, "header": null}; //Output bundle
        //console.log(files);
        //Process all files in the list
        files.forEach(filePath => {
            const file = parseScss(getEntryContent(cwd, filePath, virtualFiles), {
                "removeNamespaces": true,
                "resolve": config.resolve || {}
            });
            const metadata = ["//", `//@bundle ${path.basename(filePath)}`, "//"].join(endl);
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
                        console.error(`ERROR processing file '${filePath}':`);
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
module.exports = options => {
    options = options || {};
    return through.obj(function (file, enc, callback) {
        const self = this;
        const config = require(file.path); //Import bundle file
        const cwd = options.cwd || path.dirname(file.path); // Get current working directory
        const allPromises = [config].flat().map(c => {
            return bundleScss(c, cwd);
        });

        Promise.all(allPromises).then(outputFiles => {
            outputFiles.forEach(output => {
                self.push(new Vinyl({
                    "base": file.base,
                    "path": path.join(file.base, output.name),
                    "contents": new Buffer.from(output.content),
                }));
            });
            // file.contents = new Buffer.from(content);
            // file.basename = config.output || "index.scss";
            // return callback(null, file);
            return callback();
        });
    });
};
