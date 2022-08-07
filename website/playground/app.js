import React from "react";
import ReactDOM from "react-dom";
import kofi from "kofi";
import {classNames} from "@siimple/styled";

import {Brand} from "./components/Brand.js";
import {Button} from "./components/Button.js";
import {FileTab} from "./components/FileTab.js";
import {Editor} from "./components/Editor.js";
import {Preview} from "./components/Preview.js";
import {ShareModal} from "./components/ShareModal.js";

import {defaultHtml, defaultConfig} from "./defaults.js";
import {loadPlayground, savePlayground, sharePlayground} from "./actions/playground.js";
import {compile} from "./actions/worker.js";
import {useEditor} from "./hooks/useEditor.js";

// Update preview hanlder
const inject = (preview, html, css) => {
    const data = {
        source: "siimple-playground",
        html: html,
        css: css,
    };
    return preview.contentWindow.postMessage(data, "*");
};

// Playground app
const App = () => {
    const worker = React.useRef();
    const htmlRef = React.useRef();
    const configRef = React.useRef();
    const previewRef = React.useRef();

    // Playground data reference
    const playground = React.useRef({
        version: "latest",
        html: defaultHtml + "\n",
        config: defaultConfig + "\n",
    });

    const [ready, setReady] = React.useState(false);
    const [tab, setTab] = React.useState("html");
    const [shareUrl, setShareUrl] = React.useState("");
    const [error, setError] = React.useState("");
    const [theme, setTheme] = React.useState(() => localStorage.getItem("siimple:playground:theme") || "light");
    // const [layout, setLayout] = React.useState(() => localStorage.getItem("siimple:playground:layout") || "both");

    const htmlEditor = useEditor(htmlRef, "html");
    const configEditor = useEditor(configRef, "js")

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
        htmlEditor.current.addPlugin(() => requestCompile());
        configEditor.current.addPlugin(() => requestCompile());
        worker.current = new Worker(new URL('./worker.js', import.meta.url));

        return () => {
            worker.current.terminate();
        };
    }, []);

    React.useEffect(() => ready && requestCompile(), [ready]);

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

    const editorPanelClass = classNames({
        "is-flex has-direction-column has-w-full has-h-full has-p-6": true,
        "has-bg-dark has-text-white": theme === "dark",
        "has-bg-light": theme === "light",
    });
    const previewPanelClass = classNames({
        "has-w-full has-h-full has-p-none has-bg-white": true,
        "is-flex has-direction-column": true,
    });

    // Render app component
    return (
        <div className="is-flex has-direction-column-mobile has-w-screen has-h-screen">
            <div className={editorPanelClass} style={{minWidth:"0px",minHeight:"0px"}}>
                <div className="is-flex has-justify-between has-mb-8">
                    <div className="is-flex">
                        <Brand theme={theme} />
                    </div>
                    <div className="is-flex">
                        <FileTab
                            theme={theme}
                            text="HTML"
                            icon="code"
                            active={tab === "html"}
                            onClick={() => handleTabChange("html")}
                        />
                        <FileTab
                            theme={theme}
                            text="Config"
                            icon="mug"
                            active={tab === "config"}
                            onClick={() => handleTabChange("config")}
                        />
                    </div>
                    <div className="is-flex is-hidden-mobile">
                        <Button
                            theme={theme}
                            icon="send"
                            onClick={handleShareClick}
                            active={!!shareUrl}
                        />
                        <Button
                            theme={theme}
                            icon="moon"
                            onClick={handleThemeToggle}
                            active={theme === "dark"}
                        />
                    </div>
                </div>
                <Editor theme={theme} visible={tab === "html"} ref={htmlRef} />
                <Editor theme={theme} visible={tab === "config"} ref={configRef} />
                <div className="is-flex has-size-0 has-pt-4 is-semitransparent is-hidden-mobile">
                    <div className="has-mr-auto">
                        Made with <i className="si-heart" /> and <i className="si-coffee" /> using <b>siimple</b>.
                    </div>
                    <div className="">
                        Playground <b>v{process.env.VERSION}</b>
                    </div>
                </div>
            </div>
            <div className={previewPanelClass} style={{minWidth:"0px",minHeight:"0px"}}>
                {!!error && (
                    <div className="alert is-secondary is-radiusless">
                        <i className="si-exclamation-circle has-size-8" />
                        <div className="has-pl-4">
                            <div className="title is-5 has-text-white has-mb-1">Error in siimple.config.js</div>
                            <div className="has-weight-normal">{error}</div>
                        </div>
                    </div>
                )}
                <Preview ref={previewRef} onLoad={handlePreviewLoad} />
            </div>
            {/* Share modal */}
            {!!shareUrl && (
                <ShareModal url={shareUrl} theme={theme} onClose={() => setShareUrl("")} />
            )}
        </div>
    );
};

// Mount app
kofi.ready(() => {
    ReactDOM.render(<App />, document.getElementById("root"));
});
