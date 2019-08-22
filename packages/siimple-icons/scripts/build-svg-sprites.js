let fs = require("fs");
let path = require("path");
let glob = require("glob");
let svgo = require("svgo");
let svgstore = require("svgstore");
let getArgs = require("get-args");

//Print the generated error and exit
let exitScript = function (error) {
    process.stderr.write(error.message);
    return process.exit(1);
}

//Build the svg sprite
process.nextTick(function () {
    let options = getArgs().options;
    if (typeof options.output !== "string") {
        return exitScript(new Error("No output file provided"));
    }
    return glob("./svg/*.svg", function (error, files) {
        if (error) {
            return exitScript(error);
        }
        //Sprites storage
        let sprites = svgstore();
        let parseSvg = function (index) {
            if (index >= files.length) {
                //Write the sprites to the file
                return fs.writeFile(options.output, sprites, "utf8", function (error) {
                    if (error) {
                        return exitScript(error);
                    }
                    //Process finished
                    return process.exit(0);
                });
            }
            let file = files[index];
            return fs.readFile(file, "utf8", function (error, content) {
                if (error) {
                    return exitScript(error);
                }
                //Initialize the svg minimize
                let prefix = path.basename(file, path.extname(file));
                let svgmin = new svgo({plugins: [{cleanupIDs: {prefix: prefix + '-', minify: true}}]});
                return svgmin.optimize(content).then(function (result) {
                    //Save to the svg sprite
                    sprites.add(prefix, result.data);
                    return parseSvg(index + 1);
                });
            });
        };
        return parseSvg(0);
    });
});

