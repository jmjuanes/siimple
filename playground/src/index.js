import React from "react";
import ReactDOM from "react-dom";
import kofi from "kofi";

import {ActionButton, DarkThemeButton, VersionDropdown} from "./components.js";
import {FileTab, RunButton, Editor, Preview} from "./components.js";
import {buildStyle} from "./actions.js";
import {loadPlayground, sharePlayground, updatePreview} from "./actions.js";
import {useEditor, usePlayground} from "./hooks.js";

// Playground app
const App = () => {
    const htmlRef = React.useRef();
    const configRef = React.useRef();
    const previewRef = React.useRef();

    const [loading, setLoading] = React.useState(true);
    const [tab, setTab] = React.useState("html");
    const [shareUrl, setShareUrl] = React.useState("");
    const [shareUrlCopied, setShareUrlCopied] = React.useState(false);
    const [theme, setTheme] = React.useState(() => {
        return localStorage.getItem("siimple:playground:theme") || "light";
    });

    const htmlEditor = useEditor(htmlRef, "html");
    const configEditor = useEditor(configRef, "js")
    const playground = usePlayground();

    // Handle theme toggle
    const handleThemeToggle = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        localStorage.setItem("siimple:playground:theme", newTheme);
        setTheme(newTheme);
    };

    // Handle preview loaded --> initialize sandbox
    const handlePreviewLoad = () => {
        loadPlayground(playground.current).then(() => {
            htmlEditor.current.setCode(playground.current.html);
            configEditor.current.setCode(playground.current.config);

            // Build styles using current configuration
            buildStyle(playground.current.config).then(css => {
                updatePreview(previewRef.current, playground.current.html, css);
                setLoading(false);
            });
        });
    };

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
        if (loading) {
            return null; // Prevent loading twice...
        }
        if (tab === "html" || playground.current.hasHtmlChanges) {
            playground.current.html = htmlEditor.current.getCode();
            playground.current.hasHtmlChanges = false;
            updatePreview(previewRef.current, playground.current.html, null);
        }
        if (tab === "config" || playground.current.hasConfigChanges) {
            playground.current.config = configEditor.current.getCode();
            playground.current.hasConfigChanges = false;
            setLoading(true);
            buildStyle(playground.current.config).then(css => {
                updatePreview(previewRef.current, null, css);
                setLoading(false);
            });
        }
    };
    
    // Handle share click --> generate share url
    const handleShareClick = () => {
        playground.current.html = htmlEditor.current.getCode();
        playground.current.config = configEditor.current.getCode();
        sharePlayground(playground.current).then(url => {
            setShareUrlCopied(false);
            setShareUrl(url);
        });
    };

    // Handle copy click --> Copy url to clipboard
    const handleCopyClick = () => {
        navigator.clipboard.writeText(shareUrl).then(() => {
            setShareUrlCopied(true);
        });
    };

    const rootClass = kofi.classNames({
        "has-d-flex has-flex-row has-w-full has-h-screen": true,
        "has-bg-coolgray-800 has-text-white": theme === "dark",
        "has-bg-coolgray-100": theme === "light",
    });
    const parentClass = kofi.classNames({
        "has-d-flex has-flex-row has-items-stretch has-flex-grow": true,
        "has-w-full has-h-full has-overflow-hidden": true,
        "has-py-3": true,
    });
    const menuPanelClass = kofi.classNames({
        "has-d-flex has-flex-column has-justify-between has-py-4 has-px-6": true,
        "has-text-white has-bg-coolgray-800": theme === "dark",
        "has-bg-white": theme === "light",
    });
    const editorPanelClass = kofi.classNames({
        "has-d-flex has-flex-column has-s-full has-p-6": true,
        "has-bg-coolgray-700": theme === "dark",
        "has-bg-coolgray-100": theme === "light",
    });
    // Render app component
    return (
        <div className={rootClass}>
            <div className={menuPanelClass}>
                <i className="icon-siimple has-text-4xl" />
                <div className="has-d-flex has-flex-column">
                    <ActionButton theme={theme} icon="share" onClick={handleShareClick} />
                </div>
                <div className="has-d-flex has-flex-column">
                    <DarkThemeButton theme={theme} onClick={handleThemeToggle} />
                </div>
            </div>
                <div className={editorPanelClass} style={{maxWidth:"50vw"}}>
                    <div className="has-d-flex has-mb-8">
                        <FileTab
                            theme={theme}
                            text="index.html"
                            icon="file"
                            active={tab === "html"}
                            onClick={() => handleTabChange("html")}
                        />
                        <FileTab
                            theme={theme}
                            text="siimple.config.js"
                            icon="gear"
                            active={tab === "config"}
                            onClick={() => handleTabChange("config")}
                        />
                        <div className="has-ml-auto has-d-flex has-items-center">
                            <VersionDropdown theme={theme} />
                            <RunButton loading={loading} onClick={handleRunClick} />
                        </div>
                    </div>
                    <Editor theme={theme} visible={tab === "html"} ref={htmlRef} />
                    <Editor theme={theme} visible={tab === "config"} ref={configRef} />
                </div>
                <div className="has-s-full">
                    <Preview ref={previewRef} onLoad={handlePreviewLoad} />
                </div>
                {/* Share modal */}
                {kofi.when(!!shareUrl, () => (
                    <div className="scrim">
                        <div className="modal is-medium has-text-coolgray-700">
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
            {/*
            <div className="has-d-flex has-text-xs has-pt-2 has-opacity-80">
                <div className="has-mr-auto">
                    Made with <i className="icon-heart" /> and <i className="icon-coffee" /> using <b>siimple</b>.
                </div>
                <div className="">
                    Playground Version <b>{process.env.VERSION}</b>
                </div>
            </div>
            */}
        </div>
    );
};

// Mount app
kofi.ready(() => {
    ReactDOM.render(<App />, document.getElementById("root"));
});
