---
title: "Switch"
description: "A redesigned checkbox element that looks like a switch"
keywords: "switch,checkbox,form,input"
---

The `siimple-switch` class is a wrapper to display your checkbox element like a **switch element**. To create a switch, the following structure is required:

- A `<div>` wrapper element with the class `siimple-switch`.
- An `<input type="checkbox">` element, with an **id** attribute.
- A `<label>` element bound to the previous `<input>` element.

By default, the switch will be displayed inactive, but you can add a **checked** attribute to the `<input>` element to display the switch as actived.

```html preview="true"
<label class="siimple-label">Allow cookies </label>
<div class="siimple-switch">
    <input type="checkbox" id="mySwitch" checked>
    <label for="mySwitch"></label>
</div>
```


#### Colored switch

Use `siimple-switch--error`, `siimple-switch--warning` and `siimple-switch--success` to change the color of the checked checkbox.

```html preview="true"
<label class="siimple-label">Allow cookies </label>
<div class="siimple-switch siimple-switch--error">
    <input type="checkbox" id="mySwitch2" checked>
    <label for="mySwitch2"></label>
</div>
```


