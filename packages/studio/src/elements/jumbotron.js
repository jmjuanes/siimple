import React from "react";
import {If} from "@siimple/neutrine";
import {Jumbotron, JumbotronTitle, JumbotronSubtitle, JumbotronDetail} from "@siimple/neutrine";

//Render jumbotron
let jumbotronRender = function (props) {
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

//Jumbotron configuration
let jumbotronProps = {
    "title": "Jumbotron",
    "description": "",
    "helper": "",
    "icon": "home",
    "groups": {
        "general": {
            "title": "General",
            "icon": "pen"
        },
        "appearance": {
            "title": "Appearance",
            "icon": "palette"
        },
        "links": {
            "title": "Links",
            "icon": "link"
        }
    },
    "attributes": {
        "title": {
            "type": "text",
            "label": "Title",
            "helper": null,
            "defaultValue": "Jumbotron title",
            "group": "general"
        },
        "subtitle": {
            "type": "text",
            "label": "Subtitle",
            "helper": null,
            "defaultValue": "",
            "group": "general"
        },
        "detail": {
            "type": "textarea",
            "label": "Detail text",
            "helper": null,
            "defaultValue": "",
            "group": "general"
        },
        "align": {
            "type": "select",
            "label": "Aligned jumbotron",
            "helper": null,
            "defaultValue": "left",
            "options": {
                "left": "Align to left",
                "center": "Align to center",
                "right": "Align to right"
            },
            "group": "appearance"
        },
        "theme": {
            "type": "theme",
            "label": "Theme",
            "helper": null,
            "defaultValue": "dark",
            "group": "appearance"
        },
        "color": {
            "type": "color",
            "label": "Background Color",
            "helper": null,
            "defaultValue": "dark",
            "group": "appearance"
        },
        "links": {
            "type": "list",
            "label": "Links",
            "helper": null,
            "defaultValue": [],
            "items": {
                "text": {
                    "type": "text",
                    "label": "Link text",
                    "helper": null,
                    "defaultValue": null
                },
                "url": {
                    "type": "text",
                    "label": "Link url",
                    "helper": null,
                    "defaultValue": null
                }
            },
            "group": "links"
        }
    }
};

//Export jumbotron condiguration
export const jumbotron = {
    "props": jumbotronProps,
    "render": jumbotronRender
};
