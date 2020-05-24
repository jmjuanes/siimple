let fs = require("fs");
let path = require("path");

//Read json file
module.exports.readJSON = function (file) {
    return JSON.parse(fs.readFileSync(file, "utf8"));
};

//Write a json file
module.exports.writeJSON = function (file, content) {
    return fs.writeFileSync(file, JSON.stringify(content), "utf8");
};

//Encode the provided file path using safe url base64 encoding
module.exports.encodePath = function (filePath) {
    let b64 = Buffer.from(filePath).toString("base64");
    return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

//Map special chars to html codes
let htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};

//Escape html >> converts '<', '>', '&', '"' and "'" chars to html codes
module.exports.escapeHtml = function (unsafe) {
    return unsafe.replace(/[&<>"']/g, function (match) {
        return htmlEscapes[match];
    });
};


//Non closed html tags
let nonClosedHtmlTags = ["meta", "link", "hr", "img", "br"];

//Build attributes
let buildAttributes = function (attr) {
    if (typeof attr !== "object" || attr === null) {
        return [];
    }
    //Return parsed attributes
    let parsedAttributes = [];
    Object.keys(attr).forEach(function (key) {
        if (typeof attr[key] !== "string") {
            return null; //No valid attribute
        }
        let keyname = (key === "className") ? "class" : key; //Parse attribute
        parsedAttributes.push(`${keyname}="${attr[key]}"`); //Save attribute
    });
    //Return joined attributes
    return parsedAttributes.join(" ");
};

//Create a new html string element
module.exports.createElement = function (tagname, attr, children) {
    let attributes = buildAttributes(attr); //.join(" ");
    let content = (typeof children === "string") ? children : ""; //Parse content
    //Check for tag without children
    if (nonClosedHtmlTags.indexOf(tagname) > -1) {
        return `<${tagname} ${attributes} />`; 
    }
    //Return a closed tag
    return `<${tagname} ${attributes}>${content}</${tagname}>`;
};


