import React from "react";
import kofi from "kofi";

// Brand component wrapper
export const Brand = props => {
    const brandClass = kofi.classNames({
        "has-d-flex has-mr-auto": true,
        "has-text-white": props.theme === "dark",
    });
    return (
        <div className={brandClass}>
            <i className="icon-siimple has-text-2xl has-mr-2" />
            <b className="has-text-xl">Playground</b>
        </div>
    );
};

// Action button wrapper
export const ActionButton = props => {
    const buttonClass = kofi.classNames({
        "has-cursor-pointer has-text-no-underline": true,
        "has-d-flex has-radius": true,
        "has-py-2 has-px-2 has-ml-3": true,
        "has-bg-coolgray-600 has-text-white": props.theme === "light",
        // "hover:has-bg-blue-200 hover:has-text-blue-700": true
    });
    return (
        <div className={buttonClass} onClick={props.onClick}>
            <i className={`${props.icon} has-text-2xl`} />
        </div>
    );
};

// Tabs wrapper component
export const Tabs = props => {
    const tabsClass = kofi.classNames({
        "has-d-flex has-radius has-p-4 has-w-full has-mb-4": true,
        "has-bg-coolgray-700": props.theme === "dark",
        "has-bg-coolgray-200": props.theme === "light",
    });
    return (
        <div className={tabsClass}>{props.children}</div>
    );
}; 

// Tab wrapper component
export const Tab = props => {
    const tabClass = kofi.classNames({
        "navlink has-text-center": true,
        "has-bg-blue-500 has-text-white hover:has-text-white": props.active,
    });
    return (
        <div className={tabClass} onClick={props.onClick}>{props.text}</div>
    );
};

// Editor wrapper component
export const Editor = React.forwardRef((props, ref) => {
    const editorClass = kofi.classNames({
        "CodeCake has-p-6 has-s-full has-overflow-hidden has-radius": true,
        "CodeCake-dark has-bg-coolgray-700": props.theme === "dark",
        "CodeCake-light has-bg-white": props.theme === "light",
    });
    return (
        <div className={props.visible ? "has-h-full has-overflow-hidden" : "has-d-none"}>
            <div className={editorClass} style={{maxWidth: "50vw"}} ref={ref} />
        </div>
    );
});

// Preview wrapper component
export const Preview = React.forwardRef((props, ref) => {
    const previewClass = kofi.classNames({
        "has-d-none": !props.visible,
        "has-p-8 has-radius has-bg-white": true,
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
export const PreviewLoader = () => (
    <div className="has-s-full has-bg-coolgray-700 has-p-6 has-radius has-d-flex has-flex-column has-justify-center has-items-center">
        <div className="spinner has-text-white" />
        <div className="has-text-white has-text-sm has-mt-2">
            Building <b>siimple</b>, wait a second...
        </div>
    </div>
);
