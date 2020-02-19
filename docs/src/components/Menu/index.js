import React from "react";
import {Renderer, ForEach} from "@siimple/neutrine";
//import {ToolbarBrand} from "@siimple/neutrine";
import {ToolbarGroup, ToolbarItem} from "@siimple/neutrine";
import {Heading, Small} from "@siimple/neutrine";
import {Item, ItemIcon, ItemContent, ItemBefore} from "@siimple/neutrine";

import {redirect} from "../../utils.js";

//Export menu component
export function Menu (props) {
    return (
        <React.Fragment>
            {/* Display package name */}
            <Item className="siimple--mb-3 siimple--mt-3">
                <ItemBefore>
                    <Renderer render={function () {
                        return React.createElement(ItemIcon, {
                            "className": "siimple--color-white siimple--bg-primary",
                            "appearance": "square",
                            "icon": "box"
                        });
                    }} />
                </ItemBefore>
                <ItemContent>
                    <Heading type="h6" className="siimple--mb-0">
                        {props.package.name}
                    </Heading>
                    <Small style={{"fontSize":"12px"}}>
                        Version: <strong>v{props.package.version}</strong>
                    </Small>
                </ItemContent>
            </Item>
            {/* Render sidebar items */}
            <ForEach items={props.package.sidebar} render={function (item, index) {
                //Check for group item
                if (item.type === "group") {
                    return React.createElement(ToolbarGroup, {
                        "key": index,
                        "text": item.title
                    });
                }
                //Return the toolbar link
                return React.createElement(ToolbarItem, {
                    "text": item.title,
                    "active": props.pathname === item.link,
                    "onClick": function () {
                        return redirect(item.link);
                    },
                    "icon": "file", //null,
                    "key": index
                });
            }} />
        </React.Fragment>
    );
}

