let path = require("path");
let handlebars = require("handlebars");
let util = require("./util.js");

//Commpon handlebars helpers
handlebars.registerHelper({
    //Capitalize a text string
    "capitalize": function (text) {
        return (typeof text === "string") ? text.charAt(0).toUpperCase() + text.slice(1) : "";
    },
    //Replace a value in a string with another value
    "replace": function (text, source, target) {
        return text.split(source).join(target);
    },
    //Replace only the first occurrence of a substring
    "replaceFirst": function (text, source, target) {
        return text.replace(source, target);
    },
    //Check if two values are equal
    "eq": function (a, b) {
        return a === b;
    },
    //Reverse a string/array
    "reverse": function (value) {
        return value.split("").reverse().join("");
    },
    //Join elements of an array to a string
    "join": function (array, separator) {
        return array.join(separator);
    },
    //Join two paths
    "pathJoin": function (from, to) {
        return path.join(from, to);
    },
    //Each reverse
    "eachRev": function (context) {
        let options = arguments[arguments.length - 1];
        let output = "";
        if (Array.isArray(context) && context.length > 0) {
            for (let i = context.length - 1; i >= 0; i--) {
                output = output + options.fn(context[i]);
            }
        }
        return output;
    }
});

//Register handlebars partial
module.exports.registerPartial = function (name, content) {
    handlebars.registerPartial(name, content);
};

//Compile template
module.exports.compile = function (content, options) {
    return handlebars.compile(content)(options);
};

//Default page options
let defaultPageOptions = {
    "header": [],
    "body": ""
};

//Generate a page content
module.exports.page = function (options) {
    options = Object.assign({}, defaultPageOptions, options);
    let page = [];
    page.push("<head>");
    options.header.forEach(function (item) {
        page.push(util.createElement(item[0], item[1], null));
    });
    page.push("<title>{{ title }}</title>");
    page.push("</head>");
    page.push("<body>");
    page.push(options.body);
    page.push("</body>");
    //Return the page template
    return page.join("\n");
};


