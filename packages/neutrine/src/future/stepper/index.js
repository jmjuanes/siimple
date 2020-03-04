import React from "react";
import {Icon} from "../../icon/index.js";
import * as helpers from "../../helpers.js";
import "./style.scss";

//Stepper variables
let baseClass = "neutrine__stepper";

//Buidl teh stepper icon
let buildStepperIcon = function (index, current) {
    //Build the icon props
    let props = {
        "className": baseClass + "-header-icon"
    };
    //Check if this step has been completed
    if (index < current) {
        return React.createElement("div", props, 
            React.createElement(Icon, {
                "icon": "check",
                "style": {
                    "fontSize": "16px",
                    "fontWeight": "normal"
                }
            })
        );
    }
    //Otherwise: return the icon with the index
    return React.createElement("div", props, index + 1);
};

//Export stepper wrapper component
export function Stepper (props) {
    let current = props.current;
    let items = React.Children.toArray(props.children).map(function (child, index) {
        //Check if is not a valid react element
        if (React.isValidElement(child) === false) {
            return null;
        }
        //Get the content
        let content = null;
        if (index === current) {
            content = (typeof child.props.render === "function") ? child.props.render() : child.props.children;
        }
        //Build the stepper item props
        let itemProps = {
            "key": index,
            "className": helpers.classNames({
                [baseClass + "-item"]: true,
                [baseClass + "-item--current"]: index === current,
                [baseClass + "-item--completed"]: index < current
            })
        };
        //Return the stepper item element
        return React.createElement("div", itemProps, 
            React.createElement("div", {"className": baseClass + "-header"}, 
                buildStepperIcon(index, current),
                React.createElement("div", {"className": baseClass + "-header-title"}, child.props.title)
            ),
            React.createElement("div", {"className": baseClass + "-body"}, content)
        );
    });
    //Return the stepper wrapper
    return React.createElement("div", {"className": baseClass}, items);
}

//Stepper default props
Stepper.defaultProps = {
    "current": 0
};

//Export stepper item component
export function StepperItem (props) {
    //TODO
}

//Stepper item default props
StepperItem.defailtProps = {
    "title": "",
    "render": null
};

