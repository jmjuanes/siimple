const autoprefixer = require("autoprefixer");
const gulp = require("gulp");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");

const bundle = require("./scripts/bundle.js");
const css = require("./scripts/css.js");
const icons = require("./scripts/icons.js");
const upgrade = require("./scripts/upgrade.js");
const paths = require("./paths.js");
const pkg = require("./package.json");

// Clean output directories
gulp.task("clean", () => null);

// Build bundle files
gulp.task("build:bundle", () => {
    return gulp.src("bundle.config.js")
        .pipe(bundle())
        .pipe(gulp.dest("dist/"));
});

// Build components
gulp.task("build:components", () => {
    return null;
});

// Build icons fonts
gulp.task("build:icons", () => {
    return gulp.src("config/icons.json")
        .pipe(icons())
        .pipe(gulp.dest("dist/fonts/"));
});

// Generate dist files
gulp.task("dist", () => {
    return gulp.src("siimple.config.scss")
        .pipe(css.compile({}))
        .pipe(postcss([autoprefixer()]))
        .pipe(rename("siimple.css"))
        .pipe(gulp.dest("dist/css/"))
        .pipe(css.minify({
            "compatibility": "*",
            "level": 2,
        }))
        .pipe(rename("siimple.min.css"))
        .pipe(gulp.dest("dist/css/"));
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

// Upgrade package.json files
gulp.task("upgrade", () => {
    return gulp.src("packages/*/package.json")
        .pipe(upgrade({
            "packages": pkg.packages,
        }))
        .pipe(gulp.dest(file => file.base));
});
