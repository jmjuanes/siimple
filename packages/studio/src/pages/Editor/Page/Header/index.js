import React from "react";
import {If, Renderer} from "@siimple/neutrine";
import {Icon} from "@siimple/neutrine";
import {Heading} from "@siimple/neutrine";
import {classNames} from "@siimple/neutrine";

import style from "./style.scss";

//Export page header
export function PageHeader (props) {
    return (
        <div className={style.root}>
            <div className={style.url}>
                <Icon className={style.urlIcon} icon="file" />
                <span className={style.urlText}>
                    <strong>{props.page.name}</strong> (site:/{props.page.path})
                </span>
            </div>
            {/* Page editable icon */}
            <Renderer render={function () {
                let iconImage = (props.editable === true) ? "unlock" : "lock";
                return (
                    <div className={style.button} onClick={props.onEditableClick}>
                        <Icon icon={iconImage} className={style.buttonIcon} />
                    </div>
                );
            }} />
            {/* Page settings */}
            <div className={style.button}>
                <Icon icon="gear" className={style.buttonIcon} />
            </div>
        </div>
    );
}

//Page header default props
PageHeader.defaultProps = {
    "page": null,
    "editable": false
};

