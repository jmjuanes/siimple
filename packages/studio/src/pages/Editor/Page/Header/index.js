import React from "react";
import {If, Renderer} from "@siimple/neutrine";
import {Icon} from "@siimple/neutrine";
import {Heading} from "@siimple/neutrine";
import {classNames} from "@siimple/neutrine";

import style from "./style.scss";

//Export page header
export function PageHeader (props) {
    return (
        <div className={style.header}>
            <div className="siimple--float-left">
                {/* Page icon */}
                <Icon icon="file" className={style.headerIcon} />
                {/* Page title */}
                <Heading type="h5" className={style.headerTitle}>
                    <span>{props.page.name}</span>
                </Heading>
            </div>
            {/* Page actions */}
            <div className="siimple--float-right">
                {/* Page editable icon */}
                <Renderer render={function () {
                    let iconImage = (props.editable === true) ? "unlock" : "lock";
                    return (
                        <div className={style.headerBtn} onClick={props.onEditableClick}>
                            <Icon icon={iconImage} className={style.headerBtnIcon} />
                        </div>
                    );
                }} />
            </div>
        </div>
    );
}

//Page header default props
PageHeader.defaultProps = {
    "page": null,
    "editable": false
};

