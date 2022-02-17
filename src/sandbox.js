import React from "react";
import ReactDOM from "react-dom";
import kofi from "kofi";

import Layout from "./layouts/application.js";
import {useEditor} from "./hooks/useEditor.js";
import {useSandbox} from "./hooks/useSandbox.js";
import {copyTextToClipboard} from "./utils/clipboard.js";

// Export playground application wrapper
const SandboxApp = props => {
    const buttons = []; // Header buttons list
    const codeRef = React.useRef();
    const previewRef = React.useRef();
    // const fileRef = React.useRef();
    const [shareUrl, setShareUrl] = React.useState("");
    const [shareUrlCopied, setShareUrlCopied] = React.useState(false);
    const editor = useEditor(codeRef, {});
    const sandbox = useSandbox();
    // const [theme, setTheme] = React.useState(props.defaultTheme || "light");
    // Run after app is rendered for the first time
    const initSandbox = () => {
        sandbox.init().then(() => {
            editor.current.setCode(sandbox.content.html);
        });
    };
    React.useEffect(() => initSandbox(), []);
    React.useEffect(() => sandbox.render(previewRef.current), [sandbox.key]);
    // Handle share click --> generate share url
    const handleShareClick = () => {
        return sandbox.share().then(url => {
            setShareUrlCopied(false);
            setShareUrl(url);
        });
    };
    // Handle action button click --> run sandbox
    const handleRunClick = () => {
        return sandbox.update({
            html: editor.current.getCode() || "",
        });
    };
    // Handle copy click --> Copy sandbox url to clipboard
    const handleCopyClick = () => {
        copyTextToClipboard(shareUrl).then(() => setShareUrlCopied(true));
    };
    // Run sandbox button
    buttons.push({
        text: "Run",
        icon: "play",
        onClick: handleRunClick,
    });
    // Share sandbox button
    buttons.push({
        text: "Share",
        icon: "link",
        onClick: handleShareClick,
    });
    // Navigate to documentation button
    // buttons.push({
    //     text: "Docs",
    //     icon: "book",
    //     // onClick: () => navigate("/installation"),
    // });
    const codeClass = kofi.classNames({
        "has-p-6 has-radius has-s-full": true,
        "has-overflow-hidden": true,
        "CodeCake": true,
        "CodeCake-light has-bg-white": true,
    });
    const resultClass = kofi.classNames({
        "has-p-6 has-radius has-s-full": true,
        "has-bg-white": true,
    });
    // Render app component
    return (
        <Layout buttons={buttons} title="Sandbox">
            <div className="has-d-flex has-flex-row has-items-stretch has-flex-grow has-w-full">
                <div ref={codeRef} className={codeClass} />
                <div className="has-h-full has-w-4" />
                <div className={resultClass}>
                    <iframe
                        ref={previewRef}
                        key={sandbox.key || 0}
                        style={{
                            width: "100%",
                            height: "100%",
                            border: "0",
                            backgroundColor: "#ffffff",
                        }}
                        sandbox="allow-scripts allow-same-origin"
                        scrolling="yes"
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
                        <div className="btn is-full" onClick={() => handleCopyClick()}>
                            <strong>{shareUrlCopied ? "Copied!" : "Copy to clipboard"}</strong>
                        </div>
                    </div>
                </div>
            ) : null}
        </Layout>
    );
};

ReactDOM.render(<SandboxApp />, document.getElementById("root"));
