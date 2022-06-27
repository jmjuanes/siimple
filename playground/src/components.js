import React from "react";
import kofi from "kofi";

// Brand component wrapper
export const Brand = props => {
    const parentClass = kofi.classNames({
        "is-not-underlined": true,
        "has-text-gray-800": props.theme === "light",
        "has-text-white": props.theme === "dark",
    });
    return (
        <a className={parentClass} href={props.url} target="_blank">
            <i className="si-siimple has-size-6" />
        </a>
    );
};

// Version dropdown component
export const VersionDropdown = props => {
    const [expanded, setExpanded] = React.useState(false);
    const currentVersion = process.env.VERSION;
    const parentClass = kofi.classNames({
        "has-py-3 has-px-4 is-flex has-items-center has-radius-md is-clickable": true,
        "has-bg-gray-200 has-bg-gray-300-hover": props.theme === "light",
        "has-bg-gray-600 has-bg-gray-800-hover has-text-white": props.theme === "dark",
    });
    const dropdownClass = kofi.classNames({
        "is-absolute has-right-none has-p-4 has-mt-1 has-radius-md has-w-64": true,
        "has-bg-gray-200": props.theme === "light",
        "has-bg-gray-600": props.theme === "dark",
    });
    return (
        <div className="is-relative">
            <div className={parentClass} onClick={() => setExpanded(!expanded)}>
                <b>{currentVersion}</b>
                <i className="si-chevron-down has-ml-2" />
            </div>
            {kofi.when(expanded, () => (
                <div className={dropdownClass} style={{top:"48px"}}>
                    {[currentVersion].map(version => {
                        const itemClass = kofi.classNames({
                            "has-py-3 has-px-4 has-radius-md is-clickable has-text-center": true,
                            "has-bg-blue-500 has-text-white": true,
                        });
                        return (
                            <div className={itemClass}>
                                <b>{version}</b>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

// Action button wrapper
export const ActionButton = props => {
    const buttonClass = kofi.classNames({
        "is-clickable has-text-center has-p-2 has-ml-2 has-radius-md": true,
        "has-bg-gray-600 has-bg-gray-800-hover has-text-gray-300 has-text-blue-500-hover": props.theme === "dark",
        "has-bg-gray-200 has-bg-gray-300-hover has-text-gray-500 has-text-blue-500-hover": props.theme === "light",
    });
    return (
        <div className={buttonClass} onClick={props.onClick}>
            <i className={`si-${props.icon} has-size-4`} />
        </div>
    );
};

export const DarkThemeButton = props => {
    const buttonClass = kofi.classNames({
        "is-clickable has-radius-md has-py-2 has-px-2": true,
        "has-bg-gray-100-hover has-text-blue-500-hover": props.theme === "light",
        "has-bg-blue-500 has-text-white": props.theme === "dark",
    });
    return (
        <div className={buttonClass} onClick={props.onClick}>
            <i className="si-moon has-size-4" />
        </div>
    );
};

// File Tab wrapper component
export const FileTab = props => {
    const tabClass = kofi.classNames({
        "navlink has-text-center has-w-auto has-mr-2 has-px-4": true,
        "is-flex has-items-center": true,
        "has-text-blue-400-hover": !props.active && props.theme === "dark",
        "has-bg-blue-500 has-text-white has-text-white-hover": props.active,
    });
    return (
        <div className={tabClass} onClick={props.onClick}>
            <i className={`si-${props.icon} has-pr-2 has-size-2`} />
            <b>{props.text}</b>
        </div>
    );
};

// Editor wrapper component
export const Editor = React.forwardRef((props, ref) => {
    const editorClass = kofi.classNames({
        "CodeCake has-s-full has-p-0 is-clipped": true,
        "CodeCake-dark has-bg-gray-700": props.theme === "dark",
        "CodeCake-light has-bg-gray-100": props.theme === "light",
    });
    return (
        <div className={props.visible ? "has-h-full is-clipped" : "is-hidden"}>
            <div className={editorClass} ref={ref} />
        </div>
    );
});

// Preview wrapper component
export const Preview = React.forwardRef((props, ref) => {
    const previewClass = kofi.classNames({
        // "is-hidden": !props.visible,
        "has-bg-white": true,
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
        scrolling: "yes",
        src: "/playground.html",
        onLoad: props.onLoad,
    });
});

// Layout Switch
export const LayoutSwitch = props => {
    const layoutIcons = {
        "code": "square-fill",
        "both": "square-half",
        "preview": "square",
    };
    const parentClass = kofi.classNames({
        "is-flex has-direction-column-tablet has-radius-md": true,
        "has-bg-gray-100": props.theme === "light",
        "has-bg-gray-700": props.theme === "dark",
    });
    return (
        <div className={parentClass}>
            {Object.keys(layoutIcons).map(key => {
                const iconClass = kofi.classNames({
                    "has-m-1 has-size-5 has-radius-md is-clickable": true,
                    "has-text-gray-400 has-text-gray-500-hover": props.theme === "light" && key !== props.layout,
                    "has-text-gray-500 has-text-gray-400-hover": props.theme === "dark" && key !== props.layout,
                    "has-text-blue-500": key === props.layout && props.theme === "light",
                    "has-text-blue-400": key === props.layout && props.theme === "dark",
                });
                return (
                    <i
                        key={key}
                        className={`si-${layoutIcons[key]} ${iconClass}`}
                        onClick={() => props.onChange(key)}
                    />
                );
            })}
        </div>
    );
};

// Share modal
export const ShareModal = props => {
    const [copied, setCopied] = React.useState(false);
    const handleCopyClick = () => {
        navigator.clipboard.writeText(props.url).then(() => {
            setCopied(true);
        });
    };

    return (
        <div className="scrim">
            <div className="modal is-medium has-text-gray-700 has-mx-6-mobile">
                <div className="is-flex has-items-center has-mb-4">
                    <div className="title is-3 has-mb-0">Share</div>
                    <div className="close has-ml-auto" onClick={props.onClose} />
                </div>
                <div className="paragraph">
                    You can use the following URL for sharing your code:
                </div>
                <div className="has-mb-6">
                    <textarea
                        className="textarea has-size-0"
                        rows="5"
                        readOnly
                        defaultValue={props.url}
                    />
                </div>
                <button
                    className="button has-w-full is-flex has-items-center has-justify-center"
                    onClick={() => handleCopyClick()}
                >
                    <i className="si-copy has-pr-1 has-size-2" />
                    <strong>{copied ? "Copied!" : "Copy to clipboard"}</strong>
                </button>
            </div>
        </div>
    );
};
