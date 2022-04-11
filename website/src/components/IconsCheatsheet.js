import React from "react"
import kofi from "kofi";
import icons from "siimple/icons.js";

// Sorted icons list
const sortedIcons = icons.sort((a, b) => a.id < b.id ? -1 : +1);

// Get icon unicode
const getIconUnicode = icon => icon.unicode.toString(16).toLowerCase();

// Export Icons Cheatsheet component
export const IconsCheatsheet = () => (
    <div className="columns">
        {sortedIcons.map(icon => (
            <div key={icon.id} className="column is-one-third-tablet is-full-mobile has-d-flex has-items-center">
                <i className={`icon-${icon.id} has-text-lg`} />
                <div className="has-pl-2">{icon.id}</div>
                <div className="has-ml-auto">
                    <code className="has-text-coolgray-500 has-text-xs">{getIconUnicode(icon)}</code>
                </div>
            </div>
        ))}
    </div>
);
