const React = require("react");
const prefix = process.env?.DOCS_PREFIX || "/docs";

//Called after every page Gatsby server renders while building HTML
//https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#onRenderBody
exports.onRenderBody = body => {
    body.setHtmlAttributes({
        lang: "en",
    });
    body.setHeadComponents([
        <meta charSet="utf-8" />,
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />,
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" />,
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap" />,
        <link rel="stylesheet" href={`${prefix}/codecake.css`} />,
        <link rel="stylesheet" href={`${prefix}/siimple.css`} />,
        <link rel="stylesheet" href={`${prefix}/siimple-icons.css`} />,
        <link rel="stylesheet" href={`${prefix}/docs.css`} />,
    ]);
};
