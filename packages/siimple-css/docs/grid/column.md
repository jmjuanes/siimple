---
title: "Column"
description: ""
--- 

You can add **columns** to your grid row using the class `siimple-column`. In version `v4.0.0`, you do not have to specify the size of the column: **each column will have by default an equal width**, proportional to the number of columns you have added.

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
</div>

```html
<div class="siimple-row">
    <div class="siimple-column">Column 1</div>
    <div class="siimple-column">Column 2</div>
    <div class="siimple-column">Column 3</div>
</div>
```

#### Column sizes

You can force the column to have a fixed width using the **12 grid column system**, adding a class `siimple-column--[size]` to the column.

<div class="siimple-row siimple--text-center">
    <div class="siimple-column siimple-column--4">
        <div class="siimple--border-rounded siimple--bg-secondary siimple--text-white siimple--p-2">Col 4</div>
    </div>
    <div class="siimple-column siimple-column--8">
        <div class="siimple--border-rounded siimple--bg-secondary siimple--text-white siimple--p-2">Col 8</div>
    </div>
</div>
<div class="siimple-row siimple--text-center">
    <div class="siimple-column siimple-column--9">
        <div class="siimple--border-rounded siimple--bg-secondary siimple--text-white siimple--p-2">Col 9</div>
    </div>
    <div class="siimple-column siimple-column--3">
        <div class="siimple--border-rounded siimple--bg-secondary siimple--text-white siimple--p-2">Col 3</div>
    </div>
</div>

```html
<div class="siimple-row">
    <div class="siimple-column siimple-column--4">Col 4</div>
    <div class="siimple-column siimple-column--8">Col 8</div>
</div>
<div class="siimple-row">
    <div class="siimple-column siimple-column--9">Col 9</div>
    <div class="siimple-column siimple-column--3">Col 3</div>
</div>
```

::: warning title="Remember!"
You can use any combination of fixed column sizes, but remember that the total size **must add up to twelve for a row**.
:::


#### Responsive column sizes

You can customize the column behavior across different devices and screen sizes. The following responsive column classes are available:

| Size | Class | Container size |
| Small | `siimple-column--sm-[1-12]` | `< 544px` |
| Medium | `siimple-column--md-[1-12]` | `< 768px` |
| Large | `siimple-column--lg-[1-12]` | `< 960px` |
| Extra large | `siimple-column--xl-[1-12]` | `< 1280px` |
| Default | `siimple-column--[1-12]` | All sizes |

You can combine different column classes to specify how the grid will be displayed on different devices. For example, if you create a grid with two columns and add the class `siimple-column--6` and `siimple-column--sm-12`, your grid will have two columns on screens with sizes greater than **544px**, and one column on mobile devices.

```html
<div class="siimple-row">
    <div class="siimple-column siimple-column--6 siimple-column--sm-12">
        col--6 col--sm-12
    </div>
    <div class="siimple-column siimple-column--6 siimple-column--sm-12">
        col--6 col--sm-12
    </div>
</div>
```


#### Hide columns

You can hide a column at a specific breakpoint adding the class `siimple-column--[breakpoint]-hide`.

```html
<div class="siimple-row">
    <div class="siimple-column siimple-column--4 siimple-column--sm-hide">
        col--4 col--sm-hide
    </div>
    <div class="siimple-column siimple-column--8 siimple-column--sm-12">
        col--8 col--sm-12
    </div>
</div>
```




