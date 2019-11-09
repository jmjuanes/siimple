import React from "react";
import {If} from "@siimple/neutrine";
import {Jumbotron, JumbotronTitle, JumbotronSubtitle, JumbotronDetail} from "@siimple/neutrine";

//Render jumbotron
export function renderJumbotron (props) {
    //Jumbotron extra class names
    let classList = [];
    //Jumbotron color 
    if (typeof props.color === "string") {
        classList.push(`siimple--bg-${props.color}`);
    }
    //Return the jumbotron
    return (
        <Jumbotron color={props.theme} className={classList.join(" ")} size="large" align={props.align}>
            <If condition={props.title !== null && props.title !== ""}>
                <JumbotronTitle>{props.title}</JumbotronTitle>
            </If>
            <If condition={props.subtitle !== null && props.subtitle !== ""}>
                <JumbotronSubtitle>{props.subtitle}</JumbotronSubtitle>
            </If>
            <If condition={props.detail !== null && props.detail !== ""}>
                <JumbotronDetail>{props.detail}</JumbotronDetail>
            </If>
        </Jumbotron>
    );
};

