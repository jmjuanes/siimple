---
title: "Checkbox"
description: "The redesigned checkbox element"
keywords: "checkbox,check,checked,form"
---

For adding a checkbox element to your project, first you must create a `div` with the class `siimple-checkbox`:

```html
<div class="siimple-checkbox></div>
```

Inside it, create an `input` with the attribute `type="checkbox"`. Also, you must add an `id` attribute that will be used in the last step.

```html
<div class="siimple-checkbox">
    <input type="checkbox" id="myCheckbox">
</div>
```

Finally, create a `label` element bound to the previous `input` element.

```html
<div class="siimple-checkbox">
    <input type="checkbox" id="myCheckbox">
    <label for="myCheckbox"></label>
</div>
```

Final result:

:::snippet lang="html" title="Basic checkbox"
<label class="siimple-label">Your checkbox:</label>
<div class="siimple-checkbox">
    <input type="checkbox" id="myCheckbox" checked>
    <label for="myCheckbox"></label>
</div>
:::


#### Colored checkbox

> Added in **v3.2.0**.

Use `siimple-checkbox--error`, `siimple-checkbox--warning` and `siimple-checkbox--success` to change the color of the checked checkbox.

:::snippet lang="html" title="Colored checkbox"
<label class="siimple-label">Your checkbox:</label>
<div class="siimple-checkbox siimple-checkbox--success">
    <input type="checkbox" id="myCheckbox2" checked>
    <label for="myCheckbox2"></label>
</div>
:::


