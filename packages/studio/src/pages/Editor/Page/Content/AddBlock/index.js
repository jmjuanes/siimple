import React from "react";
import {ForEach} from "@siimple/neutrine";
import {Icon} from "@siimple/neutrine";
import {Heading4} from "@siimple/neutrine";

import {getElements, getElementProps} from "../../../../../elements/index.js";
import style from "./style.scss";

//Add a new block
export function AddBlock (props) {
    return (
        <div className={style.root}>
            <div className="siimple--mb-3" align="center">
                <Heading4 className="siimple--mb-1">
                    Add new content
                </Heading4>
                <div style={{"opacity":"0.8"}}>
                    Add more content blocks to this page.
                </div>
            </div>
            <ForEach items={getElements()} render={function (key) {
                let element = getElementProps(key);
                let onClick = function (event) {
                    return props.onClick(key);
                };
                //Renturn the block element
                return (
                    <div className={style.item} align="center" key={key} onClick={onClick}>
                        <Icon icon={element.icon} style={{"fontSize":"28px"}} /> 
                        <div className="siimple--mt-1">
                            <strong>{element.title}</strong>
                        </div>
                    </div>
                );
            }} />
        </div>
    );
};

