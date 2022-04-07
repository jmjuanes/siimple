import React from "react";
import kofi from "kofi";

// Brand component wrapper
export const Brand = props => {
    const parentClass = kofi.classNames({
        "has-text-no-underline": true,
        "has-text-coolgray-800": props.theme === "light",
        "has-text-white": props.theme === "dark",
    });
    return (
        <a className={parentClass} href={props.url} target="_blank">
            <i className="icon-siimple has-text-4xl" />
        </a>
    );
};

// Version dropdown component
export const VersionDropdown = props => {
    const [expanded, setExpanded] = React.useState(false);
    const currentVersion = process.env.VERSION;
    const parentClass = kofi.classNames({
        "has-py-3 has-px-4 has-d-flex has-items-center has-radius has-cursor-pointer": true,
        "has-bg-coolgray-200 hover:has-bg-coolgray-300": props.theme === "light",
        "has-bg-coolgray-600 hover:has-bg-coolgray-800 has-text-white": props.theme === "dark",
    });
    const dropdownClass = kofi.classNames({
        "has-position-absolute has-right-none has-p-4 has-mt-1 has-radius has-w-64": true,
        "has-bg-coolgray-200": props.theme === "light",
        "has-bg-coolgray-600": props.theme === "dark",
    });
    return (
        <div className="has-position-relative">
            <div className={parentClass} onClick={() => setExpanded(!expanded)}>
                <b>{currentVersion}</b>
                <i className="icon-chevron-down has-ml-2" />
            </div>
            {kofi.when(expanded, () => (
                <div className={dropdownClass} style={{top:"48px"}}>
                    {[currentVersion].map(version => {
                        const itemClass = kofi.classNames({
                            "has-py-3 has-px-4 has-radius has-cursor-pointer has-text-center": true,
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
        "has-cursor-pointer has-text-center has-p-2 has-ml-2 has-radius": true,
        "has-bg-coolgray-600 hover:has-bg-coolgray-800 has-text-coolgray-300 hover:has-text-blue-500": props.theme === "dark",
        "has-bg-coolgray-200 hover:has-bg-coolgray-300 has-text-coolgray-500 hover:has-text-blue-500": props.theme === "light",
    });
    return (
        <div className={buttonClass} onClick={props.onClick}>
            <i className={`icon-${props.icon} has-text-2xl`} />
        </div>
    );
};

export const DarkThemeButton = props => {
    const buttonClass = kofi.classNames({
        "has-cursor-pointer has-radius has-py-2 has-px-2": true,
        "hover:has-bg-coolgray-100 hover:has-text-blue-500": props.theme === "light",
        "has-bg-blue-500 has-text-white": props.theme === "dark",
    });
    return (
        <div className={buttonClass} onClick={props.onClick}>
            <i className="icon-moon has-text-2xl" />
        </div>
    );
};

// File Tab wrapper component
export const FileTab = props => {
    const tabClass = kofi.classNames({
        "navlink has-text-center has-w-auto has-mr-2 has-px-4": true,
        "has-d-flex has-items-center": true,
        "has-bg-blue-500 has-text-white hover:has-text-white": props.active,
    });
    return (
        <div className={tabClass} onClick={props.onClick}>
            <i className={`icon-${props.icon} has-pr-2 has-text-lg`} />
            <b>{props.text}</b>
        </div>
    );
};

// Editor wrapper component
export const Editor = React.forwardRef((props, ref) => {
    const editorClass = kofi.classNames({
        "CodeCake has-s-full has-p-0 has-overflow-hidden": true,
        "CodeCake-dark has-bg-coolgray-700": props.theme === "dark",
        "CodeCake-light has-bg-coolgray-100": props.theme === "light",
    });
    return (
        <div className={props.visible ? "has-h-full has-overflow-hidden" : "has-d-none"}>
            <div className={editorClass} ref={ref} />
        </div>
    );
});

// Preview wrapper component
export const Preview = React.forwardRef((props, ref) => {
    const previewClass = kofi.classNames({
        // "has-d-none": !props.visible,
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
        "code": "square",
        "both": "square-half",
        "preview": "square-stroke",
    };
    const parentClass = kofi.classNames({
        "has-d-flex tablet:has-flex-column has-radius": true,
        "has-bg-coolgray-100": props.theme === "light",
        "has-bg-coolgray-700": props.theme === "dark",
    });
    return (
        <div className={parentClass}>
            {Object.keys(layoutIcons).map(key => {
                const iconClass = kofi.classNames({
                    "has-m-1 has-text-3xl has-radius has-cursor-pointer": true,
                    "has-text-coolgray-400 hover:has-text-coolgray-500": props.theme === "light" && key !== props.layout,
                    "has-text-coolgray-500 hover:has-text-coolgray-400": props.theme === "dark" && key !== props.layout,
                    "has-text-blue-500": key === props.layout && props.theme === "light",
                    "has-text-blue-400": key === props.layout && props.theme === "dark",
                });
                return (
                    <i
                        key={key}
                        className={`icon-${layoutIcons[key]} ${iconClass}`}
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
            <div className="modal is-medium has-text-coolgray-700 mobile:has-mx-6">
                <div className="has-d-flex has-items-center has-mb-4">
                    <div className="title is-3 has-mb-0">Share</div>
                    <div className="close has-ml-auto" onClick={props.onClose} />
                </div>
                <div className="paragraph">
                    You can use the following URL for sharing your code:
                </div>
                <div className="has-mb-6">
                    <textarea
                        className="textarea has-text-xs"
                        rows="5"
                        readOnly
                        defaultValue={props.url}
                    />
                </div>
                <button
                    className="button has-w-full has-d-flex has-items-center has-justify-center"
                    onClick={() => handleCopyClick()}
                >
                    <i className="icon-copy has-pr-1 has-text-lg" />
                    <strong>{copied ? "Copied!" : "Copy to clipboard"}</strong>
                </button>
            </div>
        </div>
    );
};
