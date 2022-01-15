const path = require("path");
const autoprefixer = require("autoprefixer");
const gulp = require("gulp");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");

const bundle = require("./scripts/bundle.js");
const css = require("./scripts/css.js");
const icons = require("./scripts/icons.js");
// const pkg = require("./package.json");

// Clean output directories
gulp.task("clean", () => null);

// Build bundle files
gulp.task("build:bundle", () => {
    return gulp.src("config/bundle.json")
        .pipe(bundle({
            cwd: __dirname,
        }))
        .pipe(gulp.dest("dist/"));
});

// Build components
gulp.task("build:components", () => {
    return null;
});

// Build icons fonts
gulp.task("build:icons", () => {
    return gulp.src("config/icons.json")
        .pipe(icons({
            cwd: __dirname,
            iconsFolder: path.join(__dirname, "icons"),
        }))
        .pipe(gulp.dest("dist/"));
});

// Generate css files
gulp.task("build:css", () => {
    return gulp.src("siimple.config.scss")
        .pipe(css.compile({
            loadPaths: [__dirname],
        }))
        .pipe(postcss([autoprefixer()]))
        .pipe(rename("siimple.css"))
        .pipe(gulp.dest("dist/"))
        .pipe(css.minify({
            "compatibility": "*",
            "level": 2,
        }))
        .pipe(rename("siimple.min.css"))
        .pipe(gulp.dest("dist/"));
});

// Build documentaation styles
gulp.task("docs:styles", () => {
    return gulp.src("src/styles.scss")
        .pipe(css.compile({
            includePaths: [
                __dirname,
            ]
        }))
        .pipe(postcss([autoprefixer()]))
        .pipe(css.minify({
            "compatibility": "*",
            "level": 2,
        }))
        .pipe(rename("siimple.min.css"))
        .pipe(gulp.dest("public/static/"));
});

// Copy documentation fonts
gulp.task("docs:fonts", () => {
    return gulp.src("dist/fonts/*").pipe(gulp.dest("public/static/fonts/"));
});

// Copy documentation assets
gulp.task("docs:assets", () => {
    return gulp.src("src/assets/*").pipe(gulp.dest("public/"));
});
