import React from "react";
import ReactDOM from "react-dom";
import kofi from "kofi";

import {build, mergeConfig} from "siimple";

import {useEditor, useSandbox} from "./hooks.js";
// import {copyTextToClipboard} from "../utils/clipboard.js";

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
        source: "siimple-playground",
        html: typeof content.html === "string" ? content.html : undefined,
        css: content.css || null,
    };
    return preview.current.contentWindow.postMessage(data, "*");
};

// Action button wrapper
const ActionButton = props => {
    const buttonClass = kofi.classNames({
        "has-cursor-pointer": true,
        "has-d-flex has-radius": true,
        "has-py-2 has-px-2 has-ml-3": true,
        "has-bg-coolgray-600 has-text-white has-text-no-underline": true,
        // "hover:has-bg-blue-200 hover:has-text-blue-700": true
    });
    return (
        <div className={buttonClass} onClick={props.onClick}>
            <i className={`${props.icon} has-text-2xl`} />
        </div>
    );
};

// Editor wrapper component
const Editor = React.forwardRef((props, ref) => {
    const editorClass = kofi.classNames({
        "CodeCake CodeCake-dark has-p-0 has-s-full": true,
        "has-bg-coolgray-700": true,
        "has-d-none": !props.visible,
    });
    return (
        <div className={editorClass} ref={ref} />
    );
});

// Playground app
const App = props => {
    const htmlRef = React.useRef();
    const configRef = React.useRef();
    const previewRef = React.useRef();
    const [tab, setTab] = React.useState("code");
    const [shareUrl, setShareUrl] = React.useState("");
    const [shareUrlCopied, setShareUrlCopied] = React.useState(false);
    const htmlEditor = useEditor(htmlRef, "html");
    const configEditor = useEditor(configRef, "javascript")
    const sandbox = useSandbox();
    React.useEffect(() => {
        sandbox.current.init().then(() => {
            htmlEditor.current.setCode(sandbox.current.content.html);
            configEditor.current.setCode(sandbox.current.content.config);
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
            html: codeEditor.current.getCode() || "",
        });
        updatePreview(previewRef, sandbox.current.content);
    };
    // Handle copy click --> Copy sandbox url to clipboard
    const handleCopyClick = () => {
        // copyTextToClipboard(shareUrl).then(() => setShareUrlCopied(true));
    };
    const parentClass = kofi.classNames({
        "has-d-flex has-flex-row has-items-stretch has-flex-grow": true,
        "has-w-full has-h-screen": true,
        "has-py-3": true,
        // "has-bg-coolgray-200": true,
    });
    const codePanelClass = kofi.classNames({
        "has-d-flex has-flex-column has-s-full": true,
        "has-p-6 has-radius has-s-full": true,
        "has-bg-coolgray-700": true,
        "has-overflow-hidden": true,
        // "CodeCake": true,
        // "CodeCake-dark has-bg-coolgray-700": true,
        // "CodeCake-light has-bg-white": true,
    });
    // const actionsPanelClass = kofi.classNames({
    //     "has-d-flex has-p-6 has-radius has-w-full has-minh-12 has-mb-4": true,
    //     "has-bg-white": true,
    // });
    const previewPanelClass = kofi.classNames({
        "has-d-flex has-flex-column": true,
        "has-p-0 has-radius has-s-full": true,
        "has-bg-white": true,
    });
    // Render app component
    return (
        <div className={parentClass}>
            <div className={codePanelClass}>
                <div className="has-mb-4 has-d-flex has-items-center">
                    <button
                        className="button has-d-flex has-items-center has-bg-white has-text-coolgray-800"
                        onClick={handleRunClick}
                    >
                        <i className="icon-play has-text-lg has-pr-1" />
                        <strong>Run</strong>
                    </button>
                    <div className="has-ml-auto">
                        <ActionButton icon="link" text="Share" onClick={handleShareClick} />
                    </div>
                </div>
                <Editor visible={tab === "html"} ref={htmlRef} />
            </div>
            <div className="has-h-full has-w-4 has-minw-8" />
            <div className={previewPanelClass}>
                <iframe
                    ref={previewRef}
                    onLoad={handlePreviewLoad}
                    style={defaultPreviewStyle}
                    sandbox="allow-scripts allow-same-origin"
                    scrolling="no"
                    src="/playground.html"
                />
            </div>
            {/* Share modal */}
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
                        <button
                            className="button has-w-full has-d-flex has-items-center has-justify-center"
                            onClick={() => handleCopyClick()}
                        >
                            <i className="icon-copy has-pr-1 has-text-lg" />
                            <strong>{shareUrlCopied ? "Copied!" : "Copy to clipboard"}</strong>
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

// Mount app
kofi.ready(() => {
    ReactDOM.render(<App />, document.getElementById("root"));
});
