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

// Tab wrapper component
const Tab = props => {
    const tabClass = kofi.classNames({
        "navlink has-text-center": true,
        "has-bg-blue-500 has-text-white hover:has-text-white": props.active,
    });
    return (
        <div className={tabClass} onClick={props.onClick}>{props.text}</div>
    );
};

// Editor wrapper component
const Editor = React.forwardRef((props, ref) => {
    const editorClass = kofi.classNames({
        "CodeCake has-p-6 has-s-full has-overflow-hidden has-radius": true,
        "CodeCake-dark has-bg-coolgray-700": props.theme === "dark"
    });
    return (
        <div className={props.visible ? "has-d-block has-s-full" : "has-d-none"}>
            <div className={editorClass} ref={ref} />
        </div>
    );
});

// Playground app
const App = () => {
    const htmlRef = React.useRef();
    const configRef = React.useRef();
    const previewRef = React.useRef();
    const [theme, setTheme] = React.useState("dark");
    const [tab, setTab] = React.useState("html");
    const [shareUrl, setShareUrl] = React.useState("");
    const [shareUrlCopied, setShareUrlCopied] = React.useState(false);
    const htmlEditor = useEditor(htmlRef, "html");
    // const configEditor = useEditor(configRef, "javascript")
    const sandbox = useSandbox();
    React.useEffect(() => {
        sandbox.current.init().then(() => {
            htmlEditor.current.setCode(sandbox.current.content.html);
            // configEditor.current.setCode(sandbox.current.content.config);
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
    const rootClass = kofi.classNames({
        "has-d-flex has-flex-column has-w-full has-h-screen has-p-4": true,
        "has-bg-coolgray-800 has-text-white": theme === "dark",
    });
    const parentClass = kofi.classNames({
        "has-d-flex has-flex-row has-items-stretch has-flex-grow": true,
        "has-w-full has-h-screen": true,
        "has-py-3": true,
    });
    const codePanelClass = kofi.classNames({
        "has-d-flex has-flex-column has-s-full": true,
        "has-p-6 has-radius has-s-full": true,
        "has-bg-coolgray-700": true,
        "has-overflow-hidden": true,
    });
    const previewPanelClass = kofi.classNames({
        "has-d-flex has-flex-column": true,
        "has-p-2 has-radius has-s-full": true,
        "has-bg-white": true,
    });
    // Render app component
    return (
        <div className={rootClass}>
            <div className="has-d-flex has-py-4">
                {/* Logotype */}
                <div className="has-d-flex has-text-white has-text-xl has-mr-auto">
                    <i className="icon-siimple has-text-2xl has-mr-2" />
                    <strong>Playground</strong>
                </div>
                <div className=" has-d-flex"></div>
            </div>
            <div className={parentClass}>
                <div className="has-d-flex has-flex-column has-s-full">
                    <div className="has-mb-4">
                        <div className="has-d-flex has-radius has-bg-coolgray-700 has-p-4">
                            <Tab text="HTML" active={tab === "html"} onClick={() => setTab("html")} />
                            <Tab text="Config" active={tab === "config"} onClick={() => setTab("config")} />
                        </div>
                    </div>
                    <Editor theme={theme} visible={tab === "html"} ref={htmlRef} />
                </div>
            <div className="has-h-full has-w-4 has-minw-8" />
            <div className="has-s-full has-p-2 has-radius has-bg-white">
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
            <div className="has-d-flex has-text-xs has-pt-2 has-opacity-80">
                <div className="has-mr-auto">
                    Made with <i className="icon-heart" /> and <i className="icon-coffee" /> using <b>siimple</b>.
                </div>
                <div className="">
                    Version <b>{process.env.VERSION}</b>
                </div>
            </div>
        </div>

    );
};

// Mount app
kofi.ready(() => {
    ReactDOM.render(<App />, document.getElementById("root"));
});
