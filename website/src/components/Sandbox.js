import React from "react";
import kofi from "kofi";

import {useEditor} from "../hooks/useEditor.js";
import {useSandbox} from "../hooks/useSandbox.js";
import {copyTextToClipboard} from "../utils/clipboard.js";
import {Icon} from "./Icon.js";

// Default preview content
const defaultPreviewDocument = `
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link id="sheet" href="/siimple.min.css" rel="stylesheet" type="text/css">
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
                    const sheet = document.getElementById("sheet");
                    if (sheet.getAttribute("href") !== url) {
                        sheet.setAttribute("href", url);
                    }
                };
            </script>
        </head>
        <body></body>
    </html>
`;

// Default preview style
const defaultPreviewStyle = {
    width: "100%",
    height: "100%",
    border: "0",
    backgroundColor: "#ffffff",
};

// Helper method to update a preview
const updatePreview = (preview, content) => {
    const data = {
        // sheet: content.version ? getCDNPath(content.version, "siimple.min.css") : undefined,
        html: typeof content.html === "string" ? content.html : undefined,
    };
    return preview.current.contentWindow.postMessage(data, "*");
};

// Action button wrapper
const ActionButton = props => {
    const buttonClass = kofi.classNames({
        "has-cursor-pointer": true,
        "has-d-flex has-radius": true,
        "has-py-2 has-px-2 has-ml-3": true,
        "has-bg-coolgray-200 has-text-no-underline": true,
        // "hover:has-bg-blue-200 hover:has-text-blue-700": true
    });
    return (
        <div className={buttonClass} onClick={props.onClick}>
            <Icon icon={props.icon} className="has-text-2xl" />
        </div>
    );
};

// Export playground application wrapper
export const Sandbox = props => {
    const codeRef = React.useRef();
    const previewRef = React.useRef();
    const [shareUrl, setShareUrl] = React.useState("");
    const [shareUrlCopied, setShareUrlCopied] = React.useState(false);
    const editor = useEditor(codeRef, {});
    const sandbox = useSandbox();
    React.useEffect(() => {
        sandbox.current.init().then(() => {
            editor.current.setCode(sandbox.current.content.html);
            updatePreview(previewRef, sandbox.current.content);
        });
    }, []);
    // Handle preview loaded --> initialize sandbox
    const handlePreviewLoad = () => {
        if (sandbox.current?.content) {
            updatePreview(previewRef, sandbox.current.content);
        }
    };
    // Handle share click --> generate share url
    const handleShareClick = () => {
        return sandbox.current.share().then(url => {
            setShareUrlCopied(false);
            setShareUrl(url);
        });
    };
    // Handle action button click --> run sandbox
    const handleRunClick = () => {
        sandbox.current.update({
            html: editor.current.getCode() || "",
        });
        updatePreview(previewRef, sandbox.current.content);
    };
    // Handle copy click --> Copy sandbox url to clipboard
    const handleCopyClick = () => {
        copyTextToClipboard(shareUrl).then(() => setShareUrlCopied(true));
    };
    const parentClass = kofi.classNames({
        "has-d-flex has-flex-row has-items-stretch has-flex-grow": true,
        "has-w-full has-h-screen": true,
        "has-py-3": true,
        // "has-bg-coolgray-200": true,
    });
    const codePanelClass = kofi.classNames({
        "has-d-flex has-flex-column": true,
        "has-p-6 has-radius has-s-full": true,
        "has-bg-white has-shadow": true,
        "has-overflow-hidden": true,
        // "CodeCake": true,
        // "CodeCake-light has-bg-white": true,
    });
    // const actionsPanelClass = kofi.classNames({
    //     "has-d-flex has-p-6 has-radius has-w-full has-minh-12 has-mb-4": true,
    //     "has-bg-white": true,
    // });
    const previewPanelClass = kofi.classNames({
        "has-p-6 has-radius has-s-full has-flex-grow": true,
        "has-bg-white has-shadow": true,
    });
    // Render app component
    return (
        <React.Fragment>
            <div className={parentClass}>
                <div className={codePanelClass}>
                    <div className="has-mb-4 has-d-flex has-items-center">
                        <button onClick={handleRunClick} className="btn has-d-flex has-items-center">
                            <Icon icon="play" className="has-text-lg has-pr-1" />
                            <strong>Run</strong>
                        </button>
                        <div className="has-ml-auto">
                            <ActionButton icon="link" text="Share" onClick={handleShareClick} />
                        </div>
                    </div>
                    <div className="CodeCake CodeCake-light has-s-full has-flex-grow" ref={codeRef} />
                </div>
                <div className="has-h-full has-w-4 has-minw-4" />
                <div className={previewPanelClass}>
                    <iframe
                        ref={previewRef}
                        onLoad={handlePreviewLoad}
                        style={defaultPreviewStyle}
                        sandbox="allow-scripts allow-same-origin"
                        scrolling="yes"
                        srcDoc={defaultPreviewDocument}
                    />
                </div>
            </div>
            {/* Share sandbox modal */}
            {!!shareUrl ? (
                <div className="scrim">
                    <div className="modal is-medium">
                        <div className="has-d-flex has-items-center has-mb-4">
                            <div className="title is-3 has-mb-0">Share</div>
                            <div className="close has-ml-auto" onClick={() => setShareUrl("")} />
                        </div>
                        <div className="paragraph">
                            You can use the following URL for sharing your code:
                        </div>
                        <div className="has-mb-6">
                            <textarea
                                className="textarea has-text-xs"
                                rows="5"
                                readOnly
                                defaultValue={shareUrl}
                            />
                        </div>
                        <button className="btn has-w-full has-d-flex has-items-center has-justify-center" onClick={() => handleCopyClick()}>
                            <Icon icon="copy" className="has-pr-1 has-text-lg" />
                            <strong>{shareUrlCopied ? "Copied!" : "Copy to clipboard"}</strong>
                        </button>
                    </div>
                </div>
            ) : null}
        </React.Fragment>
    );
};
