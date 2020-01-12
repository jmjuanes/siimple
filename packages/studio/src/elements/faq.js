import React from "react";
import {classNames} from "@siimple/neutrine";
import {If, ForEach} from "@siimple/neutrine";
import {Content} from "@siimple/neutrine";
import {Heading, Paragraph} from "@siimple/neutrine";

//FAQ element
export const faq = {
    //Features props
    "props": {
        "title": "FAQ",
        "description": "",
        "helper": "",
        "icon": "question",
        "groups": {
            "general": {
                "title": "General",
                "icon": "pen"
            },
            "faqs": {
                "title": "FAQs",
                "icon": "question"
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
            "title": {
                "type": "text",
                "label": "Title",
                "helper": null,
                "defaultValue": "Frequently Asked Questions",
                "group": "general"
            },
            "description": {
                "type": "textarea",
                "label": "Description",
                "helper": null,
                "defaultValue": "",
                "group": "general"
            },
            "faqs": {
                "type": "list",
                "label": null,
                "helper": null,
                "defaultValue": [],
                "max": 10,
                "items": {
                    "question": {
                        "type": "text",
                        "label": "Question",
                        "helper": "Question that your customers may have",
                        "defaultValue": ""
                    },
                    "answer": {
                        "type": "textarea",
                        "label": "Answer",
                        "helper": "Answer to this question",
                        "defaultValue": ""
                    }
                },
                "group": "faqs"
            }
        }
    },
    //FAQs renderer
    "render": function (props) {
        let themeClass = (props.theme === "dark") ? "siimple--color-white" : "siimple--color-dark";
        let contentClass = classNames({
            "siimple--py-5": true,
            [themeClass]: true,
            ["siimple--bg-" + props.color]: true
        }); 
        let titleClass = classNames({
            [themeClass]: true,
            "siimple--mb-1": true
        });
        let descriptionStyle = {
            "opacity": "0.8",
            "maxWidth": "600px",
            "marginLeft": "auto",
            "marginRight": "auto"
        };
        return (
            <Content size="large" className={contentClass}>
                {/* Pricing title */}
                <If condition={props.title !== ""}>
                    <Heading type="h2" className={titleClass} align="center">
                        {props.title}
                    </Heading>
                </If>
                {/* Pricing description */}
                <If condition={props.description !== ""}>
                    <Paragraph className={themeClass} style={descriptionStyle} lead align="center">
                        {props.description}
                    </Paragraph>
                </If>
                {/* Questions/Answers */}
                <div className="siimple--mt-5">
                    <ForEach items={props.faqs} render={function (item, index) {
                        return (
                            <div align="left" key={index}>
                                <Heading type="h4" className={themeClass}>
                                    {item.question}
                                </Heading>
                                <Paragraph className={themeClass} style={{"opacity":"0.8"}}>
                                    {item.answer}
                                </Paragraph>
                           </div>
                        );
                    }} />
                </div>
            </Content>
        );
    }
};

