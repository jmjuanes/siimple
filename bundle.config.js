// const path = require("path");
const colors = require("./config/colors.json");
const icons = require("./config/icons.json");

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
    content.push("$colors: (");
    colorsList.forEach((color) => {
        //const sep = (index === colorsList.length - 1) ? "" : ","; //Separator
        return content.push(`    "${color.index}": ${color.value},`);
    });
    //content.push(") !default;");
    content.push(");");
    return content.join("\n");
};

//Unicode parser
const parseUnicode = (value) => value.toString(16).toLowerCase();

//Generate icons file
const generateIconsVirtualFile = () => {
    const content = [];
    content.push("$icons: (");
    icons.forEach((item) => {
        return content.push(`    "${item.id}": "${parseUnicode(item.unicode)}",`);
    });
    //content.push(") !default;");
    content.push(");");
    //Return the file content
    return content.join("\n");
};

module.exports = {
    "name": "siimple",
    "cwd": __dirname,
    "output": "index.scss",
    "entry": [
        // Auto generated modules
        "./sass/colors.scss",
        "./sass/icons.scss",
        // Core modules
        "./sass/utils.scss",
        "./sass/constants.scss",
        "./sass/sheet.scss",
        "./sass/naming.scss",
        "./sass/scales.scss",
        "./sass/breakpoints.scss",
        "./sass/variants.scss",
        "./sass/selectors.scss",
        "./sass/api.scss",
        "./sass/theme.scss",
        // Components
        "./sass/components/*.scss",
        "./sass/experiments/*.scss",
        // Plugins
        "./sass/plugins/*.scss",
    ],
    "resolve": {},
    "virtualFiles": {
        "./sass/colors.scss": generateColorsVirtualFile(),
        "./sass/icons.scss": generateIconsVirtualFile(),
    },
};
