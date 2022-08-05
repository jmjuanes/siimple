import React from "react";
import kofi from "kofi";
import {Link} from "./Link.js";

// Pagination item
const PaginationItem = props => {
    const label = props.type === "prev" ? "Prev" : "Next";
    const paginationClass = kofi.classNames([
        "is-block",
        "is-rounded has-p-4",
        "has-bg-light-hover",
        "has-text-dark is-not-underlined",
    ]);
    return (
        <Link className={paginationClass} to={props.url}>
            <div className="has-size-0 has-text-dark is-semitransparent">
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
        <div className="column has-pt-none has-pb-none" align="left">
            {kofi.when(props.prev, () => (
                <PaginationItem
                    type="prev"
                    url={props.prev.url}
                    title={props.prev.label}
                />
            ))}
        </div>
        <div className="column has-pt-none has-pb-none is-hidden-mobile" />
        <div className="column has-pt-none has-pb-none" align="right">
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
