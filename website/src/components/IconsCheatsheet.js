import React from "react"
import icons from "@siimple/preset-icons/icons.js";

// Sorted icons list
const sortedIcons = icons.sort((a, b) => a.name < b.name ? -1 : +1);

// Export Icons Cheatsheet component
export const IconsCheatsheet = () => (
    <div className="columns">
        {sortedIcons.map(icon => (
            <div key={icon.name} className="column is-one-quarter-tablet is-full-mobile is-flex has-items-center">
                <i className={`icon-${icon.name} has-size-2`} />
                <div className="has-ml-auto">
                    <code className="has-text-coolgray-500 has-size-0">{icon.name}</code>
                </div>
            </div>
        ))}
    </div>
);
