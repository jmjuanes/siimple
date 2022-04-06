import React from "react";
import ReactDOM from "react-dom";
import kofi from "kofi";

import {ActionButton, DarkThemeButton, LayoutSwitch} from "./components.js";
import {FileTab, Editor, Preview} from "./components.js";
import {loadPlayground, sharePlayground} from "./actions.js";
import {compile, inject} from "./actions.js";
import {useEditor, usePlayground} from "./hooks.js";

// Playground app
const App = () => {
    const worker = React.useRef();
    const htmlRef = React.useRef();
    const configRef = React.useRef();
    const previewRef = React.useRef();
    const layoutRef = React.useRef();

    const [ready, setReady] = React.useState(false);
    const [tab, setTab] = React.useState("html");
    const [shareUrl, setShareUrl] = React.useState("");
    const [shareUrlCopied, setShareUrlCopied] = React.useState(false);
    const [theme, setTheme] = React.useState(() => localStorage.getItem("siimple:playground:theme") || "light");
    const [layout, setLayout] = React.useState(() => localStorage.getItem("siimple:playground:layout") || "both");

    const htmlEditor = useEditor(htmlRef, "html");
    const configEditor = useEditor(configRef, "js")
    const playground = usePlayground();

    // Terrible hack to prevent compiling in code-only mode
    layoutRef.current = layout;

    // Request CSS compile
    const requestCompile = React.useMemo(() => {
        return kofi.debounce(500, () => {
            playground.current.html = htmlEditor.current.getCode();
            playground.current.config = configEditor.current.getCode();

            compile(worker.current, playground.current.config).then(data => {
                if (data.error) {
                    return console.error(data.error);
                }
                // Inject html and css in current preview
                inject(previewRef.current, playground.current.html, data.css);
            });
        });
    }, []);

    // Initialize plugins and worker
    React.useEffect(() => {
        htmlEditor.current.addPlugin(() => layoutRef.current !== "code" && requestCompile());
        configEditor.current.addPlugin(() => layoutRef.current !== "code" && requestCompile());
        worker.current = new Worker(new URL('./worker.js', import.meta.url));
        return () => {
            worker.current.terminate();
        };
    }, []);

    React.useEffect(() => {
        if (ready && layout !== "code") {
            requestCompile();
        }
    }, [ready, layout]);

    // Handle layout change
    const handleLayoutChange = newLayout => {
        localStorage.setItem("siimple:playground:layout", newLayout);
        setLayout(newLayout);
    };

    // Handle theme toggle
    const handleThemeToggle = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        localStorage.setItem("siimple:playground:theme", newTheme);
        setTheme(newTheme);
    };

    // Handle tab change
    const handleTabChange = newTab => {
        if (newTab === "config") {
            playground.current.html = htmlEditor.current.getCode();
        }
        if (newTab === "html") {
            playground.current.config = configEditor.current.getCode();
        }
        return setTab(newTab);
    };

    // Handle preview loaded
    const handlePreviewLoad = () => {
        loadPlayground(playground.current).then(() => {
            htmlEditor.current.setCode(playground.current.html);
            configEditor.current.setCode(playground.current.config);

            // requestCompile();
            setReady(true);
        });
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
        "has-d-flex mobile:has-flex-column has-w-screen has-h-screen": true,
        "has-bg-coolgray-800 has-text-white": theme === "dark",
        "has-bg-coolgray-100": theme === "light",
    });
    const menuPanelClass = kofi.classNames({
        "has-d-flex tablet:has-flex-column has-justify-between has-py-4 has-px-6": true,
        "mobile:has-order-last mobile:has-w-full": true,
        "has-text-white has-bg-coolgray-800": theme === "dark",
        "has-bg-white": theme === "light",
    });
    const editorPanelClass = kofi.classNames({
        "has-flex-column has-s-full has-p-6 has-minw-0 has-minh-0": true,
        "has-d-none": layout === "preview",
        "has-d-flex": layout === "code" || layout === "both",
        "has-bg-coolgray-700": theme === "dark",
        "has-bg-coolgray-100": theme === "light",
    });
    const previewPanelClass = kofi.classNames({
        "has-s-full has-minw-0 has-minh-0 has-p-0": true,
        "has-d-none": layout === "code",
    });
    // Render app component
    return (
        <div className={rootClass}>
            <div className={menuPanelClass}>
                <div className="has-d-flex">
                    <i className="icon-siimple has-text-4xl" />
                </div>
                <LayoutSwitch theme={theme} layout={layout} onChange={handleLayoutChange} />
                <div className="has-d-flex tablet:has-flex-column">
                    <DarkThemeButton theme={theme} onClick={handleThemeToggle} />
                </div>
            </div>
                <div className={editorPanelClass}>
                    <div className="has-d-flex has-mb-8">
                        <FileTab
                            theme={theme}
                            text="index.html"
                            icon="code"
                            active={tab === "html"}
                            onClick={() => handleTabChange("html")}
                        />
                        <FileTab
                            theme={theme}
                            text="siimple.config.js"
                            icon="siimple"
                            active={tab === "config"}
                            onClick={() => handleTabChange("config")}
                        />
                        <div className="has-ml-auto has-d-flex has-items-center mobile:has-d-none">
                            <ActionButton theme={theme} icon="share" onClick={handleShareClick} />
                        </div>
                    </div>
                    <Editor theme={theme} visible={tab === "html"} ref={htmlRef} />
                    <Editor theme={theme} visible={tab === "config"} ref={configRef} />
                </div>
                <div className={previewPanelClass}>
                    <Preview ref={previewRef} onLoad={handlePreviewLoad} />
                </div>
                {/* Share modal */}
                {kofi.when(!!shareUrl, () => (
                    <div className="scrim">
                        <div className="modal is-medium has-text-coolgray-700 mobile:has-mx-6">
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
