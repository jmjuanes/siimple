---
title: "Grid"
description: "Introduction to our grid system"
keywords: "grid,overview,columns"
---

**{{package.name}}** includes a responsive grid system to organize your content with 12 columns for desktop, tablet and phone screens.

<style>
.siimple-grid-row {
    margin-left: 0px !important;
    margin-right: 0px !important;
}
.siimple-grid-col {
    background-color: #1be4c9;
    color: #ffffff;
    text-align: center;
    height: 20px;
    line-height: 20px;
    margin-bottom: 10px;
    padding-left: 11px !important;
    padding-right: 11px !important;
    border-left: 1px solid #38c7a3;
    border-right: 1px solid #38c7a3;
}
</style>

:::snippet title="Basic grid example"
<div class="siimple-grid">
    <div class="siimple-grid-row">
        <div class="siimple-grid-col siimple-grid-col--12">12</div>
    </div>
    <div class="siimple-grid-row">
        <div class="siimple-grid-col siimple-grid-col--6">6</div>
        <div class="siimple-grid-col siimple-grid-col--6">6</div>
    </div>
    <div class="siimple-grid-row">
        <div class="siimple-grid-col siimple-grid-col--4">4</div>
        <div class="siimple-grid-col siimple-grid-col--4">4</div>
        <div class="siimple-grid-col siimple-grid-col--4">4</div>
    </div>
    <div class="siimple-grid-row">
        <div class="siimple-grid-col siimple-grid-col--3">3</div>
        <div class="siimple-grid-col siimple-grid-col--3">3</div>
        <div class="siimple-grid-col siimple-grid-col--3">3</div>
        <div class="siimple-grid-col siimple-grid-col--3">3</div>
    </div>
    <div class="siimple-grid-row">
        <div class="siimple-grid-col siimple-grid-col--2">2</div>
        <div class="siimple-grid-col siimple-grid-col--2">2</div>
        <div class="siimple-grid-col siimple-grid-col--2">2</div>
        <div class="siimple-grid-col siimple-grid-col--2">2</div>
        <div class="siimple-grid-col siimple-grid-col--2">2</div>
        <div class="siimple-grid-col siimple-grid-col--2">2</div>
    </div>
    <div class="siimple-grid-row">
        <div class="siimple-grid-col siimple-grid-col--1">1</div>
        <div class="siimple-grid-col siimple-grid-col--1">1</div>
        <div class="siimple-grid-col siimple-grid-col--1">1</div>
        <div class="siimple-grid-col siimple-grid-col--1">1</div>
        <div class="siimple-grid-col siimple-grid-col--1">1</div>
        <div class="siimple-grid-col siimple-grid-col--1">1</div>
        <div class="siimple-grid-col siimple-grid-col--1">1</div>
        <div class="siimple-grid-col siimple-grid-col--1">1</div>
        <div class="siimple-grid-col siimple-grid-col--1">1</div>
        <div class="siimple-grid-col siimple-grid-col--1">1</div>
        <div class="siimple-grid-col siimple-grid-col--1">1</div>
        <div class="siimple-grid-col siimple-grid-col--1">1</div>
    </div>
</div>
:::


#### Building a grid

Create a new `<div>` element and add the `siimple-grid` class using the class attribute.

```html
<div class="siimple-grid"></div>
```

For each row of your grid, you must add a new `<div>` element with the `siimple-grid-row` class.

```html
<div class="siimple-grid">
    <div class="siimple-grid-row"></div>
</div>
```

For each cell, add a `<div>` element with the class `siimple-grid-col` inside the row. Also, you must specify the cell size adding a `siimple-grid-col--COLUMN`, where `COLUMN` is an integer from 1 to 12 that specifies the column size.

:::tip:warning title="Remember!"
Column sizes **must add up to twelve for a row**.
:::

For example, if you want a grid with two columns just add two `div` elements with the class `siimple-grid-col--6`:

```html
<div class="siimple-grid">
    <div class="siimple-grid-row">
        <div class="siimple-grid-col siimple-grid-col--6">Cell 1</div>
        <div class="siimple-grid-col siimple-grid-col--6">Cell 2</div>
    </div>
</div>
```

Now your grid is ready to use!



#### Responsive grid sizes

You can customize the grid behavior across different devices and screen sizes. The following column classes are available:

| Size | Prefix | Class name | Container size |
| Extra small | `xs` | `siimple-grid-col--xs-[1-12]` | `< 480px` |
| Small | `sm` | `siimple-grid-col--sm-[1-12]` | `< 600px` | 
| Medium | `md` | `siimple-grid-col--md-[1-12]` | `< 768px` |
| Large | `lg` | `siimple-grid-col--lg-[1-12]` | `< 960px` |
| Extra large | `xl` | `siimple-grid-col--xl-[1-12]` | `< 1280px` |
| Default |  | `siimple-grid-col--[1-12]` | All sizes |

You can combine different column classes to specify how the grid will be displayed on different devices. For example, if you create a grid with two columns and add the class `siimple-grid-col--6` and `siimple-grid-col--sm-12`, your grid will have two columns on screens with sizes greater than `600px`, and one column on mobile devices.

```html
<div class="siimple-grid">
    <div class="siimple-grid-row">
        <div class="siimple-grid-col siimple-grid-col--6 siimple-grid-col--sm-12">
            col--6 col--sm-12
        </div>
        <div class="siimple-grid-col siimple-grid-col--6 siimple-grid-col--sm-12">
            col--6 col--sm-12
        </div>
    </div>
</div>
```



#### Hide columns

> Added in **v3.1.0**.

You can hide a column at a specific breakpoint adding the class `siimple-grid-col--{breakpoint}-hide`.

```html
<div class="siimple-grid">
    <div class="siimple-grid-row">
        <div class="siimple-grid-col siimple-grid-col--4 siimple-grid-col--sm-hide">
            col--4 col--sm-hide
        </div>
        <div class="siimple-grid-col siimple-grid-col--8 siimple-grid-col--sm-12">
            col--8 col--sm-12
        </div>
    </div>
</div>
```



