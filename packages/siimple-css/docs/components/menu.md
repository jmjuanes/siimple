---
title: "Menu"
description: "A vertical navigation component"
--- 

<style>
.siimple-menu:first-child {
    margin-bottom: 0px !important;
}
</style>

Creating a `menu` with siimple is also quite easy. The first thing to do is to add the `div` that will contain it. Create a div and add the class `siimple-menu` to it. But wait, if you don't put something inside it, it'll be just an empty box. The `menu` element in siimple can be divided in groups, so try to add one now using the class `siimple-menu-group`:

:::snippet lang="html" title="Basic menu with group"
<div class="siimple-menu">
    <div class="siimple-menu-group">GROUP 1</div>
</div>
:::

Now we have to fill the `group` with some `items`. To do it, simply add as many `links` with the class `siimple-menu-item` as you want:

:::snippet lang="html" title="Basic menu with items"
<div class="siimple-menu">
    <div class="siimple-menu-group">GROUP 1</div>
    <a class="siimple-menu-item">Link 1</a>
    <a class="siimple-menu-item">Link 2</a>
    <a class="siimple-menu-item">Link 3</a>
</div>
:::

:::tip:warning title="Caution!"
The items of the element are **not contained** inside the element with the class `siimple-menu-group`.
:::

There's one more thing to mention about the `menu` element: the **submenus**. They are `divs` with the class `siimple-menu` added that **contain** the `items` that belong to them. This is how the full `menu` looks:

:::snippet lang="html" title="Submenu"
<div class="siimple-menu">
    <div class="siimple-menu-group">GROUP 1</div>
    <a class="siimple-menu-item">Item 1</a>
    <a class="siimple-menu-item">Item 2</a>
    <div class="siimple-menu">
        <div class="siimple-menu-item">Item 3</div>
        <div class="siimple-menu-item">Item 4</div>
        <div class="siimple-menu-item">Item 5</div>
    </div>
</div>
:::


#### Active item

> Added in **v4.0.0**.

Add `siimple-menu-item--active` to a item of the menu to mark it as a selected.

:::snippet lang="html" title="Active item"
<div class="siimple-menu">
    <div class="siimple-menu-group">GROUP 1</div>
    <a class="siimple-menu-item">Link 1</a>
    <a class="siimple-menu-item siimple-menu-item--active">Link 2</a>
    <a class="siimple-menu-item">Link 3</a>
</div>
:::

:::tip:warning title="Note about active items"
In previuos versions this property was called `siimple-menu-item--selected`. 
:::


