// const path = require("path");
const colors = require("./config/colors.json");
const icons = require("./config/icons.json");

//Generate colors file
const generateColorsVirtualFile = () => {
    const content = [];
    const colorsList = []; //Colors list
    Object.keys(colors).forEach(colorName => {
        return Object.keys(colors[colorName]).forEach((colorIndex) => {
            return colorsList.push({
                "index": `${colorName}-${colorIndex}`,
                "value": colors[colorName][colorIndex]
            });
        });
    });
    content.push("$colors: (");
    colorsList.forEach(color => {
        //const sep = (index === colorsList.length - 1) ? "" : ","; //Separator
        return content.push(`    "${color.index}": ${color.value},`);
    });
    //content.push(") !default;");
    content.push(");");
    return content.join("\n");
};

//Unicode parser
const parseUnicode = value => value.toString(16).toLowerCase();

//Generate icons file
const generateIconsVirtualFile = () => {
    const content = [];
    content.push("$icons: (");
    icons.forEach(item => {
        return content.push(`    "${item.id}": "${parseUnicode(item.unicode)}",`);
    });
    //content.push(") !default;");
    content.push(");");
    //Return the file content
    return content.join("\n");
};

module.exports = Object.values({
    "index": {
        "output": "index.scss",
        "entry": [
            "./sass/index.scss",
        ],
        "resolve": {
            "siimple:lib": "./lib.scss",
            "siimple:plugins": "./plugins.scss",
        },
    },
    "colors": {
        "output": "colors.scss",
        "entry": [
            "./colors.scss",
            "./sass/addons/colors.scss",
        ],
        "resolve": {
            "siimple:lib": "./lib.scss",
        },
        "virtualFiles": {
            "./colors.scss": generateColorsVirtualFile(),
        },
    },
    "icons": {
        "output": "icons.scss",
        "entry": [
            "./icons.scss",
            "./sass/addons/icons.scss",
        ],
        "virtualFiles": {
            "./icons.scss": generateIconsVirtualFile(),
        },
    },
    "plugins": {
        "output": "plugins.scss",
        "entry": [
            "./sass/components/*.scss",
            "./sass/experiments/*.scss",
            "./sass/helpers/*.scss",
            "./sass/plugins/*.scss",
        ],
        "resolve": {
            "siimple:icons": "./icons.scss",
            "siimple:colors": "./colors.scss",
            "siimple:lib": "./lib.scss",
        },
    },
    "lib": {
        "output": "lib.scss",
        "entry": [
            "./sass/utils.scss",
            "./sass/constants.scss",
            "./sass/naming.scss",
            "./sass/scales.scss",
            "./sass/breakpoints.scss",
            "./sass/variants.scss",
            // "./sass/selectors.scss",
            "./sass/plugins.scss",
            "./sass/theme.scss",
            "./sass/sheet.scss",
        ],
        "resolve": {},
    },
});
