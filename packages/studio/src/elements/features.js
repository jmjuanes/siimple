import React from "react";
import {classNames} from "@siimple/neutrine";
import {If, ForEach} from "@siimple/neutrine";
import {Content} from "@siimple/neutrine";
import {GridRow, GridCol} from "@siimple/neutrine";
import {Heading, Paragraph} from "@siimple/neutrine";

//Features element
export const features = {
    //Features props
    "props": {
        "title": "Features",
        "description": "",
        "helper": "",
        "icon": "star",
        "groups": {
            "items": {
                "title": "Features",
                "icon": "star"
            },
            "appearance": {
                "title": "Appearance",
                "icon": "palette"
            }
        },
        "attributes": {
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
                "helper": "Choose a background color for the jumbotron.",
                "defaultValue": "dark",
                "group": "appearance"
            },
            "items": {
                "type": "list",
                "label": "Features items",
                "helper": null,
                "defaultValue": [],
                "max": 4,
                "items": {
                    "title": {
                        "type": "text",
                        "label": "Feature title",
                        "helper": "Short text to describe your feature",
                        "defaultValue": "Feature title"
                    },
                    "description": {
                        "type": "textarea",
                        "label": "Feature description",
                        "helper": "Large text to describe your feature",
                        "defaultValue": "Feature large description"
                    }
                },
                "group": "items"
            }
        }
    },
    //Features renderer
    "render": function (props) {
        let columnStyle = {
            "maxWidth": "300px",
            "marginLeft": "auto",
            "marginRight": "auto"
        };
        let columnSize = (props.items.length > 0) ? 12 / props.items.length : 0;
        return (
            <Content size="large">
                <GridRow>
                    <ForEach items={props.items} render={function (item, index) {
                        return (
                            <GridCol size={columnSize} small={12} index={index}>
                                <div style={columnStyle}>
                                    {/* Feature title */}
                                    <If condition={item.title.length > 0}>
                                        <Heading type="h4">
                                            {item.title}
                                        </Heading>
                                    </If>
                                    {/* Feature description */}
                                    <If condition={item.description.length > 0}>
                                        <Paragraph style={"opacity":"0.8"}>
                                            {item.description}
                                        </Paragraph>
                                    </If>
                                </div>
                            </GridCol>
                        );
                    }} />
                </GridRow>
            </Content>
        );
    }
};

