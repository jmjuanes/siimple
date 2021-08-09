const fs = require("fs");
const path = require("path");
const {optimize} = require("svgo");
const svgstore = require("svgstore");
const getArgs = require("get-args");
const paths = require("../config/paths.js");

//Build the svg sprite
process.nextTick(() => {
    const options = getArgs().options || {};
    if (typeof options.output !== "string") {
        throw new Error("No output file provided");
    }
    //Get all icons
    const files = fs.readdirSync(paths.icons.images, "utf8").filter(function (file) {
        return path.extname(file) === ".svg"; //Get only .svg files
    });
    //Sprites storage
    const sprites = svgstore();
    files.forEach((file, index) => {
        const content = fs.readFileSync(path.join(paths.icons.images, file), "utf8");
        //Initialize the svg minimize
        const prefix = path.basename(file, path.extname(file));
        const result = optimize(content, {
            "plugins": [{
                "name": "cleanupIDs",
                "params": {
                    "prefix": prefix + "-",
                    "minify": true,
                },
            }],
        });
        //Save this sprite
        return sprites.add(prefix, result.data);
    });
    //Write the sprites to the file and exit
    return fs.writeFileSync(options.output, sprites.toString(), "utf8");
});

