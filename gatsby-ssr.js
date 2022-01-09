//const path = require("path");
const React = require("react");
//const env = require("../../config/env.js");

//Called after every page Gatsby server renders while building HTML
//https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#onRenderBody
exports.onRenderBody = body => {
    //const staticPath = env.STATIC_PATH || "/static";
    body.setHtmlAttributes({"lang": "en"});
    body.setHeadComponents([
        <meta charSet="utf-8" />,
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />,
        //<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />,
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap" />,
        <link rel="stylesheet" href="/static/siimple.min.css" />,
    ]);
    //body.setBodyAttributes(BodyAttributes)
};