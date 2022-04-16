import React from "react"
import kofi from "kofi";
import icons from "@siimple/preset-icons/icons.js";

// Sorted icons list
const sortedIcons = icons.sort((a, b) => a.name < b.name ? -1 : +1);

// Export Icons Cheatsheet component
export const IconsCheatsheet = () => (
    <div className="columns">
        {sortedIcons.map(icon => (
            <div key={icon.name} className="column is-one-quarter-tablet is-full-mobile has-d-flex has-items-center">
                <i className={`icon-${icon.name} has-text-lg`} />
                <div className="has-ml-auto">
                    <code className="has-text-coolgray-500 has-text-xs">{icon.name}</code>
                </div>
            </div>
        ))}
    </div>
);
