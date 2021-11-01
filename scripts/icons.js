const fs = require("fs");
const path = require("path");
const SVGIcons2SVGFontStream = require("svgicons2svgfont");
const svg2ttf = require("svg2ttf");
const through = require("through2");
const ttf2woff = require("ttf2woff");
//const ttf2woff2 = require("ttf2woff2");
const Vinyl = require("vinyl");

const paths = require("../paths.js");

// Generate the svg files
module.exports = (options) => {
    options = options || {};
    const name = options.name || "siimple-icons";
    return through.obj(function (file, enc, callback) {
        const self = this;
        const icons = JSON.parse(file.contents.toString());
        const chunks = []; //To save buffer chunks
        const fontStream = new SVGIcons2SVGFontStream({
            "fontName": options.fontName || "SiimpleIcons", 
            "normalize": true, 
            "fontHeight": 1000, 
            "log": () => null,
        });
        // Font stream listeners
        fontStream.on("data", chunk => chunks.push(chunk));
        fontStream.on("error", error => callback(error.message));
        fontStream.on("end", () => {
            const ttfContent = Buffer.from(svg2ttf(Buffer.concat(chunks).toString()).buffer);
            self.push(new Vinyl({
                "base": file.base,
                "path": path.join(file.base, name + ".ttf"),
                "contents": ttfContent,
            }));
            self.push(new Vinyl({
                "base": file.base,
                "path": path.join(file.base, name + ".woff"),
                "contents": Buffer.from(ttf2woff(new Uint8Array(ttfContent), {})),
            }));
            // self.push(new Vinyl({
            //     "base": file.base,
            //     "path": path.join(file.base, name + ".woff2"),
            //     "contents": ttf2woff2(ttfContent),
            // }));
            // End font creation
            return callback();
        });
        // Add each icon in the font stream
        icons.forEach((icon) => {
            // process.stdout.write("Adding icon '" + icon.id + "' to SVG font");
            const iconPath = path.join(paths.icons, `${icon.id}.svg`);
            const iconReader = fs.createReadStream(iconPath);
            iconReader.metadata = {
                "unicode": [String.fromCharCode(icon.unicode)], 
                "name": icon.id,
            };
            return fontStream.write(iconReader);
        });
        fontStream.end();
    });
};
