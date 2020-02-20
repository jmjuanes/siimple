---
title: "Switch"
description: "A redesigned checkbox element that looks like a switch"
keywords: "switch,checkbox,form,input"
---

You can style a checkbox like a switch. First create a `div` element with a `siimple-switch` class:

```html
<div class="siimple-switch"></div>
```

Then add a `input` element inside the `div`, and add the `type="checkbox"` attribute. You must also assign an `id` to the `input` element.

```html
<div class="siimple-switch">
    <input type="checkbox" id="mySwitch">
</div>
```

Finally, add a `label` bound to the previously `input`.

```html
<div class="siimple-switch">
    <input type="checkbox" id="mySwitch">
    <label for="mySwitch"></label>
</div>
```

Final result:

:::snippet lang="html" title="Basic switch"
<label class="siimple-label">Your switch:</label>
<div class="siimple-switch">
    <input type="checkbox" id="mySwitch" checked>
    <label for="mySwitch"></label>
</div>
:::


#### Colored switch

> Added in **v3.2.0**.

Use `siimple-switch--error`, `siimple-switch--warning` and `siimple-switch--success` to change the color of the checked checkbox.

:::snippet lang="html" title="Colored switch"
<label class="siimple-label">Your switch:</label>
<div class="siimple-switch siimple-switch--error">
    <input type="checkbox" id="mySwitch2" checked>
    <label for="mySwitch2"></label>
</div>
:::


