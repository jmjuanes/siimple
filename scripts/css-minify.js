let gulp = require("gulp");
let cleanCSS = require("gulp-clean-css");
let rename = require("gulp-rename");
let header = require("gulp-header");
let sass = require("gulp-sass");

let config = require("./config.js");

//Minify the output css file
let minifyCss = function () {
    return gulp.src("dist/siimple.css")
        .pipe(cleanCSS({compatibility: "*", processImportFrom: ["!fonts.googleapis.com"]}))
        .pipe(rename({extname: ".min.css"}))
        .pipe(header(config.getHeader(), {}))
        .pipe(gulp.dest("./dist"));
};
minifyCss();
