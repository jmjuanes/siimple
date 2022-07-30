import React from "react";
import {classNames} from "@siimple/styled";

export const Tabs = props => (
    <div className="has-radius-md has-p-2 has-bg-gray-900 is-flex has-direction-column-mobile">
        {props.items.map(item => {
            const itemClass = classNames({
                "navlink has-text-center has-text-white has-text-white-hover is-capitalized": true,
                "has-bg-primary": props.active === item,
            });
            return (
                <div key={item} className={itemClass} onClick={() => props.onChange(item)}>
                    <strong>{item}</strong>
                </div>
            );
        })}
    </div>
);
