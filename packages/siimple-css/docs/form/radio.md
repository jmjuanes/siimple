---
title: "Radio button"
description: "The redesigned radio button element"
keywords: "radio,button,form,input"
---

> Added in **v3.1.0**.

To create a radio button element, first create a `div` with a `siimple-radio` class:

```html
<div class="siimple-radio"></div>
```

Then add a `input` element inside, and add the `type="radio"` attribute. You must also assign an `id` to the `input` element.

```html
<div class="siimple-radio">
    <input type="radio" id="myRadio">
</div>
```

Finally, add a `label` bound to the previously `input` element.

```html
<div class="siimple-radio">
    <input type="radio" id="myRadio">
    <label for="myRadio"></label>
</div>
```

Your radio component is ready:

:::snippet lang="html" title="Basic radio"
<label class="siimple-label">Your radio:</label>
<div class="siimple-radio">
    <input type="radio" id="myRadio">
    <label for="myRadio"></label>
</div>
:::


#### Colored radio

> Added in **v3.2.0**.

Use `siimple-radio--error`, `siimple-radio--warning` and `siimple-radio--success` to change the color of the checked checkbox.

:::snippet lang="html" title="Colored radio example"
<label class="siimple-label">Your radio:</label>
<div class="siimple-radio siimple-radio--warning">
    <input type="radio" id="myRadio2">
    <label for="myRadio2"></label>
</div>
:::


