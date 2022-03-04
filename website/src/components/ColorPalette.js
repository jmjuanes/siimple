import React from "react";
import kofi from "kofi";
import colors from "siimple-colors";

// Color items
const ColorItems = props => (
    <div className="">
        {Object.keys(props.items).map(item => {
            const itemClassName = kofi.classNames([
                "has-radius has-p-6 has-mb-2",
                `has-bg-${props.name}-${item}`,
            ]);
            return (
                <div key={item} className="has-mb-2">
                    <div className={itemClassName} />
                    <div className="has-d-flex has-items-center">
                        <div className="has-weight-bold">{item}</div>
                        <div className="has-ml-auto has-text-small">
                            {props.items[item]}
                        </div>
                    </div>
                </div>
            );
        })}
    </div>
);

// Export color palette
export const ColorPalette = props => (
    <div className="has-mb-6">
        {Object.keys(colors).map(name => (
            <div className="columns" key={name}>
                <div className="column is-one-third is-full-mobile">
                    <strong className="has-text-capitalize">{name}</strong>    
                </div>
                <div className="column is-two-thirds is-full-mobile">
                    <ColorItems name={name} items={colors[name]} />
                </div>
            </div>
        ))}
    </div>
);
