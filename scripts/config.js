let kofi = require("kofi");
let pkg = require("../package.json");

//Generate the header
exports.getHeader = function() {
    let header = [];
    header.push("/**");
    header.push(" * @name         {{ name }} v{{ version }}");
    header.push(" * @description  {{ description }}");
    header.push(" * @docs         {{ homepage }}");
    header.push(" * @license      {{ license }}");
    header.push("**/");
    header.push(" ");
    header.push(" ");
    return kofi.format(header.join("\n"), pkg)
};
