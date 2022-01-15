const CleanCSS = require("clean-css");
const sass = require("sass");
const through = require("through2");

// Minimal wrapper plugin around CleanCss
module.exports.minify = options => {
    return through.obj((file, enc, callback) => {
        const content = file.contents.toString() || "";
        new CleanCSS(options).minify(content, (errors, css) => {
            if (errors) {
                return callback(errors.join(" "));
            }
            file.contents = new Buffer.from(css.styles);
            return callback(null, file);
        });
    });
};

// Compile SASS files to CSS
module.exports.compile = options => {
    return through.obj((file, enc, callback) => {
        const data = file.contents.toString() || "";
        const result = sass.compileString(data, options || {});
        // Update file content and continue
        // TODO: check error compiling the SASS file
        file.contents = new Buffer.from(result.css);
        return callback(null, file);
    });
};
