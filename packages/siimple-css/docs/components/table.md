---
title: "Table"
description: "Build a table using only divs"
--- 

<style>
.siimple-table {
    margin-bottom: 0px !important;
}
</style>

The `siimple-table` provides you a set of classes ready to create a table using `div` tags.

:::snippet lang="html" title="Basic table"
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
:::


#### Striped table

Add the `siimple-table--striped` class to the root table to add zebra striped style to the table.

:::snippet lang="html" title="Striped table example"
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
:::


#### Bordered table

To display the table border, add `siimple-table--border` class to the table root.

:::snippet lang="html" title="Bordered table example"
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
:::


#### Hovered rows

Add the `siimple-table--hover` class to the root table element to enable hover style.

:::snippet lang="html" title="Hovered table example"
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
:::


#### Coloring rows

> Added in **v3.2.0**.

Use `siimple-table-row--{color}` to color table rows.

:::snippet lang="html" title="Colored table example"
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
:::


#### Sizing columns

> Added in **v3.2.0**.

To organize table with 12 columns, add `siimple-table-cell--{size}`.

:::snippet lang="html" title="Sizing rows in table"
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
:::


#### Fixed table layout

> Added in **v3.3.0**.

Add `siimple-table--fixed` class to the root table element to automatically divide equally the width of the columns across the table, regardless of content inside the cells.



#### Sortable columns

> Added in **v3.3.0**.

Add `siimple-table-cell--sortable` class to a `siimple-table-cell` element in the header of the table to display a sorting indicator in column where the class is added. 
Also, you can add `siimple-table-cell--asc` or `siimple-table-cell--desc` to set the sort order.

:::snippet lang="html" title="Sortable columns in table"
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
:::


