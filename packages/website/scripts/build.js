let fs = require("fs");
let path = require("path");
let getPackages = require("../../../scripts/utils.js").getPackages;

//Import website package
let websitePkg = require(path.join(process.cwd(), "package.json"));

process.nextTick(function () {
    //Get all packages
    let packages = getPackages(path.resolve(process.cwd(), "../"));
    //Import packages to document
    let docsPkgs = Object.entries(websitePkg.documentation).map(function (item) {
        //Import the local package
        let localPkg = packages[item[0]]; 
        return {
            "name": localPkg.name,
            "description": localPkg.description,
            "version": localPkg.version,
            "url": path.join("/docs/", item[1], "index.html")
        };
    });
    //Save the packages configuration
    fs.writeFileSync(path.resolve(__dirname, "../data/documentation.json"), JSON.stringify(docsPkgs, null, "    "), "utf8");
});


