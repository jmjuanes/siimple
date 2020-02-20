---
title: "List"
description: "Simple component for displaying series of items"
--- 

> Added in **v3.1.0**.

<style>
.siimple-list {
    margin-bottom: 0px !important;
}
</style>

A **list** is an extensible component for displaying a series of items. Just create a new `div` element and add the `siimple-list` class. Then, add a `div` element inside it for each item you want with the class `siimple-list-item`. 

:::snippet lang="html" title="Basic list example"
<div class="siimple-list" style="max-width:300px;">
    <div class="siimple-list-item">Item 1</div>
    <div class="siimple-list-item">Item 2</div>
    <div class="siimple-list-item">Item 3</div>
</div>
:::


#### Hovered items

Just add `siimple-list--hover` to the list container to change the `background-color` property of a item of the list when the user moves the cursor over it.

:::snippet lang="html" title="Hovered list items"
<div class="siimple-list siimple-list--hover" style="max-width:300px;">
    <div class="siimple-list-item">Item 1</div>
    <div class="siimple-list-item">Item 2</div>
    <div class="siimple-list-item">Item 3</div>
</div>
:::


#### Combine with other elements

You can add a `siimple-tag` element inside a list item. It will be aligned to the right automatically:

:::snippet lang="html" title="List + Tab"
<div class="siimple-list" style="max-width:300px;">
    <div class="siimple-list-item">
        <span class="siimple-tag siimple-tag--primary siimple-tag--rounded">0</span>
        Item 1
    </div>
    <div class="siimple-list-item">
        <span class="siimple-tag siimple-tag--error siimple-tag--rounded">10</span>    
        Item 2
    </div>
</div>
:::


#### Active list items

> Added in **v4.0.0**.

Add `siimple-list-item--active` class to a list item to mark it as active.

:::snippet lang="html" title="Active list items"
<div class="siimple-list" style="max-width:300px">
    <div class="siimple-list-item">Item 1</div>
    <div class="siimple-list-item siimple-list-item--active">
        Item 2 (active)
    </div>
    <div class="siimple-list-item">Item 3</div>
</div>
:::


