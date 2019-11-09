import React from "react";
import {If} from "@siimple/neutrine";
import {Icon} from "@siimple/neutrine";
import {Heading4} from "@siimple/neutrine";

import {Element} from "../../../../../components/Element/index.js";
import style from "./style.scss";

//Render a block
export function Block (props) {
    //Return the block with the edit wrapper
    return (
        <div className={style.root}>
            <Element type={props.type} attributes={props.attributes} />
            {/* Check if the block is editable */}
            <If condition={props.editable === true} >
                <div className={style.actions}>
                    <div className={style.actionsItem} onClick={props.onEdit}>
                        <Icon icon="pen" style={{"fontSize":"20px"}}/>
                    </div>
                    <div className={style.actionsItem} onClick={props.onDelete}>
                        <Icon icon="trash" style={{"fontSize":"20px"}}/>
                    </div>
                </div>
            </If>
        </div>
    );
};

//Block default props
Block.defaultProps = {
    "editable": true,
    "attributes": {},
    "type": null,
    "onEdit": null,
    "onDelete": null
};

