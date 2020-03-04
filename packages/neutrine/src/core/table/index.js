import React from "react";
import * as helpers from "../../helpers.js";

//Export main table component
export const Table = function (props) {
    //Extract props
    let newProps = helpers.filterProps(props, ["className", "striped", "border", "hover"]);
    let classList = ["siimple-table"];
    //Check the striped property
    if (props.striped === true) {
        classList.push("siimple-table--striped");
    }
    //Check the border property
    if (props.border === true) {
        classList.push("siimple-table--border");
    }
    //Check the hover property
    if (props.hover === true) {
        classList.push("siimple-table--hover");
    }
    newProps.className = helpers.classNames(classList, props.className);
    //Return the table wrapper element
    return React.createElement("div", newProps, props.children);
};

//Table default properties
Table.defaultProps = {
    "striped": false, 
    "border": false, 
    "hover": false
};

//Export table header component
export const TableHeader = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-table-header"
    });
};

//Export table body component
export const TableBody = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-table-body"
    });
};

//Export table row component
export const TableRow = function (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-table-row"
    }); 
};

//Export table cell component
export const TableCell = function (props) {
    //Extract props
    let newProps = helpers.filterProps(props, ["className", "sortable", "order"]);
    let classList = ["siimple-table-cell"];
    //Check the sortable option
    if (typeof props.sortable === "boolean" && props.sortable === true) {
        classList.push("siimple-table-cell--sortable");
    }
    //Check the sort order
    if (typeof props.order === "string") {
        classList.push("siimple-table-cell--" + props.order);
    }
    //Merge classlist
    newProps.className = helpers.classNames(classList, props.className);
    //Return the table cell
    return React.createElement("div", newProps, props.children);
};

//Table cell default props
TableCell.defaultProps = {
    "sortable": false,
    "order": null
};

