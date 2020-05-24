---
title: "Btn"
description: "The essential and classic button element"
---

Buttons are essential elements in any website or application for **actions**. The `siimple-btn` class can be used in a `<button>`, `<input type="submit">`, `<a>` or `<div>` tag.

```html preview="true"
<button class="siimple-btn">Default button</button>
```


#### Colored buttons

You can set the button color by adding a `siimple-btn--[COLOR]` class to the button. Check the list of the available colors in the [theming section](/css/getting-started/theming.html).

```html preview="true"
<button class="siimple-btn siimple-btn--primary siimple--mb-1">
    Primary button
</button>
<button class="siimple-btn siimple-btn--secondary siimple--mb-1">
    Secondary button
</button>
<button class="siimple-btn siimple-btn--success siimple--mb-1">
    Success button
</button>
<button class="siimple-btn siimple-btn--warning siimple--mb-1">
    Warning button
</button>
<button class="siimple-btn siimple-btn--error siimple--mb-1">
    Error button
</button>
<button class="siimple-btn siimple-btn--dark siimple--mb-1">
    Dark button
</button>
```


#### Disabled button

Make buttons look disabled (inactive state) adding a `siimple-btn--disabled` class to the button:

```html preview="true"
<button class="siimple-btn siimple-btn--primary siimple-btn--disabled">
    Disabled button
</button>
```


#### Fluid button

Add `siimple-btn--fluid` class to change the button width to the **full parent width**. This will also change the display property of the button to **block**.

```html preview="true"
<button class="siimple-btn siimple-btn--primary siimple-btn--fluid">
    Fluid button
</button>
```


#### Button sizes

Buttons are available in tree sizes: the default button size, the smaller version and the large version. You can switch to a **smaller** version of the button adding a `siimple-btn--small` class to the button, or to a **large** button size adding a `siimple-btn--large` class to the button.

```html preview="true"
<button class="siimple-btn siimple-btn--primary siimple-btn--small">
    Small button
</button>
<button class="siimple-btn siimple-btn--primary siimple-btn--large">
    Large button
</button>
```


#### Group buttons

Add `siimple-btn-group` class to wrap a collection of `siimple-btn` elements. You can use the buttons group for example to simulate a pagination component.

```html preview="true"
<div class="siimple-btn-group">
    <button class="siimple-btn siimple-btn--primary">Btn 1</button>
    <button class="siimple-btn siimple-btn--primary">Btn 2</button>
    <button class="siimple-btn siimple-btn--primary">Btn 3</button>
</div>
```


