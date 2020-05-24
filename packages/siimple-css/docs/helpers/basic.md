---
title: "Basic helpers"
description: "Basic helpers"
---

Here we present a collection of useful basic helpers to style your website content.

#### Border helpers

Use the following helpers to add rounded corners to your element. 

| Class | Description |
| `siimple--border-rounded` | Adds a border radius of **8px**. |
| `siimple--border-circle` | Adds a border radius of **50%**. |

```html
<div class="siimple--border-rounded siimple--p-3 siimple--bg-light">
    Rounded
</div>
<div class="siimple--border-circle siimple--p-3 siimple--bg-light">
    Circle
</div>
```


#### Clearing and floating

Use `siimple--float-left` to float content to the left, `siimple--float-right` to float content to the right. Add the `siimple--clearfix` class to **the parent element** to clear floats.

```html
<div class="siimple--clearfix">
    <div class="siimple--float-left">Left aligned content</div><br>
    <div class="siimple--float-right">Right aligned content</div><br>
</div>
```


#### Cursor helpers

Use the following helpers to change the cursor style displayed when the mouse pointer is over the element.

| Class | Description |
| `siimple--cursor-auto` | The cursor style is based on the current context. |
| `siimple--cursor-pointer` | The cursor changes to a pointer (usually used in links). |
| `siimple--cursor-none` | Hides the cursor. |


#### Display

Change the display attribute of any HTML element using one of the following classes:

| Class | Description |
| `siimple--display-block` | The element is displayed as a block element. |
| `siimple--display-inline` | The element is displayed as an inline element. |
| `siimple--display-inline-block` | The element is displayed as an inline-block element. |


#### Overflow

Use the following classes to modify the overflow behavior of any element:

| Class | Description |
| `siimple--overflow-auto` | This class provides scrollbars if content exceeds the dimensions of its container. |
| `siimple--overflow-hidden` | Add this class to the element to clip the content if necessary. |




