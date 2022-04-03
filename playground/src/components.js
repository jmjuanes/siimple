import React from "react";
import kofi from "kofi";

// Brand component wrapper
export const Brand = props => {
    const brandClass = kofi.classNames({
        "has-d-flex has-items-center has-mr-auto": true,
        "has-text-white": props.theme === "dark",
    });
    return (
        <div className={brandClass}>
            <i className="icon-siimple has-text-2xl has-mr-2" />
            <b className="has-text-xl">Playground</b>
        </div>
    );
};

// Version dropdown component
export const VersionDropdown = props => {
    const [expanded, setExpanded] = React.useState(false);
    const currentVersion = process.env.VERSION;
    const parentClass = kofi.classNames({
        "has-py-3 has-px-4 has-d-flex has-items-center has-radius has-cursor-pointer": true,
        "has-bg-coolgray-200 hover:has-bg-coolgray-300": props.theme === "light",
        "has-bg-coolgray-600 hover:has-bg-coolgray-700 has-text-white": props.theme === "dark",
    });
    const dropdownClass = kofi.classNames({
        "has-position-absolute has-right-none has-p-4 has-mt-1 has-radius has-w-64": true,
        "has-bg-coolgray-200": props.theme === "light",
        "has-bg-coolgray-600": props.theme === "dark",
    });
    return (
        <div className="has-position-relative">
            <div className={parentClass} onClick={() => setExpanded(!expanded)}>
                <span className="has-mr-2">Version:</span>
                <b>{currentVersion}</b>
                <i className="icon-chevron-down has-ml-2" />
            </div>
            {kofi.when(expanded, () => (
                <div className={dropdownClass} style={{top:"48px"}}>
                    {[currentVersion].map(version => {
                        const itemClass = kofi.classNames({
                            "has-py-3 has-px-4 has-radius has-cursor-pointer": true,
                            "has-bg-blue-500 has-text-white": true,
                        });
                        return (
                            <div className={itemClass}>
                                <b>{version}</b> (latest)
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
        "has-cursor-pointer has-text-no-underline": true,
        "has-d-flex has-radius": true,
        "has-py-2 has-px-2": true,
        "has-bg-coolgray-600 hover:has-bg-coolgray-700 has-text-white": props.theme === "dark",
        "has-bg-coolgray-200 hover:has-bg-coolgray-300": props.theme === "light",
        // "hover:has-bg-blue-200 hover:has-text-blue-700": true
    });
    return (
        <div className={buttonClass} onClick={props.onClick}>
            <i className={`icon-${props.icon} has-text-xl`} />
        </div>
    );
};

// Run button wrapper
export const RunButton = props => {
    const buttonClass = kofi.classNames({
        "button has-d-flex has-items-center has-ml-2": true,
        "hover:has-bg-blue-600": !props.loading,
    });
    return (
        <div className={buttonClass} onClick={props.onClick}>
            <i className="icon-play has-text-lg has-mr-1" />
            <strong>Run</strong>
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
        "has-p-8 has-bg-white": true,
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
// export const PreviewLoader = props => {
//     const parentClass = kofi.classNames({
//         "alert has-position-absolute has-bottom-none has-items-center has-ml-4": true,
//         "has-d-none": !props.visible,
//     });
//     return (
//         <div className={parentClass}>
//             <div className="spinner has-text-white" />
//             <div className="has-text-white has-ml-4">
//                 Building <b>siimple</b>, wait a second...
//             </div>
//         </div>
//     );
// };
