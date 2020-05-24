---
title: "Sizing"
description: "Modify the width or the height of an element"
---

Modify the width or the height of any element with the classes described on this document. For all classes, the following sizes are available:

| Size | Description |
| **0** | Sets the width or height of the element to 0% of its parent container. |
| **25** | Sets the width or height of the element to 25% of its parent container. |
| **50** | Sets the width or height of the element to 50% of its parent container. |
| **75** | Sets the width or height of the element to 75% of its parent container. |
| **100** | Sets the width or height of the element to 100% of its parent container. |


#### Set the width and max-width

Add one of the following classes to an element to determine its width:

| Class | Description |
| `siimple--width-[size]` | Sets the **width** property of the element to the specified size. |
| `siimple--max-width-[size]` | Sets the **max-width** property of the element to the specified size. |

```html preview="true"
<style>
.example {
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
}
</style>
<div class="example siimple--bg-light siimple--width-0">0%</div>
<div class="example siimple--bg-light siimple--width-25">25%</div>
<div class="example siimple--bg-light siimple--width-50">50%</div>
<div class="example siimple--bg-light siimple--width-75">75%</div>
<div class="example siimple--bg-light siimple--width-100">100%</div>
```


#### Set the height and max-height

Add one of the following classes to an element to determine its height:

| Class | Description |
| `siimple--height-[size]` | Sets the **height** property of the element to the specified size. |
| `siimple--max-height-[size]` | Sets the **max-height** property of the element to the specified size. |


