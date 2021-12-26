import React from "react";
//import kofi from "kofi";
import {classNames} from "siimple-react";
import {Renderer} from "siimple-react";
import {Btn} from "siimple-react";
//import {Media, MediaStart, MediaContent, MediaEnd} from "siimple-react";
import {Icon} from "siimple-react";

import {renderSandbox} from "../sandbox.js";

//Button wrapper
const Button = props => {
    const active = props?.active === true;
    const theme = props.theme || "light";
    const classList = classNames(props.className, "has-px-2", {
        "has-bg-coolgray-200 hover:has-bg-coolgray-300": !active && theme !== "dark",
        "has-bg-blue-500 has-text-white hover:has-bg-blue-400": active && theme !== "dark"
    });
    return (
        <Btn color="" className={classList} onClick={props.onClick}>
            <Icon icon={props.icon} style={{"fontSize":"24px"}} />
        </Btn>
    );
};

//Export result panel component
export const ResultPanel = props => {
    const parent = React.useRef();
    //Component did mount --> render sandbox
    const componentDidMount = () => {
        return renderSandbox(parent.current, props.sandbox, {});
    };
    React.useEffect(componentDidMount, []);
    const theme = props.theme;
    const isDarkTheme = props.theme === "dark";
    const rootClass = classNames("has-flex has-flex-column has-p-6 has-radius", {
        "has-w-full has-h-full": true,
        "has-bg-dark": isDarkTheme,
        "has-bg-white": !isDarkTheme
    });
    //Render the result wrapper
    return (
        <div className={rootClass}>
            {/* Control panel */}
            {/*
            <Media className="has-w-full has-pb-6">
                <MediaStart className=""></MediaStart>
                <MediaContent className="" />
                <MediaEnd className="">
                    <Button icon="cross" onClick={props.onCloseClick} theme={theme} className="has-mr-1" />
                </MediaEnd>
            </Media>
            */}
            {/* Sandbox frame */}
            <Renderer render={() => {
                return React.createElement("iframe", {
                    "ref": parent, 
                    "className": "has-w-full has-h-full has-border-rounded has-bg-white"
                });
            }} />
        </div>
    );
};

//Result panel default props
ResultPanel.defaultProps = {
    "theme": "dark",
    "sandbox": null,
    "isResized": false
};
