//import data from "./data.json";

//Testing element
let table = null;

//When dom is ready
NeutrineUtils.loadJSON("/raw/packages/datatable/data.json", function (data) {
    //Function to parse the salary
    let parseSalary = function (value) {
        return parseInt(value.replace("$", "").replace(/\,/g, ""));
    };
    //Testing props
    let testProps = {
        "props": {
            "striped": {
                "type": "boolean",
                "defaultValue": true
            },
            "border": {
                "type": "boolean",
                "defaultValue": false
            },
            "hover": {
                "type": "boolean",
                "defaultValue": false
            },
            "selectable": {
                "type": "boolean",
                "defaultValue": false
            },
            "pagination": {
                "type": "boolean",
                "defaultValue": true
            },
            "height": {
                "type": "string",
                "options": ["200px", "400px", "600px"],
                "defaultValue": null
            }
        },
        "render": function (newProps, reference) {
            //Initialize the columns list
            let columns = Object.values({
                "name": {
                    "title": "Name",
                    "key": 0,
                    "sortable": true,
                    "visible": true,
                    "className": null,
                    "style": null,
                    "headerClassName": null,
                    "headerStyle": null,
                    "render": null
                },
                "position": {
                    "title": "Position",
                    "key": 1,
                    "sortable": true,
                    "visible": true
                },
                "office": {
                    "title": "Office",
                    "key": 2,
                    "sortable": true,
                    "visible": true
                },
                "startDate": {
                    "title": "Start Date",
                    "key": 4,
                    "sortable": false,
                    "visible": true
                },
                "salary": {
                    "title": "Salary",
                    "key": 5,
                    "sortable": true,
                    "visible": true,
                    "sort": function (a, b) {
                        return (parseSalary(a[5]) < parseSalary(b[5])) ? -1 : 1;
                    }
                }
            });
            //Return the table testing element
            return React.createElement(Neutrine.DataTable, {
                "ref": reference,
                "key": newProps.key,
                "data": data,
                "columns": columns,
                "height": newProps.height,
                "striped": newProps.striped,
                "border": newProps.border,
                "hover": newProps.hover,
                "selectable": newProps.selectable,
                "pagination": newProps.pagination,
                "bodyRowClassName": function (row, index) {
                    return (parseSalary(row[5]) < 100000) ? "siimple-table-row--warning" : "";
                },
                "onBodyCellClick": function () {
                    console.log("clicked on cell");
                },
                "onBodyRowSelect": function () {
                    console.log("row selected");
                }
            });
        }
    };
    //Mount the testing component
    table = ReactDOM.render(React.createElement(Neutrine.Test, testProps), document.getElementById("root"));
});

