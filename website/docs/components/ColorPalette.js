import React from "react";
import colors from "@siimple/colors";
import {classNames} from "@siimple/styled";

// Get visible colors keys
const getVisibleColors = () => {
    return Object.keys(colors).filter(name => typeof colors[name] === "object");
};

// Color items
const ColorItems = props => (
    <div className="columns">
        {Object.keys(props.items).map(item => {
            const itemClassName = classNames({
                "is-rounded has-p-6 has-mb-2": true,
                [`has-bg-${props.name}-${item}`]: true,
            });
            return (
                <div key={item} className="column is-one-third-mobile has-pt-none has-pl-2 has-pr-2">
                    <div className={itemClassName} />
                    <div className="has-weight-bold">{item}</div>
                    <div className="has-text-dark is-semitransparent has-size-0">{props.items[item]}</div>
                </div>
            );
        })}
    </div>
);

// Export color palette
export const ColorPalette = () => (
    <div className="has-mb-6">
        {getVisibleColors().map(name => (
            <div className="columns" key={name}>
                <div className="column is-one-fifth is-full-mobile has-pb-none">
                    <div className="title is-6 has-mt-none is-capitalized">
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
