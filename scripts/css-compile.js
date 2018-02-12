let autoprefixer = require("gulp-autoprefixer");
let gulp = require("gulp");
let rename = require("gulp-rename");
let header = require("gulp-header");
let sass = require("gulp-sass");

let config = require("./config.js");

//Compile the css files
let compileCss = function() {
    //Sass compiler
    let sassCompiler = sass({ includePaths: [ "bower_components", "node_modules" ] });
    sassCompiler.on("error", sass.logError);

    //Compile the sass files
    return gulp.src("scss/**/*.scss")
        .pipe(sassCompiler)
        .pipe(autoprefixer({ browsers: ["last 3 versions", "IE 9"], cascade: false }))
        .pipe(header(config.getHeader(), {}))
        .pipe(gulp.dest("./dist"));
};

compileCss();
