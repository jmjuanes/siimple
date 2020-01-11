import React from "react";
import {classNames} from "@siimple/neutrine";
import {If, ForEach, Renderer} from "@siimple/neutrine";
import {Content} from "@siimple/neutrine";
import {Icon} from "@siimple/neutrine";
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
                "defaultValue": "light",
                "group": "appearance"
            },
            "color": {
                "type": "color",
                "label": "Background Color",
                "helper": "Choose a background color for the features block.",
                "defaultValue": "white",
                "group": "appearance"
            },
            "items": {
                "type": "list",
                "label": "Features items",
                "helper": null,
                "defaultValue": [],
                "max": 4,
                "items": {
                    "icon": {
                        "type": "icon",
                        "label": "Feature icon",
                        "helper": null,
                        "defaultValue": "rocket"
                    },
                    "title": {
                        "type": "text",
                        "label": "Feature title",
                        "helper": "Short text to describe your feature",
                        "defaultValue": ""
                    },
                    "description": {
                        "type": "textarea",
                        "label": "Feature description",
                        "helper": "Large text to describe your feature",
                        "defaultValue": ""
                    }
                },
                "group": "items"
            }
        }
    },
    //Features renderer
    "render": function (props) {
        let themeClass = (props.theme === "dark") ? "siimple--color-white" : "siimple--color-dark";
        let contentClass = classNames({
            "siimple--py-5": true,
            [themeClass]: true,
            ["siimple--bg-" + props.color]: true
        }); 
        let columnStyle = {
            "maxWidth": "600px",
            "marginLeft": "auto",
            "marginRight": "auto"
        };
        let titleClass = classNames({
            [themeClass]: true,
            "siimple--mt-3": true
        });
        let columnAlign = (props.items.length === 1) ? "center" : "left";
        let columnSize = (props.items.length > 0) ? 12 / props.items.length : 0;
        return (
            <Content size="large" className={contentClass}>
                <GridRow>
                    <ForEach items={props.items} render={function (item, index) {
                        return (
                            <GridCol size={columnSize} small={12} key={index}>
                                <div style={columnStyle} align={columnAlign}>
                                    {/* Feature icon */}
                                    <Renderer render={function () {
                                        return React.createElement(Icon, {
                                            "icon": item.icon,
                                            "style": {
                                                "fontSize": "45px"
                                            },
                                            "className": themeClass
                                        });
                                    }} />
                                    {/* Feature title */}
                                    <If condition={item.title.length > 0}>
                                        <Heading type="h4" className={titleClass}>
                                            {item.title}
                                        </Heading>
                                    </If>
                                    {/* Feature description */}
                                    <If condition={item.description.length > 0}>
                                        <Paragraph className={themeClass} style={{"opacity":"0.8"}}>
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

