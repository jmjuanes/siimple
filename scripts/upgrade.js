const through = require("through2");

// Upgrade the version in all package.json files
module.exports = (options) => {
    const packages = options.packages || {};
    return through.obj((file, enc, callback) => {
        const content = JSON.parse(file.contents.toString());
        const name = content.name; //Get package name
        if (typeof packages[name] === "undefined" || content.version === packages[name]) {
            return callback(); //Nothing to update
        }
        //Update package.json fields
        content.version = packages[name];
        Object.keys(content.dependencies || {}).forEach((n) => {
            if (typeof packages[n] !== "undefined") {
                content.dependencies[n] = `^${packages[n]}`;
            }
        });
        //Save package.json file
        file.contents = Buffer.from(JSON.stringify(content, null, "    "));
        return callback(null, file);
    });
};

