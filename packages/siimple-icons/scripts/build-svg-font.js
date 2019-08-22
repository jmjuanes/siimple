let fs = require("fs");
let path = require("path");
let SVGIcons2SVGFontStream = require("svgicons2svgfont");
let getArgs = require("get-args");

//Import icons
let icons = require("../icons.json");

//Function that does nothing
let noop = function () {
    return;
};

//Print the generated error and exit
let exitScript = function (error) {
    process.stderr.write(error.message);
    return process.exit(1);
}

//Build the SVG font
process.nextTick(function () {
    let options = getArgs().options;
    let fontOptions = {
        "fontName": "SiimpleIcons", 
        "normalize": true, 
        "fontHeight": 1000, 
        "log": noop
    }; 
    let fontStream = new SVGIcons2SVGFontStream(fontOptions);
    let writer = fs.createWriteStream(options.output);
    fontStream.pipe(writer);
    //Error listener
    fontStream.on('error', function (error) {
        return exitScript(error);
    });
    //Writer finished
    writer.on('finish', function () {
        return process.exit(0);
    });
    //Add each icon in the font stream
    icons.forEach(function (icon) {
        //process.stdout.write("Adding icon '" + icon.id + "' to SVG font");
        let iconPath = path.join("./svg/", icon.id + ".svg");
        let iconReader = fs.createReadStream(iconPath);
        //Set the icon metadata
        iconReader.metadata = {"unicode": [String.fromCharCode(icon.unicode)], "name": icon.id};
        fontStream.write(iconReader);
    });
    fontStream.end();
});


