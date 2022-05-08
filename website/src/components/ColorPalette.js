import React from "react";
import kofi from "kofi";
import colors from "@siimple/colors";

// Get visible colors keys
const getVisibleColors = () => {
    return Object.keys(colors).filter(name => typeof colors[name] === "object");
};

// Color items
const ColorItems = props => (
    <div className="columns">
        {Object.keys(props.items).map(item => {
            const itemClassName = kofi.classNames([
                "has-radius-md has-p-6 has-mb-2",
                `has-bg-${props.name}-${item}`,
            ]);
            return (
                <div key={item} className="column is-one-third-mobile has-pt-0 has-px-2">
                    <div className={itemClassName} />
                    <div className="has-weight-bold">{item}</div>
                    <div className="has-text-gray-500 has-font-code has-size-0">{props.items[item]}</div>
                </div>
            );
        })}
    </div>
);

// Export color palette
export const ColorPalette = props => (
    <div className="has-mb-6">
        {getVisibleColors().map(name => (
            <div className="columns" key={name}>
                <div className="column is-one-fifth is-full-mobile has-pb-0">
                    <div className="title is-6 has-mt-0 is-capitalized">
                        <span>{name}</span>
                    </div>    
                </div>
                <div className="column is-four-fifths is-full-mobile">
                    <ColorItems name={name} items={colors[name]} />
                </div>
            </div>
        ))}
    </div>
);
