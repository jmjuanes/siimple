const path = require("path");
const autoprefixer = require("autoprefixer");
const gulp = require("gulp");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");

// Modules
const bundle = require("./scripts/bundle.js");
const css = require("./scripts/css.js");
const icons = require("./scripts/icons.js");

// Configurations
const colorsList = require("./colors.json");
const iconsList = require("./icons.json");
// const pkg = require("./package.json");

// Generate colors file
const generateColorsFile = () => {
    const content = [];
    content.push("$colors: (");
    Object.keys(colorsList).forEach(name => {
        Object.keys(colorsList[name]).forEach((index) => {
            content.push(`    "${name}-${index}": ${colorsList[name][index]},`);
        });
    });
    content.push(");");
    return content.join("\n");
};

// Generate icons file
const generateIconsFile = () => {
    const content = [];
    content.push("$icons: (");
    iconsList.forEach(item => {
        content.push(`    "${item.id}": "${item.unicode.toString(16).toLocaleLowerCase()}",`);
    });
    content.push(");");
    return content.join("\n");
};


// Clean output directories
gulp.task("clean", () => null);

// Build bundle files
gulp.task("build:bundle", () => {
    return gulp.src([
        "sass/constants.scss",
        "sass/utils.scss",
        "sass/*.scss",
    ])
        .pipe(bundle({
            // cwd: __dirname,
            plugins: [
                bundle.virtualFilePlugin({
                    "colors-list.scss": generateColorsFile(),
                    "icons-list.scss": generateIconsFile(),
                }),
            ],
        }))
        .pipe(gulp.dest("dist/"));
});

// Build components
gulp.task("build:components", () => {
    return null;
});

// Build icons fonts
gulp.task("build:icons", () => {
    return gulp.src("icons.json")
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

// Copy static assets
gulp.task("static", () => {
    const files = [
        "dist/siimple.min.css",
        "dist/siimple-icons.ttf",
        "dist/siimple-icons.woff",
        "src/docs.css",
        "node_modules/codecake/codecake.css",
    ];
    return gulp.src(files).pipe(gulp.dest("public/static/"));
});

// Copy assets
gulp.task("assets", () => {
    return gulp.src("src/assets/*").pipe(gulp.dest("public/"));
});
