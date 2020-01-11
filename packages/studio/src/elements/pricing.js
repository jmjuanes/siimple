import React from "react";
import {classNames} from "@siimple/neutrine";
import {If, ForEach, Renderer} from "@siimple/neutrine";
import {Content} from "@siimple/neutrine";
import {Icon} from "@siimple/neutrine";
import {GridRow, GridCol} from "@siimple/neutrine";
import {Heading, Paragraph} from "@siimple/neutrine";

//Pricing element
export const pricing = {
    "props": {
        "title": "Pricing",
        "description": "",
        "helper": "",
        "icon": "cart",
        "groups": {
            "general": {
                "title": "General",
                "icon": "pen"
            },
            "plans": {
                "title": "Pricing plans",
                "icon": "cart"
            },
            "appearance": {
                "title": "Appearance",
                "icon": "palette"
            }
        },
        "attributes": {
            "title": {
                "type": "text",
                "label": "Pricing title",
                "helper": null,
                "defaultValue": "Our pricing",
                "group": "general"
            },
            "description": {
                "type": "textarea",
                "label": "Pricing description",
                "helper": null,
                "defaultValue": "All plans include a 14 day trial, no credit card required.",
                "group": "general"
            },
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
            "plans": {
                "type": "list",
                "label": "Pricing plans",
                "helper": null,
                "defaultValue": [],
                "max": 3,
                "items": {
                    "name": {
                        "type": "text",
                        "label": "Plan name",
                        "helper": null,
                        "defaultValue": ""
                    },
                    "price": {
                        "type": "text",
                        "label": "Plan pricing",
                        "helper": null,
                        "defaultValue": ""
                    },
                    "period": {
                        "type": "select",
                        "label": "Billing preiod",
                        "helper": null,
                        "defaultValue": "month",
                        "options": {
                            "month": "Montly",
                            "year": "Yearly"
                        }
                    },
                    "features": {
                        "type": "list",
                        "label": "Plan features",
                        "helper": null,
                        "defaultValue": [],
                        "max": 5,
                        "items": {
                            "feature": {
                                "type": "text",
                                "label": null,
                                "helper": null,
                                "defaultValue": ""
                            }
                        }
                    }
                },
                "group": "plans"
            }
        }
    },
    //Pricing renderer
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
        let planContainerClass = classNames({
            "siimple--px-4": true,
            "siimple--py-4": true,
            "siimple--rounded": true
        });
        let planContainerStyle = {
            "backgroundColor": (props.theme === "dark") ? "rgba(255, 255, 255, 0.2)" : "rgba(238, 242, 247, 0.5)"
        };
        let planNameClass = classNames({
            [themeClass]: true,
            "siimple--text-normal": true
        });
        let planPriceClass = classNames({
            [themeClass]: true,
            "siimple--mt-0": true
        });
        let planIncrementStyle = {
            "opacity": "0.8",
            "fontSize": "22px",
            "fontWeight": "normal"
        };
        let planFeatureClass = classNames({
            [themeClass]: true,
            "siimple--mb-0": true
        });
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
                {/* Pricing plans */}
                <GridRow align="center" className="siimple--py-4">
                    <ForEach items={props.plans} render={function (plan, index) {
                        return (
                            <GridCol size={4} small={12} key={index} style={{"float":"none"}}>
                                <div className={planContainerClass} style={planContainerStyle}>
                                    {/* Plan name */}
                                    <If condition={plan.name.length > 0}>
                                        <Heading type="h5" className={planNameClass} align="center">
                                            {plan.name}
                                        </Heading>
                                    </If>
                                    {/* Plan pricing */}
                                    <If condition={plan.price.length > 0}>
                                        <Heading type="h2" className={planPriceClass} align="center">
                                            {plan.price} 
                                            <span style={planIncrementStyle}> / {plan.period}</span>
                                        </Heading>
                                    </If>
                                    {/* Plan features */}
                                    <ForEach items={plan.features} render={function (feature, featureIndex) {
                                        return (
                                            <GridRow key={featureIndex}>
                                                <GridCol size="2" className="siimple--pb-0" align="right">
                                                    <Icon icon="check" className={themeClass} style={{"fontSize":"24px"}} />
                                                </GridCol>
                                                <GridCol size="10" className="siimple--pb-0" align="left">
                                                    <Paragraph className={planFeatureClass} align="left">
                                                        {feature.feature}
                                                    </Paragraph>
                                                </GridCol>
                                            </GridRow>
                                        );
                                    }} />
                                </div>
                            </GridCol>
                        );
                    }} />
                </GridRow>
            </Content>
        );
    }
};

