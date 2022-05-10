import React from "react";
import ReactDOM from "react-dom";
import kofi from "kofi";

import {ActionButton, DarkThemeButton, LayoutSwitch, Brand} from "./components.js";
import {FileTab, Editor, Preview, ShareModal, VersionDropdown} from "./components.js";
import {loadPlayground, savePlayground, sharePlayground} from "./actions.js";
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
    const [error, setError] = React.useState("");
    const [theme, setTheme] = React.useState(() => localStorage.getItem("siimple:playground:theme") || "light");
    const [layout, setLayout] = React.useState(() => localStorage.getItem("siimple:playground:layout") || "both");

    const htmlEditor = useEditor(htmlRef, "html");
    const configEditor = useEditor(configRef, "js")
    const playground = usePlayground();

    // Terrible hack to prevent compiling in code-only mode
    layoutRef.current = layout;

    // Request CSS compile
    const requestCompile = React.useMemo(() => {
        return kofi.debounce(1000, () => {
            setError("");
            playground.current.html = htmlEditor.current.getCode();
            playground.current.config = configEditor.current.getCode();
            savePlayground(playground.current);

            compile(worker.current, playground.current.config).then(data => {
                if (data.error) {
                    return setError(data.error.message || data.error);
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
        savePlayground(playground.current);
        setTab(newTab);
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
            setShareUrl(url);
        });
    };

    const rootClass = kofi.classNames({
        "is-flex has-direction-column-mobile has-w-screen has-h-screen": true,
        "has-bg-gray-800 has-text-white": theme === "dark",
        "has-bg-gray-100": theme === "light",
    });
    const menuPanelClass = kofi.classNames({
        "is-flex has-direction-column-tablet has-justify-between has-py-4 has-px-6": true,
        "has-order-last-mobile has-w-full-mobile": true,
        "has-text-white has-bg-gray-800": theme === "dark",
        "has-bg-white": theme === "light",
    });
    const editorPanelClass = kofi.classNames({
        "has-direction-column has-s-full has-p-6 has-minw-0 has-minh-0": true,
        "is-hidden": layout === "preview",
        "is-flex": layout === "code" || layout === "both",
        "has-bg-gray-700": theme === "dark",
        "has-bg-gray-100": theme === "light",
    });
    const previewPanelClass = kofi.classNames({
        "has-s-full has-minw-0 has-minh-0 has-p-0 has-bg-white": true,
        "is-flex has-direction-column": layout !== "code",
        "is-hidden": layout === "code",
    });

    // Render app component
    return (
        <div className={rootClass}>
            <div className={menuPanelClass}>
                <div className="is-flex">
                    <Brand theme={theme} url={process.env.HOMEPAGE_URL} />
                </div>
                <LayoutSwitch theme={theme} layout={layout} onChange={handleLayoutChange} />
                <div className="is-flex has-direction-column-tablet">
                    <DarkThemeButton theme={theme} onClick={handleThemeToggle} />
                </div>
            </div>
                <div className={editorPanelClass}>
                    <div className="is-flex has-mb-8">
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
                        <div className="has-ml-auto is-flex has-items-center is-hidden-mobile">
                            <VersionDropdown theme={theme} />
                            <ActionButton theme={theme} icon="share" onClick={handleShareClick} />
                        </div>
                    </div>
                    <Editor theme={theme} visible={tab === "html"} ref={htmlRef} />
                    <Editor theme={theme} visible={tab === "config"} ref={configRef} />
                    <div className="is-flex has-size-0 has-pt-4 has-opacity-75 is-hidden-mobile">
                        <div className="has-mr-auto">
                            Made with <i className="icon-heart" /> and <i className="icon-coffee" /> using <b>siimple</b>.
                        </div>
                        <div className="">
                            Playground <b>v{process.env.VERSION}</b>
                        </div>
                    </div>
                </div>
                <div className={previewPanelClass}>
                    {kofi.when(!!error, () => (
                        <div className="alert has-bg-red-500 has-radius-none">
                            <i className="icon-exclamation has-size-4" />
                            <div className="has-pl-4">
                                <div className="title is-5 has-text-white">Error in siimple.config.js</div>
                                <div className="has-weight-normal">{error}</div>
                            </div>
                        </div>
                    ))}
                    <Preview ref={previewRef} onLoad={handlePreviewLoad} />
                </div>
                {/* Share modal */}
                {kofi.when(!!shareUrl, () => (
                    <ShareModal url={shareUrl} theme={theme} onClose={() => setShareUrl("")} />
                ))}
        </div>
    );
};

// Mount app
kofi.ready(() => {
    ReactDOM.render(<App />, document.getElementById("root"));
});
