import React from "react";
import {If, ForEach} from "@siimple/neutrine";
import {Breadcrumb, BreadcrumbItem} from "@siimple/neutrine";
import {Btn, Icon} from "@siimple/neutrine";

import style from "./style.scss";

//Export navigation component
export function Navigation (props) {
    return (
        <div className="siimple--mb-4">
            <Btn onClick={props.onClick} color="light" className="siimple--px-1 siimple--mr-2">
                <Icon icon="menu" style={{"fontSize":"24px"}} />
            </Btn>
        </div>
    );
}

Navigation.defaultProps = {
    "onClick": null
};

