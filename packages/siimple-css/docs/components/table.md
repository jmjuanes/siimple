---
title: "Table"
description: "Build a table using only divs"
--- 

<style>
.siimple-table {
    margin-bottom: 0px !important;
}
</style>

The `siimple-table` provides you a set of classes ready to create and customize a table using `<div>` tags, but you can also use these classes with the traditional `<table>` tags.

Tables require the following structure:

- The **table wrapper**, with the class `siimple-table`.
- The **table header**, with the class `siimple-table-header`.
- The **table body**, with the class `siimple-table-body`.
- Inside the table header or the table body, a list of **table rows** with the class `siimple-table-row`.
- Inside each row, a list of **table cells** with the class `siimple-table-cell`.

```html preview="true"
<div class="siimple-table">
    <div class="siimple-table-header">
        <div class="siimple-table-row">
            <div class="siimple-table-cell">Header 1</div>
            <div class="siimple-table-cell">Header 2</div>
            <div class="siimple-table-cell">Header 3</div>
        </div>
    </div>
    <div class="siimple-table-body">
        <div class="siimple-table-row">
            <div class="siimple-table-cell">Cell 1</div>
            <div class="siimple-table-cell">Cell 2</div>
            <div class="siimple-table-cell">Cell 3</div>
        </div>
        <div class="siimple-table-row">
            <div class="siimple-table-cell">Cell 4</div>
            <div class="siimple-table-cell">Cell 5</div>
            <div class="siimple-table-cell">Cell 6</div>
        </div>
    </div>
</div>
```


#### Table divider

Add the `siimple-table--divider` modifier to the table wrapper to display a divider rule between table rows.

```html preview="true"
<div class="siimple-table siimple-table--divider">
    <div class="siimple-table-header">
        <div class="siimple-table-row">
            <div class="siimple-table-cell">Header 1</div>
            <div class="siimple-table-cell">Header 2</div>
            <div class="siimple-table-cell">Header 3</div>
        </div>
    </div>
    <div class="siimple-table-body">
        <div class="siimple-table-row">
            <div class="siimple-table-cell">Cell 1</div>
            <div class="siimple-table-cell">Cell 2</div>
            <div class="siimple-table-cell">Cell 3</div>
        </div>
        <div class="siimple-table-row">
            <div class="siimple-table-cell">Cell 4</div>
            <div class="siimple-table-cell">Cell 5</div>
            <div class="siimple-table-cell">Cell 6</div>
        </div>
        <div class="siimple-table-row">
            <div class="siimple-table-cell">Cell 7</div>
            <div class="siimple-table-cell">Cell 8</div>
            <div class="siimple-table-cell">Cell 9</div>
        </div>
    </div>
</div>
```



#### Striped table

Add the `siimple-table--striped` class to the root table to add zebra striped style to the table.

```html preview="true"
<div class="siimple-table siimple-table--striped">
    <div class="siimple-table-header">
        <div class="siimple-table-row">
            <div class="siimple-table-cell">Header 1</div>
            <div class="siimple-table-cell">Header 2</div>
            <div class="siimple-table-cell">Header 3</div>
        </div>
    </div>
    <div class="siimple-table-body">
        <div class="siimple-table-row">
            <div class="siimple-table-cell">Cell 1</div>
            <div class="siimple-table-cell">Cell 2</div>
            <div class="siimple-table-cell">Cell 3</div>
        </div>
        <div class="siimple-table-row">
            <div class="siimple-table-cell">Cell 4</div>
            <div class="siimple-table-cell">Cell 5</div>
            <div class="siimple-table-cell">Cell 6</div>
        </div>
        <div class="siimple-table-row">
            <div class="siimple-table-cell">Cell 7</div>
            <div class="siimple-table-cell">Cell 8</div>
            <div class="siimple-table-cell">Cell 9</div>
        </div>
        <div class="siimple-table-row">
            <div class="siimple-table-cell">Cell 10</div>
            <div class="siimple-table-cell">Cell 11</div>
            <div class="siimple-table-cell">Cell 12</div>
        </div>
    </div>
</div>
```


#### Bordered table

To display the table border, add `siimple-table--border` class to the table root.

```html preview="true"
<div class="siimple-table siimple-table--border">
    <div class="siimple-table-header">
        <div class="siimple-table-row">
            <div class="siimple-table-cell">Header 1</div>
            <div class="siimple-table-cell">Header 2</div>
            <div class="siimple-table-cell">Header 3</div>
        </div>
    </div>
    <div class="siimple-table-body">
        <div class="siimple-table-row">
            <div class="siimple-table-cell">Cell 1</div>
            <div class="siimple-table-cell">Cell 2</div>
            <div class="siimple-table-cell">Cell 3</div>
        </div>
        <div class="siimple-table-row">
            <div class="siimple-table-cell">Cell 4</div>
            <div class="siimple-table-cell">Cell 5</div>
            <div class="siimple-table-cell">Cell 6</div>
        </div>
    </div>
</div>
```


#### Hovered rows

Add the `siimple-table--hover` class to the root table element to enable hover style.

```html preview="true"
<div class="siimple-table siimple-table--hover">
    <div class="siimple-table-header">
        <div class="siimple-table-row">
            <div class="siimple-table-cell">Header 1</div>
            <div class="siimple-table-cell">Header 2</div>
            <div class="siimple-table-cell">Header 3</div>
        </div>
    </div>
    <div class="siimple-table-body">
        <div class="siimple-table-row">
            <div class="siimple-table-cell">Cell 1</div>
            <div class="siimple-table-cell">Cell 2</div>
            <div class="siimple-table-cell">Cell 3</div>
        </div>
        <div class="siimple-table-row">
            <div class="siimple-table-cell">Cell 4</div>
            <div class="siimple-table-cell">Cell 5</div>
            <div class="siimple-table-cell">Cell 6</div>
        </div>
    </div>
</div>
```


#### Table sizes

Use `siimple-table--small` to make the table more compact (cells will have less padding), or `siimple-table--large` to make a lengty table (cells will have more padding).


#### Fixed table layout

Add `siimple-table--fixed` class to the root table element to automatically divide equally the width of the columns across the table, regardless of content inside the cells.


#### Coloring rows

Add `siimple-table-row--[color]` to a row to highlight the table row with the provided color.

```html preview="true"
<div class="siimple-table">
    <div class="siimple-table-header">
        <div class="siimple-table-row">
            <div class="siimple-table-cell">Header 1</div>
            <div class="siimple-table-cell">Header 2</div>
            <div class="siimple-table-cell">Header 3</div>
        </div>
    </div>
    <div class="siimple-table-body">
        <div class="siimple-table-row siimple-table-row--primary">
            <div class="siimple-table-cell">Cell 1</div>
            <div class="siimple-table-cell">Cell 2</div>
            <div class="siimple-table-cell">Cell 3</div>
        </div>
        <div class="siimple-table-row siimple-table-row--success">
            <div class="siimple-table-cell">Cell 4</div>
            <div class="siimple-table-cell">Cell 5</div>
            <div class="siimple-table-cell">Cell 6</div>
        </div>
        <div class="siimple-table-row siimple-table-row--warning">
            <div class="siimple-table-cell">Cell 7</div>
            <div class="siimple-table-cell">Cell 8</div>
            <div class="siimple-table-cell">Cell 9</div>
        </div>
        <div class="siimple-table-row siimple-table-row--error">
            <div class="siimple-table-cell">Cell 10</div>
            <div class="siimple-table-cell">Cell 11</div>
            <div class="siimple-table-cell">Cell 12</div>
        </div>
    </div>
</div>
```


#### Sizing columns

To organize your table with 12 columns, add `siimple-table-cell--[size]` to the cell in the table header.

```html preview="true"
<div class="siimple-table">
    <div class="siimple-table-header">
        <div class="siimple-table-row">
            <div class="siimple-table-cell siimple-table-cell--2">Header 1</div>
            <div class="siimple-table-cell siimple-table-cell--5">Header 2</div>
            <div class="siimple-table-cell siimple-table-cell--5">Header 3</div>
        </div>
    </div>
    <div class="siimple-table-body">
        <div class="siimple-table-row">
            <div class="siimple-table-cell">Cell 1</div>
            <div class="siimple-table-cell">Cell 2</div>
            <div class="siimple-table-cell">Cell 3</div>
        </div>
        <div class="siimple-table-row">
            <div class="siimple-table-cell">Cell 4</div>
            <div class="siimple-table-cell">Cell 5</div>
            <div class="siimple-table-cell">Cell 6</div>
        </div>
    </div>
</div>
```



#### Sortable columns

Add `siimple-table-cell--sortable` class to a `siimple-table-cell` element in the header of the table to display a sorting indicator in column where the class is added. 
Also, you can add `siimple-table-cell--asc` or `siimple-table-cell--desc` to set the sort order.

```html preview="true"
<div class="siimple-table">
    <div class="siimple-table-header">
        <div class="siimple-table-row">
            <div class="siimple-table-cell siimple-table-cell--sortable">
                Header 1
            </div>
            <div class="siimple-table-cell siimple-table-cell--sortable siimple-table-cell--asc">
                Header 2
            </div>
            <div class="siimple-table-cell siimple-table-cell--sortable siimple-table-cell--desc">
                Header 3
            </div>
        </div>
    </div>
    <div class="siimple-table-body">
        <div class="siimple-table-row">
            <div class="siimple-table-cell">Cell 1</div>
            <div class="siimple-table-cell">Cell 2</div>
            <div class="siimple-table-cell">Cell 3</div>
        </div>
        <div class="siimple-table-row">
            <div class="siimple-table-cell">Cell 4</div>
            <div class="siimple-table-cell">Cell 5</div>
            <div class="siimple-table-cell">Cell 6</div>
        </div>
    </div>
</div>
```


