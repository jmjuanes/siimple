import React from "react";
import ReactDOM from "react-dom";
import kofi from "kofi";

import {buildStyle} from "./actions.js";
import {loadPlayground, updatePreview} from "./actions.js";
import {useEditor, usePlayground} from "./hooks.js";
// import {copyTextToClipboard} from "../utils/clipboard.js";

// Brand component wrapper
const Brand = props => {
    const brandClass = kofi.classNames({
        "has-d-flex has-mr-auto": true,
        "has-text-white": props.theme === "dark",
    });
    return (
        <div className={brandClass}>
            <i className="icon-siimple has-text-2xl has-mr-2" />
            <b className="has-text-xl">Playground</b>
        </div>
    );
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
        "CodeCake-dark has-bg-coolgray-700": props.theme === "dark",
        "CodeCake-light has-bg-white": props.theme === "light",
    });
    return (
        <div className={props.visible ? "has-h-full has-overflow-hidden" : "has-d-none"}>
            <div className={editorClass} style={{maxWidth: "50vw"}} ref={ref} />
        </div>
    );
});

// Preview wrapper component
const Preview = React.forwardRef((props, ref) => {
    const previewClass = kofi.classNames({
        "has-d-none": !props.visible,
        "has-p-8 has-radius has-bg-white": true,
    });
    return React.createElement("iframe", {
        ref: ref,
        className: previewClass,
        style: {
            width: "100%",
            height: "100%",
            border: "0",
            backgroundColor: "#ffffff",
        },
        sandbox: "allow-scripts allow-same-origin",
        scrolling: "no",
        src: "/playground.html",
        onLoad: props.onLoad,
    });
});

// Loading wrapper
const PreviewLoader = () => (
    <div className="has-s-full has-bg-coolgray-700 has-p-6 has-radius has-d-flex has-flex-column has-justify-center has-items-center">
        <div className="spinner has-text-white" />
        <div className="has-text-white has-text-sm has-mt-2">
            Building <b>siimple</b>, wait a second...
        </div>
    </div>
);

// Playground app
const App = () => {
    const htmlRef = React.useRef();
    const configRef = React.useRef();
    const previewRef = React.useRef();

    const [theme, setTheme] = React.useState("light");
    const [tab, setTab] = React.useState("html");
    const [shareUrl, setShareUrl] = React.useState("");
    const [shareUrlCopied, setShareUrlCopied] = React.useState(false);
    const [previewVisible, setPreviewVisible] = React.useState(false);

    const htmlEditor = useEditor(htmlRef, "html");
    const configEditor = useEditor(configRef, "js")
    const playground = usePlayground();

    // Handle preview loaded --> initialize sandbox
    const handlePreviewLoad = () => {
        loadPlayground(playground.current).then(() => {
            htmlEditor.current.setCode(playground.current.html);
            configEditor.current.setCode(playground.current.config);
            updatePreview(previewRef.current, playground.current.html, null);

            // Build styles using current configuration
            buildStyle(playground.current.config).then(css => {
                updatePreview(previewRef.current, null, css);
                setPreviewVisible(true);
            });
        });
    };

    // Handle version change
    // const handleVersionChange = newVersion => {
    //     playground.current.version = newVersion;
    //     playground.current.hasConfigChanges = true; // Force to update config
    //     return handleRunClick();
    // };

    // Handle tab change
    const handleTabChange = newTab => {
        if (newTab === "config") {
            const newHtml = htmlEditor.current.getCode();
            playground.current.hasHtmlChanges = newHtml !== playground.current.html;
            playground.current.html = newHtml;
        }
        if (newTab === "html") {
            const newConfig = configEditor.current.getCode();
            playground.current.hasConfigChanges = newConfig !== playground.current.config;
            playground.current.config = newConfig;
        }
        return setTab(newTab);
    };

    // Handle run button click --> Update preview with the new content
    const handleRunClick = () => {
        if (tab === "html" || playground.current.hasHtmlChanges) {
            playground.current.html = htmlEditor.current.getCode();
            playground.current.hasHtmlChanges = false;
            updatePreview(previewRef.current, playground.current.html, null);
        }
        if (tab === "config" || playground.current.hasConfigChanges) {
            playground.current.config = configEditor.current.getCode();
            playground.current.hasConfigChanges = false;
            setPreviewVisible(false); // Hide preview
            buildStyle(playground.current.config).then(css => {
                updatePreview(previewRef.current, null, css);
                setPreviewVisible(true);
            });
        }
    };
    // Handle share click --> generate share url
    // const handleShareClick = () => {
    //     return sandbox.current.share().then(url => {
    //         setShareUrlCopied(false);
    //         setShareUrl(url);
    //     });
    // };
    // // Handle action button click --> run sandbox
    // const handleRunClick = () => {
    //     sandbox.current.update({
    //         html: codeEditor.current.getCode() || "",
    //     });
    //     updatePreview(previewRef, sandbox.current.content);
    // };
    // // Handle copy click --> Copy sandbox url to clipboard
    // const handleCopyClick = () => {
    //     // copyTextToClipboard(shareUrl).then(() => setShareUrlCopied(true));
    // };
    const rootClass = kofi.classNames({
        "has-d-flex has-flex-column has-w-full has-h-screen has-p-4": true,
        "has-bg-coolgray-800 has-text-white": theme === "dark",
        "has-bg-coolgray-100": theme === "light",
    });
    const parentClass = kofi.classNames({
        "has-d-flex has-flex-row has-items-stretch has-flex-grow": true,
        "has-w-full has-h-full has-overflow-hidden": true,
        "has-py-3": true,
    });
    // Render app component
    return (
        <div className={rootClass}>
            <div className="has-d-flex has-py-4">
                <Brand theme={theme} />
                <div className="has-d-flex"></div>
            </div>
            <div className={parentClass}>
                <div className="has-d-flex has-flex-column has-s-full has-position-relative">
                    <div className="has-d-flex has-radius has-bg-coolgray-700 has-p-4 has-w-full has-mb-4">
                        <Tab theme={theme} text="HTML" active={tab === "html"} onClick={() => handleTabChange("html")} />
                        <Tab theme={theme} text="Configuration" active={tab === "config"} onClick={() => handleTabChange("config")} />
                    </div>
                    <Editor theme={theme} visible={tab === "html"} ref={htmlRef} />
                    <Editor theme={theme} visible={tab === "config"} ref={configRef} />
                    <div className="has-position-absolute has-bottom-none has-right-none has-mr-8 has-mb-8 has-p-2">
                        <div className="button hover:has-bg-blue-600 has-d-flex has-items-center" onClick={handleRunClick}>
                            <i className="icon-play has-text-lg has-mr-1" />
                            <strong>Run</strong>
                        </div>
                    </div>
                </div>
                <div className="has-h-full has-w-4 has-minw-8" />
                <div className="has-s-full has-radius">
                    {kofi.when(!previewVisible, () => (
                        <PreviewLoader theme={theme} />
                    ))}
                    <Preview
                        ref={previewRef}
                        visible={previewVisible}
                        onLoad={handlePreviewLoad}
                    />
                </div>
                {/* Share modal */}
                {kofi.when(!!shareUrl, () => (
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
                ))}
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
