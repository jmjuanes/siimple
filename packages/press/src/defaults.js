//Default paths
let defaultPaths = {
    "assets": "assets",
    "data": "data",
    "pages": "pages",
    "partials": "partials",
    "layouts": "layouts"
};

//Default page template
let defaultTemplate = [];
defaultTemplate.push("<head>");
defaultTemplate.push("    {{#each head}}");
defaultTemplate.push("    {{{this}}}");
defaultTemplate.push("    {{/each}}");
defaultTemplate.push("    <title>{{title}}</title>");
defaultTemplate.push("</head>");
defaultTemplate.push("<body>");
defaultTemplate.push("    {{{content}}}");
defaultTemplate.push("    {{#each fragment}}");
defaultTemplate.push("    {{{this}}}");
defaultTemplate.push("    {{/each}}");
defaultTemplate.push("</body>");

//Export defaults
module.exports = {
    //"paths": defaultPaths,
    "config": require("../conf/default.js"),
    "template": defaultTemplate.join("\n")
};

