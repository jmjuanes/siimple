import React from "react";
import * as helpers from "../../helpers.js";

//Build the progress bar content
let progressBar = function (props) {
    let barProps = {
        "style": {
            "width": props.completed + "%"
        }
    };
    //Return the bar component
    return React.createElement("span", barProps, props.children);
};

//Progress component
export const Progress = function (props) {
    let newProps = helpers.filterProps(props, ["className", "color", "completed", "striped", "velocity"]);
    let classList = ["siimple-progress"];
    //Check the color property
    if (typeof props.color === "string") {
        classList.push("siimple-progress--" + props.color.toLowerCase().trim());
    }
    //Check the striped property
    if (typeof props.striped === "boolean" && props.striped === true) {
        //Check the velocity value
        if (typeof props.velocity === "string" && props.velocity !== "") {
            classList.push("siimple-progress--striped-" + props.velocity.toLowerCase().trim());
        } else {
            classList.push("siimple-progress--striped");
        }
    }
    //Merge classnames
    newProps.className = helpers.classNames(classList, props.className);
    //Return the progress element
    return React.createElement("div", newProps, progressBar(props));
};

//Progress component default props 
Progress.defaultProps = {
    "color": "primary",
    "completed": 0,
    "striped": false,
    "velocity": null
};

