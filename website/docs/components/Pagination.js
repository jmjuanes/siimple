import React from "react";
import kofi from "kofi";
import {Link} from "./Link.js";

// Pagination item
const PaginationItem = props => {
    const label = props.type === "prev" ? "Prev" : "Next";
    const paginationClass = kofi.classNames([
        "is-block",
        "has-radius-md has-p-4",
        "has-bg-gray-100-hover",
        "has-text-gray-700 is-not-underlined",
    ]);
    return (
        <Link className={paginationClass} to={props.url}>
            <div className="has-size-0 has-text-gray-500">
                {kofi.when(props.type === "prev", () => (
                    <i className="si-arrow-left has-pr-1" />
                ))}
                <span>{label}</span>
                {kofi.when(props.type === "next", () => (
                    <i className="si-arrow-right has-pl-1" />
                ))}
            </div>
            <div className="has-weight-bold">{props.title}</div>
        </Link>
    );
};

// Export pagination item
export const Pagination = props => (
    <div className="columns has-pt-4">
        <div className="column has-py-none" align="left">
            {kofi.when(props.prev, () => (
                <PaginationItem
                    type="prev"
                    url={props.prev.url}
                    title={props.prev.label}
                />
            ))}
        </div>
        <div className="column has-py-none is-hidden-mobile" />
        <div className="column has-py-none" align="right">
            {kofi.when(props.next, () => (
                <PaginationItem
                    type="next"
                    url={props.next.url}
                    title={props.next.label}
                />
            ))}
        </div>
    </div>
);
