---
title: "Row"
description: "The wrapper for displaying your grid columns"
--- 

<style>
.example .siimple-column {
    border-radius: 8px;
    background-color: var(--siimple-secondary);
    color: #ffffff;
}
</style>

The `siimple-row` class is a wrapper for displaying the columns of your grid in a single row. Just add this class to a `<div>` element, and then put as many `siimple-column` class as you want.

<div class="siimple-row siimple--text-center">
    <div class="siimple-column">
        <div class="siimple--border-rounded siimple--bg-secondary siimple--text-white siimple--p-2">Column 1</div>
    </div>
    <div class="siimple-column">
        <div class="siimple--border-rounded siimple--bg-secondary siimple--text-white siimple--p-2">Column 2</div>
    </div>
    <div class="siimple-column">
        <div class="siimple--border-rounded siimple--bg-secondary siimple--text-white siimple--p-2">Column 3</div>
    </div>
    <div class="siimple-column">
        <div class="siimple--border-rounded siimple--bg-secondary siimple--text-white siimple--p-2">Column 4</div>
    </div>
</div>

```html
<div class="siimple-row">
    <div class="siimple-column">Column 1</div>
    <div class="siimple-column">Column 2</div>
    <div class="siimple-column">Column 3</div>
    <div class="siimple-column">Column 4</div>
</div>
```

Check the [column documentation](/css/grid/column.html) to learn more about **grid columns**.


