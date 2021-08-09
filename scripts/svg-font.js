let fs = require("fs");
let path = require("path");
let SVGIcons2SVGFontStream = require("svgicons2svgfont");
let getArgs = require("get-args");
let paths = require("../config/paths.js");
let utils = require("./utils.js");

//Build the SVG font
process.nextTick(() => {
const icons = utils.readJSON(paths.icons.source);
    const options = getArgs().options || {};
    const fontStream = new SVGIcons2SVGFontStream({
        "fontName": "SiimpleIcons", 
        "normalize": true, 
        "fontHeight": 1000, 
        "log": () => null,
    });
    const writer = fs.createWriteStream(options.output);
    fontStream.pipe(writer);
    //Error listener
    fontStream.on("error", (error) => {
        process.stderr.write(error.message);
        return process.exit(1);
    });
    //Writer finished
    writer.on("finish", () => {
        return process.exit(0);
    });
    //Add each icon in the font stream
    icons.forEach((icon) => {
        //process.stdout.write("Adding icon '" + icon.id + "' to SVG font");
        const iconPath = path.join(paths.icons.images, `${icon.id}.svg`);
        const iconReader = fs.createReadStream(iconPath);
        iconReader.metadata = {
            "unicode": [String.fromCharCode(icon.unicode)], 
            "name": icon.id,
        };
        return fontStream.write(iconReader);
    });
    fontStream.end();
});


