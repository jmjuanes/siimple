import React from "react";
import {getCDNPath} from "../cdn.js";

// Generate iframe content
const defaultDocument = `
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link id="sheet" href="/static/siimple.min.css" rel="stylesheet" type="text/css">
            <script>
                window.addEventListener("message", event => {
                    if (typeof event.data.sheet !== "undefined") {
                        updateSheet(event.data.sheet)
                    }
                    if (typeof event.data.html !== "undefined") {
                        updateHtml(event.data.html);
                    }
                });
                const updateHtml = html => {
                    document.body.innerHTML = html || "";
                };
                const updateSheet = url => {
                    document.getElementById("sheet").setAttribute("href", url);
                };
            </script>
        </head>
        <body></body>
    </html>
`;


// Helper method to update a preview
export const updatePreview = (ref, content) => {
    const data = {
        sheet: content.version ? getCDNPath(content.version, "siimple.min.css") : undefined,
        html: typeof content.html === "string" ? content.html : undefined,
    };
    return ref.current.contentWindow.postMessage(data, "*");
};

// Export preview component
export const Preview = React.forwardRef((props, ref) => {
    return (
        <iframe
            ref={ref}
            onLoad={props.onLoad}
            style={{
                width: props.width || "100%",
                height: props.height || "100%",
                border: "0",
                backgroundColor: props.background || "#ffffff",
            }}
            sandbox="allow-scripts allow-same-origin"
            scrolling="yes"
            srcDoc={defaultDocument}
        />
    );
});
