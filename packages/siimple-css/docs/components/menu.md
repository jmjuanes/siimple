---
title: "Menu"
description: "A vertical navigation component"
--- 

<style>
.siimple-menu:first-child {
    margin-bottom: 0px !important;
}
</style>

The **menu** is a collection of vertical navigation links. You have an example of a menu displayed on the left side of this documentation site.

You can build a menu component adding a `siimple-menu` class to a wrapper element, and usually contains:

- A label for grouping navigation links, with the `siimple-menu-group` class.
- Navigation links items, with the class `siimple-menu-item`.

```html preview="true"
<div class="siimple-menu">
    <div class="siimple-menu-group">GROUP 1</div>
    <a class="siimple-menu-item">Link 1</a>
    <a class="siimple-menu-item">Link 2</a>
    <a class="siimple-menu-item">Link 3</a>
</div>
```


#### Active item

Add `siimple-menu-item--active` to a item of the menu to mark it as active in the menu.

```html preview="true"
<div class="siimple-menu">
    <div class="siimple-menu-group">GROUP 1</div>
    <a class="siimple-menu-item">Link 1</a>
    <a class="siimple-menu-item siimple-menu-item--active">Link 2</a>
    <a class="siimple-menu-item">Link 3</a>
</div>
```

:::warning title="Note about active items"
In previuos versions this property was called `siimple-menu-item--selected`. 
:::


