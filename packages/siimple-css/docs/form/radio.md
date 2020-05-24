---
title: "Radio button"
description: "The redesigned radio button element"
keywords: "radio,button,form,input"
---

The `siimple-radio` class is a wrapper to style the default radio element. To create a radio, the following structure is required:

- A `<div>` wrapper element with the class `siimple-radio`.
- An `<input type="radio">` element, with an **id** attribute.
- A `<label>` element bound to the previous `<input>` element.

By default, the radio will be displayed unchecked, but you can add a **checked** attribute to the `<input>` element to display the radio as checked.

```html preview="true"
<div class="siimple-radio">
    <input type="radio" id="myRadio">
    <label for="myRadio"></label>
</div>
<label class="siimple-label">Option 1</label>
```


#### Colored radio

Use `siimple-radio--error`, `siimple-radio--warning` and `siimple-radio--success` to change the color of the radio element.

```html preview="true"
<div class="siimple-radio siimple-radio--warning">
    <input type="radio" id="myRadio2">
    <label for="myRadio2"></label>
</div>
<label class="siimple-label">Option 1</label>
```


