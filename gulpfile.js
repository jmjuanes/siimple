import fs from "fs";
import path from "path";
import autoprefixer from "autoprefixer";
import gulp from "gulp";
import postcss from "gulp-postcss";
import rename from "gulp-rename";
import CleanCSS from "clean-css";
import through from "through2";
import Vinyl from "vinyl";

// Minify CSS
const minify = options => {
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

// Generate icons
const iconify = () => {
    let lastFile = null;
    const icons = [];
    // Process SVG icons
    const bufferContents = function (file, enc, cb) {
        const content = file.contents.toString();
        icons.push({
            name: path.basename(file.path, ".svg"),
            path: /\sd="([\w,\.\-\s]*)"/gm.exec(content)[1] || "",
        });
        lastFile = file; // Save reference to last file
        return cb();
    };
    // End stream
    const endStream = function (cb) {
        const output = JSON.stringify(icons, null, "    ");
        // Generate the new file and continue
        this.push(new Vinyl({
            base: lastFile.base,
            path: path.join(lastFile.base, "icons.js"),
            contents: new Buffer.from(`export default ${output};`),
        }));
        return cb();
    };
    return through.obj(bufferContents, endStream);
};

// Clean output directories
gulp.task("clean", () => null);

// Build icons
gulp.task("icons", () => {
    return gulp.src("icons/*.svg")
        .pipe(iconify())
        .pipe(gulp.dest("presets/icons/"));
});

// Generate css files
gulp.task("autoprefix", () => {
    return gulp.src("siimple/siimple.css")
        .pipe(postcss([autoprefixer()]))
        .pipe(rename("siimple.css"))
        .pipe(gulp.dest("siimple"));
});

// Minify css
gulp.task("minify", () => {
    return gulp.src("siimple/siimple.css")
        .pipe(minify({
            "compatibility": "*",
            "level": 2,
        }))
        .pipe(rename("siimple.min.css"))
        .pipe(gulp.dest("siimple"));
});
