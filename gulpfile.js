import fs from "fs";
import path from "path";
import autoprefixer from "autoprefixer";
import gulp from "gulp";
import postcss from "gulp-postcss";
import rename from "gulp-rename";
import CleanCSS from "clean-css";
import through from "through2";
import SVGIcons2SVGFontStream from "svgicons2svgfont";
import svg2ttf from "svg2ttf";
import ttf2woff from "ttf2woff";
import Vinyl from "vinyl";

import iconsList from "./icons.js";
// const pkg = require("./package.json");

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
const buildIcons = options => {
    options = options || {};
    const name = options.name || "siimple-icons";
    const folder = options.iconsFolder || path.join(process.cwd(), "icons");
    return through.obj(function (file, enc, callback) {
        const self = this;
        // const icons = JSON.parse(file.contents.toString());
        const chunks = []; //To save buffer chunks
        const fontStream = new SVGIcons2SVGFontStream({
            "fontName": options.fontName || "SiimpleIcons", 
            "normalize": true, 
            "fontHeight": 1000, 
            "log": () => null,
        });
        // Font stream listeners
        fontStream.on("data", chunk => chunks.push(chunk));
        fontStream.on("error", error => callback(error.message));
        fontStream.on("end", () => {
            const ttfContent = Buffer.from(svg2ttf(Buffer.concat(chunks).toString()).buffer);
            self.push(new Vinyl({
                "base": file.base,
                "path": path.join(file.base, name + ".ttf"),
                "contents": ttfContent,
            }));
            self.push(new Vinyl({
                "base": file.base,
                "path": path.join(file.base, name + ".woff"),
                "contents": Buffer.from(ttf2woff(new Uint8Array(ttfContent), {})),
            }));
            // self.push(new Vinyl({
            //     "base": file.base,
            //     "path": path.join(file.base, name + ".woff2"),
            //     "contents": ttf2woff2(ttfContent),
            // }));
            // End font creation
            return callback();
        });
        // Add each icon in the font stream
        iconsList.forEach((icon) => {
            // process.stdout.write("Adding icon '" + icon.id + "' to SVG font");
            const iconPath = path.join(folder, `${icon.id}.svg`);
            const iconReader = fs.createReadStream(iconPath);
            iconReader.metadata = {
                "unicode": [String.fromCharCode(icon.unicode)], 
                "name": icon.id,
            };
            return fontStream.write(iconReader);
        });
        fontStream.end();
    });

};

// Clean output directories
gulp.task("clean", () => null);

// Build icons fonts
gulp.task("icons", () => {
    return gulp.src("icons.js")
        .pipe(buildIcons())
        .pipe(gulp.dest("."));
});

// Generate css files
gulp.task("autoprefix", () => {
    return gulp.src("siimple.css")
        .pipe(postcss([autoprefixer()]))
        .pipe(rename("siimple.css"))
        .pipe(gulp.dest("."));
});

// Minify css
gulp.task("minify", () => {
    return gulp.src("siimple.css")
        .pipe(minify({
            "compatibility": "*",
            "level": 2,
        }))
        .pipe(rename("siimple.min.css"))
        .pipe(gulp.dest("."));
});
