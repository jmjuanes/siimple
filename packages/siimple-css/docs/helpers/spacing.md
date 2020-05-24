---
title: "Spacing"
description: "Customize the padding and the margin of an element"
---

Customize the **padding** and the **margin** properties of anly element using these classes. The following **sizes** for the classes described in this document are available:

| Size | Description |
| **0** | Forces the margin or padding to 0px |
| **1** | Forces the margin or padding to 5px |
| **2** | Forces the margin or padding to 10px |
| **3** | Forces the margin or padding to 15px |
| **4** | Forces the margin or padding to 25px |
| **5** | Forces the margin or padding to 45px |


#### Uniform padding or margin

Use `siimple--p-[size]` to set the **padding** of all sides of the element, or `siimple--m-[size]` to set the **margin** of all sizes of the element.


#### Directional padding or margin

Use `siimple--p-[side]-[size]` or `siimple--m-[side]-[size]` to set the **padding or margin of one side**, **on the x-axis** or **the y-axis** of the element. The following sides are available:

| Side | Description |
| **t** | To set the margin or padding **top**. |
| **b** | To set the margin or padding **bottom**. |
| **l** | To set the margin or padding **left**. |
| **r** | To set the margin or padding **right**. |
| **x** | To set the margin or padding **left and right**. |
| **y** | To set the margin or padding **top and bottom**. |


#### Centering elements

We provide an additional `siimple--mx-auto` classname to set the margin left and right to **auto**. This will center the block with a fixed width.

```html preview="true"
<div class="siimple--mx-auto siimple--p-3 siimple--bg-light" style="width:200px">
    Centered element
</div>
```


