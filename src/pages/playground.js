import React from "react";
import kofi from "kofi";

import Layout from "../layouts/application.js";
import {Preview, updatePreview} from "../components/Preview.js";
import {useEditor} from "../hooks/useEditor.js";
import {useSandbox} from "../hooks/useSandbox.js";

// Export playground application wrapper
export default props => {
    const codeRef = React.useRef();
    const previewRef = React.useRef();
    const fileRef = React.useRef();
    // const versionRef = React.useRef();
    const editor = useEditor(codeRef, {});
    const sandbox = useSandbox();
    // const [theme, setTheme] = React.useState(props.defaultTheme || "light");
    // Run after app is rendered for the first time
    React.useEffect(() => {
        sandbox.current.importFrom({}).then(() => {
            editor.current.setCode(sandbox.current.content.html);
            updatePreview(previewRef, sandbox.current.content);
        });
        // if (window.location.hash.length < 2) {
        //     return editor.current.setCode(sandbox.content.data);
        // }
        // const source = kofi.qs.decode(window.location.hash.slice(1));
        // importSandbox(source).then(content => {
        //     //setWelcomeVisible(false); //Hide welcome screen
        //     setSandbox(content); //Update sandbox
        //     return editor.current.setCode(content.data);
        // }).catch(error => {
        //     //Error importing pad content
        //     //TODO:displat error in console
        // });
    }, []);
    // Handle preview frame loaded --> render sandbox content
    const handlePreviewLoad = () => {
        if (sandbox.current?.content) {
            updatePreview(previewRef, sandbox.current.content);
        }
    };
    // Handle file change --> load the selected file
    const handleLoad = () => {
        const file = fileRef.current.files[0];
        if (typeof file === "undefined") {
            return null; // --> no file to load
        }
        // Read the file and import to the playground
        // return kofi.file.readAsJSON(file).then(content => {
        //     return playgroundRef.current.load(content);
        // });
    };
    // Handle save --> download pad content
    const handleSaveClick = () => {
        // return exportSandbox(getSandbox(), null);
    };
    // Handle load --> load sandbox from file
    const handleLoadClick = () => {
        // return fileRef.current.click();
    };
    // Handle run
    const handleRun = () => {
        sandbox.current.update({
            html: editor.current.getCode() || "",
        });
        return updatePreview(previewRef, sandbox.current.content);
    };
    const codeClass = kofi.classNames({
        "has-p-6 has-radius has-s-full": true,
        "has-overflow-hidden": true,
        "CodeCake": true,
        "CodeCake-light has-bg-white": true,
    });
    const resultClass = kofi.classNames({
        "has-d-flex has-flex-column": true,
        "has-s-full": true,
        // "has-p-6 has-radius has-s-full": true,
    });
    // Render app component
    return (
        <Layout>
            <div className="has-d-flex has-flex-row has-items-stretch has-flex-grow has-w-full">
                <div ref={codeRef} className={codeClass} />
                <div className="has-h-full has-w-4" />
                <div className={resultClass}>
                    <div className="has-bg-white has-radius has-p-6 has-mb-2 has-w-full">
                        <button className="siimple-btn has-d-flex has-items-center" onClick={handleRun}>
                            <div className="siimple-icon is-play has-mr-2" />
                            <div>Run</div>
                        </button>
                    </div>
                    <div className="has-bg-white has-radius has-s-full has-flex-grow has-p-6">
                        <Preview ref={previewRef} onLoad={handlePreviewLoad} />
                    </div>
                </div>
            </div>
            {/* Load file input */}
            <input type="file" ref={fileRef} hidden onChange={handleLoad} />
        </Layout>
    );
};
