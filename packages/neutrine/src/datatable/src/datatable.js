//Import dependencies
import React from "react";

//Import helpers
import * as helpers from "../../helpers.js";

//Import datatable libs
import {DataTablePagination} from "./pagination.js";
import {DataTableRender} from "./render.js";
import * as DataTableUtils from "./utils.js";
import {DataTableConst} from "./const.js";

//Import styles
import "../styles/datatable.scss";

//Calculate the number of pages
let calculatePages = function (rowsTotal, rowsPage) {
    //console.log(rowsTotal + " - " + rowsPage);
    let pages = rowsTotal / rowsPage;
    //console.log("Calculated pages: ");
    //console.log(pages);
    return (Math.floor(pages) === pages) ? pages : Math.floor(pages) + 1;
};

//DataTable component
export class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.buildState(this.props);
        //Page handlers
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handlePageSizeChange = this.handlePageSizeChange.bind(this);
        //Cell click handlers
        this.handleHeaderClick = this.handleHeaderClick.bind(this);
        this.handleBodyClick = this.handleBodyClick.bind(this);
        //Row select handlers
        //this.handleHeaderRowSelect = this.handleHeaderRowSelect.bind(this);
        //this.handleBodyRowSelect = this.handleBodyRowSelect.bind(this);
    }
    //Build the table state
    buildState(props) {
        //console.log("Reset global state");
        let pageSize = (props.pagination === false) ? props.data.length : props.pageSize;
        //Return the new state with the new pagination configuration
        return {
            "page": 0,
            "pages": calculatePages(props.data.length, pageSize),
            "pageSize": pageSize,
            "sortedColumns": [], 
            "filteredRows": DataTableUtils.range(0, props.data.length),
            "sortedRows": DataTableUtils.range(0, props.data.length)
        };
    }
    //Reset the table state
    reset() {
        return this.setState(this.buildState(this.props));
    }
    //Page change
    handlePageChange(page) {
        //TODO: emit onPageChange event
        //Update the page
        return this.setState({
            "page": page
        });
    }
    //Handle the page size change
    handlePageSizeChange(size) {
        //TODO: emit onPageSizeChange event
        //Calculate the new number of pages
        let newPagesCount = calculatePages(this.state.filteredRows.length, size);
        //console.log("New number of pages: " + newState.pages);
        //Update the state
        return this.setState({
            "page": 0,
            "pages": newPagesCount,
            "pageSize": size
        });
    }
    //Handle body cell click event
    handleBodyClick(event, rowIndex, colIndex) {
        //console.log("Clicked on row: " + rowIndex);
        //console.log("Clicked on cell: " + columnIndex);
        //Get the column and the row data
        let row = this.getRow(rowIndex);
        let column = this.getColumn(colIndex);
        //Check if this column is selectable
        if (column.selectable === true) {
            //Check if a body row select listener has been provided
            if (typeof column.onBodySelect === "function") {
                return column.onBodySelect(event, row, rowIndex, column, colIndex);
            }
        }
        //Check for body cell click listener
        else if (typeof this.props.onBodyClick === "function") {
            return this.props.onBodyClick(event, row, rowIndex, column, colIndex);
        }
    }
    ////Handle body row select event
    //handleBodyRowSelect(event, index) {
    //    //Check for custom row selection handler
    //    if (typeof this.props.onBodyRowSelect === "function") {
    //        return this.props.onBodyRowSelect(this.getRow(index), index); //, isSelected);
    //    }
    //}
    //Handle the header cell click event
    handleHeaderClick(event, index) {
        //Get the column
        let column = this.getColumn(index);
        //Check if this column is selectable
        if (column.selectable === true) {
            //Check if a header select listener has been provided
            if (typeof column.onHeaderSelect === "function") {
                return column.onHeaderSelect(event, column, index);
            }
        }
        //Check if this column is sortable
        else if (typeof column.sortable === "boolean" && column.sortable === true) {
            this.addSortColumn(index, event.nativeEvent.shiftKey);
        }
        //Call the header click method
        if (typeof this.props.onHeaderClick === "function") {
            this.props.onHeaderClick.call(null, even, column, index);
        }
    }
    //Handle the header row select event
    //handleHeaderRowSelect(event) {
    //    //TODO
    //}
    //Get a column data by index
    getColumn(index) {
        return this.props.columns[index];
    }
    //Get row data by index
    getRow(index) {
        return this.props.data[index];
    }
    //Get filtered rows
    getFilteredRows() {
        let self = this;
        //Return the filtered rows data
        return this.state.filteredRows.map(function (index) {
            return self.props.data[index];
        });
    }
    //Get the page where the row is available
    getRowPage(row) {
        let index = this.state.sortedRows.indexOf(row);
        if (index > -1) {
            let page = index / this.state.pageSize;
            return (Math.floor(page) === page) ? page : Math.floor(page);
        }
        //Default, return null
        return null;
    }
    //Move to the page where the row is displayed
    moveToRowPage(index) {
        let rowPage = this.getRowPage(index);
        if (rowPage !== null && rowPage > -1) {
            return this.moveToPage(rowPage);
        }
    }
    //Count the number of rows
    countRows() {
        return this.props.data.length;
    }
    //Move to a page
    moveToPage(page) {
        if (page >= 0 && page < this.state.pages) {
            return this.setState({
                "page": page
            });
        }
    }
    //Move to the next page
    nextPage() {
        return this.moveToPage(this.state.page + 1);
    }
    //Move to the previous page
    prevPage() {
        return this.moveToPage(this.state.page - 1);
    }
    //Get the current page
    getCurrentPage() {
        return this.state.page;
    }
    //Get the number of pages
    getTotalPages() {
        return this.state.pages;
    }
    //Count the number of filtered rows
    countFilteredRows() {
        return this.state.filteredRows.length;
    }
    //Filter rows
    filter(fn) {
        let self = this;
        //Generate the new filter array
        let filteredRows = DataTableUtils.range(0, this.props.data.length);
        //Check the filtering function
        if (typeof fn === "function") {
            //Filter the array of rows indexes
            filteredRows = filteredRows.filter(function (index) {
                //Return if this row should be keept in the displayed rows 
                return fn.call(null, self.getRow(index), index);
            });
        }
        //Reset the sort rows list
        let sortedRows = this.sortRows(filteredRows, this.state.sortedColumns);
        //Update the table state
        let currentPageSize = this.state.pageSize;
        return this.setState({
            "filteredRows": filteredRows,
            "sortedRows": sortedRows,
            "pages": calculatePages(filteredRows.length, currentPageSize),
            "page": 0
        });
    }
    //Check if a column is sorted
    findSortedColumn(index) {
        //Search in the list of sorted columns
        for (let i = 0; i < this.state.sortedColumns.length; i++) {
            if (index === this.state.sortedColumns[i].index) {
                return i;
            }
        }
        //Column not found
        return -1;
    }
    //Add a new sort option
    addSortColumn(columnIndex, shiftPressed) {
        //Get the list of sorted columns
        let sortedColumns = this.state.sortedColumns;
        //Check if this columns exists in the list of sorted columns
        let index = this.findSortedColumn(columnIndex);
        if (index !== -1 && (shiftPressed === true || sortedColumns.length === 1)) {
            //Check the current order value
            if (sortedColumns[index].order === "asc") {
                //Change the order value
                sortedColumns[index].order = "desc";
            }
            else {
                //Remove from the keys array
                sortedColumns.splice(index, 1);
            }
        }
        //Check if the column is not found but the shift is presset
        else if (index === -1 && shiftPressed === true) {
            //Add this column to the list of sorted columns
            sortedColumns.push({
                "index": columnIndex,
                "order": "asc"
            });
        }
        else {
            //Set the column as the unique sorted column
            sortedColumns = [{
                "index": columnIndex,
                "order": "asc"
            }];
        }
        //Sort the data
        let sortedRows = this.sortRows(this.state.filteredRows, sortedColumns);
        //Set the new state
        return this.setState({
            "sortedColumns": sortedColumns, 
            "sortedRows": sortedRows 
        });
    }
    //Sort rows
    sortRows(rows, sortedColumns) {
        //Get columns and data
        let columns = this.props.columns;
        let data = this.props.data;
        //Reset the rows index
        let sortedRows = rows.slice(0); //Clone the array of rows
        if (sortedColumns.length > 0) {
            sortedRows.sort(function (a, b) {
                for (let i = 0; i < sortedColumns.length; i++) {
                    //Get the column index and order
                    let index  = sortedColumns[i].index;
                    let order = (sortedColumns[i].order === "asc") ? 1 : -1;
                    //Check for custom sort method
                    if (typeof columns[index].sort === "function") {
                        let result = columns[index].sort.call(null, data[a], data[b]);
                        if (result !== 0) { 
                            return result * order; 
                        }
                    }
                    //Default sorting
                    else {
                        let key = columns[index].key;
                        //Check if que difference is numeric
                        let numeric = !isNaN(+data[a][key] - +data[b][key]);
                        let value1 = (numeric === true) ? +data[a][key] : data[a][key].toLowerCase();
                        let value2 = (numeric === true) ? +data[b][key] : data[b][key].toLowerCase();
                        //Check for not the same value
                        if (value1 !== value2) { 
                            return ((value1 < value2) ? -1 : 1) * order;
                        }
                    }
                }
                //Equivalent values
                return 0;
            });
        }
        //Return the sorted rows
        return sortedRows;
    }
    //Get visible columns list
    getVisibleColumns() {
        return this.props.columns.filter(function (column) {
            return !(typeof column.visible === "boolean" && column.visible === false);
        });
    }
    //Render empty table
    renderEmpty() {
        //Empty columns props
        let emptyProps = {
            "className": "neutrine-datatable-empty",
            "align": "center"
        };
        //Render the empty message
        return React.createElement("div", emptyProps, this.props.emptyText);
    }
    //Render the table
    renderTable(start, end) {
        let self = this;
        //Initialize the table render props
        let visibleColumns = this.getVisibleColumns();
        let renderProps = {
            "columns": [],
            "data": [],
            "border": this.props.border,
            "striped": this.props.striped,
            "hover": this.props.hover,
            //"selectable": this.props.selectable,
            "onHeaderClick": self.handleHeaderClick,
            "onBodyClick": self.handleBodyClick
            //"onHeaderRowSelect": self.handleHeaderRowSelect,
            //"onBodyRowSelect": self.handleBodyRowSelect
        };
        //Add the table columns
        this.props.columns.forEach(function (column, index) {
            //Check if this column is not visible
            if (typeof column.visible === "boolean" && column.visible === false) {
                return null;
            }
            //Initialize the colum properties
            let columnProps = {
                "index": index,
                "content": null, //column.title,
                "sortable": false,
                "selectable": false,
                "order": null,
                "className": column.headerClassName,
                "style": column.headerStyle
            };
            //Check if column is selectable
            if (typeof column.selectable === "boolean" && column.selectable === true) {
                columnProps.selectable = true;
            }
            else {
                //Save the column title
                columnProps.content = column.title;
                //Check if column is sortable
                if (typeof column.sortable === "boolean" && column.sortable === true) {
                    //Set sortable column
                    columnProps.sortable = true;
                    //Check the order of this column
                    let columnOrder = self.findSortedColumn(index);
                    if (columnOrder !== -1) {
                        columnProps.order = self.state.sortedColumns[columnOrder].order.toLowerCase();
                    }
                }
            }
            //Add this column to the list of displayed columns
            renderProps.columns.push(columnProps);
        });
        //Add the table data
        if (this.state.sortedRows.length > 0) {
            for (let i = start; i < end; i++) {
                //Initialize the row props
                let rowIndex = this.state.sortedRows[i];
                let rowProps = {
                    "index": rowIndex,
                    "cells": [],
                    "style": null,
                    "className": null
                };
                //Get the row data
                let row = this.props.data[rowProps.index];
                //Build the row cells content
                this.props.columns.forEach(function (column, index) {
                    //Check if this column is not visible
                    if (typeof column.visible === "boolean" && column.visible === false) {
                        return null;
                    }
                    //Initialize the cell props
                    let cellProps = {
                        "index": index,
                        "style": helpers.callProp(column.bodyClassName, [row, rowIndex, column, index]),
                        "className": helpers.callProp(column.bodyStyle, [row, rowIndex, column, index]),
                        //"content": (typeof column.defaultValue === "string") ? column.defaultValue : "",
                        "content": null,
                        "selectable": column.selectable,
                        "selected": false
                    };
                    //Check if this column is selectable
                    if (column.selectable === true) {
                        //Save if this row is selected
                        if (typeof column.selected === "function") {
                            cellProps.selected = column.selected(row, rowProps.index);
                        }
                    }
                    //If this column is not selectable, save the column content
                    else {
                        //Add the default content value
                        cellProps.content = (typeof column.defaultValue === "string") ? column.defaultValue : "";
                        //Check for custom cell content
                        if (typeof column.render === "function") {
                            cellProps.content = column.render.call(null, row, rowProps.index);
                        }
                        else {
                            //No custom content, find the content in the row data
                            if (typeof column.key !== "undefined" && column.key !== null) {
                                if (typeof row[column.key] !== "undefined") {
                                    cellProps.content = row[column.key];
                                }
                            }
                        }
                    }
                    //Save the cell information
                    rowProps.cells.push(cellProps);
                });
                //Check if this row is selected
                //if (typeof this.props.rowSelected === "function") {
                //    rowProps.selected = this.props.rowSelected(row, rowProps.index);
                //}
                //Assign row style
                Object.assign(rowProps, {
                    "className": helpers.callProp(this.props.bodyRowClassName, [row, rowProps.index, rowProps.selected]),
                    "style": helpers.callProp(this.props.bodyRowStyle, [row, rowProps.index, rowProps.selected])
                });
                //Append this row data
                renderProps.data.push(rowProps);
            }
        }
        //Render the table
        return React.createElement(DataTableRender, renderProps);
    }
    //Render the pagination component
    renderPagination(rowStart, rowEnd, rowSize) {
        //Check if pagination is enabled and visible
        if (this.props.showPagination === true && this.props.pagination === true) {
            //Return the pagination component
            return React.createElement(DataTablePagination, {
                "key": 1,
                "page": this.state.page, 
                "pages": this.state.pages, 
                "pageSize": this.state.pageSize, 
                "pageSizeOptions": this.props.pageSizeOptions,
                "onPageChange": this.handlePageChange,
                "onPageSizeChange": this.handlePageSizeChange,
                "rowStart": rowStart,
                "rowEnd": rowEnd,
                "rowSize": rowSize
            });
        }
        //Default: no pagination to display
        return null;
    }
    //Render the table container
    renderTableContainer(rowStart, rowEnd) {
        //Initialize the table props
        let tableProps = {
            //"height": (this.props.pagination === true) ? null : this.props.height,
            "style": {
                "height": (this.props.pagination === true) ? null : this.props.height
            },
            "className": helpers.classNames(DataTableConst.containerClass, this.props.className)
        };
        //Check for custom style provided
        if (typeof this.props.style === "object" && this.props.style !== null) {
            Object.assign(tableProps, this.props.style);
        }
        //Return the table wrapper
        return React.createElement("div", tableProps, this.renderTable(rowStart, rowEnd));
    }
    //Render the datatable component
    render() {
        let self = this;
        //Check the number of columns to display
        if (this.props.columns.length === 0 || this.props.data.lenght === 0) {
            return this.renderEmpty();
        }
        //Calculate the rows start and end values
        let rowSize = this.state.sortedRows.length;
        let rowStart = Math.max(0, this.state.page * this.state.pageSize);
        let rowEnd = Math.min(rowStart + this.state.pageSize, rowSize);
        //Build the pagination components
        let paginationTop = null; //TODO
        let paginationBottom = this.renderPagination(rowStart, rowEnd, rowSize);
        //Build the table
        let table = this.renderTableContainer(rowStart, rowEnd);
        //Initialize the datatable props
        let datatableProps = {
            "className": DataTableConst.mainClass
        };
        //Return the datatable element
        return React.createElement("div", datatableProps, paginationTop, table, paginationBottom);
    }
}

//Table default props
DataTable.defaultProps = { 
    "columns": [], 
    "data": [],
    "reload": false,
    //Global table style configuration
    "border": true, 
    "striped": false, 
    "hover": false,
    "height": null,
    "className": null, //Global table classname
    "style": null, //Global table style
    //Header row style
    "headerRowClassName": null,
    "headerRowStyle": null,
    //Body row style
    "bodyRowClassName": null,
    "bodyRowStyle": null,
    //Cell click listener
    "onBodyClick": null, //Body cell click event listener
    "onHeaderClick": null, //Header cell click event listener
    //Pagination
    "pagination": true, //Use pagination
    "page": 0, //Initial page
    "pageSize": 10, //Initial number of rows for each page
    "pageSizeOptions": [5, 10, 15], //Available rows for each page
    "showPagination": true, //Display pagination
    "showPaginationTop": false, //Not available yet
    "showPaginationBottom": false, //Not available yet
    "showPageSize": false, //Not available yet
    "onPageChange": null, //Current page changed
    "onPageSizeChange": null, //Page size changed
    //Default texts
    "emptyText": "No data to display" //No data to display
};


