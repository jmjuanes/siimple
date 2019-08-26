import React from "react";
import {Btn} from "../../core/btn/index.js";
import {Select} from "../../core/select/index.js";

//Strong text wrapper
let Strong = function (text) {
    return React.createElement("strong", {}, text);
};

//Table pagination class
export function DataTablePagination (props) {
    //Change the page
    let changePage = function (page) {
        //Parse the provided page
        page = Math.max(0, Math.min(page, props.pages - 1));
        //Check for a valid page
        if(props.page !== page && typeof props.onPageChange === "function") {
            //Call the page change listener
            return props.onPageChange.call(null, page);
        }
    };
    //Render the pagination left content 
    let renderLeftContent = function () {
        //Left content text 
        let text = React.createElement("div", {"className": "neutrine-datatable-pagination-text"}, 
            "Showing ", 
            Strong(props.rowStart + 1), 
            " to ", 
            Strong(props.rowEnd), 
            " of ", 
            Strong(props.rowSize), 
            " rows."
        );
        //Return the left content
        return React.createElement("div", {"className": "neutrine-datatable-pagination-left"}, text);
    }
    //Render the pagination right content 
    let renderRightContent = function () {
        //let {page, pages, pageSize, pageEntries} = this.props;
        //let pageCounter = utils.strFormat("Page {{current}} of {{total}}", {
        //    "current": props.page + 1, 
        //    "total": props.pages
        //});
        let pageCounter = `Page ${props.page + 1} of ${props.pages}`;
        //Select entries 
        let selectChilds = [];
        props.pageSizeOptions.forEach(function (value, index) {
            //Initialize this option element props
            let optionProps = {
                "value": value,
                "key": index
            };
            //Save the select option
            selectChilds.push(React.createElement("option", optionProps, value.toString()));
        });
        //Select props
        let selectProps = { 
            "className": "neutrine-datatable-pagination-entries", 
            "onChange": null, 
            "value": props.pageSize
        };
        //Register the on change function listener
        selectProps.onChange = function (event) {
            //Check if page size change listener is provided
            if (typeof props.onPageSizeChange !== "function") {
                return null;
            }
            //console.log(event.nativeEvent);
            //Get the current selected entries values
            let entries = parseInt(event.nativeEvent.target.value);
            //Check for a valid page size value
            if (!isNaN(entries) && props.pageSize !== entries) { 
                //console.log("New page size: " + entries);
                return props.onPageSizeChange.call(null, entries);
            }
        };
        //Next page button props
        let nextButtonProps = {
            //"color": "light",
            "className": "neutrine-datatable-pagination-btn",
            "onClick": function (event) {
                return changePage(props.page + 1);
            }
        };
        //Previous page button props
        let prevButtonProps = {
            //"color": "light",
            "className": "neutrine-datatable-pagination-btn",
            "onClick": function (event) {
                return changePage(props.page - 1);
            }
        };
        //Return the right content component
        return React.createElement("div", {"className": "neutrine-datatable-pagination-right"}, 
            React.createElement("div", {"className": "neutrine-datatable-pagination-text"}, "Rows per page: "),
            React.createElement(Select, selectProps, selectChilds),
            React.createElement("div", {"className": "neutrine-datatable-pagination-space"}, null),
            React.createElement(Btn, prevButtonProps, "Prev"),
            React.createElement("div", {"className": "neutrine-datatable-pagination-page"}, pageCounter),
            React.createElement(Btn, nextButtonProps, "Next")
        );
    }
    //Initialize the pagination props
    let paginationProps = {
        "className": "neutrine-datatable-pagination"
    };
    //Build the pagination component 
    return React.createElement("div", paginationProps, renderLeftContent(), renderRightContent());
}

//Pagination default props
DataTablePagination.defaultProps = { 
    "page": 0, 
    "pages": 0, 
    "pageSize": 0,
    "pageSizeOptions": [],
    "onPageChange": null, 
    "onPageSizeChange": null, 
    "rowStart": 0,
    "rowEnd": 0,
    "rowSize": 0
};

