## Neutrine.DataTable


### Columns

The `columns` prop is an array of objects containing the following properties:

```js
let columns = [{
    "title": "",              // <string> Displayed column title
    // Column behaviour and apperance
    "sortable": false,        // <boolean> Column is sortable
    "visible": true,          // <boolean> Column is visible
    "minWidth": null,         // <string|number|null> Custom min-width for this column
    "width": null,            // <string|number|null> Custom width of this column
    // Header columns style
    "headerClassName": null,  // <string|function|null> Custom class-name for the header cell
    "headerStyle": null,      // <object|function|null>Custom style for the header cell
    // Body columns style 
    "bodyClassName": null,    // <string|function|null> Custom class-name for the cell element of the column
    "bodyStyle": null,        // <objectfunction|null> Custom style for the cell element of the column
    // Displayed value in table
    "key": null,              // <string|null> key to access the column content in the row data object
    "defaultValue": "",       // <string> Default displayed value
    "render": null            // <function|null> Function to customize the displayed content of the column
}];
```

