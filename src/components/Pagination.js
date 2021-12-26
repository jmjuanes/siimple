import React from "react";
import {Link} from "./Link.js";
import {If} from "../utils/components.js";
import {classNames} from "../utils/classnames.js";

//Pagination item
const PaginationItem = props => {
    const paginationClass = classNames([
        "has-d-block",
        "has-radius has-p-4",
        "hover:has-bg-coolgray-100",
        "has-text-coolgray-700 has-text-no-underline",
    ]);
    return (
        <Link className={paginationClass} to={props.url}>
            <div className="has-size-small">{props.label}</div>
            <div className="has-size-large has-weight-bold">{props.title}</div>
        </Link>
    );
};

//Export pagination item
export const Pagination = (props) => {
    return (
        <div className="siimple-columns has-pt-4">
            {/* Prev navigation item */}
            <div className="siimple-column has-py-0" align="left">
                <If condition={props.prev !== null} render={() => (
                    <PaginationItem label="Prev" url={props.prev.url} title={props.prev.label} />
                )} />
            </div>
            {/* Separator */}
            <div className="siimple-column has-py-0 mobile:has-d-none"></div>
            {/* Next navigation item */}
            <div className="siimple-column has-py-0" align="right">
                <If condition={props.next !== null} render={() => (
                    <PaginationItem label="Next" url={props.next.url} label={props.next.label} />
                )} />
            </div>
        </div>
    );
};
