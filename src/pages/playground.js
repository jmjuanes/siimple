import React from "react";
import kofi from "kofi";
import {navigate} from "gatsby";

import Layout from "../layouts/application.js";
import {Preview, updatePreview} from "../components/Preview.js";
import {useEditor} from "../hooks/useEditor.js";
import {useSandbox} from "../hooks/useSandbox.js";

// Export playground application wrapper
export default props => {
    const buttons = []; // Header buttons list
    const codeRef = React.useRef();
    const previewRef = React.useRef();
    const fileRef = React.useRef();
    const [shareUrl, setShareUrl] = React.useState("");
    const editor = useEditor(codeRef, {});
    const sandbox = useSandbox();
    // const [theme, setTheme] = React.useState(props.defaultTheme || "light");
    // Run after app is rendered for the first time
    React.useEffect(() => {
        sandbox.current.init().then(() => {
            editor.current.setCode(sandbox.current.content.html);
            updatePreview(previewRef, sandbox.current.content);
        });
    }, []);
    // Handle preview frame loaded --> render sandbox content
    const handlePreviewLoad = () => {
        if (sandbox.current?.content) {
            updatePreview(previewRef, sandbox.current.content);
        }
    };
    // Handle share click --ª generate share url
    const handleShareClick = () => {
        return sandbox.current.share().then(url => {
            return setShareUrl(url);
        });
    };
    // Handle action button click --> run sandbox
    const handleRunClick = () => {
        sandbox.current.update({
            html: editor.current.getCode() || "",
        });
        return updatePreview(previewRef, sandbox.current.content);
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
    buttons.push({
        text: "Docs",
        icon: "book",
        onClick: () => navigate("/installation"),
    });
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
        <Layout buttons={buttons} title="Playground">
            <div className="has-d-flex has-flex-row has-items-stretch has-flex-grow has-w-full">
                <div ref={codeRef} className={codeClass} />
                <div className="has-h-full has-w-4" />
                <div className={resultClass}>
                    <Preview ref={previewRef} onLoad={handlePreviewLoad} />
                </div>
            </div>
            {/* Load file input */}
            <input type="file" ref={fileRef} hidden onChange={handlePreviewLoad} />
            {/* Share sandbox modal */}
            {!!shareUrl ? (
                <div className="scrim">
                    <div className="modal is-medium">
                        <div className="title is-3">Share</div>
                        <div className="paragraph">
                            You can use the following URL for sharing your code:
                        </div>
                        <div className="has-mb-6">
                            <textarea className="textarea" readOnly defaultValue={shareUrl} />
                        </div>
                        <div className="btn is-full" onClick={() => setShareUrl("")}>
                            <strong>Close</strong>
                        </div>
                    </div>
                </div>
            ) : null}
        </Layout>
    );
};
