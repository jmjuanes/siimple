---
title: "Checkbox"
description: "The redesigned checkbox element"
keywords: "checkbox,check,checked,form"
---

The `siimple-checkbox` class is a wrapper to style the default checkbox element. To create a checkbox, the following structure is required:

- A `<div>` wrapper element with the class `siimple-checkbox`.
- An `<input type="checkbox">` element, with an **id** attribute.
- A `<label>` element bound to the previous `<input>` element.

By default, the checkbox will be displayed unchecked, but you can add a **checked** attribute to the `<input>` element to display the checkbox as checked.

```html preview="true"
<div class="siimple-checkbox">
    <input type="checkbox" id="myCheckbox" checked>
    <label for="myCheckbox"></label>
</div>
<label class="siimple-label">I agree with the terms and conditions.</label>
```


#### Colored checkbox

Use `siimple-checkbox--error`, `siimple-checkbox--warning` and `siimple-checkbox--success` to change the color of the checked checkbox.

```html preview="true"
<div class="siimple-checkbox siimple-checkbox--success">
    <input type="checkbox" id="myCheckbox2" checked>
    <label for="myCheckbox2"></label>
</div>
<label class="siimple-label">I agree with the terms and conditions.</label>
```


