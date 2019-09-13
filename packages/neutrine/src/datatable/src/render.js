import React from "react";
import {Table, TableHeader, TableBody, TableRow, TableCell} from "../../core/table/index.js";
import {Check} from "../../future/check/index.js";
import * as helpers from "../../helpers.js";

import * as DataTableUtils from "./utils.js";
import {DataTableConst} from "./const.js";

//Export datatable render component
export function DataTableRender (props) {
    //Handle header cell click
    let handleHeaderCellClick = function (event, index) {
        return props.onHeaderClick.call(null, event, index);
    };
    //Handle body cell click
    let handleBodyCellClick = function (event) {
        //Find the cell class in the nodes list
        return DataTableUtils.findClassInNodeList(event.nativeEvent.path, DataTableConst.cellClass, function (node, index) {
            //Get the row and column index
            let rowIndex = parseInt(node.dataset.row);
            let colIndex = parseInt(node.dataset.column);
            //Check for undefined row index or column index
            if (isNaN(rowIndex) || isNaN(colIndex)) {
                return null;
            }
            //Call the click listener
            return props.onBodyClick.call(null, event, rowIndex, colIndex);
        });
    };
    //Build the table header cell
    let headerCells = props.columns.map(function (column, index) {
        //Initialize the cell props
        let cellProps = {
            "className": null, //["neutrine-datatable-header-cell"],
            "onClick": null,
            "style": column.style,
            "onClick": function (event) {
                return handleHeaderCellClick(event, column.index);
            },
            "key": index
        };
        //Initialize the cell class list
        let cellClassList = [DataTableConst.headerCellClass];
        //Check if column is selectable 
        if (column.selectable === true) {
            //cellClassList.push("");  //TODO
        }
        //Check if column is sortable
        else if (typeof column.sortable === "boolean" && column.sortable === true) {
            //Add the sortable class
            //cellProps.className.push("neutrine-datatable-header-cell--sortable");
            cellProps.sortable = true;
            cellProps.order = column.order;
            //Add the column order
            //if (column.order !== null) {
            //    cellProps.className.push("neutrine-datatable-header-cell--" + column.order);
            //}
        }
        //Add the cell column index
        cellProps["data-column"] = column.index;
        //Build the class list
        cellProps.className = helpers.classNames(cellClassList, column.className);
        //Save the cell
        return React.createElement(TableCell, cellProps, column.content);
    });
    ////Check if table is selectable
    //if (props.selectable === true) {
    //    headerCells.unshift(React.createElement(TableCell, {
    //        "className": "neutrine-datatable-header-cell",
    //        "onClick": null,
    //        "key": -1
    //    }));
    //}
    //Build the row element
    let headerRow = React.createElement(TableRow, {}, headerCells);
    //Build the table body rows
    let bodyRows = props.data.map(function (row, rowIndex) {
        //Initialize the row props
        let rowProps = {
            "className": row.className,
            "style": row.style,
            "key": rowIndex
        };
        //Generate the row cells
        let rowCells = row.cells.map(function (cell, cellIndex) {
            //Get the column
            //let column = props.columns[cellIndex];
            //Initialize the cell props
            let cellProps = {
                "key": cellIndex,
                "className": null, //["neutrine-datatable-cell"],
                "data-row": "" + row.index + "",
                "data-column": "" + cell.index + "",
                "onClick": handleBodyCellClick,
                "style": cell.style
            };
            //Initialize the cell content and the cell class
            let cellContent = cell.content;
            let cellClass = [DataTableConst.cellClass];
            //Check if this column is selectable
            if (cell.selectable === true) {
                //Display a checkbox component
                cellContent = React.createElement(Check, {
                    "checked": cell.selected
                });
                //Add a custom cell style
                //cellClass.push(""); //TODO
            }
            //Add classnames
            cellProps.className = helpers.classNames(cellClass, cell.className);
            //Return the cell element
            return React.createElement(TableCell, cellProps, cellContent);
        });
        ////Check if the table is selectable
        //if (props.selectable === true) {
        //    //Initialize the selection cell props
        //    let selectCellProps = {
        //        "className": "neutrine-datatable-cell",
        //        "data-row": "" + row.index + "",
        //        "onClick": handleBodyRowSelect,
        //        "key": -1
        //    };
        //    //Initialize the selection cell content
        //    let selectCellContent = React.createElement(Check, {
        //        "selected": row.selected
        //    });
        //    //Save the selection cell
        //    rowCells.unshift(React.createElement(TableCell, selectCellProps, selectCellContent));
        //}
        //Return this row
        return React.createElement(TableRow, rowProps, rowCells);
    });
    //Get the table classNAme
    let tableClassList = [DataTableConst.tableClass];
    //Get the table header and body props
    let tableHeaderProps = {};
    let tableBodyProps = {
        "style": {}
    };
    //Check for table fixed height
    if (props.height !== null) {
        //Add fixed class
        tableClassList.push(DataTableConst.fixedHeaderClass);
        //Set the height
        Object.assign(tableBodyProps.style, {
            "height": props.height
        });
    }
    //Generate the table props
    let tableProps = {
        "className": helpers.classNames(tableClassList),
        "border": props.border,
        "striped": props.striped,
        "hover": props.hover
    };
    //Return the table content
    return React.createElement(Table, tableProps, 
        React.createElement(TableHeader, tableHeaderProps, headerRow),
        React.createElement(TableBody, tableBodyProps, bodyRows)
    );
}

//Table renderer default props
DataTableRender.defaultProps = {
    "columns": [],
    "data": [],
    "border": false,
    "striped": false,
    "hover": false,
    "height": null,
    "onHeaderClick": null,
    "onBodyClick": null
};

