import fs from "fs";
import path from "path";
import React from "react";
import {renderToString} from "react-dom/server";

import {CheatSheet} from "../src/components/CheatSheet.js";

// Generate HTML template
const generateHtmlTemplate = body => (`
    <html>
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="./siimple.min.css" />,
        </head>
        <body>
            <div class="siimple-content is-xlarge">
                ${body}
            </div>
        </body>
    </html>
`);

// Build cheatsheet page
process.nextTick(() => {
    const body = renderToString(<CheatSheet />);
    const cheatsheetContent = generateHtmlTemplate(body);
    const cheatsheetPath = path.resolve(__dirname, "../dist/cheatsheet.html");
    // Save HTML file
    fs.writeFileSync(cheatsheetPath, cheatsheetContent, "utf8");
});
