// import path from "path";
// import autoprefixer from "autoprefixer";
import gulp from "gulp";
// import postcss from "gulp-postcss";
import rename from "gulp-rename";
import CleanCSS from "clean-css";
import through from "through2";

import {css} from "@siimple/core";
import {injectModules} from "@siimple/modules";

// Build Siimple
const siimple = () => {
    return through.obj((file, enc, callback) => {
        import(file.path)
            .then(rawConfig => {
                return css(injectModules(rawConfig.default));
            })
            .then(result => {
                file.contents = new Buffer.from(result);
                return callback(null, file);
            });
    });
};

// Minify CSS
const minify = options => {
    return through.obj((file, enc, callback) => {
        const content = file.contents.toString() || "";
        new CleanCSS(options).minify(content, (errors, result) => {
            if (errors) {
                return callback(errors.join(" "));
            }
            file.contents = new Buffer.from(result.styles);
            return callback(null, file);
        });
    });
};

const generateSvgSprite = () => {
    const attrs = `stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="none"`;
    return through.obj((file, _, callback) => {
        import(file.path).then(rawIcons => {
            const content = Object.keys(rawIcons.default).map(name => {
                const p = rawIcons.default[name].path;
                return `<symbol viewBox="0 0 24 24" id="${name}"><path ${attrs} d="${p}"/></symbol>`;
            });
            content.unshift(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">`);
            content.push(`</svg>`);
            file.contents = new Buffer.from(content.join(""));
            callback(null, file);
        });
    });
};

gulp.task("clean", () => null);

gulp.task("icons:sprite", () => {
    return gulp.src("packages/icons/index.js", {base: "./"})
        .pipe(generateSvgSprite())
        .pipe(rename("siimple-icons.svg"))
        .pipe(gulp.dest("siimple-icons/"));
});

gulp.task("css", () => {
    return gulp.src("siimple*/siimple.config.js", {base: "./"})
        .pipe(siimple())
        // .pipe(postcss([autoprefixer()]))
        .pipe(minify({
            "compatibility": "*",
            "level": 2,
        }))
        .pipe(rename(currentPath => ({
            dirname: currentPath.dirname,
            basename: currentPath.dirname,
            extname: ".css",
        })))
        .pipe(gulp.dest("."))
});
