const fs = require("fs");
const path = require("path");
const glob = require("glob");
const getArgs = require("get-args");
const sass = require("sass");
const autoprefixer = require("autoprefixer");
const postcss = require("postcss");
const cleanCss = require("clean-css");

const utils = require("./utils.js");
const paths = require("../config/paths.js");

// Custom instance for CleanCSS module
const cleanCssInstance = new cleanCss({
    "compatibility": "*",
    "level": 2,
});

// Instance for postcss
const postcssInstance = postcss([
    autoprefixer(),
]);

// Generate SCSS entry file
const generateEntryFile = (options) => {
    if (typeof options === "string") {
        return options;
    }
    // Default --> generate default placeholder
    return [
        `@use "${options.module || "./index.scss"}" as m;`,
        `@include m.${options.mixin || "all"}();`,
    ].join(utils.endl);
};

// Generate dist from specified config
const generateDist = (config, cwd) => {
    const outputFiles = [];
    const outputPath = path.resolve(cwd, config.output || ".");
    const {css} = sass.renderSync({
        "data": generateEntryFile(config.entry),
        "includePaths": [
            paths.packages.folder,
        ],
        "sourceMap": false,
    });
    // Run autoprefixer with the output
    //const plugins = [autoprefixer({})];
    return postcssInstance.process(css.toString(), {"from": undefined}).then((result) => {
        outputFiles.push({
            "name": `${config.name}.css`,
            "content": result.css.toString(),
        });
        //Check if we need to minimize the dist file
        if (config.minimize) {
            const data = cleanCssInstance.minify(result.css.toString());
            outputFiles.push({
                "name": `${config.name}.min.css`,
                "content": data.styles,
            });
        }
        //Ensure output folder exists
        if (fs.existsSync(outputPath) === false) {
            fs.mkdirSync(outputPath, {"recursive": true});
        }
        //Save all files
        return outputFiles.forEach((file) => {
            const filePath = path.join(outputPath, file.name);
            console.log("Write " + filePath);
            return fs.writeFileSync(filePath, file.content, "utf8");
        });
    });
};

//Start bundle cli
process.nextTick(() => {
    const options = getArgs().options || {};
    //TODO: check if no config or output option has been provided
    const config = utils.getConfig(options);
    const cwd = config.cwd || path.dirname(configPath);
    return utils.toArray(config.dist).forEach((distConfig) => {
        return generateDist(distConfig, cwd).catch((error) => {
            console.error(error);
            return process.exit(1);
        });
    });
});


