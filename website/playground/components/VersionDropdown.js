import React from "react";
import kofi from "kofi";

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

