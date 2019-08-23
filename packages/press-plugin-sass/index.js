let path = require("path");
let sass = require("sass");

//Compile SASS/SCSS files
module.exports = function (context, args) {
    //Check for no options provided
    if (typeof args.options !== "object" || args.options === null) {
        args.options = {};
    }
    //Compile the source scss file
    let result = sass.renderSync(Object.assign({}, args.options, {
        "file": args.source
    }));
    //Build the asset file
    context.assets.push({
        //"target": path.join(context.targetPath, args.target),
        "target": args.target,
        "content": result.css.toString()
    });
};

