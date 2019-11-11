import React from "react";
import {If} from "@siimple/neutrine";
import {Side, SideBackground, SideContent} from "@siimple/neutrine";
import {Heading} from "@siimple/neutrine";

import style from "./style.scss";

//Export dialog component
export function Dialog (props) {
    return (
        <Side visible={props.visible}>
            <SideBackground />
            <SideContent position="right" size={props.size}>
                <div className={style.root}>
                    <If condition={props.title !== null}>
                        <Heading type="h2" className="siimple--mb-4">
                            {props.title}
                        </Heading>
                    </If>
                    {props.children}
                </div>
            </SideContent>
        </Side>
    );
}

//Dialog default props
Dialog.defaultProps = {
    "title": null,
    "visible": false,
    "size": "80%"
};

