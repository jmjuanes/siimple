import React from "react";
import {If, ForEach} from "@siimple/neutrine";
import {classNames} from "@siimple/neutrine";

import {AddBlock} from "./AddBlock/index.js";
import {Block} from "./Block/index.js";
import style from "./style.scss";

//Export page content
export function PageContent (props) {
    //Build page content styles
    let classList = classNames({
        [style.root]: true,
        [style.editable]: props.editable
    });
    return (
        <div className={classList}>
            {/* Page navbar */}
            {/* Custom page blocks */}
            <ForEach items={props.page.content} render={function (content, index) {
                return React.createElement(Block, Object.assign({}, content, {
                    "key": index,
                    "onEdit": function (event) {
                        return props.onEdit(index);
                    },
                    "onDelete": function (event) {
                        return props.onDelete(index);
                    },
                    "editable": props.editable
                }));
            }} />
            {/* Add a new block */}
            <If condition={props.editable}>
                <AddBlock onClick={props.onAdd} />
            </If>
            {/* Page footer */}
        </div>
    );
}

//PageContent default props
PageContent.defaultProps = {
    "editable": true,
    "page": null,
    "onEdit": null,
    "onDelete": null,
    "onAdd": null
};

