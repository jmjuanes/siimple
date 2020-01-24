import React from "react";
import * as helpers from "../../helpers.js";
import "./style.scss";

//Export centered component
export function Centered (props) {
    let newProps = helpers.filterProps(props, ["className", "direction"]);
    //Assign classname props
    Object.assign(newProps, {
        "className": helpers.classNames(props.className, {
            "neutrine__centered": true,
            "neutrine__centered--row": props.direction === "row",
            "neutrine__centered--column": props.direction === "column"
        })
    });
    //Return the centered component
    return React.createElement("div", newProps, props.children);
}

//Centered component default props
Centered.defaultProps = {
    "direction": "column"
};

