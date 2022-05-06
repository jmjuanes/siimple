import React from "react"
import icons from "@siimple/preset-icons/icons.js";

// Sorted icons list
const sortedIcons = icons.sort((a, b) => a.name < b.name ? -1 : +1);

export const IconsCheatsheet = () => (
    <div className="columns">
        {sortedIcons.map(icon => (
            <div key={icon.name} className="column is-one-quarter-tablet is-full-mobile is-flex has-items-center">
                <div className="">
                    <code className="has-text-coolgray-500 has-size-0">{icon.name}</code>
                </div>
                <div className="has-ml-auto">
                    <i className={`icon-${icon.name} has-size-2`} />
                </div>
            </div>
        ))}
    </div>
);
