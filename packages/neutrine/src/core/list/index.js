import React from "react";
import * as helpers from "../../helpers.js";

//Import list style
import "@siimple/css/scss/components/list.scss";

//List component 
export const List = function (props) {
    //Initialize the list props
    let newProps = helpers.filterProps(props, ["className", "hover"]);
    let classList = ["siimple-list"];
    //Check the hover prop
    if (props.hover === true) {
        classList.push("siimple-list--hover");
    }
    newProps.className = helpers.classNames(classList, props.className);
    //Return the list element
    return React.createElement("div", newProps, props.children);
};

//List default props 
List.defaultProps = {
    "hover": false
};

//List item component 
export const ListItem = function (props) {
    let newProps = helpers.filterProps(props, ["className"]);
    let classList = ["siimple-list-item"];
    //Check the selected prop
    if (props.selected === true) {
        classList.push("siimple-list-item--selected");
    }
    newProps.className = helpers.classNames(classList, props.className);
    //Return the list item element
    return React.createElement("div", newProps, props.children);
};

//List item default props 
ListItem.defaultProps = {
    "selected": false
};

