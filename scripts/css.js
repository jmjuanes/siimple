const CleanCSS = require("clean-css");
const sass = require("sass");
const through = require("through2");

// Minimal wrapper plugin around CleanCss
module.exports.minify = (options) => {
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
module.exports.compile = (options) => {
    return through.obj((file, enc, callback) => {
        const renderOptions = {
            ...options,
            data: file.contents.toString() || "",
        };
        return sass.render(renderOptions, (error, result) => {
            if (error) {
                return callback(error.message);
            }
            file.contents = result.css;
            return callback(null, file);
        });
    });
};

