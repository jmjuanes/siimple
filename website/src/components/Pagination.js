import React from "react";
import kofi from "kofi";
import {Link} from "./Link.js";
import {Icon} from "./Icon.js";

//Pagination item
const PaginationItem = props => {
    const label = props.type === "prev" ? "Prev" : "Next";
    const paginationClass = kofi.classNames([
        "has-d-block",
        "has-radius has-p-4",
        "hover:has-bg-coolgray-100",
        "has-text-coolgray-700 has-text-no-underline",
    ]);
    return (
        <Link className={paginationClass} to={props.url}>
            <div className="has-text-xs has-text-coolgray-500">
                {kofi.when(props.type === "prev", () => (
                    <Icon icon="arrow-left" className="has-pr-1" />
                ))}
                <span>{label}</span>
                {kofi.when(props.type === "next", () => (
                    <Icon icon="arrow-right" className="has-pl-1" />
                ))}
            </div>
            <div className="has-weight-bold">{props.title}</div>
        </Link>
    );
};

//Export pagination item
export const Pagination = props => (
    <div className="columns has-pt-4">
        {/* Prev navigation item */}
        <div className="column has-py-0" align="left">
            {kofi.when(props.prev, () => (
                <PaginationItem
                    type="prev"
                    url={props.prev.url}
                    title={props.prev.label}
                />
            ))}
        </div>
        {/* Separator */}
        <div className="column has-py-0 is-hidden-mobile" />
        {/* Next navigation item */}
        <div className="column has-py-0" align="right">
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
