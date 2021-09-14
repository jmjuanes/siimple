//const path = require("path");
const colors = require("./colors.json");

//Generate colors file
const generateColorsVirtualFile = () => {
    const content = [];
    const colorsList = []; //Colors list
    Object.keys(colors).forEach((colorName) => {
        return Object.keys(colors[colorName]).forEach((colorIndex) => {
            return colorsList.push({
                "index": `${colorName}-${colorIndex}`,
                "value": colors[colorName][colorIndex]
            });
        });
    });
    content.push("$list: (");
    colorsList.forEach((color) => {
        //const sep = (index === colorsList.length - 1) ? "" : ","; //Separator
        return content.push(`    "${color.index}": ${color.value},`);
    });
    //content.push(") !default;");
    content.push(");");
    return content.join("\n");
};

module.exports = {
    "name": "siimple-colors",
    "cwd": __dirname,
    "output": "./index.scss",
    "entry": [
        "./scss/colors.scss",
        "./scss/*.scss",
    ],
    "resolve": {},
    "virtualFiles": {
        "./scss/colors.scss": generateColorsVirtualFile()
    },
};

